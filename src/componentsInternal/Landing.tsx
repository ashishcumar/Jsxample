// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Grid,
//   Heading,
//   Icon,
//   Text,
//   VStack,
//   useBreakpointValue,
//   useColorMode,
//   useColorModeValue,
//   Badge,
//   HStack,
//   Tag,
//   Link,
//   IconButton,
//   Image,
// } from "@chakra-ui/react";
// import {
//   FaReact,
//   FaJs,
//   FaArrowRight,
//   FaGithub,
//   FaTwitter,
//   FaSun,
//   FaMoon,
// } from "react-icons/fa";

// export const Landing = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   // Dynamic colors
//   const cardBg = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.600");
//   const subtleBg = useColorModeValue("gray.50", "gray.700");
//   const codeBg = useColorModeValue("gray.100", "gray.900");
//   const brandColor = useColorModeValue("purple.600", "purple.300");

//   return (
//     <Grid width={'90%'} margin={'auto'} placeContent={'center'} minHeight={'100vh'}>
//       {/* Header with Theme Toggle */}
//       <Flex justify="space-between" mb={12} align="center" marginTop={'12px'}>
//         <HStack spacing={3}>
//           <Box fontWeight="bold" fontSize="2xl" color={brandColor}>
//             JSXample
//           </Box>
//           <Badge colorScheme="purple" variant="subtle">
//             BETA
//           </Badge>
//         </HStack>
//         <IconButton
//           icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
//           onClick={toggleColorMode}
//           aria-label="Toggle theme"
//           variant="ghost"
//         />
//       </Flex>

//       <Grid
//         templateColumns={{ base: "1fr", md: "1fr 1fr" }}
//         gap={12}
//         alignItems="center"
//       >
//         <Box>
//           <Heading as="h1" size="2xl" mb={6} lineHeight="1.2">
//             Build{" "}
//             <Text as="span" color="blue.400">
//               React
//             </Text>{" "}
//             Components,
//             <br />
//             Master{" "}
//             <Text as="span" color="yellow.400">
//               Vanilla JS
//             </Text>{" "}
//             Fundamentals
//           </Heading>

//           <Text
//             fontSize="xl"
//             mb={8}
//             color={useColorModeValue("gray.600", "gray.300")}
//           >
//             The only platform showing identical solutions in both frameworks.
//           </Text>

//           <VStack spacing={4} align="stretch" mb={10}>
//             {[
//               "🚀 Copy-paste ready implementations",
//               "🧠 Compare framework approaches visually",
//               "⚡ Performance notes for interviews",
//               "📋 Real-world problem statements",
//             ].map((item) => (
//               <Flex key={item} align="center" p={3} bg={subtleBg} rounded="md">
//                 <Box mr={3} fontSize="xl">
//                   {item.split(" ")[0]}
//                 </Box>
//                 <Text>{item.split(" ").slice(1).join(" ")}</Text>
//               </Flex>
//             ))}
//           </VStack>

//           <Flex gap={4} direction={isMobile ? "column" : "row"} mb={8}>
//             <Button
//               colorScheme="purple"
//               size="lg"
//               rightIcon={<FaArrowRight />}
//               w={isMobile ? "full" : "auto"}
//             >
//               Explore Patterns
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               w={isMobile ? "full" : "auto"}
//               leftIcon={<FaGithub />}
//             >
//               Star on GitHub
//             </Button>
//           </Flex>
//         </Box>

//         {/* Right Column - Visual Demo */}
//         <Box
//           p={6}
//           bg={cardBg}
//           rounded="2xl"
//           borderWidth="1px"
//           borderColor={borderColor}
//           boxShadow={useColorModeValue("xl", "dark-lg")}
//         >
//           {/* Framework Toggle */}
//           <Flex
//             mb={4}
//             p={1}
//             bg={useColorModeValue("gray.100", "gray.700")}
//             rounded="md"
//           >
//             {["React", "Vanilla JS"].map((item) => (
//               <Button
//                 key={item}
//                 flex={1}
//                 variant="ghost"
//                 size="sm"
//                 colorScheme={item === "React" ? "blue" : "yellow"}
//                 isActive={item === "React"}
//               >
//                 {item}
//               </Button>
//             ))}
//           </Flex>

//           {/* Code Preview */}
//           <Box
//             bg={codeBg}
//             rounded="md"
//             p={4}
//             fontFamily="monospace"
//             color={useColorModeValue("gray.800", "white")}
//             fontSize="13px"
//             lineHeight="tall"
//           >
//             <Text color={useColorModeValue("purple.600", "purple.300")}>
//               // useInfiniteScroll.js
//             </Text>
//             <Text mt={2} color={useColorModeValue("blue.600", "blue.300")}>
//               function
//             </Text>{" "}
//             <Text as="span" color={useColorModeValue("green.600", "green.300")}>
//               useInfiniteScroll
//             </Text>
//             {"("}
//             <Text
//               as="span"
//               color={useColorModeValue("orange.600", "orange.300")}
//             >
//               options
//             </Text>
//             {") {"}
//             <Flex ml={4} gap={'4px'}>
//               <Text color={useColorModeValue("blue.600", "blue.300")}>
//                 const
//               </Text>{" "}
//               <Text
//                 as="span"
//                 color={useColorModeValue("yellow.600", "yellow.300")}
//               >
//                 [data, setData]
//               </Text>
//               {" = "}
//               <Text as="span" color={useColorModeValue("blue.600", "blue.300")}>
//                 useState
//               </Text>
//               {"([]);"}
//             </Flex>
//             <Flex ml={4} gap={'4px'}>
//               <Text color={useColorModeValue("blue.600", "blue.300")}>
//                 const
//               </Text>{" "}
//               <Text
//                 as="span"
//                 color={useColorModeValue("yellow.600", "yellow.300")}
//               >
//                 loader
//               </Text>
//               {" = "}
//               <Text as="span" color={useColorModeValue("blue.600", "blue.300")}>
//                 useRef
//               </Text>
//               {"(null);"}
//             </Flex>
//             <Text>{"}"}</Text>
//           </Box>

//           <Box
//             mt={8}
//             p={4}
//             bg={useColorModeValue("purple.50", "purple.900")}
//             rounded="md"
//             borderWidth="1px"
//             borderColor={useColorModeValue("purple.100", "purple.700")}
//           >
//             <Text fontWeight="bold" mb={2}>
//               Try it yourself:
//             </Text>
//             <Text mb={3}>Copy to:</Text>
//             <Flex gap={2} flexWrap="wrap">
//               {["CodeSandbox", "StackBlitz", "VS Code"].map((item) => (
//                 <Button
//                   key={item}
//                   size="sm"
//                   variant="outline"
//                   colorScheme="purple"
//                 >
//                   {item}
//                 </Button>
//               ))}
//             </Flex>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };
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
  Wrap,
  Container,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaArrowRight, FaGithub, FaCode } from "react-icons/fa";
import { GiHook } from "react-icons/gi";
import { SiJavascript } from "react-icons/si";

export const Landing = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Color scheme
  const textColor = useColorModeValue("gray.700", "gray.300");
  const brandColor = useColorModeValue("purple.600", "purple.300");
  const highlightColor = useColorModeValue("purple.100", "purple.900");

  // Content categories
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
    <Grid width={"80%"} height={"100vh"} margin={"auto"}>
      {/* Header */}
      <Flex justify="space-between" mb={12} alignItems={"center"}>
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
        {/* Hero Text */}
        <Heading as="h1" size="2xl" mb={6} lineHeight="1.2">
          Frontend Interview Solutions
          <br />
          <Text as="span" color={brandColor}>
            From Machine Coding to JS Fundamentals
          </Text>
        </Heading>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          mb={4}
          color={textColor}
          lineHeight="1.7"
        >
          Production-grade implementations for:
        </Text>
        {/* Categories */}
        <Flex gap={8} margin={"36px auto"} justifyContent={"center"}>
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

        {/* Key Features */}
        {/* <Box
          bg={useColorModeValue("gray.50", "gray.700")}
          p={6}
          borderRadius="lg"
          mb={12}
        >
          <Text fontWeight="bold" mb={4}>
            What You'll Find:
          </Text>
          <VStack align="stretch" spacing={3}>
            {[
              "💻 Ready-to-use interview solutions",
              "📊 Multiple implementation approaches",
              "⚡ Performance-optimized code",
              "🧠 Deep conceptual explanations",
              "🔍 Side-by-side framework comparisons",
            ].map((item) => (
              <Flex key={item} align="center">
                <Text mr={3} fontSize="xl">
                  {item.split(" ")[0]}
                </Text>
                <Text>{item.split(" ").slice(1).join(" ")}</Text>
              </Flex>
            ))}
          </VStack>
        </Box> */}

        {/* CTAs */}
        <Flex gap={4} direction={{ base: "column", sm: "row" }}>
          <Button
            colorScheme="purple"
            size="lg"
            rightIcon={<FaArrowRight />}
            flex="1"
          >
            Explore Solutions
          </Button>
          <Button variant="outline" size="lg" flex="1" leftIcon={<FaGithub />}>
            View on GitHub
          </Button>
        </Flex>
      </Box>
    </Grid>
  );
};
