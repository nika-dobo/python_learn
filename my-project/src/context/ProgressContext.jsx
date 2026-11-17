import React, { createContext, useContext, useState, useEffect } from "react";
import { LESSONS_DATA } from "../data/lessonsData";

const STORAGE_KEY = "python_learn_user_progress_v1";

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  // Initialize state from LocalStorage
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_completed_lessons`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [completedExercises, setCompletedExercises] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_completed_exercises`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [savedCodes, setSavedCodes] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_saved_codes`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [quizScores, setQuizScores] = useState(() => {
    try {
      const savedMap = localStorage.getItem(`${STORAGE_KEY}_quiz_scores`);
      if (savedMap) return JSON.parse(savedMap);
      const legacy = localStorage.getItem(`${STORAGE_KEY}_quiz_score`);
      if (legacy) {
        return { 6: JSON.parse(legacy) };
      }
      return {};
    } catch {
      return {};
    }
  });

  const [activeLessonId, setActiveLessonId] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_active_lesson`);
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });

  // Sync to LocalStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_completed_lessons`, JSON.stringify(completedLessons));
    } catch (e) {
      console.error("Error saving completed lessons:", e);
    }
  }, [completedLessons]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_completed_exercises`, JSON.stringify(completedExercises));
    } catch (e) {
      console.error("Error saving completed exercises:", e);
    }
  }, [completedExercises]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_saved_codes`, JSON.stringify(savedCodes));
    } catch (e) {
      console.error("Error saving code drafts:", e);
    }
  }, [savedCodes]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_quiz_scores`, JSON.stringify(quizScores));
    } catch (e) {
      console.error("Error saving quiz scores:", e);
    }
  }, [quizScores]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_active_lesson`, String(activeLessonId));
    } catch (e) {
      console.error("Error saving active lesson:", e);
    }
  }, [activeLessonId]);

  // Actions
  const markExerciseCompleted = (exerciseId) => {
    setCompletedExercises((prev) => ({
      ...prev,
      [exerciseId]: true,
    }));
  };

  const saveUserCode = (exerciseId, code) => {
    setSavedCodes((prev) => ({
      ...prev,
      [exerciseId]: code,
    }));
  };

  const markLessonCompleted = (lessonId) => {
    setCompletedLessons((prev) => {
      if (!prev.includes(lessonId)) {
        return [...prev, lessonId];
      }
      return prev;
    });
  };

  const unmarkLessonCompleted = (lessonId) => {
    setCompletedLessons((prev) => prev.filter((id) => id !== lessonId));
  };

  const saveQuizResult = (score, total, lessonId = 6) => {
    const resultObj = {
      score,
      total,
      percentage: Math.round((score / total) * 100),
      timestamp: new Date().toISOString(),
    };
    setQuizScores((prev) => ({
      ...prev,
      [lessonId]: resultObj,
    }));
    // Mark quiz lesson as completed if score is >= 50%
    if (resultObj.percentage >= 50) {
      markLessonCompleted(lessonId);
    }
  };

  const resetAllProgress = () => {
    setCompletedLessons([]);
    setCompletedExercises({});
    setSavedCodes({});
    setQuizScores({});
    setActiveLessonId(1);
    try {
      localStorage.removeItem(`${STORAGE_KEY}_completed_lessons`);
      localStorage.removeItem(`${STORAGE_KEY}_completed_exercises`);
      localStorage.removeItem(`${STORAGE_KEY}_saved_codes`);
      localStorage.removeItem(`${STORAGE_KEY}_quiz_score`);
      localStorage.removeItem(`${STORAGE_KEY}_quiz_scores`);
      localStorage.removeItem(`${STORAGE_KEY}_active_lesson`);
    } catch (e) {
      console.error("Error clearing localStorage:", e);
    }
  };

  // Backward-compatible summary quizScore (lesson 6 or first available)
  const quizScore = quizScores[6] || Object.values(quizScores)[0] || null;

  // Progress Calculation
  const totalLessons = LESSONS_DATA.length;
  const completedLessonsCount = completedLessons.length;
  const overallPercentage = Math.round((completedLessonsCount / totalLessons) * 100);

  return (
    <ProgressContext.Provider
      value={{
        completedLessons,
        completedExercises,
        savedCodes,
        quizScore,
        quizScores,
        activeLessonId,
        setActiveLessonId,
        markExerciseCompleted,
        saveUserCode,
        markLessonCompleted,
        unmarkLessonCompleted,
        saveQuizResult,
        resetAllProgress,
        totalLessons,
        completedLessonsCount,
        overallPercentage,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};

