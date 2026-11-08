import React, { useState } from "react";
import { ProgressProvider, useProgress } from "./context/ProgressContext";
import { LESSONS_DATA } from "./data/lessonsData";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { LessonView } from "./components/LessonView";
import { QuizView } from "./components/QuizView";
import { ComplexPracticeView } from "./components/ComplexPracticeView";

const MainContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { activeLessonId } = useProgress();

  const currentLesson =
    LESSONS_DATA.find((l) => l.id === activeLessonId) || LESSONS_DATA[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row antialiased selection:bg-indigo-500 selection:text-white">
      {/* Left Navigation Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />

        <main className="flex-1 pb-16">
          {currentLesson.isQuiz ? (
            <QuizView lesson={currentLesson} />
          ) : currentLesson.isComplexPractice ? (
            <ComplexPracticeView lesson={currentLesson} />
          ) : (
            <LessonView lesson={currentLesson} />
          )}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <MainContent />
    </ProgressProvider>
  );
}
