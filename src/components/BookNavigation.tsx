import { HStack, Box, Text, Link } from '@chakra-ui/react';
import { Download } from 'lucide-react';

interface BookNavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  labels: string[];
}

const BookNavigation = ({ onPageChange, labels }: BookNavigationProps) => {
  const pastelColors = ["#D2B48C", "#A8DADC", "#F7A9A8", "#F5F5DC", "#B5EAD7"];

  return (
    <Box position="absolute" top="-20px" left="50%" transform="translateX(-50%)" zIndex={3}>
      {/* Bouton CV épinglé en haut à droite */}
      <Link
        href="/CV_Bon_Naïla.pdf"
        download
        position="absolute"
        right="-160px"
        top="50%"
        transform="translateY(-50%)"
        display="flex"
        alignItems="center"
        gap={1}
        bg="#5d4037"
        color="#fff"
        px={3}
        py={1}
        borderRadius="md"
        fontSize="xs"
        fontWeight="bold"
        boxShadow="md"
        _hover={{ bg: "#4e342e", transform: "translateY(-50%) scale(1.05)" }}
        transition="all 0.2s"
      >
        <Download size={14} />
        CV
      </Link>

      <HStack gap={2}>
        {labels.map((label, idx) => (
          <Box
            key={idx}
            as="button"
            onClick={() => onPageChange(idx)}
            bg={pastelColors[idx] || pastelColors[0]}
            p={2}
            minW="120px"
            textAlign="center"
            borderRadius="md md 0 0"
            boxShadow="md"
            borderBottom="3px solid #e4e4d0"
            transition="all 0.2s"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg"
            }}
          >
            <Text fontSize="xs" fontWeight="bold" color="#5D4E37">
              {label}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default BookNavigation;
