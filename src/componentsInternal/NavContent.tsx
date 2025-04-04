import { Link, List, ListItem, Text } from "@chakra-ui/react";

const NavContent = () => {
  return (
    <List spacing={1} p={2}>
      {[
        { title: "Core Challenges", isHeader: true },
        { title: "Accordion", subtitle: "React | Vanilla JS" },
        { title: "Infinite Scroll", subtitle: "React | Window API" },
        { title: "Custom Hooks", isHeader: true },
        { title: "useFetch", subtitle: "Data fetching" },
        { title: "Vanilla JS", isHeader: true },
        { title: "Debounce", subtitle: "Performance" },
      ].map((item, index) => (
        <ListItem key={index}>
          {item.isHeader ? (
            <Text fontWeight="bold" mt={4} mb={2} px={2} fontSize="sm">
              {item.title}
            </Text>
          ) : (
            <Link
              display="block"
              px={3}
              py={2}
              borderRadius="md"
              _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}
            >
              <Text>{item.title}</Text>
              {item.subtitle && (
                <Text
                  fontSize="xs"
                  color="gray.500"
                  _dark={{ color: "gray.400" }}
                >
                  {item.subtitle}
                </Text>
              )}
            </Link>
          )}
        </ListItem>
      ))}
    </List>
  );
};


export default NavContent;