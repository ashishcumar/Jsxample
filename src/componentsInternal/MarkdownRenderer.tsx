import { Box, Heading, Text, UnorderedList, OrderedList, ListItem } from "@chakra-ui/react";
import { JSX } from "react";

const MarkdownRenderer = ({ text }: { text: string }) => {
  const lines = text.split("\n");
  let inList = false;
  let inOrderedList = false;
  let listItems: JSX.Element[] = [];

  const renderList = () => {
    if (!inList) return null;
    
    const listComponent = inOrderedList ? (
      <OrderedList mb={4}>{listItems}</OrderedList>
    ) : (
      <UnorderedList mb={4}>{listItems}</UnorderedList>
    );
    
    // Reset list state
    listItems = [];
    inList = false;
    inOrderedList = false;
    
    return listComponent;
  };

  return (
    <Box>
      {lines.map((line, i) => {
        // Handle headings
        if (line.startsWith("### ")) {
          return (
            <>
              {renderList()}
              <Heading key={`heading-${i}`} size="md" mt={4} mb={2}>
                {line.replace("### ", "")}
              </Heading>
            </>
          );
        }
        
        // Handle numbered lists (1., 2., etc.)
        if (/^\d+\.\s/.test(line)) {
          if (!inList) {
            inList = true;
            inOrderedList = true;
          }
          
          // Handle bold text in list items
          const content = line.replace(/^\d+\.\s/, '');
          if (content.includes('**')) {
            const parts = content.split('**');
            listItems.push(
              <ListItem key={`li-${i}`}>
                {parts.map((part, idx) => 
                  idx % 2 === 1 ? (
                    <Text as="span" fontWeight="bold" key={`part-${idx}`}>
                      {part}
                    </Text>
                  ) : (
                    part
                  )
                )}
              </ListItem>
            );
          } else {
            listItems.push(<ListItem key={`li-${i}`}>{content}</ListItem>);
          }
          
          return null;
        }
        
        // Handle bullet points (-)
        if (line.startsWith("- ")) {
          if (!inList) {
            inList = true;
            inOrderedList = false;
          }
          
          const content = line.replace(/^-\s/, '');
          if (content.includes('**')) {
            const parts = content.split('**');
            listItems.push(
              <ListItem key={`li-${i}`}>
                {parts.map((part, idx) => 
                  idx % 2 === 1 ? (
                    <Text as="span" fontWeight="bold" key={`part-${idx}`}>
                      {part}
                    </Text>
                  ) : (
                    part
                  )
                )}
              </ListItem>
            );
          } else {
            listItems.push(<ListItem key={`li-${i}`}>{content}</ListItem>);
          }
          
          return null;
        }
        
        // Handle standalone bold text (not in lists)
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <>
              {renderList()}
              <Text key={`bold-${i}`}>
                {parts.map((part, idx) => 
                  idx % 2 === 1 ? (
                    <Text as="span" fontWeight="bold" key={`part-${idx}`}>
                      {part}
                    </Text>
                  ) : (
                    part
                  )
                )}
              </Text>
            </>
          );
        }
        
        // Handle regular text
        if (line.trim() === '') {
          const renderedList = renderList();
          if (renderedList) return renderedList;
          return <br key={`br-${i}`} />;
        }
        
        const renderedList = renderList();
        if (renderedList) {
          return (
            <>
              {renderedList}
              <Text key={`text-${i}`}>{line}</Text>
            </>
          );
        }
        
        return <Text key={`text-${i}`}>{line}</Text>;
      })}
      {renderList()}
    </Box>
  );
};

export default MarkdownRenderer;