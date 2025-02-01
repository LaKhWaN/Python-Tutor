import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomButton from "./Button";

// Motion variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between child animations
    },
  },
};
const bounceVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
      p={6}
      bg="white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={bounceVariants}>
          <Heading
            as="h1"
            fontSize="6xl"
            fontWeight="bold"
            color="black"
            mb={6}
          >
            Learn Python the Fun Way! 🐍
          </Heading>
        </motion.div>

        {/* Animated Text */}
        <motion.div variants={childVariants}>
          <Text fontSize="2xl" color="black" mb={12}>
            Interactive quizzes, AI-powered hints, and gamified learning for
            kids.
          </Text>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div variants={childVariants}>
          <Flex gap={6}>
            <CustomButton onClick={() => console.log("Register clicked")}>
              Register
            </CustomButton>
            <CustomButton onClick={() => console.log("Login clicked")}>
              Login
            </CustomButton>
          </Flex>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
