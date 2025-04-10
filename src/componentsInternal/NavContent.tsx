import {
  List,
  ListItem,
  Text,
  Input,
  Box,
  Highlight,
  Skeleton,
  SkeletonText,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useState, useMemo, useEffect } from "react";
import useSwrMutationHook from "./useSwrHook";

interface NavItem {
  title: string;
  subtitle?: string;
  description?: string;
  isHeader?: boolean;
  path?: string;
}

interface IProps {
  headerRef: React.RefObject<HTMLDivElement | null>;
  setSelectedPath: React.Dispatch<React.SetStateAction<string | null>>;
}

const NavContent = (props: IProps) => {
  const { headerRef, setSelectedPath } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [navItemsList, setNavItemsList] = useState<NavItem[]>([]);
  const { triggerFetch, data, error, isLoading } = useSwrMutationHook();

  const filteredItems = useMemo(() => {
    if (!searchQuery) return navItemsList;

    const query = searchQuery.toLowerCase();
    return navItemsList.filter((item) => {
      if (item.isHeader) {
        return item.title.toLowerCase().includes(query);
      }

      return (
        item.title.toLowerCase().includes(query) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(query)) ||
        (item.description && item.description.toLowerCase().includes(query))
      );
    });
  }, [navItemsList, searchQuery]);

  useEffect(() => {
    if (!navItemsList.length) {
      if (data == undefined) {
        triggerFetch(
          "https://raw.githubusercontent.com/ashishcumar/Jsxample/dev/public/jsonStore/sidebarIndex.json"
        );
      } else {
        console.log("data -->",data)
        setNavItemsList(data.slice(2));
      }
    }
  }, [data]);

  return (
    // <Box
    //   height={`calc(100vh - ${headerRef?.current?.offsetHeight}px)`}
    //   display="flex"
    //   flexDirection="column"
    //   bg="bg.dark"
    //   color="text.dark"
    // >
    //   <Box
    //     p={4}
    //     borderBottomWidth="1px"
    //     borderColor="border.dark"
    //     bg="gray.800"
    //   >
    //     <Input
    //       placeholder="Search ..."
    //       value={searchQuery}
    //       onChange={(e) => setSearchQuery(e.target.value)}
    //       borderRadius="lg"
    //       bg="gray.700"
    //       borderColor="gray.600"
    //       _placeholder={{ color: "gray.400" }}
    //       _hover={{ borderColor: "blue.300" }}
    //       _focus={{
    //         borderColor: "blue.300",
    //         boxShadow: "0 0 0 1px var(--chakra-colors-blue-300)",
    //       }}
    //       size="md"
    //     />
    //   </Box>

    //   <Box flex="1" overflowY="auto" bg="gray.800">
    //     <List spacing={0}>
    //       {filteredItems.map((item, index) => (
    //         <ListItem
    //           key={index}
    //           borderBottomWidth={item.isHeader ? "0px" : "1px"}
    //           borderColor="gray.700"
    //         >
    //           {item.isHeader ? (
    //             <Text
    //               fontWeight="bold"
    //               px={4}
    //               py={3}
    //               fontSize="sm"
    //               color="blue.300"
    //               bg="gray.900"
    //               borderTopWidth={index !== 0 ? "1px" : "0px"}
    //               borderBottomWidth="1px"
    //               borderColor="gray.700"
    //             >
    //               <Highlight
    //                 query={searchQuery}
    //                 styles={{ bg: "yellow.500", color: "gray.900" }}
    //               >
    //                 {item.title}
    //               </Highlight>
    //             </Text>
    //           ) : (
    //             <Box
    //               onClick={() => setSelectedPath(item.path as string)}
    //               display="block"
    //               px={4}
    //               py={3}
    //               _hover={{
    //                 bg: "gray.700",
    //                 textDecoration: "none",
    //                 transform: "translateX(2px)",
    //                 transition: "transform 0.1s ease",
    //               }}
    //               transition="background 0.2s ease"
    //               cursor={"pointer"}
    //             >
    //               <Text fontWeight="medium">
    //                 <Highlight
    //                   query={searchQuery}
    //                   styles={{ bg: "yellow.500", color: "gray.900" }}
    //                 >
    //                   {item.title}
    //                 </Highlight>
    //               </Text>
    //               {item.subtitle && (
    //                 <Text fontSize="sm" color="gray.400" mt={1}>
    //                   <Highlight
    //                     query={searchQuery}
    //                     styles={{ bg: "yellow.500", color: "gray.900" }}
    //                   >
    //                     {item.subtitle}
    //                   </Highlight>
    //                 </Text>
    //               )}
    //             </Box>
    //           )}
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Box>
    // </Box>
    <Box
      height={`calc(100vh - ${(headerRef?.current?.offsetHeight || 0) + 32}px)`}
      display="flex"
      flexDirection="column"
      bg="bg.dark"
      color="text.dark"
    >
      {/* Search Input */}
      <Box
        p={4}
        borderBottomWidth="1px"
        borderColor="border.dark"
        bg="gray.800"
      >
        <Input
          placeholder="Search ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          borderRadius="lg"
          bg="gray.700"
          borderColor="gray.600"
          _placeholder={{ color: "gray.400" }}
          _hover={{ borderColor: "blue.300" }}
          _focus={{
            borderColor: "blue.300",
            boxShadow: "0 0 0 1px var(--chakra-colors-blue-300)",
          }}
          size="md"
        />
      </Box>

      {/* Content Area */}
      <Box flex="1" overflowY="auto" bg="gray.800" position="relative">
        {isLoading ? (
          <Box p={4}>
            {[...Array(5)].map((_, i) => (
              <Box key={i} mb={4}>
                <Skeleton height="20px" mb={2} width="40%" />
                <SkeletonText noOfLines={2} spacing="2" />
              </Box>
            ))}
          </Box>
        ) : error ? (
          <Box p={4} textAlign="center" color="red.400">
            Failed to load navigation items
          </Box>
        ) : (
          <Accordion allowMultiple defaultIndex={[]} width="100%">
            {filteredItems.reduce<React.ReactElement[]>(
              (acc, item, index, array) => {
                if (item.isHeader) {
                  // Find all items until the next header
                  const nextHeaderIndex = array
                    .slice(index + 1)
                    .findIndex((i) => i.isHeader);
                  const subItems =
                    nextHeaderIndex === -1
                      ? array.slice(index + 1)
                      : array.slice(index + 1, index + 1 + nextHeaderIndex);

                  acc.push(
                    <AccordionItem key={`header-${index}`} border="none">
                      <AccordionButton
                        px={4}
                        py={3}
                        bg="gray.900"
                        borderTopWidth={index !== 0 ? "1px" : "0px"}
                        borderBottomWidth="1px"
                        borderColor="gray.700"
                        _hover={{ bg: "gray.800" }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          fontSize="sm"
                          color="blue.300"
                        >
                          <Highlight
                            query={searchQuery}
                            styles={{ bg: "yellow.500", color: "gray.900" }}
                          >
                            {item.title}
                          </Highlight>
                        </Box>
                        <AccordionIcon color="blue.300" />
                      </AccordionButton>

                      <AccordionPanel
                        p={0}
                        bg="gray.800"
                        borderBottomWidth="1px"
                        borderColor="gray.700"
                      >
                        <List spacing={0}>
                          {subItems.map((subItem, subIndex) => (
                            <ListItem
                              key={`subitem-${subIndex}`}
                              borderBottomWidth="1px"
                              borderColor="gray.700"
                            >
                              <Box
                                onClick={() =>
                                  setSelectedPath(subItem.path as string)
                                }
                                display="block"
                                px={4}
                                py={3}
                                _hover={{
                                  bg: "gray.700",
                                  transform: "translateX(2px)",
                                  transition: "transform 0.1s ease",
                                }}
                                transition="background 0.2s ease"
                                cursor="pointer"
                              >
                                <Text fontWeight="medium">
                                  <Highlight
                                    query={searchQuery}
                                    styles={{
                                      bg: "yellow.500",
                                      color: "gray.900",
                                    }}
                                  >
                                    {subItem.title}
                                  </Highlight>
                                </Text>
                                {subItem.subtitle && (
                                  <Text fontSize="sm" color="gray.400" mt={1}>
                                    <Highlight
                                      query={searchQuery}
                                      styles={{
                                        bg: "yellow.500",
                                        color: "gray.900",
                                      }}
                                    >
                                      {subItem.subtitle}
                                    </Highlight>
                                  </Text>
                                )}
                              </Box>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                }
                return acc;
              },
              []
            )}
          </Accordion>
        )}
      </Box>
    </Box>
  );
};

export default NavContent;
