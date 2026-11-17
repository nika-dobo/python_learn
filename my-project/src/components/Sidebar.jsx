import React, { useState, useMemo } from "react";
import {
  Code2,
  CheckCircle2,
  RotateCcw,
  Search,
  Award,
  Sparkles,
  Variable,
  Terminal,
  Percent,
  GitBranch,
  ListOrdered,
  Repeat,
  Layers,
  Lock,
  BookOpen,
  Workflow,
  X,
  Flame,
  ChevronDown,
  ChevronRight,
  Type,
  Grid,
  Dices,
  Braces,
  Zap,
  Compass,
  Box,
  GitFork,
  Blocks,
  Wand2,
  ShieldAlert,
  Globe,
  Cpu,
  RefreshCw,
  MemoryStick,
} from "lucide-react";
import { useProgress } from "../context/ProgressContext";
import { LESSONS_DATA, MODULES_DATA } from "../data/lessonsData";
import { ResetModal } from "./ResetModal";

// Icon mapping helper
const getLessonIcon = (iconName) => {
  switch (iconName) {
    case "Variable": return <Variable className="w-4 h-4" />;
    case "Terminal": return <Terminal className="w-4 h-4" />;
    case "Percent": return <Percent className="w-4 h-4" />;
    case "GitBranch": return <GitBranch className="w-4 h-4" />;
    case "ListOrdered": return <ListOrdered className="w-4 h-4" />;
    case "Award": return <Award className="w-4 h-4" />;
    case "Repeat": return <Repeat className="w-4 h-4" />;
    case "Layers": return <Layers className="w-4 h-4" />;
    case "Sparkles": return <Sparkles className="w-4 h-4" />;
    case "Lock": return <Lock className="w-4 h-4" />;
    case "BookOpen": return <BookOpen className="w-4 h-4" />;
    case "Workflow": return <Workflow className="w-4 h-4" />;
    case "Type": return <Type className="w-4 h-4" />;
    case "Grid": return <Grid className="w-4 h-4" />;
    case "Dices": return <Dices className="w-4 h-4" />;
    case "Braces": return <Braces className="w-4 h-4" />;
    case "Zap": return <Zap className="w-4 h-4" />;
    case "Compass": return <Compass className="w-4 h-4" />;
    case "Box": return <Box className="w-4 h-4" />;
    case "GitFork": return <GitFork className="w-4 h-4" />;
    case "Blocks": return <Blocks className="w-4 h-4" />;
    case "Wand2": return <Wand2 className="w-4 h-4" />;
    case "ShieldAlert": return <ShieldAlert className="w-4 h-4" />;
    case "Globe": return <Globe className="w-4 h-4" />;
    case "Cpu": return <Cpu className="w-4 h-4" />;
    case "RefreshCw": return <RefreshCw className="w-4 h-4" />;
    case "MemoryStick": return <MemoryStick className="w-4 h-4" />;
    default: return <Code2 className="w-4 h-4" />;
  }
};

export const Sidebar = ({ isOpen, onClose }) => {
  const {
    completedLessons,
    activeLessonId,
    setActiveLessonId,
    quizScores,
    resetAllProgress,
    totalLessons,
    completedLessonsCount,
    overallPercentage,
  } = useProgress();

  const [searchQuery, setSearchQuery] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);

  // Track user-toggled modules; active lesson's module stays open unless explicitly collapsed
  const activeLesson = LESSONS_DATA.find((l) => l.id === activeLessonId);
  const activeModuleId = activeLesson?.moduleId || 1;
  const [collapsedModules, setCollapsedModules] = useState({});

  const toggleModule = (modId) => {
    setCollapsedModules((prev) => {
      const currentlyOpen =
        prev[modId] === undefined ? modId === activeModuleId : !prev[modId];
      return {
        ...prev,
        [modId]: currentlyOpen, // true means collapsed
      };
    });
  };

  // Group filtered lessons by module
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const groupedModules = useMemo(() => {
    return MODULES_DATA.map((mod) => {
      const modLessons = LESSONS_DATA.filter((l) => l.moduleId === mod.id);
      const matchingLessons = normalizedQuery
        ? modLessons.filter(
            (l) =>
              l.title.toLowerCase().includes(normalizedQuery) ||
              l.shortTitle.toLowerCase().includes(normalizedQuery) ||
              l.subtitle.toLowerCase().includes(normalizedQuery) ||
              String(l.id).includes(normalizedQuery)
          )
        : modLessons;
      const doneInMod = modLessons.filter((l) =>
        completedLessons.includes(l.id)
      ).length;

      return {
        ...mod,
        lessons: matchingLessons,
        totalInMod: modLessons.length,
        doneInMod,
      };
    }).filter((mod) => mod.lessons.length > 0);
  }, [normalizedQuery, completedLessons]);

  const completedQuizzesCount = Object.keys(quizScores || {}).length;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 left-0 z-40 h-screen w-80 shrink-0 bg-slate-950 border-r border-slate-800/80 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand / Logo */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white tracking-tight text-base">PythonLearn</span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">GEO</span>
              </div>
              <p className="text-xs text-slate-400">ინტერაქტიული კურსი</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Progress Card */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-900/40">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              კურსის პროგრესი
            </span>
            <span className="font-mono text-emerald-400 font-bold">
              {overallPercentage}% დასრულებულია
            </span>
          </div>

          {/* Progress bar line */}
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden p-0.5">
            <div
              className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500 shadow-sm shadow-emerald-400/50"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
            <span>{completedLessonsCount} / {totalLessons} გაკვეთილი</span>
            {completedQuizzesCount > 0 && (
              <span className="text-amber-400 font-medium">
                ქვიზები: {completedQuizzesCount}/3
              </span>
            )}
          </div>
        </div>

        {/* Search Input */}
        <div className="px-4 py-3 border-b border-slate-800/80">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="გაკვეთილის ძიება..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Module Accordion & Lessons Navigation */}
        <nav className="flex-1 overflow-y-auto p-2 space-y-2">
          {groupedModules.map((mod) => {
            const isExpanded = normalizedQuery
              ? true
              : collapsedModules[mod.id] === undefined
              ? mod.id === activeModuleId
              : !collapsedModules[mod.id];

            const isModComplete = mod.doneInMod === mod.totalInMod;

            return (
              <div
                key={mod.id}
                className="rounded-xl border border-slate-800/60 bg-slate-900/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full px-3 py-2.5 flex items-center justify-between gap-2 text-left hover:bg-slate-900/60 transition-colors cursor-pointer"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-slate-200 truncate">
                      {mod.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isModComplete
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {mod.doneInMod}/{mod.totalInMod}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-1.5 pt-0 space-y-1">
                    {mod.lessons.map((lesson) => {
                      const isCompleted = completedLessons.includes(lesson.id);
                      const isActive = activeLessonId === lesson.id;
                      const lessonQuiz = lesson.isQuiz ? quizScores?.[lesson.id] : null;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setActiveLessonId(lesson.id);
                            if (onClose) onClose();
                          }}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-2.5 group cursor-pointer ${
                            isActive
                              ? "bg-indigo-600/15 border border-indigo-500/40 text-white shadow-sm"
                              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isCompleted
                                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                                  : isActive
                                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/40"
                                  : "bg-slate-900 text-slate-500 group-hover:text-slate-300 group-hover:bg-slate-800"
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                getLessonIcon(lesson.icon)
                              )}
                            </div>

                            <div className="min-w-0 flex-1">
                              <p
                                className={`text-xs font-semibold truncate ${
                                  isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                                }`}
                              >
                                {lesson.shortTitle}
                              </p>
                              <p className="text-[10px] text-slate-500 truncate">
                                {lesson.duration}
                                {lesson.isQuiz && " • ქვიზი"}
                                {lesson.isComplexPractice && " • პრაქტიკა"}
                                {lesson.badge && " • ბონუსი"}
                              </p>
                            </div>
                          </div>

                          {/* Right Badge */}
                          {isCompleted ? (
                            <span className="shrink-0 flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              <CheckCircle2 className="w-3 h-3" />
                            </span>
                          ) : lessonQuiz ? (
                            <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                              {lessonQuiz.percentage}%
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {groupedModules.length === 0 && (
            <div className="p-6 text-center text-xs text-slate-500">
              გაკვეთილი ვერ მოიძებნა
            </div>
          )}
        </nav>

        {/* Footer with Reset Progress Button */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950">
          <button
            onClick={() => setShowResetModal(true)}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-800 hover:border-rose-900/50 hover:bg-rose-950/20 text-slate-400 hover:text-rose-300 text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            პროგრესის განულება (Reset)
          </button>
        </div>
      </aside>

      <ResetModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={resetAllProgress}
      />
    </>
  );
};
