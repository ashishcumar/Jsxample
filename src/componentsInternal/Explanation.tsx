import {
  Box,
  Heading,
  VStack,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import MarkdownRenderer from "./MarkdownRenderer";
import { FaLightbulb } from "react-icons/fa";

interface ExplanationProps {
  explanationList: string[];
}

const Explanation = ({ explanationList }: ExplanationProps) => {
  return (
    <Box
      mb={8}
      p={6}
      borderRadius="lg"
      bg="bg.card.light"
      borderWidth="1px"
      boxShadow="md"
      borderColor="border.light"
      _dark={{
        borderColor: "border.dark",
        bg: "bg.card.dark",
        boxShadow: "dark-lg",
      }}
    >
      {/* Header with accent colors */}
      <Box
        p={4}
        borderBottomWidth="1px"
        borderColor="accent.light"
        _dark={{
          borderColor: "accent.dark",
          bg: "rgba(20, 158, 202, 0.1)", // 10% opacity accent color
        }}
        bg="rgba(8, 126, 164, 0.1)" // Light mode accent overlay
        borderRadius="md"
        mb={4}
      >
        <Flex align="center">
          <Icon as={FaLightbulb} color="accent" boxSize={6} mr={3} />
          <Heading as="h2" size="xl">
            Approach Analysis
          </Heading>
        </Flex>
        <Text
          color="text.secondary.light"
          _dark={{ color: "text.secondary.dark" }}
          mt={2}
        >
          Detailed breakdown of each solution approach
        </Text>
      </Box>

      {/* Explanation cards with gradient borders */}
      {explanationList.map((item, index) => (
        <Box
          key={index}
          p={4}
          // mb={4}
          borderRadius="md"
          bg="bg.highlight.light"
        //   borderLeft="4px solid"
        //   borderColor={`hsl(${index * 60}, 80%, 60%)`} // Rotating hue for visual distinction
          _dark={{
            // borderColor: `hsl(${index * 60}, 80%, 50%)`,
            bg: "bg.highlight.dark",
          }}
          boxShadow="sm"
        >
          <VStack align="start" spacing={3}>
            {/* <Badge colorScheme="blue" variant="subtle" alignSelf="flex-start">
              Approach {index + 1}
            </Badge> */}
            <MarkdownRenderer text={item} />
          </VStack>
        </Box>
      ))}
    </Box>
  );
};

export default Explanation;
