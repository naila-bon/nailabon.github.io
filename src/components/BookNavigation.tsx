import { HStack, Box, Text, Link } from '@chakra-ui/react';
import { Download } from 'lucide-react';

interface BookNavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  labels: string[];
  isMobile?: boolean;
}

// Mapping des labels vers les pages réelles du livre
// Labels: ['Accueil', 'Parcours', 'Compétences', 'Projets', 'Contact']
// Pages: 0, 1, 2-3, 4-5, 6
const labelToPageMap: Record<number, number> = {
  0: 0, // Accueil → page 0
  1: 1, // Parcours → page 1
  2: 2, // Compétences → page 2 (skills-left)
  3: 4, // Projets → page 4 (projects-grid-left) - CORRECTION
  4: 6  // Contact → page 6
};

const BookNavigation = ({ onPageChange, labels, isMobile }: BookNavigationProps) => {
  const pastelColors = ["#D2B48C", "#A8DADC", "#F7A9A8", "#F5F5DC", "#B5EAD7"];

  const handlePageClick = (labelIndex: number) => {
    const targetPage = labelToPageMap[labelIndex] ?? labelIndex;
    onPageChange(targetPage);
  };

  return (
    <Box 
      position={isMobile ? "relative" : "absolute"} 
      top={isMobile ? "0" : "-20px"} 
      left="50%" 
      transform="translateX(-50%)" 
      zIndex={3}
      mb={isMobile ? 4 : 0}
    >
      {/* Bouton CV épinglé en haut à droite - caché sur mobile */}
      {!isMobile && (
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
      )}

      <HStack gap={isMobile ? 1 : 2}>
        {labels.map((label, idx) => (
          <Box
            key={idx}
            as="button"
            onClick={() => handlePageClick(idx)}
            bg={pastelColors[idx] || pastelColors[0]}
            p={isMobile ? 1 : 2}
            minW={isMobile ? "60px" : "120px"}
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
            <Text 
              fontSize={isMobile ? "10px" : "xs"} 
              fontWeight="bold" 
              color="#5D4E37"
            >
              {label}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default BookNavigation;
