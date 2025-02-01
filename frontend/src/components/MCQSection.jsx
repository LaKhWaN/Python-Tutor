import React, { useState } from "react";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MotionButton = motion(Button);

const MCQSection = ({ questions, setCurrentQuestionIndex }) => {
  const [currentQuestionIndex, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);

      if (option === currentQuestion.correctAnswer) {
        setFeedback("✅ Correct!");
        setTimeout(() => {
          // If this is not the last question, move to the next one.
          // Otherwise, update the parent's state to signal quiz completion.
          if (currentQuestionIndex < questions.length - 1) {
            const nextIndex = currentQuestionIndex + 1;
            setIndex(nextIndex);
            setCurrentQuestionIndex(nextIndex);
          } else {
            // Quiz completed: Set the parent's index to a value >= questions.length.
            setCurrentQuestionIndex(questions.length);
          }
          setSelectedOption(null);
          setIsAnswered(false);
          setFeedback("");
        }, 1000);
      } else {
        setFeedback("❌ Try again!");
        // Allow retry after a short delay
        setTimeout(() => {
          setSelectedOption(null);
          setIsAnswered(false);
          setFeedback("");
        }, 1000);
      }
    }
  };

  return (
    <Box p={6}>
      {/* Display the question */}
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        <ReactMarkdown
          children={currentQuestion.question}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </Text>

      {/* Display MCQ Options */}
      <VStack spacing={3}>
        {currentQuestion.options.map((option, index) => (
          <MotionButton
            key={index}
            width="100%"
            variant={selectedOption === option ? "solid" : "outline"}
            colorScheme={
              option === currentQuestion.correctAnswer ? "green" : "red"
            }
            isDisabled={isAnswered}
            onClick={() => handleOptionClick(option)}
            bg={
              selectedOption === option
                ? option === currentQuestion.correctAnswer
                  ? "green.100"
                  : "red.100"
                : ""
            }
          >
            {option}
          </MotionButton>
        ))}
      </VStack>

      {/* Feedback Message */}
      {feedback && (
        <Text
          mt={4}
          fontWeight="bold"
          color={feedback.includes("Correct") ? "green.500" : "red.500"}
        >
          {feedback}
        </Text>
      )}
    </Box>
  );
};

export default MCQSection;
