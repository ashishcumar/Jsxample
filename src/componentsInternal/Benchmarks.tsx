import { TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Badge,
  VStack,
  Flex,
} from "@chakra-ui/react";

interface Benchmark {
  [key: string]: string;
}

interface BenchmarksProps {
  data: Benchmark;
}

const BenchmarkCard = ({ data }: BenchmarksProps) => {
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
  <TimeIcon color="accent" boxSize={6} mr={3} />
  <Heading as="h2" size="xl">Performance Benchmarks</Heading>
</Flex>

      <SimpleGrid
        columns={{ base: 1, md: Object.keys(data).length }}
        spacing={4}
      >
        {Object.entries(data).map(([approach, description]) => (
          <Box
            key={approach}
            p={4}
            borderRadius="md"
            borderWidth="1px"
            borderColor="border.light"
            bg="bg.highlight.light"
            _dark={{ borderColor: "border.dark", bg: "bg.highlight.dark" }}
          >
            <VStack align="start" spacing={2}>
              <Badge colorScheme="blue" variant="subtle" fontSize="sm">
                {approach}
              </Badge>
              <Text fontSize="md" mt={2}>
                {description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BenchmarkCard;
