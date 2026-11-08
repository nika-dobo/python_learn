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

  const [quizScore, setQuizScore] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_quiz_score`);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
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
      if (quizScore !== null) {
        localStorage.setItem(`${STORAGE_KEY}_quiz_score`, JSON.stringify(quizScore));
      } else {
        localStorage.removeItem(`${STORAGE_KEY}_quiz_score`);
      }
    } catch (e) {
      console.error("Error saving quiz score:", e);
    }
  }, [quizScore]);

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

  const saveQuizResult = (score, total) => {
    const resultObj = {
      score,
      total,
      percentage: Math.round((score / total) * 100),
      timestamp: new Date().toISOString(),
    };
    setQuizScore(resultObj);
    // Mark Lesson 6 as completed if score is >= 50%
    if (resultObj.percentage >= 50) {
      markLessonCompleted(6);
    }
  };

  const resetAllProgress = () => {
    setCompletedLessons([]);
    setCompletedExercises({});
    setSavedCodes({});
    setQuizScore(null);
    setActiveLessonId(1);
    try {
      localStorage.removeItem(`${STORAGE_KEY}_completed_lessons`);
      localStorage.removeItem(`${STORAGE_KEY}_completed_exercises`);
      localStorage.removeItem(`${STORAGE_KEY}_saved_codes`);
      localStorage.removeItem(`${STORAGE_KEY}_quiz_score`);
      localStorage.removeItem(`${STORAGE_KEY}_active_lesson`);
    } catch (e) {
      console.error("Error clearing localStorage:", e);
    }
  };

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

