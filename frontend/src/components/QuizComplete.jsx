import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const BounceHeading = motion(Box);

const QuizComplete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate("/topics");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      position="relative"
      height="100vh"
      width="100vw"
      bg="white"
      textAlign="center"
      pt={10}
    >
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <BounceHeading
        as="h1"
        fontSize="4xl"
        fontWeight="bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        Congratulations!
      </BounceHeading>
      <Text fontSize="xl" mt={4}>
        You have completed the quiz. Great job!
      </Text>
      <Text fontSize="lg" mt={2}>
        Redirecting to topics...
      </Text>
    </Box>
  );
};

export default QuizComplete;
