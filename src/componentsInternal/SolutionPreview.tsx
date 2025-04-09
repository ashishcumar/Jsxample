import { Box, Heading } from "@chakra-ui/react";
import TransferList from "../components/machineCodingQuestions/transferList/TransferList";

function SolutionPreview() {
  return (
    <Box
      mb={8}
      p={6}
      borderRadius="lg"
      bg="bg.card.light"
      _dark={{ bg: "bg.card.dark", borderColor: "border.dark" }}
      borderWidth="1px"
      borderColor="border.light"
    >
      <Heading as="h2" size="lg" mb={4}>
        Solution Preview
      </Heading>
      <TransferList />
    </Box>
  );
}

export default SolutionPreview;
