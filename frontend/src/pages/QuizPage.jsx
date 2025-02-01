import React from "react";
import { Box, Flex, Heading, Text, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useQuizContext } from "./QuizContext"; // Import the custom hook

import ExplanationCard from "../components/ExplanationCard";
import ChatArea from "../components/ChatArea";
import MCQSection from "../components/MCQSection";
import QuizComplete from "../components/QuizComplete";

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const QuizPage = () => {
  const {
    quizQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    loading,
    error,
  } = useQuizContext(); // Access quiz data from context

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
        <Text>Loading quiz...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={10}>
        <Heading as="h2" size="lg" color="red.500">
          {error}
        </Heading>
      </Box>
    );
  }

  if (
    !quizQuestions ||
    !Array.isArray(quizQuestions) ||
    quizQuestions.length === 0
  ) {
    return (
      <Box textAlign="center" mt={10}>
        <Heading as="h2" size="lg" color="red.500">
          ❌ No questions found.
        </Heading>
      </Box>
    );
  }

  // ✅ All questions completed
  if (currentQuestionIndex >= quizQuestions.length) {
    return <QuizComplete />;
  }

  return (
    <MotionBox
      p={6}
      bg="white"
      minH="100vh"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Flex direction={["column", "row"]} gap={6}>
        {/* Left Column: Explanation Card */}
        <Box
          flex={1}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
        >
          <ExplanationCard
            explanation={
              quizQuestions[currentQuestionIndex]?.explanation ||
              "No explanation available"
            }
            code={quizQuestions[currentQuestionIndex]?.code || null}
          />
        </Box>

        {/* Right Column: AI Chat Area */}
        <Box
          flex={1}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
        >
          <Heading
            as="h3"
            size="md"
            p={4}
            borderBottom="1px solid"
            borderColor="gray.200"
          >
            AI Tutor Chat
          </Heading>
          <ChatArea
            explanation={quizQuestions[currentQuestionIndex]?.explanation}
          />{" "}
          {/* Pass explanation */}
        </Box>
      </Flex>

      {/* Row 2: MCQs Section */}
      <Box mt={6} border="1px solid" borderColor="gray.200" borderRadius="md">
        <MCQSection
          questions={quizQuestions}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      </Box>
    </MotionBox>
  );
};

export default QuizPage;
