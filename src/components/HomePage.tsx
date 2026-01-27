import { Box, Container, Heading, Text, VStack, HStack, Icon, Button, Link as ChakraLink } from '@chakra-ui/react'
import { Home, User, Briefcase, Code2, Mail, Github, Linkedin, FileText } from 'lucide-react'
import { FolderSection } from './FolderSection'

export const HomePage = () => {
  return (
    <Box height="100vh" width="100%" bg="orange.50" display="flex" flexDirection="column">
      {/* Header sticky */}
      <Box as="header" bg="orange.500" color="white" py={4} position="sticky" top={0} zIndex={100} boxShadow="md">
        <Container maxW="container.xl">
          <HStack justify="space-between" wrap="wrap" gap={4}>
            <HStack>
              <Icon as={Home} boxSize={7} />
              <Heading size="lg">Portfolio</Heading>
            </HStack>
            <HStack gap={6} fontWeight="medium">
              <ChakraLink href="#about" _hover={{ color: "orange.200", textDecoration: "none" }}>About</ChakraLink>
              <ChakraLink href="#competences" _hover={{ color: "orange.200", textDecoration: "none" }}>Compétences</ChakraLink>
              <ChakraLink href="#projets" _hover={{ color: "orange.200", textDecoration: "none" }}>Projets</ChakraLink>
              <ChakraLink href="#contact" _hover={{ color: "orange.200", textDecoration: "none" }}>Contact</ChakraLink>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content scrollable */}
      <Container maxW="container.xl" py={10} overflow="auto" flex={1}>
        <VStack gap={8} align="center">
          {/* Presentation Card */}
          <Box bg="white" p={8} borderRadius="xl" boxShadow="lg" textAlign="center" w="full" maxW="600px">
            <Box w="120px" h="120px" bg="orange.200" borderRadius="full" mx="auto" mb={4} display="flex" alignItems="center" justifyContent="center">
              <Icon as={User} boxSize={16} color="orange.600" />
            </Box>
            <Heading size="xl" color="gray.800" mb={2}>Mon Portfolio</Heading>
            <Text fontSize="lg" color="gray.600">
              Étudiante en BUT Informatique
            </Text>
            <Text color="gray.500" mt={2}>
              Découvrez mon parcours, mes compétences et mes projets
            </Text>
          </Box>

          {/* Sections as folders */}
          <Box id="about" scrollMarginTop="80px">
            <FolderSection title="About & CV" icon={FileText} defaultOpen={true}>
              <VStack gap={4} align="start">
                <Heading size="md" color="orange.600">À propos de moi</Heading>
                <Text color="gray.600">
                  Présentez-vous ici : votre parcours, vos motivations, ce qui vous passionne dans l'informatique...
                </Text>
                <Box w="full" h="200px" bg="gray.100" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                  <Text color="gray.400">Votre CV sera intégré ici</Text>
                </Box>
                <Button colorScheme="orange" size="sm">Télécharger mon CV</Button>
              </VStack>
            </FolderSection>
          </Box>

          <Box id="competences" scrollMarginTop="80px">
            <FolderSection title="Compétences" icon={Code2}>
              <VStack gap={4} align="start">
                <Heading size="md" color="orange.600">Mes compétences techniques</Heading>
                <Text color="gray.600">
                  Listez vos compétences acquises pendant votre BUT et votre stage...
                </Text>
                <HStack gap={4} wrap="wrap">
                  {['React', 'TypeScript', 'Chakra UI', 'Node.js', 'Python', 'SQL', 'Git'].map((skill) => (
                    <Box key={skill} bg="orange.100" px={4} py={2} borderRadius="full" color="orange.700" fontWeight="medium">
                      {skill}
                    </Box>
                  ))}
                </HStack>
              </VStack>
            </FolderSection>
          </Box>

          <Box id="projets" scrollMarginTop="80px">
            <FolderSection title="Projets" icon={Briefcase}>
              <VStack gap={6} align="start">
                <Heading size="md" color="orange.600">Mes projets</Heading>
                <Text color="gray.600">
                  Présentez vos projets avec descriptions, captures d'écran et liens GitHub...
                </Text>
                <Box w="full" p={4} bg="gray.50" borderRadius="lg" border="1px solid" borderColor="gray.200">
                  <Heading size="sm" mb={2}>Projet 1</Heading>
                  <Text fontSize="sm" color="gray.500">Description du projet...</Text>
                </Box>
                <Box w="full" p={4} bg="gray.50" borderRadius="lg" border="1px solid" borderColor="gray.200">
                  <Heading size="sm" mb={2}>Projet 2</Heading>
                  <Text fontSize="sm" color="gray.500">Description du projet...</Text>
                </Box>
              </VStack>
            </FolderSection>
          </Box>

          <Box id="contact" scrollMarginTop="80px">
            <FolderSection title="Contact" icon={Mail}>
              <VStack gap={4} align="start">
                <Heading size="md" color="orange.600">Me contacter</Heading>
                <Text color="gray.600">
                  Laissez vos informations pour que les recruteurs puissent vous joindre...
                </Text>
                <Box w="full" p={4} bg="gray.50" borderRadius="lg">
                  <VStack gap={3}>
                    <ChakraLink href="https://github.com/votre-github" color="orange.500" target="_blank" rel="noopener noreferrer">
                      <HStack>
                        <Icon as={Github} />
                        <Text>GitHub</Text>
                      </HStack>
                    </ChakraLink>
                    <ChakraLink href="https://linkedin.com/in/votre-linkedin" color="orange.500" target="_blank" rel="noopener noreferrer">
                      <HStack>
                        <Icon as={Linkedin} />
                        <Text>LinkedIn</Text>
                      </HStack>
                    </ChakraLink>
                  </VStack>
                </Box>
              </VStack>
            </FolderSection>
          </Box>
        </VStack>
      </Container>

      {/* Footer fixed */}
      <Box as="footer" bg="orange.600" color="white" py={4} position="fixed" bottom={0} left={0} right={0}>
        <Container maxW="container.xl">
          <Text textAlign="center" fontSize="sm">© 2024 - PortfolioBUT</Text>
        </Container>
      </Box>
    </Box>
  )
}
