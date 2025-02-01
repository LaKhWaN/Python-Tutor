import React from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ children, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
    >
      <Button onClick={onClick} colorScheme="purple" size="lg" variant="solid">
        {children}
      </Button>
    </motion.div>
  );
};

export default CustomButton;
