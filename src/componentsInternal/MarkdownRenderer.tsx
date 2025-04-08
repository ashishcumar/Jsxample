import { Box, Heading, Text } from "@chakra-ui/react";

const MarkdownRenderer = ({ text }: { text: string }) => {
  const lines = text.split("\n");
  console.log({ lines });
  return (
    <Box>
      {lines.map((line, i) => {
        console.log("line -->", line);
        if (line.startsWith("### ")) {
          console.log("case 1 ->", line);
          return (
            <Heading key={i} size="md" mt={4} mb={2}>
              {line.replace("### ", "")}
            </Heading>
          );
        }
        if (line.startsWith("- **")) {
          const [label, value] = line.split(":");
          console.log("case 2 ->", line);
          return (
            <Text key={i}>
              <Text as="span" fontWeight="bold">
                {label.replace("- **", "").replace("**", "")}:{" "}
              </Text>
              {value}
            </Text>
          );
        }
        console.log("case 3 ->", line);
        return <Text key={i}>{line}</Text>;
      })}
    </Box>
  );
};

export default MarkdownRenderer;
