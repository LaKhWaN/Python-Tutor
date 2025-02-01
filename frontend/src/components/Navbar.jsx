import React from "react";
import { Flex, Link, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  // Check if the user is authenticated by checking for the JWT token in localStorage
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    // Remove the JWT token from localStorage to log out the user
    localStorage.removeItem("token");
    // Optionally, you can redirect the user to the homepage after logout
    window.location.replace("/");
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      bg="white"
      color="black"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        onClick={() => window.location.replace("/")}
        cursor="pointer"
      >
        Python Tutor 🎓
      </Text>
      <Flex align="center" gap={4}>
        {!isAuthenticated ? (
          <>
            <Link
              href="/login"
              _hover={{ textDecoration: "none", color: "purple.400" }}
            >
              Login
            </Link>
            <Link
              href="/register"
              _hover={{ textDecoration: "none", color: "purple.400" }}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/topics"
              _hover={{ textDecoration: "none", color: "purple.400" }}
            >
              Topics
            </Link>
            <Button
              onClick={handleLogout}
              colorScheme="purple"
              _hover={{ bg: "purple.400" }}
            >
              Logout
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
