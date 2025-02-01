import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { register } from "../services/authService"; // Import the authService
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(userData);
      console.log("Registration Success:", data);
      // Redirect to /topics
      const navigator = useNavigate();
      navigator("/topics");
    } catch (err) {
      // Error toast is handled in authService
    }
  };

  const handleGoogleSignup = () => {
    console.log("Sign Up with Google clicked");
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <ToastContainer /> {/* Add ToastContainer */}
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
      >
        <Box
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          w="400px"
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
        >
          <VStack
            as={motion.div}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            spacing={6}
          >
            <Heading
              as={motion.div}
              variants={itemVariants}
              fontSize="2xl"
              fontWeight="bold"
              color="gray.700"
            >
              Sign Up 🚀
            </Heading>

            <Input
              as={motion.input}
              variants={itemVariants}
              name="email"
              type="email"
              placeholder="Email"
              size="lg"
              bg="gray.50"
              _focus={{ bg: "white" }}
              w="100%"
              value={userData.email}
              onChange={handleChange}
            />

            <Input
              as={motion.input}
              variants={itemVariants}
              name="username"
              type="text"
              placeholder="Username"
              size="lg"
              bg="gray.50"
              _focus={{ bg: "white" }}
              w="100%"
              value={userData.username}
              onChange={handleChange}
            />

            <Input
              as={motion.input}
              variants={itemVariants}
              name="password"
              type="password"
              placeholder="Password"
              size="lg"
              bg="gray.50"
              _focus={{ bg: "white" }}
              w="100%"
              value={userData.password}
              onChange={handleChange}
            />

            <Button
              onClick={handleSubmit}
              as={motion.button}
              variants={itemVariants}
              type="submit"
              colorScheme="purple"
              size="lg"
              w="100%"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </Button>

            <Text as={motion.div} variants={itemVariants} color="gray.600">
              Already have an account?{" "}
              <Text as="a" href="/login" color="purple.500" fontWeight="bold">
                Login
              </Text>
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Register;
