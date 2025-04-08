import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { IQuestions } from "../components/helper/commonInterface";
import JsCodeImplementation from "./JsCodeImplementation";
import { FaCogs } from "react-icons/fa";

interface IProps {
  question: IQuestions;
}

function Implementation(props: IProps) {
  const { question } = props;

  return (
    <Box
      mb={8}
      p={6}
      borderRadius="lg"
      bg="bg.card.light"
      borderWidth="1px"
      boxShadow="md"
      borderColor="border.light"
      _dark={{ borderColor: "border.dark", bg: "bg.card.dark" }}
    >
      <Box
        p={2}
        borderBottomWidth="1px"
        borderColor="border.light"
        _dark={{ borderColor: "border.dark" }}
      >
        <Flex align="center" mb={4}>
          <Icon as={FaCogs} color="accent" boxSize={6} mr={3} />
          <Heading as="h2" size="xl">
            Implementation
          </Heading>
        </Flex>
        <Text color="gray.600" _dark={{ color: "gray.300" }}>
          Explore different implementation approaches
        </Text>
      </Box>
      {question.type === "javascript" ? (
        <JsCodeImplementation question={question} />
      ) : null}
    </Box>
  );
}

export default Implementation;
