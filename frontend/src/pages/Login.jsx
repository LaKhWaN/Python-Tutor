import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { login } from "../services/authService"; // Import the authService
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show a promise toast while logging in
    toast
      .promise(
        login(credentials), // Call login function (which returns a promise)
        {
          pending: "Logging in...", // Shown while waiting
          success: "Login successful! 🚀 Redirecting...", // If resolved
          error: "Login failed. Please check your credentials.", // If rejected
        }
      )
      .then((data) => {
        console.log("Login Success:", data);
        localStorage.setItem("token", data.token);
        window.location.href = "/topics"; // Redirect after successful login
      });
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <ToastContainer autoClose={2000} />{" "}
      {/* Toast messages disappear after 2s */}
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
          <Text fontSize="md" color="gray.500" mb={4}>
            Please note that this platform uses free hosting and a free database
            service. Registration and login may take a few moments.
          </Text>{" "}
          <VStack spacing={6}>
            <Heading fontSize="2xl" fontWeight="bold" color="gray.700">
              Login 🔑
            </Heading>

            <Input
              name="username"
              type="text"
              placeholder="Username"
              size="lg"
              bg="gray.50"
              _focus={{ bg: "white" }}
              w="100%"
              value={credentials.username}
              onChange={handleChange}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              size="lg"
              bg="gray.50"
              _focus={{ bg: "white" }}
              w="100%"
              value={credentials.password}
              onChange={handleChange}
            />

            <Button
              onClick={handleSubmit}
              colorScheme="purple"
              size="lg"
              w="100%"
            >
              Login
            </Button>

            <Text color="gray.600">
              Don't have an account?{" "}
              <Text
                as="a"
                href="/register"
                color="purple.500"
                fontWeight="bold"
              >
                Register
              </Text>
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Login;
