import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { transferListJson } from "../components/machineCodingQuestions/transferList/transferListJson";
import { IoCodeSlashSharp } from "react-icons/io5";
import CodeBlock from "../components/helper/CodeBlock";

function Implementation() {
  const [codePart, setCodePart] = useState("Vanilla Javascript");
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="bg.card.light"
      borderWidth="1px"
      borderColor="border.light"
      _dark={{ borderColor: "border.dark", bg: "bg.card.dark" }}
    >
      <Box
        p={4}
        borderBottomWidth="1px"
        borderColor="border.light"
        _dark={{ borderColor: "border.dark" }}
      >
        <Heading as="h2" size="lg">
          Implementation
        </Heading>
        <Text color="gray.600" _dark={{ color: "gray.300" }}>
          Explore different implementation approaches
        </Text>
      </Box>

      <Box p={4}>
        <Flex gap={2} wrap="wrap" mb={4}>
          {Object.keys(transferListJson).map((item) => (
            <Button
              key={item}
              onClick={() => setCodePart(item)}
              variant={codePart === item ? "solid" : "outline"}
              colorScheme="blue"
              size="sm"
              leftIcon={<IoCodeSlashSharp />}
            >
              {item}
            </Button>
          ))}
        </Flex>

        {codePart?.length && (
          <VStack spacing={8} align="stretch">
            {Object.keys(
              transferListJson[codePart as keyof typeof transferListJson].code
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
                        codePart as keyof typeof transferListJson
                      ] as { code: { [key: string]: string } }
                    ).code[item]
                  }
                />
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
}

export default Implementation;
