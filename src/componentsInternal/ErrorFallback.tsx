import { Box, Heading, Text, Button, Flex, Icon, Link } from "@chakra-ui/react";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="bg" p={4}>
      <Box
        textAlign="center"
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        borderColor="red.300"
        _dark={{ borderColor: "red.600" }}
        bg={{ light: "white", dark: "gray.800" }}
        maxW="md"
        boxShadow="md"
      >
        <Icon
          as={FaExclamationTriangle}
          color="red.500"
          _dark={{ color: "red.400" }}
          boxSize={12}
          mb={4}
        />
        <Heading as="h1" size="xl" mb={4} color="text">
          Oops! Something broke!
        </Heading>

        <Text color="text" mb={6} fontSize="lg">
          The page decided to take a chai break. Try again after some time.
        </Text>

        <Box
          bg="red.50"
          _dark={{ bg: "red.900" }}
          p={4}
          borderRadius="md"
          mb={6}
          textAlign="left"
          maxH="200px"
          overflowY="auto"
        >
          <Text
            fontFamily="mono"
            fontSize="sm"
            color="red.600"
            _dark={{ color: "red.200" }}
          >
            {error.message}
          </Text>
        </Box>

        <Button
          leftIcon={<FaRedo />}
          colorScheme="red"
          variant="solid"
          onClick={resetErrorBoundary}
          size="lg"
        >
          Try Once More
        </Button>

        <Text
          mt={4}
          fontSize="sm"
          color="gray.500"
          _dark={{ color: "gray.400" }}
        >
          Still not working? Mail me at{" "}
          <Link href="mailto:kumarashish87998@gmail.com" color="accent">
            kumarashish87998@gmail.com
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};
