import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="grey.100" color="black" py={3} textAlign="center">
      <Text fontSize="lg" fontWeight="bold">
        🎓 Python Tutor
      </Text>
      <Text fontSize="sm">© 2025 Python Tutor</Text>
    </Box>
  );
};

export default Footer;
