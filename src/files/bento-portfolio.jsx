import React, { useState } from 'react';
import { Box, Container, Text, VStack, HStack, Grid, GridItem, Image, Badge, Button, IconButton, Input, Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { User, Briefcase, Code, Mail, Download, Github, Linkedin, ExternalLink, Star, Zap, Award, Send } from 'lucide-react';

const BentoPortfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const skills = [
    { name: 'React & TypeScript', level: 95, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'UI/UX Design', level: 90, icon: '🎨' },
    { name: 'PostgreSQL', level: 80, icon: '🐘' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Full-Stack',
      description: 'Plateforme complète avec panier, paiement et gestion des commandes.',
      tech: ['React', 'Node.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
      color: '#667eea',
      impact: '+40% conversion',
      link: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'Frontend',
      description: 'Interface temps réel avec graphiques interactifs.',
      tech: ['TypeScript', 'D3.js', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      color: '#f093fb',
      impact: '-60% temps analyse',
      link: '#'
    },
    {
      id: 3,
      title: 'API RESTful',
      category: 'Backend',
      description: 'Architecture microservices évolutive et sécurisée.',
      tech: ['Express', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
      color: '#4facfe',
      impact: '50k req/min',
      link: '#'
    }
  ];

  return (
    <Box minH="100vh" bg="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" py={12}>
      <Container maxW="1400px">
        <Grid
          templateColumns="repeat(12, 1fr)"
          templateRows="repeat(12, 80px)"
          gap={4}
        >
          {/* Hero Card - Grande card en haut à gauche */}
          <GridItem
            colSpan={{ base: 12, lg: 6 }}
            rowSpan={4}
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            borderRadius="3xl"
            p={8}
            position="relative"
            overflow="hidden"
            onMouseEnter={() => setHoveredCard('hero')}
            onMouseLeave={() => setHoveredCard(null)}
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '0 30px 60px rgba(102, 126, 234, 0.4)'
            }}
          >
            {/* Pattern background */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              opacity={0.1}
              bgImage="radial-gradient(circle, white 1px, transparent 1px)"
              bgSize="20px 20px"
            />
            
            <VStack align="start" justify="space-between" h="100%" position="relative">
              <Box>
                <HStack spacing={3} mb={2}>
                  <Box
                    w="80px"
                    h="80px"
                    borderRadius="full"
                    bg="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="3xl"
                  >
                    👨‍💻
                  </Box>
                  <VStack align="start" spacing={0}>
                    <Badge colorScheme="purple" fontSize="xs" mb={1}>Disponible</Badge>
                    <Text fontSize="3xl" fontWeight="black" color="white">
                      [Ton Nom]
                    </Text>
                  </VStack>
                </HStack>
                <Text fontSize="xl" color="whiteAlpha.900" fontWeight="medium">
                  Développeur Full-Stack
                </Text>
                <Text fontSize="md" color="whiteAlpha.800" mt={2}>
                  Passionné par la création d'expériences web modernes et performantes
                </Text>
              </Box>
              
              <HStack spacing={3}>
                <IconButton
                  icon={<Github />}
                  borderRadius="full"
                  bg="whiteAlpha.200"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.300' }}
                />
                <IconButton
                  icon={<Linkedin />}
                  borderRadius="full"
                  bg="whiteAlpha.200"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.300' }}
                />
                <Button
                  leftIcon={<Download size={16} />}
                  borderRadius="full"
                  bg="white"
                  color="#667eea"
                  _hover={{ bg: 'whiteAlpha.900' }}
                  size="sm"
                >
                  Télécharger CV
                </Button>
              </HStack>
            </VStack>
          </GridItem>

          {/* Stats Cards */}
          <GridItem
            colSpan={{ base: 6, lg: 3 }}
            rowSpan={2}
            bg="white"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '2xl'
            }}
          >
            <VStack align="start" spacing={2}>
              <Box bg="green.100" p={2} borderRadius="lg">
                <Award color="#10b981" size={20} />
              </Box>
              <Text fontSize="3xl" fontWeight="black" color="gray.800">24+</Text>
              <Text fontSize="sm" color="gray.600">Projets Complétés</Text>
            </VStack>
          </GridItem>

          <GridItem
            colSpan={{ base: 6, lg: 3 }}
            rowSpan={2}
            bg="white"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '2xl'
            }}
          >
            <VStack align="start" spacing={2}>
              <Box bg="purple.100" p={2} borderRadius="lg">
                <Code color="#8b5cf6" size={20} />
              </Box>
              <Text fontSize="3xl" fontWeight="black" color="gray.800">18</Text>
              <Text fontSize="sm" color="gray.600">Technologies</Text>
            </VStack>
          </GridItem>

          {/* Skills Card */}
          <GridItem
            colSpan={{ base: 12, lg: 6 }}
            rowSpan={4}
            bg="white"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '2xl'
            }}
          >
            <VStack align="stretch" spacing={4} h="100%">
              <HStack justify="space-between">
                <Text fontSize="xl" fontWeight="bold" color="gray.800">
                  Compétences Principales
                </Text>
                <Zap color="#f59e0b" size={24} />
              </HStack>
              
              <VStack spacing={4} flex={1}>
                {skills.map((skill, idx) => (
                  <Box key={idx} w="100%">
                    <HStack justify="space-between" mb={2}>
                      <HStack spacing={2}>
                        <Text fontSize="xl">{skill.icon}</Text>
                        <Text fontSize="sm" fontWeight="medium" color="gray.700">
                          {skill.name}
                        </Text>
                      </HStack>
                      <Text fontSize="sm" fontWeight="bold" color="gray.600">
                        {skill.level}%
                      </Text>
                    </HStack>
                    <Box h="6px" bg="gray.100" borderRadius="full" overflow="hidden">
                      <Box
                        h="100%"
                        w={`${skill.level}%`}
                        bgGradient="linear(to-r, #667eea, #764ba2)"
                        borderRadius="full"
                        transition="width 1s ease"
                      />
                    </Box>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </GridItem>

          {/* About Card */}
          <GridItem
            colSpan={{ base: 12, lg: 6 }}
            rowSpan={2}
            bg="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
            position="relative"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '0 20px 40px rgba(240, 147, 251, 0.4)'
            }}
          >
            <Box position="absolute" top={-20} right={-20} fontSize="150px" opacity={0.2}>
              💡
            </Box>
            <VStack align="start" spacing={2} position="relative">
              <Text fontSize="lg" fontWeight="bold" color="white">
                À propos
              </Text>
              <Text fontSize="sm" color="whiteAlpha.900">
                BUT Informatique • 3ème année • Spécialité développement web full-stack avec une forte appétence pour l'UI/UX et les architectures modernes.
              </Text>
            </VStack>
          </GridItem>

          {/* Projects Cards */}
          {projects.map((project, idx) => (
            <GridItem
              key={project.id}
              colSpan={{ base: 12, lg: 4 }}
              rowSpan={3}
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="lg"
              cursor="pointer"
              onClick={() => setSelectedProject(project)}
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '2xl'
              }}
            >
              <Box position="relative" h="50%" overflow="hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.3s"
                  _hover={{ transform: 'scale(1.1)' }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient={`linear(to-b, transparent, ${project.color})`}
                  opacity={0.8}
                />
                <Badge
                  position="absolute"
                  top={3}
                  left={3}
                  colorScheme="purple"
                  fontSize="xs"
                >
                  {project.category}
                </Badge>
              </Box>
              
              <VStack align="start" p={4} spacing={2} h="50%">
                <Text fontSize="lg" fontWeight="bold" color="gray.800">
                  {project.title}
                </Text>
                <Text fontSize="sm" color="gray.600" noOfLines={2}>
                  {project.description}
                </Text>
                <HStack spacing={2} flexWrap="wrap">
                  {project.tech.slice(0, 3).map(tech => (
                    <Badge key={tech} size="sm" variant="subtle" colorScheme="purple">
                      {tech}
                    </Badge>
                  ))}
                </HStack>
                <HStack justify="space-between" w="100%" pt={2}>
                  <Text fontSize="xs" color="green.500" fontWeight="bold">
                    ✓ {project.impact}
                  </Text>
                  <IconButton
                    icon={<ExternalLink size={16} />}
                    size="xs"
                    variant="ghost"
                    colorScheme="purple"
                  />
                </HStack>
              </VStack>
            </GridItem>
          ))}

          {/* Contact Card */}
          <GridItem
            colSpan={{ base: 12, lg: 6 }}
            rowSpan={3}
            bg="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '0 20px 40px rgba(79, 172, 254, 0.4)'
            }}
          >
            <VStack align="stretch" spacing={4} h="100%">
              <HStack>
                <Mail color="white" size={24} />
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Contact
                </Text>
              </HStack>
              
              <Input
                placeholder="Votre email"
                bg="whiteAlpha.300"
                border="none"
                color="white"
                _placeholder={{ color: 'whiteAlpha.700' }}
              />
              
              <Textarea
                placeholder="Votre message"
                bg="whiteAlpha.300"
                border="none"
                color="white"
                _placeholder={{ color: 'whiteAlpha.700' }}
                resize="none"
                flex={1}
              />
              
              <Button
                leftIcon={<Send size={16} />}
                bg="white"
                color="#4facfe"
                _hover={{ bg: 'whiteAlpha.900' }}
              >
                Envoyer
              </Button>
            </VStack>
          </GridItem>

          {/* Quote Card */}
          <GridItem
            colSpan={{ base: 12, lg: 6 }}
            rowSpan={3}
            bg="gray.900"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
            position="relative"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '2xl'
            }}
          >
            <Box
              position="absolute"
              top={-10}
              left={-10}
              fontSize="120px"
              opacity={0.1}
              color="white"
            >
              "
            </Box>
            <VStack align="start" justify="center" h="100%" position="relative" spacing={3}>
              <Text fontSize="xl" color="white" fontStyle="italic" lineHeight="tall">
                Le code est de la poésie. Chaque ligne raconte une histoire.
              </Text>
              <Text fontSize="sm" color="whiteAlpha.700">
                — Ma philosophie de développement
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Container>

      {/* Modal Project Details */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} size="2xl">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack align="stretch" spacing={4}>
              <Image
                src={selectedProject?.image}
                alt={selectedProject?.title}
                borderRadius="lg"
                w="100%"
                h="300px"
                objectFit="cover"
              />
              <Text>{selectedProject?.description}</Text>
              <HStack spacing={2}>
                {selectedProject?.tech.map(tech => (
                  <Badge key={tech} colorScheme="purple">{tech}</Badge>
                ))}
              </HStack>
              <Button leftIcon={<ExternalLink />} colorScheme="purple">
                Voir le projet
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BentoPortfolio;
