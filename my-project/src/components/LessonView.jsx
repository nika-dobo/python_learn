import React from "react";
import { BookOpen, Code2, CheckCircle2, ArrowRight, ArrowLeft, Lightbulb, Clock } from "lucide-react";
import { useProgress } from "../context/ProgressContext";
import { CodeEditor } from "./CodeEditor";

export const LessonView = ({ lesson }) => {
  const {
    savedCodes,
    saveUserCode,
    completedExercises,
    markExerciseCompleted,
    completedLessons,
    markLessonCompleted,
    activeLessonId,
    setActiveLessonId,
    totalLessons,
  } = useProgress();

  const handleExerciseComplete = (exId) => {
    markExerciseCompleted(exId);

    // If all exercises in this lesson are completed, mark lesson completed
    const allDone = lesson.exercises.every(
      (ex) => ex.id === exId || completedExercises[ex.id]
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

  const isLessonComplete = completedLessons.includes(lesson.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Lesson Banner / Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-slate-800 p-6 md:p-8">
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold mb-2">
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
              გაკვეთილი {lesson.id}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {lesson.duration}
            </span>
            {isLessonComplete && (
              <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" />
                გაკვეთილი გავლილია
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
            {lesson.title}
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {lesson.subtitle}
          </p>
        </div>
      </div>

      {/* Theory Sections */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-base font-bold text-white border-b border-slate-800 pb-3">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <h2>თეორიული მასალა</h2>
        </div>

        <div className="space-y-6">
          {lesson.theory.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
            >
              <h3 className="text-base font-semibold text-slate-100 mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-indigo-500"></span>
                {item.heading}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.text}
              </p>

              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-3.5 space-y-2 text-sm text-slate-300">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Code Snippets / Examples */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-base font-bold text-white border-b border-slate-800 pb-3">
          <Code2 className="w-5 h-5 text-emerald-400" />
          <h2>კოდის მაგალითები</h2>
        </div>

        <div className="space-y-6">
          {lesson.codeSnippets.map((snippet, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-200">
                  {snippet.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                {snippet.explanation}
              </p>
              <CodeEditor
                initialCode={snippet.code}
                fileName={`example_${idx + 1}.py`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Exercises */}
      {lesson.exercises && lesson.exercises.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <h2>პრაქტიკული დავალებები (ინტერაქტიული შემოწმებით)</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {lesson.exercises.filter((ex) => completedExercises[ex.id]).length} / {lesson.exercises.length} ამოხსნილია
            </span>
          </div>

          <div className="space-y-8">
            {lesson.exercises.map((exercise, idx) => {
              const isExDone = Boolean(completedExercises[exercise.id]);

              return (
                <div
                  key={exercise.id}
                  className={`rounded-2xl p-5 border transition-all ${
                    isExDone
                      ? "bg-slate-900/90 border-emerald-500/30 shadow-lg shadow-emerald-950/20"
                      : "bg-slate-900/60 border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <h3 className="text-sm md:text-base font-bold text-white">
                        {exercise.title}
                      </h3>
                    </div>

                    {isExDone && (
                      <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        შესრულებულია
                      </span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                    {exercise.instruction}
                  </p>

                  <CodeEditor
                    initialCode={exercise.initialCode}
                    savedCode={savedCodes[exercise.id]}
                    onCodeChange={(newCode) => saveUserCode(exercise.id, newCode)}
                    exerciseId={exercise.id}
                    isCompleted={isExDone}
                    validator={exercise.validate}
                    hint={exercise.hint}
                    solution={exercise.solution}
                    onComplete={() => handleExerciseComplete(exercise.id)}
                    fileName={`exercise_${idx + 1}.py`}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
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
