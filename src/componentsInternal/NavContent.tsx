import {
  Link,
  List,
  ListItem,
  Text,
  Input,
  Box,
  Highlight,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useState, useMemo, useEffect } from "react";
import useSwrHook from "./useSwrHook";

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
  const [navItemsList,setNavItemsList] = useState<NavItem[]>([])

  const { data, isLoading, error } = useSwrHook(
    "https://raw.githubusercontent.com/ashishcumar/Jsxample/dev/public/jsQuestions/sidebarIndex.json"
  );
  // const navItems: NavItem[] = useMemo(
  //   () => [
  //     // Polyfills - Array
  //     { title: "Array Polyfills", isHeader: true },
  //     { title: "Array.at()", path: "/polyfills/array/at" },
  //     { title: "Array.filter()", path: "/polyfills/array/filter" },
  //     { title: "Array.map()", path: "/polyfills/array/map" },
  //     { title: "Array.reduce()", path: "/polyfills/array/reduce" },

  //     // Polyfills - Function
  //     { title: "Function Polyfills", isHeader: true },
  //     { title: "Function.apply()", path: "/polyfills/function/apply" },
  //     { title: "Function.bind()", path: "/polyfills/function/bind" },
  //     { title: "Function.call()", path: "/polyfills/function/call" },

  //     // Polyfills - Object
  //     { title: "Object Polyfills", isHeader: true },
  //     { title: "Object.assign()", path: "/polyfills/object/assign" },
  //     { title: "Object.entries()", path: "/polyfills/object/entries" },
  //     { title: "Object.freeze()", path: "/polyfills/object/freeze" },

  //     // Web APIs
  //     { title: "Web API Polyfills", isHeader: true },
  //     { title: "fetch()", path: "/polyfills/web-api/fetch" },
  //     {
  //       title: "IntersectionObserver",
  //       path: "/polyfills/web-api/intersection-observer",
  //     },
  //     { title: "ResizeObserver", path: "/polyfills/web-api/resize-observer" },

  //     // Promises
  //     { title: "Promise Polyfills", isHeader: true },
  //     { title: "Promise.all()", path: "/polyfills/promise/all" },
  //     { title: "Promise.allSettled()", path: "/polyfills/promise/all-settled" },
  //     { title: "Promise.any()", path: "/polyfills/promise/any" },
  //     { title: "Promise.race()", path: "/polyfills/promise/race" },
  //   ],
  //   []
  // );
  
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

useEffect(()=>{

},[data])


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
          <List spacing={0}>
            {filteredItems.map((item, index) => (
              <ListItem
                key={index}
                borderBottomWidth={item.isHeader ? "0px" : "1px"}
                borderColor="gray.700"
              >
                {item.isHeader ? (
                  <Text
                    fontWeight="bold"
                    px={4}
                    py={3}
                    fontSize="sm"
                    color="blue.300"
                    bg="gray.900"
                    borderTopWidth={index !== 0 ? "1px" : "0px"}
                    borderBottomWidth="1px"
                    borderColor="gray.700"
                  >
                    <Highlight
                      query={searchQuery}
                      styles={{ bg: "yellow.500", color: "gray.900" }}
                    >
                      {item.title}
                    </Highlight>
                  </Text>
                ) : (
                  <Box
                    onClick={() => setSelectedPath(item.path as string)}
                    display="block"
                    px={4}
                    py={3}
                    _hover={{
                      bg: "gray.700",
                      textDecoration: "none",
                      transform: "translateX(2px)",
                      transition: "transform 0.1s ease",
                    }}
                    transition="background 0.2s ease"
                    cursor="pointer"
                  >
                    <Text fontWeight="medium">
                      <Highlight
                        query={searchQuery}
                        styles={{ bg: "yellow.500", color: "gray.900" }}
                      >
                        {item.title}
                      </Highlight>
                    </Text>
                    {item.subtitle && (
                      <Text fontSize="sm" color="gray.400" mt={1}>
                        <Highlight
                          query={searchQuery}
                          styles={{ bg: "yellow.500", color: "gray.900" }}
                        >
                          {item.subtitle}
                        </Highlight>
                      </Text>
                    )}
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default NavContent;
