import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  Badge,
  HStack,
  Tag,
  Link,
  IconButton,
  Image,
} from "@chakra-ui/react";
import {
  FaReact,
  FaJs,
  FaArrowRight,
  FaGithub,
  FaTwitter,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export const Landing = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Dynamic colors
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const subtleBg = useColorModeValue("gray.50", "gray.700");
  const codeBg = useColorModeValue("gray.100", "gray.900");
  const brandColor = useColorModeValue("purple.600", "purple.300");

  return (
    <Grid width={'90%'} margin={'auto'} placeContent={'center'} minHeight={'100vh'}>
      {/* Header with Theme Toggle */}
      <Flex justify="space-between" mb={12} align="center" marginTop={'12px'}>
        <HStack spacing={3}>
          <Box fontWeight="bold" fontSize="2xl" color={brandColor}>
            JSXample
          </Box>
          <Badge colorScheme="purple" variant="subtle">
            BETA
          </Badge>
        </HStack>
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          aria-label="Toggle theme"
          variant="ghost"
        />
      </Flex>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={12}
        alignItems="center"
      >
        <Box>
          <Heading as="h1" size="2xl" mb={6} lineHeight="1.2">
            Build{" "}
            <Text as="span" color="blue.400">
              React
            </Text>{" "}
            Components,
            <br />
            Master{" "}
            <Text as="span" color="yellow.400">
              Vanilla JS
            </Text>{" "}
            Fundamentals
          </Heading>

          <Text
            fontSize="xl"
            mb={8}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            The only platform showing identical solutions in both frameworks.
          </Text>

          <VStack spacing={4} align="stretch" mb={10}>
            {[
              "🚀 Copy-paste ready implementations",
              "🧠 Compare framework approaches visually",
              "⚡ Performance notes for interviews",
              "📋 Real-world problem statements",
            ].map((item) => (
              <Flex key={item} align="center" p={3} bg={subtleBg} rounded="md">
                <Box mr={3} fontSize="xl">
                  {item.split(" ")[0]}
                </Box>
                <Text>{item.split(" ").slice(1).join(" ")}</Text>
              </Flex>
            ))}
          </VStack>

          <Flex gap={4} direction={isMobile ? "column" : "row"} mb={8}>
            <Button
              colorScheme="purple"
              size="lg"
              rightIcon={<FaArrowRight />}
              w={isMobile ? "full" : "auto"}
            >
              Explore Patterns
            </Button>
            <Button
              variant="outline"
              size="lg"
              w={isMobile ? "full" : "auto"}
              leftIcon={<FaGithub />}
            >
              Star on GitHub
            </Button>
          </Flex>
        </Box>

        {/* Right Column - Visual Demo */}
        <Box
          p={6}
          bg={cardBg}
          rounded="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow={useColorModeValue("xl", "dark-lg")}
        >
          {/* Framework Toggle */}
          <Flex
            mb={4}
            p={1}
            bg={useColorModeValue("gray.100", "gray.700")}
            rounded="md"
          >
            {["React", "Vanilla JS"].map((item) => (
              <Button
                key={item}
                flex={1}
                variant="ghost"
                size="sm"
                colorScheme={item === "React" ? "blue" : "yellow"}
                isActive={item === "React"}
              >
                {item}
              </Button>
            ))}
          </Flex>

          {/* Code Preview */}
          <Box
            bg={codeBg}
            rounded="md"
            p={4}
            fontFamily="monospace"
            color={useColorModeValue("gray.800", "white")}
            fontSize="13px"
            lineHeight="tall"
          >
            <Text color={useColorModeValue("purple.600", "purple.300")}>
              // useInfiniteScroll.js
            </Text>
            <Text mt={2} color={useColorModeValue("blue.600", "blue.300")}>
              function
            </Text>{" "}
            <Text as="span" color={useColorModeValue("green.600", "green.300")}>
              useInfiniteScroll
            </Text>
            {"("}
            <Text
              as="span"
              color={useColorModeValue("orange.600", "orange.300")}
            >
              options
            </Text>
            {") {"}
            <Flex ml={4} gap={'4px'}>
              <Text color={useColorModeValue("blue.600", "blue.300")}>
                const
              </Text>{" "}
              <Text
                as="span"
                color={useColorModeValue("yellow.600", "yellow.300")}
              >
                [data, setData]
              </Text>
              {" = "}
              <Text as="span" color={useColorModeValue("blue.600", "blue.300")}>
                useState
              </Text>
              {"([]);"}
            </Flex>
            <Flex ml={4} gap={'4px'}>
              <Text color={useColorModeValue("blue.600", "blue.300")}>
                const
              </Text>{" "}
              <Text
                as="span"
                color={useColorModeValue("yellow.600", "yellow.300")}
              >
                loader
              </Text>
              {" = "}
              <Text as="span" color={useColorModeValue("blue.600", "blue.300")}>
                useRef
              </Text>
              {"(null);"}
            </Flex>
            <Text>{"}"}</Text>
          </Box>

          <Box
            mt={8}
            p={4}
            bg={useColorModeValue("purple.50", "purple.900")}
            rounded="md"
            borderWidth="1px"
            borderColor={useColorModeValue("purple.100", "purple.700")}
          >
            <Text fontWeight="bold" mb={2}>
              Try it yourself:
            </Text>
            <Text mb={3}>Copy to:</Text>
            <Flex gap={2} flexWrap="wrap">
              {["CodeSandbox", "StackBlitz", "VS Code"].map((item) => (
                <Button
                  key={item}
                  size="sm"
                  variant="outline"
                  colorScheme="purple"
                >
                  {item}
                </Button>
              ))}
            </Flex>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
