import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavContent from "./NavContent";
import React, { Ref, useRef } from "react";

interface IProps {
  children: React.ReactNode;
  setSelectedPath:React.Dispatch<React.SetStateAction<string | null>>
}

const DrawerWrapper = (props: IProps) => {
  const { children,setSelectedPath } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const navHeaderRef = useRef<HTMLDivElement | null>(null);
  return (
    <Flex
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
      borderTop={"1px solid"}
      borderColor={borderColor}
    >
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white" _dark={{ bg: "gray.800" }}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <NavContent headerRef={navHeaderRef} setSelectedPath={setSelectedPath} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
        w="280px"
        borderRightWidth="1px"
        display={{ base: "none", md: "block" }}
        bg="white"
        _dark={{ bg: "gray.800" }}
        position="sticky"
        top="0px"
        alignSelf="flex-start"
        minHeight="100vh"
        overflow="auto"
      >
        <Box p={4} marginTop={"32px"} ref={navHeaderRef}>
          <Heading size="md" mb={2}>
            React Machine Coding
          </Heading>
          <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
            Interview Preparation Hub
          </Text>
        </Box>
        <NavContent headerRef={navHeaderRef} setSelectedPath={setSelectedPath} />
      </Box>

      {/* Main Content Section */}
      <Box
        flex={1}
        minHeight="100vh"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <IconButton
          display={{ md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open menu"
          mb={4}
          position={"sticky"}
          top="12px"
          left="12px"
          zIndex="10"
          width={"fit-content"}
        />
        <Box px={{ base: 4, md: 8 }} py={4}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default DrawerWrapper;
