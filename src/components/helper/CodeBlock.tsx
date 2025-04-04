import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  SkeletonText,
  useClipboard,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getHighlighter } from "shiki-es";

interface IProps {
  code: string;
}

const CodeBlock = (props: IProps) => {
  const { code } = props;
  const { colorMode } = useColorMode();
  const [highlightedCode, setHighlightedCode] = useState("");
  const { hasCopied, onCopy } = useClipboard(code);

  useEffect(() => {
    async function loadHighlighter() {
      const highlighter = await getHighlighter({ theme: "dark-plus" });
      const html = highlighter.codeToHtml(code, { lang: "javascript" });
      setHighlightedCode(html);
    }

    loadHighlighter();
  }, [code]);
  return (
    <>
      {highlightedCode ? (
        <Box
          position="relative"
          borderRadius="md"
          bg={colorMode === "light" ? "#f6f8fa" : "#1e293b"}
          border="1px solid"
          borderColor={colorMode === "light" ? "#e1e4e8" : "#30363d"}
          my={4}
          overflow="hidden"
        >
          <Box
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
            layerStyle={"codeBlock"}
          />
          <Button
            leftIcon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            size="sm"
            position="absolute"
            right={3}
            top={3}
            onClick={onCopy}
            variant="unstyled"
            backdropFilter="blur(8px)"
            color="white"
            border="1px solid"
            borderColor={"rgba(255, 255, 255, 0.2)"}
            _hover={{
              borderColor: "rgba(255, 255, 255, 0.3)",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            transition="all 0.2s ease-in-out"
            px={3}
            py={1}
            borderRadius="md"
            boxShadow="sm"
            zIndex={1}
          >
            {hasCopied ? "Copied" : "Copy"}
          </Button>
        </Box>
      ) : (
        <Box
          position="relative"
          borderRadius="md"
          bg={colorMode === "light" ? "#f6f8fa" : "#1e293b"}
          border="1px solid"
          borderColor={colorMode === "light" ? "#e1e4e8" : "#30363d"}
          my={4}
          overflow="hidden"
          p={4}
        >
          <SkeletonText noOfLines={1} spacing="3" skeletonHeight="4" />
          <Skeleton
            position="absolute"
            right={3}
            top={3}
            height="32px"
            width="70px"
            borderRadius="md"
            zIndex={1}
          />
        </Box>
      )}
    </>
  );
};

export default CodeBlock;
