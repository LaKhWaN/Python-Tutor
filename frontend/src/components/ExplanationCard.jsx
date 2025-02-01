import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MotionBox = motion(Box);

const ExplanationCard = ({ explanation }) => {
  return (
    <MotionBox
      p={6}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      bg="white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Heading as="h2" size="lg" mb={4}>
        Explanation
      </Heading>
      <ReactMarkdown
        children={explanation}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Render code blocks with syntax highlighting if language is provided
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            if (!inline && match) {
              return (
                <SyntaxHighlighter
                  style={codeStyle}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            } else {
              return (
                <code style={{ backgroundColor: '#f0f0f0', padding: '0.2em 0.4em', borderRadius: '4px' }} {...props}>
                  {children}
                </code>
              );
            }
          },
          // Optional: Ensure paragraphs get proper spacing
          p({ node, ...props }) {
            return <p style={{ marginBottom: '1em' }} {...props} />;
          },
        }}
      />
    </MotionBox>
  );
};

export default ExplanationCard;
