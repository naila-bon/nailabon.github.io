import { Box, Text, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FolderSectionProps {
  title: string
  icon: React.ElementType
  children: React.ReactNode
  defaultOpen?: boolean
}

export const FolderSection = ({ title, icon: IconComponent, children, defaultOpen = false }: FolderSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Box position="relative" w="full" maxW="800px" mx="auto" mb={6}>
      {/* Marqueur / onglet en haut */}
      <Box
        bg={isOpen ? "orange.400" : "orange.300"}
        color="white"
        px={6}
        py={2}
        borderRadius="lg lg 0 0"
        display="inline-block"
        fontWeight="bold"
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
        transition="all 0.2s"
        _hover={{ bg: "orange.400" }}
        ml={4}
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          bg: isOpen ? "orange.500" : "transparent",
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Icon as={IconComponent} boxSize={5} />
          <Text>{title}</Text>
          {isOpen ? <Icon as={ChevronUp} boxSize={4} /> : <Icon as={ChevronDown} boxSize={4} />}
        </Box>
      </Box>

      {/* Corps du dossier */}
      <Box
        bg="white"
        borderRadius="lg"
        borderTopLeftRadius="0"
        p={6}
        minH={isOpen ? "200px" : "0"}
        overflow="hidden"
        transition="all 0.3s ease"
        opacity={isOpen ? 1 : 0.5}
        boxShadow={isOpen ? "lg" : "sm"}
        border="2px solid"
        borderColor={isOpen ? "orange.300" : "gray.200"}
      >
        {isOpen && (
          <Box>
            {children}
          </Box>
        )}
        {!isOpen && (
          <Text color="gray.400" fontStyle="italic">
            Cliquer pour ouvrir...
          </Text>
        )}
      </Box>
    </Box>
  )
}

