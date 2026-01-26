import { Box, Container, Heading, Text, VStack, HStack, Icon } from '@chakra-ui/react'
import { Home, User, Mail } from 'lucide-react'



export const HomePage = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box as="header" bg="white" shadow="sm" py={4}>
        <Container maxW="container.xl">
          <HStack justify="space-between">
            <HStack>
              <Icon as={Home} boxSize={6} color="blue.500" />
              <Heading size="lg" color="gray.800">My App</Heading>
            </HStack>
            <HStack gap={4}>
              <Icon as={User} boxSize={5} color="gray.600" />
              <Icon as={Mail} boxSize={5} color="gray.600" />
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={10}>
        <VStack gap={8} align="center">
          <Heading size="2xl" textAlign="center" color="gray.800">
            Welcome to My App
          </Heading>
          <Text fontSize="lg" textAlign="center" color="gray.600" maxW="2xl">
            This is a classic page built with React, TanStack Router, Chakra UI, and Lucide icons.
            It's a starting point for your application.
          </Text>
          <Box bg="white" p={6} rounded="lg" shadow="md" w="full" maxW="md">
            <VStack gap={4}>
              <Heading size="md" color="gray.800">Features</Heading>
              <Text color="gray.600">• Responsive design</Text>
              <Text color="gray.600">• Modern UI components</Text>
              <Text color="gray.600">• Icon integration</Text>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={6} mt={10}>
        <Container maxW="container.xl">
          <Text textAlign="center">© 2024 My App. Built with love.</Text>
        </Container>
      </Box>
    </Box>
  )
}
