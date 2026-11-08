import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, Copy, Check, Terminal as TerminalIcon, Sparkles, Lightbulb, Eye, EyeOff, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { runPythonCode } from "../utils/pythonRunner";

export const CodeEditor = ({
  initialCode = "",
  savedCode = null,
  onCodeChange = null,
  _exerciseId = null,
  isCompleted = false,
  validator = null,
  hint = null,
  solution = null,
  onComplete = null,
  fileName = "main.py",
}) => {
  const [code, setCode] = useState(savedCode || initialCode);
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [validationResult, setValidationResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Interactive input handling state
  const [waitingForInput, setWaitingForInput] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [inputValue, setInputValue] = useState("");
  const inputResolverRef = useRef(null);
  const inputFieldRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (savedCode !== null && savedCode !== undefined) {
      setCode(savedCode);
    } else {
      setCode(initialCode);
    }
  }, [savedCode, initialCode]);

  // Focus input field when waiting for input
  useEffect(() => {
    if (waitingForInput && inputFieldRef.current) {
      inputFieldRef.current.focus();
    }
  }, [waitingForInput]);

  const handleTextChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    if (onCodeChange) {
      onCodeChange(newCode);
    }
  };

  // Support Tab key indent
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const spaces = "    ";
      const newCode = code.substring(0, start) + spaces + code.substring(end);
      setCode(newCode);
      if (onCodeChange) onCodeChange(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
      }, 0);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
    setError(null);
    setValidationResult(null);
    if (onCodeChange) onCodeChange(initialCode);
  };

  // Run the code in the Skulpt environment
  const handleRunCode = async () => {
    setIsRunning(true);
    setError(null);
    setOutput("");
    setValidationResult(null);

    const onInputCallback = (promptText) => {
      return new Promise((resolve) => {
        setWaitingForInput(true);
        setInputPrompt(promptText || "შეიყვანეთ მნიშვნელობა:");
        setInputValue("");
        inputResolverRef.current = (val) => {
          setWaitingForInput(false);
          resolve(val);
        };
      });
    };

    try {
      const result = await runPythonCode(code, {
        onInput: onInputCallback,
        timeoutMs: 8000,
      });

      setOutput(result.output);
      if (result.error) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError(err.toString());
      return { output: "", error: err.toString(), success: false };
    } finally {
      setIsRunning(false);
      setWaitingForInput(false);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputResolverRef.current) {
      const val = inputValue;
      setOutput((prev) => prev + (inputPrompt ? inputPrompt + " " : "") + val + "\n");
      inputResolverRef.current(val);
      inputResolverRef.current = null;
      setInputValue("");
    }
  };

  // Validate exercise
  const handleCheckAnswer = async () => {
    const runResult = await handleRunCode();
    
    if (runResult.error) {
      setValidationResult({
        valid: false,
        message: "კოდის გაშვებისას დაფიქსირდა შეცდომა. შეასწორეთ შეცდომა და სცადეთ თავიდან.",
      });
      return;
    }

    if (validator) {
      const check = validator(runResult.output, code);
      setValidationResult(check);

      if (check.valid) {
        // Trigger celebratory confetti!
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {}

        if (onComplete) {
          onComplete();
        }
      }
    }
  };

  // Calculate line numbers
  const linesCount = code.split("\n").length;
  const lineNumbers = Array.from({ length: Math.max(linesCount, 5) }, (_, i) => i + 1);

  return (
    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl flex flex-col my-4">
      {/* Editor Header */}
      <div className="bg-slate-950/80 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {/* Mac style window control dots */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          
          <div className="flex items-center gap-2 pl-2 text-xs font-mono text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {fileName}
            <span className="text-[10px] text-slate-500 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">Python 3.12</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="მინიშნება"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>მინიშნება</span>
            </button>
          )}

          {solution && (
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="პასუხის ნიმუში"
            >
              {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showSolution ? "დამალვა" : "ნიმუში"}</span>
            </button>
          )}

          <button
            onClick={handleCopyCode}
            className="text-xs p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
            title="კოდის კოპირება"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            onClick={handleReset}
            className="text-xs p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
            title="კოდის განულება"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {validator ? (
            <button
              onClick={handleCheckAnswer}
              disabled={isRunning}
              className={`text-xs font-medium px-4 py-1.5 rounded-lg flex items-center gap-1.5 shadow transition-all cursor-pointer ${
                isCompleted
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                  : "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-indigo-500/25"
              }`}
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  მოწმდება...
                </>
              ) : isCompleted ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  შემოწმებულია (ხელახლა)
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  შემოწმება
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow hover:shadow-emerald-500/25 transition-all cursor-pointer"
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ეშვება...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  გაშვება
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Hint Alert */}
      {showHint && hint && (
        <div className="bg-amber-950/40 border-b border-amber-900/50 px-4 py-2.5 flex items-start gap-2.5 text-xs text-amber-200">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-amber-300">მინიშნება: </span>
            <span className="whitespace-pre-line font-mono">{hint}</span>
          </div>
        </div>
      )}

      {/* Solution Preview */}
      {showSolution && solution && (
        <div className="bg-slate-950 border-b border-indigo-900/40 px-4 py-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              სწორი პასუხის ნიმუში:
            </span>
            <button
              onClick={() => {
                setCode(solution);
                if (onCodeChange) onCodeChange(solution);
              }}
              className="text-[11px] text-indigo-300 hover:text-indigo-200 underline cursor-pointer"
            >
              ჩასმა რედაქტორში
            </button>
          </div>
          <pre className="text-xs font-mono bg-slate-900 p-2.5 rounded border border-indigo-950 text-emerald-300 overflow-x-auto">
            {solution}
          </pre>
        </div>
      )}

      {/* Code Textarea Area with Line Numbers */}
      <div className="relative flex font-mono text-sm min-h-[160px] max-h-[360px] overflow-hidden bg-slate-950">
        {/* Line Numbers column */}
        <div className="select-none py-3 pl-3 pr-2 text-right text-slate-600 bg-slate-950 border-r border-slate-800/80 text-xs w-10 shrink-0">
          {lineNumbers.map((num) => (
            <div key={num} className="leading-6">
              {num}
            </div>
          ))}
        </div>

        {/* Actual Editor Textarea */}
        <div className="relative flex-1 h-full">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
            className="w-full h-full min-h-[160px] p-3 font-mono text-sm leading-6 text-slate-100 bg-transparent resize-y focus:outline-none focus:ring-0 selection:bg-indigo-500/40"
            placeholder="# ჩაწერეთ პითონის კოდი აქ..."
          />
        </div>
      </div>

      {/* Interactive Input Prompt Bar */}
      {waitingForInput && (
        <div className="bg-amber-500/10 border-t border-amber-500/30 px-4 py-2 flex items-center gap-3 animate-pulse">
          <div className="text-xs font-medium text-amber-300 flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            {inputPrompt}
          </div>
          <form onSubmit={handleInputSubmit} className="flex-1 flex gap-2">
            <input
              ref={inputFieldRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="ჩაწერეთ მონაცემი და დააჭირეთ Enter-ს..."
              className="flex-1 bg-slate-900 border border-amber-500/40 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded transition-colors cursor-pointer"
            >
              გაგზავნა
            </button>
          </form>
        </div>
      )}

      {/* Terminal / Console Output */}
      {(output || error || isRunning) && (
        <div className="border-t border-slate-800 bg-[#0d1117] text-slate-200">
          <div className="px-4 py-1.5 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <TerminalIcon className="w-3 h-3 text-slate-400" />
              კონსოლი / Terminal Output
            </span>
            <button
              onClick={() => {
                setOutput("");
                setError(null);
                setValidationResult(null);
              }}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              გასუფთავება
            </button>
          </div>
          <div className="p-3.5 max-h-48 overflow-y-auto font-mono text-xs leading-relaxed">
            {output && (
              <pre className="text-emerald-400 whitespace-pre-wrap">{output}</pre>
            )}
            {error && (
              <div className="text-rose-400 mt-1 whitespace-pre-wrap flex items-start gap-2 bg-rose-950/30 p-2.5 rounded border border-rose-900/50">
                <span className="font-bold">შეცდომა:</span>
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Validation Result Banner */}
      {validationResult && (
        <div
          className={`border-t px-4 py-3 flex items-center justify-between gap-3 text-xs ${
            validationResult.valid
              ? "bg-emerald-950/50 border-emerald-800/80 text-emerald-200"
              : "bg-rose-950/50 border-rose-800/80 text-rose-200"
          }`}
        >
          <div className="flex items-center gap-2">
            {validationResult.valid ? (
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                ✕
              </div>
            )}
            <span className="font-medium">{validationResult.message}</span>
          </div>

          {validationResult.valid && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold">
              ✓ ჩათვლილია
            </span>
          )}
        </div>
      )}
    </div>
  );
};
