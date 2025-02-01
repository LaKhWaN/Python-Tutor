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
import { login } from "../services/authService"; // Import the authService
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import { useNavigate } from "react-router-dom";

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
    try {
      const data = await login(credentials);
      console.log("Login Success:", data);
      // We get the JWT and we can store it in localStorage
      localStorage.setItem("token", data.token);

      // Redirect to /topics
      window.location.href = "/topics";
    } catch (err) {
      // Error toast is handled in authService
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google clicked");
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
              Login 🔑
            </Heading>

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
              value={credentials.username}
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
              value={credentials.password}
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
              Login
            </Button>

            <Text as={motion.div} variants={itemVariants} color="gray.600">
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
