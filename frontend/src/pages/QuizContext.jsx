import React, { createContext, useContext, useState, useEffect } from "react";
import { getQuizData } from "../components/Quiz/quizData";

// Create a context for the quiz data
const QuizContext = createContext();

// Custom hook to use the QuizContext
export const useQuizContext = () => useContext(QuizContext);

// Provider component to wrap the app and provide context
export const QuizProvider = ({ children }) => {
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const topic = new URLSearchParams(window.location.search).get("topic");

  const checkTopic = (topic) => {
    if (!topic) return false;
    return true;
  };

  useEffect(() => {
    // Reset error and start loading when component mounts or topic changes
    setError(null);
    setLoading(true);

    if (!topic) {
      setError(
        "❌ No topic selected. Please choose a quiz from the Topics page."
      );
      setLoading(false);
      return;
    }

    const quizData = getQuizData(topic);

    if (quizData) {
      setQuizQuestions(quizData);
      setError(null); // Reset error if quiz data is found
    } else {
      setError(`❌ No quiz found for '${topic}'. Please choose a valid quiz.`);
    }

    setLoading(false);
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quizQuestions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        loading,
        error,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
