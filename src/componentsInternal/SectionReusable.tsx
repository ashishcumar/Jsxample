import { Box, Heading } from "@chakra-ui/react";

const SectionReusable = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box>
    <Heading as="h2" size="lg" mb={4}>
      {title}
    </Heading>
    {children}
  </Box>
);


export default SectionReusable