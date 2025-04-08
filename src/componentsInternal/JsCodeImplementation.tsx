import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { transferListJson } from "../components/machineCodingQuestions/transferList/transferListJson";
import { IoCodeSlashSharp } from "react-icons/io5";
import CodeBlock from "../components/helper/CodeBlock";
import { IQuestions } from "../components/helper/commonInterface";

interface IProps {
  question: IQuestions;
}

function JsCodeImplementation(props: IProps) {
  const { question } = props;
  const [approach, setApproach] = useState("");

  useEffect(() => {
    if (approach == "") {
      const firstApproach = Object.keys(question.code)[0];
      setApproach(firstApproach);
    }
  }, [question]);

  return (
    <Box p={4}>
      <Flex gap={2} wrap="wrap" mb={4}>
        {Object.keys(question.code).map((item) => (
          <Button
            key={item}
            onClick={() => setApproach(item)}
            variant={approach === item ? "solid" : "outline"}
            colorScheme="blue"
            size="sm"
            leftIcon={<IoCodeSlashSharp />}
          >
            {item}
          </Button>
        ))}
      </Flex>

      {approach?.length && (
        <VStack spacing={8} align="stretch">
          {/* {Object.keys(
            transferListJson[approach as keyof typeof transferListJson].code
          ).map((item) => (
            <Box
              key={item}
              borderRadius="md"
              overflow="hidden"
              transition={"height 0.3s ease"}
            >
              <Box
                bg="gray.50"
                _dark={{ bg: "gray.700" }}
                px={4}
                py={2}
                borderLeftWidth="4px"
                borderLeftColor={"accent"}
              >
                <Text fontWeight="bold">{item}</Text>
              </Box>
              <CodeBlock
                code={
                  (
                    transferListJson[
                      approach as keyof typeof transferListJson
                    ] as { code: { [key: string]: string } }
                  ).code[item]
                }
              />
            </Box>
          ))} */}
          <Box
            borderRadius="md"
            overflow="hidden"
            transition={"height 0.3s ease"}
          >
            <CodeBlock code={question.code[approach]} />
          </Box>
        </VStack>
      )}
    </Box>
  );
}

export default JsCodeImplementation;
