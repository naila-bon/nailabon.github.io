import React, { useState } from 'react';
import { Box, Container, Text, VStack, HStack, Badge, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Grid, Button } from '@chakra-ui/react';
import { Map, Zap, Code, Database, Palette, Globe, Star, Award } from 'lucide-react';

const MapPortfolio = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    {
      id: 'frontend',
      name: 'Territoire Frontend',
      icon: Palette,
      color: '#ff6b9d',
      level: 85,
      x: 20,
      y: 20,
      width: 35,
      height: 30,
      projects: [
        { name: 'Dashboard Analytics', tech: 'React, TypeScript', impact: 'Interface temps réel pour 1000+ utilisateurs' },
        { name: 'E-commerce Site', tech: 'Next.js, Chakra UI', impact: 'Augmentation conversion de 40%' },
        { name: 'Portfolio Interactif', tech: 'React, Framer Motion', impact: 'Expérience utilisateur primée' }
      ],
      skills: ['React', 'TypeScript', 'CSS/SASS', 'Responsive Design', 'Animations']
    },
    {
      id: 'backend',
      name: 'Royaume Backend',
      icon: Database,
      color: '#4ecdc4',
      level: 70,
      x: 60,
      y: 15,
      width: 35,
      height: 35,
      projects: [
        { name: 'API RESTful', tech: 'Node.js, Express', impact: 'Architecture microservices évolutive' },
        { name: 'Système Auth', tech: 'JWT, OAuth2', impact: 'Sécurisation de 50k comptes' },
        { name: 'Base de données', tech: 'PostgreSQL, MongoDB', impact: 'Optimisation requêtes -60% temps' }
      ],
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'API Design']
    },
    {
      id: 'devops',
      name: 'Forteresse DevOps',
      icon: Globe,
      color: '#95e1d3',
      level: 60,
      x: 15,
      y: 55,
      width: 30,
      height: 30,
      projects: [
        { name: 'CI/CD Pipeline', tech: 'GitHub Actions, Docker', impact: 'Déploiement automatisé' },
        { name: 'Infrastructure Cloud', tech: 'AWS, Terraform', impact: 'Haute disponibilité 99.9%' },
        { name: 'Monitoring', tech: 'Prometheus, Grafana', impact: 'Détection incidents en temps réel' }
      ],
      skills: ['Docker', 'CI/CD', 'AWS', 'Git', 'Linux']
    },
    {
      id: 'design',
      name: 'Vallée UI/UX',
      icon: Zap,
      color: '#ffd93d',
      level: 80,
      x: 50,
      y: 55,
      width: 32,
      height: 28,
      projects: [
        { name: 'Refonte UX', tech: 'Figma, User Research', impact: 'Satisfaction utilisateur +35%' },
        { name: 'Design System', tech: 'Storybook, Figma', impact: 'Cohérence sur 15 applications' },
        { name: 'Prototypage', tech: 'Figma, Adobe XD', impact: 'Validation concepts avant dev' }
      ],
      skills: ['Figma', 'User Research', 'Prototypage', 'Design Systems', 'Accessibilité']
    }
  ];

  const getRegionPath = (region) => {
    const { x, y, width, height } = region;
    // Créer une forme organique avec des courbes
    return `M ${x} ${y + height * 0.3} 
            Q ${x} ${y}, ${x + width * 0.3} ${y}
            L ${x + width * 0.7} ${y}
            Q ${x + width} ${y}, ${x + width} ${y + height * 0.3}
            L ${x + width} ${y + height * 0.7}
            Q ${x + width} ${y + height}, ${x + width * 0.7} ${y + height}
            L ${x + width * 0.3} ${y + height}
            Q ${x} ${y + height}, ${x} ${y + height * 0.7}
            Z`;
  };

  return (
    <Box 
      minH="100vh" 
      bg="linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Étoiles en arrière-plan */}
      {[...Array(50)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          width="2px"
          height="2px"
          bg="white"
          borderRadius="50%"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          opacity={Math.random() * 0.7 + 0.3}
          animation={`twinkle ${Math.random() * 3 + 2}s infinite`}
          sx={{
            '@keyframes twinkle': {
              '0%, 100%': { opacity: 0.3 },
              '50%': { opacity: 1 }
            }
          }}
        />
      ))}

      <Container maxW="1400px" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <VStack spacing={2}>
            <HStack>
              <Map color="#ffd93d" size={36} />
              <Text 
                fontSize="4xl" 
                fontWeight="black" 
                bgGradient="linear(to-r, #ffd93d, #ff6b9d, #4ecdc4)"
                bgClip="text"
                fontFamily="'Space Grotesk', sans-serif"
              >
                Carte des Compétences
              </Text>
            </HStack>
            <Text color="whiteAlpha.700" fontSize="lg" textAlign="center">
              Explorez mes territoires de compétences • Cliquez sur une région pour découvrir mes projets
            </Text>
          </VStack>

          {/* Map Container */}
          <Box
            bg="rgba(255, 255, 255, 0.03)"
            borderRadius="2xl"
            p={8}
            border="2px solid"
            borderColor="whiteAlpha.200"
            boxShadow="0 20px 60px rgba(0, 0, 0, 0.5)"
            position="relative"
          >
            {/* SVG Map */}
            <Box position="relative" width="100%" height="600px">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Grille de fond */}
                <defs>
                  <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                    <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.1"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />

                {/* Régions */}
                {regions.map((region) => {
                  const isHovered = hoveredRegion === region.id;
                  const isSelected = selectedRegion?.id === region.id;
                  
                  return (
                    <g key={region.id}>
                      {/* Glow effect */}
                      {(isHovered || isSelected) && (
                        <path
                          d={getRegionPath(region)}
                          fill={region.color}
                          opacity="0.3"
                          filter="blur(2px)"
                        />
                      )}
                      
                      {/* Région principale */}
                      <path
                        d={getRegionPath(region)}
                        fill={region.color}
                        opacity={isHovered ? 0.9 : 0.6}
                        stroke={region.color}
                        strokeWidth="0.3"
                        style={{
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
                        }}
                        onMouseEnter={() => setHoveredRegion(region.id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setSelectedRegion(region)}
                      />

                      {/* Label */}
                      <text
                        x={region.x + region.width / 2}
                        y={region.y + region.height / 2}
                        textAnchor="middle"
                        fill="white"
                        fontSize="2.5"
                        fontWeight="bold"
                        style={{ pointerEvents: 'none', textShadow: '0 0 3px rgba(0,0,0,0.8)' }}
                      >
                        {region.name}
                      </text>

                      {/* Niveau */}
                      <text
                        x={region.x + region.width / 2}
                        y={region.y + region.height / 2 + 4}
                        textAnchor="middle"
                        fill="white"
                        fontSize="1.8"
                        opacity="0.8"
                        style={{ pointerEvents: 'none' }}
                      >
                        Niveau {region.level}
                      </text>

                      {/* Étoiles de progression */}
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          x={region.x + region.width / 2 - 5 + i * 2.5}
                          y={region.y + region.height - 5}
                          size={2}
                          fill={i < Math.floor(region.level / 20) ? region.color : 'none'}
                          stroke={region.color}
                          strokeWidth="0.2"
                          style={{ pointerEvents: 'none' }}
                        />
                      ))}
                    </g>
                  );
                })}
              </svg>

              {/* Legend */}
              <HStack 
                position="absolute" 
                bottom={4} 
                right={4} 
                bg="rgba(0,0,0,0.7)" 
                p={3} 
                borderRadius="lg"
                spacing={4}
                backdropFilter="blur(10px)"
              >
                {regions.map(region => (
                  <HStack key={region.id} spacing={2}>
                    <Box w="12px" h="12px" bg={region.color} borderRadius="sm" />
                    <Text color="white" fontSize="xs">{region.name}</Text>
                  </HStack>
                ))}
              </HStack>
            </Box>
          </Box>

          {/* Stats rapides */}
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {regions.map(region => {
              const Icon = region.icon;
              return (
                <Box
                  key={region.id}
                  bg="rgba(255, 255, 255, 0.05)"
                  p={4}
                  borderRadius="xl"
                  border="2px solid"
                  borderColor={region.color + '40'}
                  cursor="pointer"
                  onClick={() => setSelectedRegion(region)}
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 20px ${region.color}40`,
                    borderColor: region.color
                  }}
                >
                  <VStack>
                    <Icon color={region.color} size={24} />
                    <Text color="white" fontSize="sm" fontWeight="bold">{region.name}</Text>
                    <Badge colorScheme="green" fontSize="xs">Niveau {region.level}</Badge>
                  </VStack>
                </Box>
              );
            })}
          </Grid>
        </VStack>
      </Container>

      {/* Modal détails région */}
      <Modal isOpen={!!selectedRegion} onClose={() => setSelectedRegion(null)} size="xl">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="gray.900" color="white">
          <ModalHeader>
            <HStack>
              {selectedRegion && React.createElement(selectedRegion.icon, { color: selectedRegion.color, size: 28 })}
              <Text>{selectedRegion?.name}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack align="stretch" spacing={6}>
              {/* Progression */}
              <Box>
                <HStack justify="space-between" mb={2}>
                  <Text fontSize="sm" color="whiteAlpha.700">Progression</Text>
                  <Text fontSize="sm" fontWeight="bold">{selectedRegion?.level}%</Text>
                </HStack>
                <Box h="8px" bg="whiteAlpha.200" borderRadius="full" overflow="hidden">
                  <Box 
                    h="100%" 
                    w={`${selectedRegion?.level}%`} 
                    bg={selectedRegion?.color}
                    transition="width 0.5s ease"
                  />
                </Box>
              </Box>

              {/* Compétences */}
              <Box>
                <Text fontSize="sm" color="whiteAlpha.700" mb={2}>Compétences maîtrisées</Text>
                <HStack spacing={2} flexWrap="wrap">
                  {selectedRegion?.skills.map(skill => (
                    <Badge key={skill} bg={selectedRegion.color + '30'} color={selectedRegion.color} px={3} py={1}>
                      {skill}
                    </Badge>
                  ))}
                </HStack>
              </Box>

              {/* Projets */}
              <Box>
                <Text fontSize="lg" fontWeight="bold" mb={3}>Projets Réalisés</Text>
                <VStack align="stretch" spacing={3}>
                  {selectedRegion?.projects.map((project, idx) => (
                    <Box 
                      key={idx}
                      p={4} 
                      bg="whiteAlpha.50" 
                      borderRadius="lg"
                      borderLeft="3px solid"
                      borderLeftColor={selectedRegion.color}
                    >
                      <HStack justify="space-between" mb={2}>
                        <Text fontWeight="bold">{project.name}</Text>
                        <Award color={selectedRegion.color} size={18} />
                      </HStack>
                      <Text fontSize="sm" color="whiteAlpha.700" mb={1}>{project.tech}</Text>
                      <Text fontSize="sm" color={selectedRegion.color}>{project.impact}</Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MapPortfolio;
