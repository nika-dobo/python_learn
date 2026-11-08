// Skulpt Python 3 Runner utility
// Provides safe, asynchronous in-browser execution with stdout capture and interactive input() handling

export const runPythonCode = async (code, options = {}) => {
  const {
    onInput = null, // callback(promptText): Promise<string> or string
    timeoutMs = 6000,
  } = options;

  let outputBuffer = [];

  // Check if Skulpt is loaded in window
  if (typeof window === "undefined" || !window.Sk) {
    return {
      output: "",
      error: "პითონის ძრავი (Skulpt) არ ჩაიტვირთა. გთხოვთ გადატვირთოთ გვერდი.",
      success: false,
    };
  }

  const Sk = window.Sk;

  return new Promise((resolve) => {
    let isFinished = false;

    // Timeout safety against infinite loops
    const timer = setTimeout(() => {
      if (!isFinished) {
        isFinished = true;
        resolve({
          output: outputBuffer.join(""),
          error: "დრო ამოიწურა (Timeout)! შესაძლოა კოდში არის უსასრულო ციკლი (infinite loop).",
          success: false,
        });
      }
    }, timeoutMs);

    const outf = (text) => {
      outputBuffer.push(text);
    };

    const builtinRead = (x) => {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
        throw new Error("File not found: '" + x + "'");
      }
      return Sk.builtinFiles["files"][x];
    };

    // Configure Skulpt
    Sk.configure({
      output: outf,
      read: builtinRead,
      __future__: Sk.python3,
      execLimit: timeoutMs,
      inputfun: (promptText) => {
        return new Promise((resolveInput) => {
          if (onInput) {
            Promise.resolve(onInput(promptText || ""))
              .then((val) => resolveInput(val != null ? String(val) : ""))
              .catch(() => resolveInput(""));
          } else {
            // fallback to window.prompt if no custom callback provided
            const res = window.prompt(promptText || "შეიყვანეთ მნიშვნელობა:");
            resolveInput(res != null ? res : "");
          }
        });
      },
      inputfunTakesPrompt: true,
    });

    // Run Python code
    Sk.misceval
      .asyncToPromise(() => {
        return Sk.importMainWithBody("<stdin>", false, code, true);
      })
      .then(() => {
        if (!isFinished) {
          isFinished = true;
          clearTimeout(timer);
          resolve({
            output: outputBuffer.join(""),
            error: null,
            success: true,
          });
        }
      })
      .catch((err) => {
        if (!isFinished) {
          isFinished = true;
          clearTimeout(timer);
          
          let errStr = err.toString();
          // Clean up error message for beginner friendliness
          if (errStr.includes("ParseError") || errStr.includes("SyntaxError")) {
            errStr = "სინტაქსური შეცდომა (SyntaxError): " + errStr;
          } else if (errStr.includes("NameError")) {
            errStr = "სახელის შეცდომა (NameError): განსაზღვრული არ არის ცვლადი ან ფუნქცია. " + errStr;
          } else if (errStr.includes("TypeError")) {
            errStr = "ტიპის შეცდომა (TypeError): " + errStr;
          } else if (errStr.includes("IndexError")) {
            errStr = "ინდექსის შეცდომა (IndexError): ინდექსი სიის ფარგლებს გარეთაა. " + errStr;
          }

          resolve({
            output: outputBuffer.join(""),
            error: errStr,
            success: false,
          });
        }
      });
  });
};

