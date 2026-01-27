import { HStack, Box, Text } from '@chakra-ui/react';

interface BookNavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  labels: string[];
}

const BookNavigation = ({  onPageChange, labels }: BookNavigationProps) => {
  const pastelColors = ["#D2B48C", "#A8DADC", "#F7A9A8", "#F5F5DC"];

  return (
    <HStack position="absolute" top="-20px" left="50%" transform="translateX(-50%)" gap={2} zIndex={3}>
      {labels.map((label, idx) => (
        <Box
          key={idx}
          as="button"
          onClick={() => onPageChange(idx)}
          bg={pastelColors[idx]}
          p={2} minW="150px" textAlign="center" borderRadius="md  md 0 0" boxShadow="md"
          borderBottom={"3px solid #e4e4d0"}
        >
        <Text fontSize="xs" fontWeight="bold" color="#5D4E37">{label}</Text>
        </Box>
      ))}
    </HStack>
  );
};

export default BookNavigation;
