import React, { useState } from "react";
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useProgress } from "../context/ProgressContext";
import { CodeEditor } from "./CodeEditor";

export const QuizView = ({ lesson }) => {
  const { quizScore, saveQuizResult, setActiveLessonId } = useProgress();

  // State for user answers
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [codeAnswersStatus, setCodeAnswersStatus] = useState({});
  const [submitted, setSubmitted] = useState(Boolean(quizScore));

  const questions = lesson.quizQuestions || [];

  const handleSelectOption = (questionId, optionIdx) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleCodeValidated = (questionId, isSuccess) => {
    setCodeAnswersStatus((prev) => ({
      ...prev,
      [questionId]: isSuccess,
    }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    const total = questions.length;

    questions.forEach((q) => {
      if (q.type === "choice") {
        if (selectedAnswers[q.id] === q.correctIndex) {
          score += 1;
        }
      } else if (q.type === "code") {
        if (codeAnswersStatus[q.id]) {
          score += 1;
        }
      }
    });

    saveQuizResult(score, total);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
      });
    } catch {}

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCodeAnswersStatus({});
    setSubmitted(false);
  };

  const currentScore = quizScore?.score ?? 0;
  const currentTotal = quizScore?.total ?? questions.length;
  const currentPercentage = quizScore?.percentage ?? 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Quiz Header Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 md:p-8">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-2">
          <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            გაკვეთილი 6 • შემაჯამებელი ქვიზი
          </span>
          <span className="text-slate-400">• {questions.length} შეკითხვა და სავარჯიშო</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          პრაქტიკა და ცოდნის შემოწმება
        </h1>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          შეაჯამეთ 1-5 გაკვეთილებში მიღებული ცოდნა (ცვლადები, input(), ოპერატორები, if/else და სიები). უპასუხეთ შეკითხვებს და შეასრულეთ კოდის სავარჯიშოები.
        </p>

        {/* If already submitted / Score Card */}
        {submitted && quizScore && (
          <div className="mt-6 p-5 rounded-xl bg-slate-950/80 border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-2xl">
                {currentPercentage}%
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  {currentPercentage >= 80
                    ? "შესანიშნავი შედეგია! 🎉"
                    : currentPercentage >= 50
                    ? "კარგი შედეგია! 👍"
                    : "სცადეთ ხელახლა უკეთესი შედეგისთვის 💪"}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  თქვენ დააგროვეთ {currentScore} ქულა {currentTotal}-დან.
                </p>
              </div>
            </div>

            <button
              onClick={handleRetake}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              ხელახლა გავლა
            </button>
          </div>
        )}
      </div>

      {/* Quiz Questions List */}
      <div className="space-y-8">
        {questions.map((q, idx) => {
          const isChoice = q.type === "choice";
          const userChoice = selectedAnswers[q.id];
          const isChoiceCorrect = isChoice && userChoice === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`rounded-2xl p-6 border transition-all ${
                submitted
                  ? isChoice
                    ? isChoiceCorrect
                      ? "bg-slate-900/90 border-emerald-500/40"
                      : "bg-slate-900/90 border-rose-500/40"
                    : codeAnswersStatus[q.id]
                    ? "bg-slate-900/90 border-emerald-500/40"
                    : "bg-slate-900/90 border-slate-800"
                  : "bg-slate-900/60 border-slate-800"
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {isChoice ? "ტესტური შეკითხვა" : "კოდის ამოცანა"}
                  </span>
                </div>

                {submitted && isChoice && (
                  <div>
                    {isChoiceCorrect ? (
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        სწორია (+1)
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-rose-400 flex items-center gap-1 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                        <XCircle className="w-3.5 h-3.5" />
                        არასწორია (0)
                      </span>
                    )}
                  </div>
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-4">
                {q.question}
              </h3>

              {/* Multiple Choice Options */}
              {isChoice && (
                <div className="space-y-2.5">
                  {q.options.map((option, optIdx) => {
                    const isSelected = userChoice === optIdx;
                    let optionStyle =
                      "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40";

                    if (submitted) {
                      if (optIdx === q.correctIndex) {
                        optionStyle =
                          "bg-emerald-950/40 border-emerald-500/60 text-emerald-200 font-medium";
                      } else if (isSelected && optIdx !== q.correctIndex) {
                        optionStyle =
                          "bg-rose-950/40 border-rose-500/60 text-rose-200";
                      } else {
                        optionStyle = "opacity-50 border-slate-900";
                      }
                    } else if (isSelected) {
                      optionStyle =
                        "bg-indigo-600/20 border-indigo-500 text-white font-medium shadow-sm";
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={submitted}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between text-xs md:text-sm cursor-pointer ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[11px] font-mono shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{option}</span>
                        </div>

                        {submitted && optIdx === q.correctIndex && (
                          <Check className="w-4 h-4 text-emerald-400" />
                        )}
                      </button>
                    );
                  })}

                  {submitted && q.explanation && (
                    <div className="mt-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
                      <span className="font-semibold text-slate-200">ახსნა: </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              )}

              {/* Code Exercise Type */}
              {!isChoice && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-800/80">
                    {q.instruction}
                  </p>
                  <CodeEditor
                    initialCode={q.initialCode}
                    validator={(out) => {
                      const isValid = q.validate(out);
                      handleCodeValidated(q.id, isValid);
                      return {
                        valid: isValid,
                        message: isValid
                          ? "ამოცანა სწორად ამოიხსნა! (+1 ქულა ქვიზში)"
                          : "პასუხი არ შეესაბამება მოთხოვნას.",
                      };
                    }}
                    hint={q.hint}
                    solution={q.solution}
                    fileName={`quiz_${q.id}.py`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit / Finish Button */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white">
            {submitted ? "ქვიზი დასრულებულია" : "მზად ხართ შესამოწმებლად?"}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            {submitted
              ? `შედეგი შენახულია. შეგიძლიათ გადახვიდეთ მე-7 გაკვეთილზე.`
              : "დააჭირეთ ღილაკს პასუხების გასაგზავნად და შედეგის დასათვლელად."}
          </p>
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmitQuiz}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            ქვიზის დასრულება და შეფასება
          </button>
        ) : (
          <button
            onClick={() => {
              setActiveLessonId(7);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            გადასვლა მე-7 გაკვეთილზე
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
