import "./App.css";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import CodeBlock from "./components/helper/CodeBlock";
import DrawerWrapper from "./componentsInternal/DrawerWrapper";
import TransferList from "./components/machineCodingQuestions/transferList/TransferList";
import { transferListJson } from "./components/machineCodingQuestions/transferList/transferListJson";
import { CheckIcon, StarIcon } from "@chakra-ui/icons";
import { Landing } from "./componentsInternal/Landing";

function App() {
  const [codePart, setCodePart] = useState("Vanilla Javascript");

  return (
    <Grid scrollSnapType="y mandatory">
      <Grid scrollSnapAlign="start" minHeight="100vh">
        <Landing />
      </Grid>
      <DrawerWrapper>
        <Box
          bg="bg"
          color="text"
          height="100vh"
          p={8}
          transition="background-color 0.2s, color 0.2s"
          scrollSnapAlign="start"
          minHeight="100vh"
          overflowY="auto"
        >
          {/* Challenge Details Section */}
          <Box
            mb={8}
            p={6}
            borderRadius="lg"
            bg="whiteAlpha.50"
            borderWidth="1px"
            borderColor="border"
            boxShadow="sm"
          >
            <Heading as="h1" size="xl" mb={4} color="accent">
              Build a Transfer List Component
            </Heading>

            <Text fontSize="lg" mb={6}>
              Create a "Transfer List" interface where users can select items
              from one list and transfer them to another.
            </Text>

            <Heading as="h2" size="md" mb={3} color="accent">
              💻 Requirements
            </Heading>

            <List spacing={2} mb={6}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Two Lists — Left and Right — each containing a set of names
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Each item should have: Display name + checkbox
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Actions: Transfer Selected + Transfer All
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                After transfer: Reset checkboxes
              </ListItem>
            </List>

            <Heading as="h2" size="md" mb={3} color="accent">
              🧠 Bonus
            </Heading>

            <List spacing={2} mb={4}>
              <ListItem>
                <ListIcon as={StarIcon} color="yellow.400" />
                Vanilla JavaScript only (no frameworks)
              </ListItem>
              <ListItem>
                <ListIcon as={StarIcon} color="yellow.400" />
                Render dynamically inside single{" "}
                <code>&lt;div id="root"&gt;</code>
              </ListItem>
              <ListItem>
                <ListIcon as={StarIcon} color="yellow.400" />
                Clean, minimal CSS
              </ListItem>
            </List>
          </Box>

          {/* Existing VStack with solution tabs */}
          <VStack spacing={8} align="stretch">
            <TransferList />

            <Flex gap={2} wrap="wrap">
              {Object.keys(transferListJson).map((item) => (
                <Button
                  key={item}
                  onClick={() => setCodePart(item)}
                  variant={codePart === item ? "solid" : "outline"}
                  colorScheme="blue"
                  size="sm"
                >
                  {item}
                </Button>
              ))}
            </Flex>

            {codePart?.length && (
              <Box
                borderRadius="lg"
                overflow="hidden"
              >
                {Object.keys(
                  transferListJson[codePart as keyof typeof transferListJson]
                    .code
                ).map((item) => (
                  <Box
                    key={item}
                    borderBottomWidth="1px"
                    borderColor="border"
                    _last={{ borderBottom: "none" }}
                  >
                    <Box
                      bg="whiteAlpha.50"
                      px={4}
                      py={2}
                      borderLeftWidth="4px"
                      borderLeftColor="accent"
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
              </Box>
            )}
          </VStack>
        </Box>
      </DrawerWrapper>
    </Grid>
  );
}

export default App;
