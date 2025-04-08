import { CheckCircleIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface IProps {
  title: string;
  description: string;
  requirements: string[];
}

function ChallengeDetails(props: IProps) {
  const { title, description, requirements } = props;
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
          {title}
        </Heading>
      </Flex>

      <Text fontSize="lg" mb={6} color="gray.600" _dark={{ color: "gray.300" }}>
        {description}
      </Text>

      <Divider my={4} />
      <List spacing={3}>
        {requirements?.length
          ? requirements?.map((item) => {
              return (
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text as="span" fontWeight="medium">
                    {item}
                  </Text>
                </ListItem>
              );
            })
          : null}
      </List>
    </Box>
  );
}

export default ChallengeDetails;
