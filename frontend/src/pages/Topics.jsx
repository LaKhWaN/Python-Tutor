import React from "react";
import { Box, Heading, Text, Grid, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: { scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" },
};

const handleTopicClick = (link) => () => {
  window.location = link;
};

// Topics Data
const topics = [
  {
    id: 1,
    title: "Hello World! 👋",
    description: "Learn how to print your first message in Python!",
    image: "/assets/img/hello-world.png",
    link: "/quizpage?topic=hello-world",
  },
  {
    id: 2,
    title: "Fun with Variables 🎲",
    description: "Discover how variables work in Python!",
    image: "/assets/img/fun-with-variables.png",
    link: "/quizpage?topic=fun-with-variables",
  },
  {
    id: 3,
    title: "Let's Play with Lists 📋",
    description: "Learn how to use and manipulate lists in Python!",
    image: "/assets/img/lets-play-with-lists.png",
    link: "/quizpage?topic=lets-play-with-lists",
  },
  {
    id: 4,
    title: "Making Decisions: If Statements 🧠",
    description: "Understand how to use if-else statements in Python!",
    image: "/assets/img/making-decisions.png",
    link: "/quizpage?topic=making-decisions",
  },
  {
    id: 5,
    title: "Playing with Numbers 🔢",
    description: "Explore numbers and basic arithmetic operations in Python!",
    image: "/assets/img/playing-with-numbers.png",
    link: "/quizpage?topic=playing-with-numbers",
  },
  {
    id: 6,
    title: "Understanding Text: Strings 📜",
    description: "Learn how to work with text and strings in Python!",
    image: "/assets/img/understanding-texts.png",
    link: "/quizpage?topic=understanding-text",
  },
];

const Topics = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      p={6}
      bg="gray.50"
    >
      {/* Page Title with Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={cardVariants}>
          <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="bold"
            color="black"
            mb={4}
          >
            Explore Fun Python Topics! 🐍
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="600px" mx="auto" mb={6}>
            Get started with Python programming by exploring these fun and
            interactive topics. Click on any topic to dive in and test your
            knowledge! 🚀
          </Text>
        </motion.div>

        {/* Grid of Topic Cards */}
        <Grid
          templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
          gap={10}
          w="100%"
        >
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <div onClick={handleTopicClick(topic.link)}>
                <Box
                  bg="white"
                  p={5}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    borderRadius="md"
                    mb={4}
                  />
                  <Heading fontSize="xl" fontWeight="bold" color="purple.600">
                    {topic.title}
                  </Heading>
                  <Text color="gray.600" mt={2}>
                    {topic.description}
                  </Text>
                </Box>
              </div>
            </motion.div>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Topics;
