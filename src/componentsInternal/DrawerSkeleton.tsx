import { Box, Skeleton, VStack } from "@chakra-ui/react";

function DrawerSkeleton() {
  return (
    <Box p={8}>
      <VStack spacing={6} align="stretch">
        <Skeleton height="40px" width="70%" />

        <VStack spacing={4} align="stretch">
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="90%" />
          <Skeleton height="20px" width="85%" />
          <Skeleton height="20px" width="95%" />
        </VStack>

        <VStack spacing={3} align="stretch" mt={4}>
          <Skeleton height="20px" width="60%" />
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="95%" />
          <Skeleton height="16px" width="90%" />
        </VStack>

        <Skeleton height="300px" mt={6} borderRadius="md" />

        <VStack spacing={3} align="stretch" mt={6}>
          <Skeleton height="20px" width="50%" />
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="95%" />
        </VStack>

        <Skeleton height="150px" mt={6} borderRadius="md" />
      </VStack>
    </Box>
  );
}

export default DrawerSkeleton;
