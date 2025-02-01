// src/components/Quiz/quizData.js

import { quizQuestions as helloWorldQuizData } from "./hello-world-quizData";
import { quizQuestions as funWithVariablesQuizData } from "./fun-with-variables-quizData";
import { quizQuestions as letsPlayWithListsQuizData } from "./lets-play-with-lists-quizData";
import { quizQuestions as makingDecisionsQuizData } from "./making-decisions-quizData";
import { quizQuestions as playingWithNumbersQuizData } from "./playing-with-numbers-quizData";
import { quizQuestions as understandingTextQuizData } from "./understanding-text-quizData";

// Import other topic quiz data here

const quizzes = {
  "hello-world": helloWorldQuizData,
  "fun-with-variables": funWithVariablesQuizData,
  "lets-play-with-lists": letsPlayWithListsQuizData,
  "making-decisions": makingDecisionsQuizData,
  "playing-with-numbers": playingWithNumbersQuizData,
  "understanding-text": understandingTextQuizData,
  // Add other topic quiz data here
};

export const getQuizData = (topic) => quizzes[topic] || null;
