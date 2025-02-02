import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomButton from "./Button";

// Motion variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const bounceVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={6}
      py={12}
      bg="gray.50"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Animation */}
        <motion.div variants={bounceVariants}>
          <Heading
            as="h1"
            fontSize={["3xl", "5xl", "6xl"]}
            fontWeight="bold"
            color="black.600"
            mb={4}
          >
            Learn Python the Fun Way! 🐍
          </Heading>
        </motion.div>

        {/* Description Animation */}
        <motion.div variants={textVariants}>
          <Text
            fontSize={["md", "lg", "xl"]}
            color="gray.700"
            maxW="700px"
            mx="auto"
            mb={6}
          >
            <br />
            Welcome to our interactive Python learning platform designed for
            kids! 🎉 We combine{" "}
            <strong>
              engaging quizzes, AI-powered hints, and gamified learning
            </strong>{" "}
            to make programming <strong>fun and easy</strong>. Whether you're a
            beginner or looking to refine your skills, our hands-on approach
            ensures an enjoyable learning experience.
          </Text>

          <Text
            fontSize={["md", "lg"]}
            color="gray.600"
            maxW="700px"
            mx="auto"
            mb={10}
          >
            With{" "}
            <strong>
              step-by-step explanations, real-time feedback, and personalized AI
              tutoring
            </strong>
            , this platform helps young learners to{" "}
            <strong>grasp Python fundamentals effortlessly</strong>. 🚀 Start
            your coding journey today!
          </Text>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div variants={textVariants}>
          <Flex gap={6} justify="center">
            <CustomButton
              onClick={() => (window.location.href = "/register")}
              bg="purple.500"
              color="white"
            >
              Get Started 🚀
            </CustomButton>
            <CustomButton
              onClick={() => (window.location.href = "/login")}
              bg="gray.700"
              color="white"
            >
              Login
            </CustomButton>
          </Flex>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
