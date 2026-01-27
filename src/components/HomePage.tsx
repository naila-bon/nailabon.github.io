import { Box, Container, Heading, Text, VStack, HStack, Button, Link as ChakraLink } from '@chakra-ui/react'
import { Home, Briefcase, Code2, Mail, Github, Linkedin, FileText, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { CottageCard } from './CottageCard'
import { PaperContent } from './PaperContent'

// Sections content
const sections = {
  about: {
    title: "About & CV",
    icon: FileText,
    content: (
      <VStack gap={4} align="start">
        <Heading size="md" color="brown.700">À propos de moi</Heading>
        <Text color="brown.600">
          Présentez-vous ici : votre parcours, vos motivations, ce qui vous passionne dans l'informatique...
        </Text>
        <Box w="full" h="200px" bg="white" borderRadius="md" border="2px dashed" borderColor="brown.300" display="flex" alignItems="center" justifyContent="center">
          <Text color="brown.400" fontStyle="italic">Votre CV sera intégré ici</Text>
        </Box>
        <Button colorScheme="orange" size="sm">Télécharger mon CV</Button>
      </VStack>
    )
  },
  competences: {
    title: "Compétences",
    icon: Code2,
    content: (
      <VStack gap={4} align="start">
        <Heading size="md" color="brown.700">Mes compétences techniques</Heading>
        <Text color="brown.600">
          Listez vos compétences acquises pendant votre BUT et votre stage...
        </Text>
        <HStack gap={3} wrap="wrap">
          {['React', 'TypeScript', 'Chakra UI', 'Node.js', 'Python', 'SQL', 'Git'].map((skill) => (
            <Box key={skill} bg="white" px={4} py={2} borderRadius="full" color="brown.700" fontWeight="medium" border="2px solid" borderColor="brown.300" boxShadow="sm">
              {skill}
            </Box>
          ))}
        </HStack>
      </VStack>
    )
  },
  projets: {
    title: "Projets",
    icon: Briefcase,
    content: (
      <VStack gap={6} align="start">
        <Heading size="md" color="brown.700">Mes projets</Heading>
        <Text color="brown.600">
          Présentez vos projets avec descriptions et liens...
        </Text>
        <Box w="full" p={4} bg="white" borderRadius="md" border="2px solid" borderColor="brown.200" boxShadow="sm">
          <Heading size="sm" color="brown.600" mb={2}>Projet 1</Heading>
          <Text fontSize="sm" color="brown.500">Description du projet...</Text>
        </Box>
        <Box w="full" p={4} bg="white" borderRadius="md" border="2px solid" borderColor="brown.200" boxShadow="sm">
          <Heading size="sm" color="brown.600" mb={2}>Projet 2</Heading>
          <Text fontSize="sm" color="brown.500">Description du projet...</Text>
        </Box>
      </VStack>
    )
  },
  contact: {
    title: "Contact",
    icon: Mail,
    content: (
      <VStack gap={4} align="start">
        <Heading size="md" color="brown.700">Me contacter</Heading>
        <Text color="brown.600">
          Laissez vos informations pour que les recruteurs puissent vous joindre...
        </Text>
        <Box w="full" p={4} bg="white" borderRadius="md">
          <VStack gap={3}>
            <ChakraLink href="https://github.com/votre-github" target="_blank" color="orange.500" fontWeight="medium">
              <HStack>
                <Box color="brown.600"><Github size={20} /></Box>
                <Text>GitHub</Text>
              </HStack>
            </ChakraLink>
            <ChakraLink href="https://linkedin.com/in/votre-linkedin" target="_blank" color="orange.500" fontWeight="medium">
              <HStack>
                <Box color="brown.600"><Linkedin size={20} /></Box>
                <Text>LinkedIn</Text>
              </HStack>
            </ChakraLink>
          </VStack>
        </Box>
      </VStack>
    )
  }
}

export const HomePage = () => {
  const [activeSection, setActiveSection] = useState<keyof typeof sections>('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Box minH="100vh" bgGradient="linear(to-br, yellow.100, orange.50, brown.100)" py={4} px={4}>
      {/* Header style panneau bois */}
      <Container maxW="container.xl" mb={4}>
        <CottageCard accentColor="brown.700">
          <HStack justify="space-between" wrap="wrap" gap={2}>
            {/* Logo */}
            <HStack px={2}>
              <Box color="yellow.200"><Home size={24} /></Box>
              <Heading size="md" color="yellow.100" display={{ base: 'none', md: 'block' }}>Portfolio</Heading>
            </HStack>

            {/* Menu desktop */}
            <HStack gap={2} display={{ base: 'none', md: 'flex' }}>
              {Object.entries(sections).map(([key, section]) => {
                const IconComponent = section.icon
                return (
                  <Button
                    key={key}
                    onClick={() => setActiveSection(key as keyof typeof sections)}
                    variant={activeSection === key ? "solid" : "ghost"}
                    colorScheme={activeSection === key ? "orange" : "gray"}
                    borderRadius="lg"
                    size="sm"
                    cursor="pointer"
                    bg={activeSection === key ? "orange.500" : "transparent"}
                    color="white"
                    _hover={{ bg: activeSection === key ? "orange.600" : "whiteAlpha.200" }}
                  >
                    <HStack>
                      <Box color="white"><IconComponent size={16} /></Box>
                      <Text>{section.title}</Text>
                    </HStack>
                  </Button>
                )
              })}
            </HStack>

            {/* Menu mobile toggle */}
            <Button
              variant="ghost"
              borderRadius="lg"
              display={{ base: 'flex', md: 'none' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              cursor="pointer"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              <Box color="yellow.200">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</Box>
            </Button>
          </HStack>

          {/* Menu mobile dropdown */}
          {isMenuOpen && (
            <VStack mt={3} gap={2} display={{ base: 'flex', md: 'none' }}>
              {Object.entries(sections).map(([key, section]) => {
                const IconComponent = section.icon
                return (
                  <Button
                    key={key}
                    onClick={() => {
                      setActiveSection(key as keyof typeof sections)
                      setIsMenuOpen(false)
                    }}
                    variant={activeSection === key ? "solid" : "ghost"}
                    colorScheme={activeSection === key ? "orange" : "gray"}
                    w="full"
                    borderRadius="lg"
                    cursor="pointer"
                    bg={activeSection === key ? "orange.500" : "transparent"}
                    color="white"
                    _hover={{ bg: activeSection === key ? "orange.600" : "whiteAlpha.200" }}
                  >
                    <HStack>
                      <Box color="white"><IconComponent size={16} /></Box>
                      <Text>{section.title}</Text>
                    </HStack>
                  </Button>
                )
              })}
            </VStack>
          )}
        </CottageCard>
      </Container>

      {/* Decorative crossbars - like a panel */}
      <Container maxW="container.xl" mb={4}>
        <HStack gap={2}>
          <Box flex={1} h="12px" bg="#5D3A1A" borderRadius="full" border="2px solid" borderColor="brown.700" />
          <Box w="20px" h="20px" bg="#5D3A1A" borderRadius="full" border="3px solid" borderColor="brown.700" />
          <Box flex={1} h="12px" bg="#5D3A1A" borderRadius="full" border="2px solid" borderColor="brown.700" />
        </HStack>
      </Container>

      {/* Main Content - Wood Card avec contenu papier - takes remaining height */}
      <Container maxW="container.lg" flex={1} display="flex" flexDirection="column">
        <CottageCard accentColor="brown.700" flex={1} minH="calc(100vh - 200px)">
          {/* Section Header */}
          <Box textAlign="center" mb={6} pb={4} borderBottom="2px dashed" borderColor="brown.300">
            <HStack justify="center" gap={3}>
              <Box color="brown.600">
                {(() => {
                  const IconComp = sections[activeSection].icon
                  return <IconComp size={32} />
                })()}
              </Box>
              <Heading size="xl" color="brown.700">{sections[activeSection].title}</Heading>
            </HStack>
          </Box>

          {/* Section Content - dans papier */}
          <Box flex={1}>
            <PaperContent>
              {sections[activeSection].content}
            </PaperContent>
          </Box>

          {/* Decorative footer */}
          <Box mt={6} pt={4} borderTop="2px dashed" borderColor="brown.300" textAlign="center">
            <Text fontSize="sm" color="brown.500" fontStyle="italic">
              ✦ Portfolio BUT ✦
            </Text>
          </Box>
        </CottageCard>
      </Container>

      {/* Footer */}
      <Box as="footer" mt={4} textAlign="center" pb={4}>
        <Text color="brown.500" fontSize="sm">© 2024 - Portfolio Nature</Text>
      </Box>
    </Box>
  )
}

