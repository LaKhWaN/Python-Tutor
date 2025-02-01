import React, { useState } from "react";
import { Box, Flex, Input, Button, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { sendMessageToAI } from "../services/chatService"; // Import the service function

const MotionBox = motion(Box);

const ChatArea = ({ explanation }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user's message
    const newMessage = {
      id: messages.length + 1,
      message: inputValue,
      isUser: true,
    };
    setMessages([...messages, newMessage]);
    setInputValue("");

    try {
      // Call the service to send the prompt and explanation to the backend
      const aiResponseMessage = await sendMessageToAI(inputValue, explanation);

      const aiResponse = {
        id: messages.length + 2,
        message: aiResponseMessage, // Get AI's response from the service
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      p={4}
      bg="gray.50"
      borderTop="1px solid"
      borderColor="gray.200"
      maxH="300px"
      overflowY="auto"
    >
      {messages.map((msg) => (
        <Flex
          key={msg.id}
          justify={msg.isUser ? "flex-end" : "flex-start"}
          mb={2}
        >
          <MotionBox
            bg={msg.isUser ? "purple.500" : "gray.200"}
            color={msg.isUser ? "white" : "black"}
            p={3}
            borderRadius="md"
            maxW="70%"
          >
            {msg.message}
          </MotionBox>
        </Flex>
      ))}
      <Box as="form" onSubmit={handleSendMessage} mt={4}>
        <HStack spacing={2}>
          <Input
            placeholder="Enter your query..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            size="md"
            variant="filled"
          />
          <Button type="submit" colorScheme="purple">
            Send
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ChatArea;
