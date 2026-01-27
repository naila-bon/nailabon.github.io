import { VStack, Box, Text } from '@chakra-ui/react';

interface BookNavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  labels: string[];
}

const BookNavigation = ({ currentPage, onPageChange, labels }: BookNavigationProps) => (
  <VStack position="fixed" left="20px" top="50%" transform="translateY(-50%)" gap={1} zIndex={30}>
    {labels.map((label, idx) => (
      <Box
        key={idx}
        as="button"
        onClick={() => onPageChange(idx)}
        bg={currentPage === idx ? "#d4a373" : "#faedcd"}
        p={2} w="120px" textAlign="left" borderRadius="md" boxShadow="md"
        transition="0.2s" _hover={{ transform: 'translateX(10px)' }}
      >
        <Text fontSize="xs" fontWeight="bold">{label}</Text>
      </Box>
    ))}
  </VStack>
);

export default BookNavigation;
