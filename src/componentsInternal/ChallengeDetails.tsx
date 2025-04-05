import { CheckCircleIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";

function ChallengeDetails() {
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
      <Flex align="center" mb={4}>
        <SettingsIcon color="accent" boxSize={6} mr={3} />
        <Heading as="h1" size="xl" color="inherit">
          Transfer List Component
        </Heading>
        <Badge ml={3} colorScheme="blue" variant="subtle" fontSize="md">
          Intermediate
        </Badge>
      </Flex>

      <Text fontSize="lg" mb={6} color="gray.600" _dark={{ color: "gray.300" }}>
        Implement an interactive transfer list interface that allows users to
        move items between two lists with selection controls and transfer
        actions.
      </Text>

      <Divider my={4} />

      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Requirements</Tab>
          <Tab>Implementation</Tab>
          <Tab>Bonus Features</Tab>
        </TabList>

        <TabPanels mt={4}>
          <TabPanel p={0}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Text as="span" fontWeight="medium">
                  Dual List Interface:
                </Text>{" "}
                Display two adjacent lists (source and target)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Text as="span" fontWeight="medium">
                  Item Selection:
                </Text>{" "}
                Each list item should include a checkbox for selection
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Text as="span" fontWeight="medium">
                  Transfer Actions:
                </Text>{" "}
                Buttons to move selected/all items between lists
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Text as="span" fontWeight="medium">
                  State Management:
                </Text>{" "}
                Reset checkboxes after transfer operations
              </ListItem>
            </List>
          </TabPanel>

          <TabPanel p={0}>
            <Text mb={3}>The solution should be implemented with:</Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={IoCodeSlashSharp} color="accent" />
                React with TypeScript for type safety
              </ListItem>
              <ListItem>
                <ListIcon as={IoCodeSlashSharp} color="accent" />
                Chakra UI for consistent styling
              </ListItem>
              <ListItem>
                <ListIcon as={IoCodeSlashSharp} color="accent" />
                Custom hooks for state management
              </ListItem>
            </List>
          </TabPanel>

          <TabPanel p={0}>
            <Text mb={3}>Additional features to consider:</Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" />
                Keyboard navigation support
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" />
                Drag-and-drop functionality
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" />
                Search/filter capability for large lists
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" />
                Animation for transferred items
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default ChallengeDetails;
