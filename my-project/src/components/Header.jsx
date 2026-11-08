import React from "react";
import { Menu, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useProgress } from "../context/ProgressContext";
import { LESSONS_DATA } from "../data/lessonsData";

export const Header = ({ onOpenSidebar }) => {
  const {
    activeLessonId,
    setActiveLessonId,
    completedLessons,
    markLessonCompleted,
    unmarkLessonCompleted,
    totalLessons,
  } = useProgress();

  const currentLesson = LESSONS_DATA.find((l) => l.id === activeLessonId) || LESSONS_DATA[0];
  const isCompleted = completedLessons.includes(activeLessonId);

  const handlePrev = () => {
    if (activeLessonId > 1) {
      setActiveLessonId(activeLessonId - 1);
    }
  };

  const handleNext = () => {
    if (activeLessonId < totalLessons) {
      setActiveLessonId(activeLessonId + 1);
    }
  };

  const toggleLessonComplete = () => {
    if (isCompleted) {
      unmarkLessonCompleted(activeLessonId);
    } else {
      markLessonCompleted(activeLessonId);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between gap-4">
      {/* Left: Mobile menu button & Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onOpenSidebar}
          className="p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 lg:hidden cursor-pointer"
          aria-label="მენიუს გახსნა"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-indigo-400 font-semibold">
              გაკვეთილი {activeLessonId} / {totalLessons}
            </span>
            {isCompleted && (
              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" />
                დასრულებულია
              </span>
            )}
          </div>
          <h1 className="text-sm md:text-base font-bold text-white truncate">
            {currentLesson.title}
          </h1>
        </div>
      </div>

      {/* Right: Actions & Nav buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={toggleLessonComplete}
          className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 font-medium transition-all cursor-pointer ${
            isCompleted
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20"
              : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">
            {isCompleted ? "გავლილია" : "მონიშნე გავლილად"}
          </span>
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            disabled={activeLessonId === 1}
            className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            title="წინა გაკვეთილი"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeLessonId === totalLessons}
            className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            title="შემდეგი გაკვეთილი"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

