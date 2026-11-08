import React from "react";
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { useProgress } from "../context/ProgressContext";
import { CodeEditor } from "./CodeEditor";

export const ComplexPracticeView = ({ lesson }) => {
  const {
    savedCodes,
    saveUserCode,
    completedExercises,
    markExerciseCompleted,
    markLessonCompleted,
    activeLessonId,
    setActiveLessonId,
    totalLessons,
  } = useProgress();

  const challenges = lesson.complexChallenges || [];

  const handleChallengeComplete = (challengeId) => {
    markExerciseCompleted(challengeId);

    const allDone = challenges.every(
      (c) => c.id === challengeId || completedExercises[c.id]
    );
    if (allDone) {
      markLessonCompleted(lesson.id);
    }
  };

  const handlePrev = () => {
    if (activeLessonId > 1) {
      setActiveLessonId(activeLessonId - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (activeLessonId < totalLessons) {
      setActiveLessonId(activeLessonId + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const completedCount = challenges.filter((c) => completedExercises[c.id]).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/50 via-slate-900 to-emerald-950/40 border border-slate-800 p-6 md:p-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            გაკვეთილი 9 • კომპლექსური პრაქტიკა
          </span>
          <span className="text-slate-400">• რეალური ქეისები</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          რეალური ამოცანების გადაჭრა პითონით
        </h1>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          აქ თავმოყრილია კომპლექსური, რეალურ სამყაროსთან მიახლოებული ამოცანები. გამოიყენეთ ყველა მიღებული ცოდნა: ცვლადები, პირობითი ოპერატორები (if/else), ციკლები (for/while) და სიები (List).
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>{completedCount} / {challenges.length} ამოცანა ამოხსნილია</span>
          </div>
        </div>
      </div>

      {/* Challenges List */}
      <div className="space-y-10">
        {challenges.map((challenge, idx) => {
          const isDone = Boolean(completedExercises[challenge.id]);

          return (
            <div
              key={challenge.id}
              className={`rounded-2xl p-6 border transition-all ${
                isDone
                  ? "bg-slate-900/90 border-emerald-500/30 shadow-lg shadow-emerald-950/20"
                  : "bg-slate-900/60 border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {challenge.title}
                  </h3>
                </div>

                {isDone && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    ამოხსნილია
                  </span>
                )}
              </div>

              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 mb-4">
                <p className="text-xs md:text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              <CodeEditor
                initialCode={challenge.initialCode}
                savedCode={savedCodes[challenge.id]}
                onCodeChange={(newCode) => saveUserCode(challenge.id, newCode)}
                isCompleted={isDone}
                validator={(output, code) => {
                  const valid = challenge.validate(output, code);
                  return {
                    valid,
                    message: valid
                      ? "ყოჩაღ! კომპლექსური ამოცანა წარმატებით გადაიჭრა 🎉"
                      : "გამომავალი შედეგი არ ემთხვევა მოთხოვნას. გადაამოწმეთ ლოგიკა.",
                  };
                }}
                hint={challenge.hint}
                solution={challenge.solution}
                onComplete={() => handleChallengeComplete(challenge.id)}
                fileName={`challenge_${idx + 1}.py`}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={activeLessonId === 1}
          className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-xs md:text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          წინა გაკვეთილი
        </button>

        <button
          onClick={handleNext}
          disabled={activeLessonId === totalLessons}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed text-xs md:text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
        >
          შემდეგი გაკვეთილი
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
