import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { register } from "../services/authService"; // Import the authService
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // ✅ Correct placement of useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show a promise toast while registering
    toast.promise(
      register(userData), // Call register function (which returns a promise)
      {
        pending: "Signing up...", // Shown while waiting
        success: "Registration successful! 🎉 Redirecting...", // If resolved
        error: "Signup failed. Please try again.", // If rejected
      }
    ).then((data) => {
      console.log("Registration Success:", data);
      navigate("/topics"); // Redirect after successful signup
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <ToastContainer autoClose={2000} /> {/* Toast messages disappear after 2s */}
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
          <VStack spacing={6}>
            <Heading fontSize="2xl" fontWeight="bold" color="gray.700">
              Sign Up 🚀
            </Heading>

            <Input
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
              colorScheme="purple"
              size="lg"
              w="100%"
            >
              Sign Up
            </Button>

            <Text color="gray.600">
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
