import { Box, Container, Heading, Text, VStack, HStack, Button, Link as ChakraLink } from '@chakra-ui/react'
import { Home, Briefcase, Code2, Mail, Github, Linkedin, FileText, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { CottageCard } from './CottageCard'

// Sections content
const sections = {
  about: {
    title: "About & CV",
    icon: FileText,
    content: (
      <VStack gap={4} align="start">
        <Heading size="md" color="green.600">À propos de moi</Heading>
        <Text color="brown.700">
          Présentez-vous ici : votre parcours, vos motivations, ce qui vous passionne dans l'informatique...
        </Text>
        <Box w="full" h="200px" bg="pink.50" borderRadius="lg" border="2px dashed" borderColor="pink.300" display="flex" alignItems="center" justifyContent="center">
          <Text color="pink.500" fontStyle="italic">Votre CV sera intégré ici</Text>
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
        <Heading size="md" color="green.600">Mes compétences techniques</Heading>
        <Text color="brown.700">
          Listez vos compétences acquises pendant votre BUT et votre stage...
        </Text>
        <HStack gap={3} wrap="wrap">
          {['React', 'TypeScript', 'Chakra UI', 'Node.js', 'Python', 'SQL', 'Git'].map((skill) => (
            <Box key={skill} bg="green.100" px={4} py={2} borderRadius="full" color="green.700" fontWeight="medium" border="2px solid" borderColor="green.300">
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
        <Heading size="md" color="green.600">Mes projets</Heading>
        <Text color="brown.700">
          Présentez vos projets avec descriptions et liens...
        </Text>
        <Box w="full" p={4} bg="pink.50" borderRadius="lg" border="2px solid" borderColor="pink.200">
          <Heading size="sm" color="brown.600" mb={2}>Projet 1</Heading>
          <Text fontSize="sm" color="brown.500">Description du projet...</Text>
        </Box>
        <Box w="full" p={4} bg="pink.50" borderRadius="lg" border="2px solid" borderColor="pink.200">
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
        <Heading size="md" color="green.600">Me contacter</Heading>
        <Text color="brown.700">
          Laissez vos informations pour que les recruteurs puissent vous joindre...
        </Text>
        <Box w="full" p={4} bg="pink.50" borderRadius="lg">
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
    <Box minH="100vh" bgGradient="linear(to-br, green.50, pink.50, brown.50)" py={8} px={4}>
      {/* Header avec menu hamburger mobile */}
      <Box as="header" mb={8}>
        <Container maxW="container.xl">
          <Box 
            bg="white" 
            borderRadius="full" 
            boxShadow="lg" 
            p={3}
            border="3px solid"
            borderColor="brown.400"
          >
            <HStack justify="space-between" wrap="wrap" gap={2}>
              {/* Logo */}
              <HStack px={4}>
                <Box color="green.500"><Home size={24} /></Box>
                <Heading size="md" color="brown.600" display={{ base: 'none', md: 'block' }}>Portfolio</Heading>
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
                      borderRadius="full"
                      size="sm"
                      cursor="pointer"
                    >
                      <HStack>
                        <Box color={activeSection === key ? "white" : "brown.600"}><IconComponent size={16} /></Box>
                        <Text>{section.title}</Text>
                      </HStack>
                    </Button>
                  )
                })}
              </HStack>

              {/* Menu mobile toggle */}
              <Button
                variant="ghost"
                borderRadius="full"
                display={{ base: 'flex', md: 'none' }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                cursor="pointer"
              >
                <Box color="brown.600">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</Box>
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
                    >
                      <HStack>
                        <Box color={activeSection === key ? "white" : "brown.600"}><IconComponent size={16} /></Box>
                        <Text>{section.title}</Text>
                      </HStack>
                    </Button>
                  )
                })}
              </VStack>
            )}
          </Box>
        </Container>
      </Box>

      {/* Main Content - Cottage Card */}
      <Container maxW="container.lg">
        <CottageCard accentColor="brown.400">
          {/* Section Header dans la carte */}
          <Box textAlign="center" mb={6} pb={4} borderBottom="2px dashed" borderColor="pink.200">
            <HStack justify="center" gap={3}>
              <Box color="green.500">
                {(() => {
                  const IconComp = sections[activeSection].icon
                  return <IconComp size={32} />
                })()}
              </Box>
              <Heading size="xl" color="brown.700">{sections[activeSection].title}</Heading>
            </HStack>
          </Box>

          {/* Section Content */}
          <Box minH="300px">
            {sections[activeSection].content}
          </Box>

          {/* Decorative footer in card */}
          <Box mt={6} pt={4} borderTop="2px dashed" borderColor="pink.200" textAlign="center">
            <Text fontSize="sm" color="brown.400" fontStyle="italic">
              ✦ Portfolio BUT ✦
            </Text>
          </Box>
        </CottageCard>
      </Container>

      {/* Footer */}
      <Box as="footer" mt={8} textAlign="center">
        <Text color="brown.500" fontSize="sm">© 2024 - Portfolio Fantasy Cottagecore</Text>
      </Box>
    </Box>
  )
}

