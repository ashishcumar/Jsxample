import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  Badge,
  HStack,
  IconButton,
  Tag,
  TagLabel,
  TagLeftIcon,
  Grid,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaArrowRight, FaGithub, FaCode } from "react-icons/fa";
import { GiHook } from "react-icons/gi";
import { SiJavascript } from "react-icons/si";

export const Landing = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("gray.700", "gray.300");
  const brandColor = useColorModeValue("purple.600", "purple.300");

  const categories = [
    {
      name: "Machine Coding",
      icon: FaCode,
      color: "blue",
      description: "React components for frontend interviews",
    },
    {
      name: "Custom Hooks",
      icon: GiHook,
      color: "teal",
      description: "Reusable React hooks collection",
    },
    {
      name: "JS Functions",
      icon: SiJavascript,
      color: "yellow",
      description: "Essential utility functions",
    },
    {
      name: "Polyfills",
      icon: SiJavascript,
      color: "orange",
      description: "Browser compatibility solutions",
    },
  ];

  return (
    <Grid  minH={"100vh"} margin={"auto"} padding={{xs:'24px',sm:'0'}}>
      {/* Header */}
      <Flex justify="space-between" mb={12} marginTop={{xs:'24px',md:''}} alignItems={"center"}>
        <HStack spacing={3}>
          <Heading size="xl" fontWeight="semibold" color={brandColor}>
            JSXample
          </Heading>
          <Badge colorScheme="purple" variant="subtle" fontSize="sm">
            BETA
          </Badge>
        </HStack>
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          aria-label="Toggle theme"
          variant="ghost"
          size="sm"
        />
      </Flex>

      {/* Main Content */}
      <Box textAlign={"center"}>
        <Heading as="h1" size="2xl" mb={5} lineHeight="1.2" fontWeight="700">
          Frontend Interview Practice
          <Text as="span" color={brandColor} display="block">
            Machine Coding & JS Solutions
          </Text>
        </Heading>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          mb={8}
          color={textColor}
          lineHeight="1.7"
        >
          Explore practical solutions to common interview challenges, from React
          components to JavaScript fundamentals.
        </Text>

        {/* Categories */}
        <Flex
          gap={8}
          margin={"36px auto"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {categories.map((category) => (
            <Box
              key={category.name}
              borderWidth="1px"
              borderRadius="lg"
              p={5}
              width={{ base: "100%", sm: "45%", md: "220px" }}
            >
              <Tag
                colorScheme={category.color}
                size="lg"
                borderRadius="full"
                mb={2}
              >
                <TagLeftIcon as={category.icon} />
                <TagLabel>{category.name}</TagLabel>
              </Tag>
              <Text fontSize="sm" color={textColor}>
                {category.description}
              </Text>
            </Box>
          ))}
        </Flex>
        <Flex gap={4} justifyContent={'center'}>
          <Button
            colorScheme="purple"
            size="lg"
            rightIcon={<FaArrowRight />}
            // flex="1"
          >
            Explore Solutions
          </Button>
          <Button variant="outline" size="lg" leftIcon={<FaGithub />}>
            View on GitHub
          </Button>
        </Flex>
      </Box>
    </Grid>
  );
};
