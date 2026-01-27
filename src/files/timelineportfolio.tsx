import { useState, useEffect, useMemo } from 'react';
import { Box, Container, Text, VStack, HStack, Badge, Circle } from '@chakra-ui/react';
import { Rocket, Star, Zap, Code, Briefcase, Award, MapPin } from 'lucide-react';

const TimelinePortfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const stars = useMemo(() => [...Array(100)].map(() => ({
    width: Math.random() * 3,
    height: Math.random() * 3,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
    animation: Math.random() * 3 + 2,
    floatAnimation: Math.random() * 20 + 10,
    floatOffset: Math.random() * 20 - 10
  })), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineNodes = [
    {
      id: 'start',
      year: '2022',
      title: 'Début du Voyage',
      subtitle: 'BUT Informatique - 1ère année',
      icon: Rocket,
      color: '#667eea',
      type: 'milestone',
      description: 'Découverte du développement web et des bases de la programmation',
      achievements: [
        'Premiers projets en HTML/CSS/JS',
        'Initiation à la POO avec Java',
        'Travail en équipe sur projets tutorés'
      ]
    },
    {
      id: 'project1',
      year: '2023',
      title: 'E-commerce Platform',
      subtitle: 'Premier projet d\'envergure',
      icon: Briefcase,
      color: '#f093fb',
      type: 'project',
      description: 'Développement d\'une plateforme e-commerce complète avec panier et paiement',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      impact: 'Interface utilisée par 500+ clients',
      link: '#'
    },
    {
      id: 'skill1',
      year: '2023',
      title: 'Maîtrise Frontend',
      subtitle: 'Montée en compétence',
      icon: Code,
      color: '#4facfe',
      type: 'skill',
      description: 'Approfondissement des frameworks modernes et des bonnes pratiques',
      skills: ['React', 'TypeScript', 'State Management', 'Testing', 'Performance']
    },
    {
      id: 'project2',
      year: '2023',
      title: 'Dashboard Analytics',
      subtitle: 'Visualisation de données',
      icon: Zap,
      color: '#43e97b',
      type: 'project',
      description: 'Application de visualisation avec graphiques interactifs temps réel',
      tech: ['TypeScript', 'D3.js', 'WebSocket', 'Chakra UI'],
      impact: 'Réduction de 60% du temps d\'analyse',
      link: '#'
    },
    {
      id: 'internship',
      year: '2024',
      title: 'Stage en Entreprise',
      subtitle: 'Expérience professionnelle',
      icon: MapPin,
      color: '#fa709a',
      type: 'milestone',
      description: 'Stage de 3 mois en tant que développeur full-stack',
      achievements: [
        'Développement de 5 features majeures',
        'Intégration dans équipe agile',
        'Revue de code et mentoring junior'
      ]
    },
    {
      id: 'project3',
      year: '2024',
      title: 'API Architecture',
      subtitle: 'Backend & Microservices',
      icon: Code,
      color: '#30cfd0',
      type: 'project',
      description: 'Conception et implémentation d\'une architecture microservices',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Redis'],
      impact: 'Gestion de 50k requêtes/minute',
      link: '#'
    },
    {
      id: 'current',
      year: '2025',
      title: 'Aujourd\'hui',
      subtitle: 'En recherche d\'opportunités',
      icon: Award,
      color: '#f093fb',
      type: 'milestone',
      description: 'Prêt à relever de nouveaux défis en développement web',
      achievements: [
        '20+ projets complétés',
        '15+ technologies maîtrisées',
        'Portfolio professionnel créé'
      ]
    }
  ];

  const NodeCard = ({ node, index }: { node: { id: string; year: string; title: string; subtitle: string; icon: any; color: string; type: string; description: string; tech?: string[]; skills?: string[]; achievements?: string[]; impact?: string; }; index: number }) => {
    const isLeft = index % 2 === 0;
    const Icon = node.icon;

    return (
      <Box
        position="relative"
        mb={32}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        <HStack
          gap={0}
          justify="center"
          align="center"
          position="relative"
        >
          {/* Contenu à gauche */}
          <Box
            flex={1}
            opacity={isLeft ? 1 : 0}
            transform={isLeft ? 'translateX(0)' : 'translateX(50px)'}
            transition="all 0.5s"
          >
            {isLeft && (
              <Box
                bg="rgba(255, 255, 255, 0.05)"
                p={6}
                borderRadius="2xl"
                border="2px solid"
                borderColor={node.color + '40'}
                backdropFilter="blur(10px)"
                mr={8}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateX(-10px)',
                  borderColor: node.color,
                  boxShadow: `0 20px 60px ${node.color}40`
                }}
              >
                <VStack align="start" gap={3}>
                  <HStack justify="space-between" w="100%">
                    <Badge colorScheme="purple" fontSize="sm">{node.year}</Badge>
                    <Icon color={node.color} size={24} />
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold">{node.title}</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">{node.subtitle}</Text>
                  <Text fontSize="sm" color="whiteAlpha.600">{node.description}</Text>

                  {node.tech && (
                    <HStack gap={2} flexWrap="wrap">
                      {node.tech.map((tech: string) => (
                        <Badge key={tech} bg={node.color + '30'} color="white" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  )}

                  {node.skills && (
                    <VStack align="start" gap={1}>
                      {node.skills.map((skill: string) => (
                        <HStack key={skill} gap={2}>
                          <Box w="2px" h="2px" bg={node.color} borderRadius="full" />
                          <Text fontSize="xs" color="whiteAlpha.700">{skill}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  )}

                  {node.achievements && (
                    <VStack align="start" gap={1}>
                      {node.achievements.map((achievement: string, idx: number) => (
                        <HStack key={idx} gap={2}>
                          <Box w="2px" h="2px" bg={node.color} borderRadius="full" />
                          <Text fontSize="xs" color="whiteAlpha.700">{achievement}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  )}

                  {node.impact && (
                    <Text fontSize="sm" color={node.color} fontWeight="bold">
                      ✓ {node.impact}
                    </Text>
                  )}
                </VStack>
              </Box>
            )}
          </Box>

          {/* Nœud central - Planète */}
          <Circle
            size="80px"
            bg={node.color}
            position="relative"
            zIndex={2}
            boxShadow={`0 0 60px ${node.color}80, inset 0 0 30px rgba(255,255,255,0.2)`}
            transition="all 0.3s"
            _hover={{
              transform: 'scale(1.2)',
              boxShadow: `0 0 80px ${node.color}`,
            }}
            cursor="pointer"
          >
            {/* Anneaux autour de la planète */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="120px"
              height="120px"
              border="2px solid"
              borderColor={node.color + '60'}
              borderRadius="50%"
              animation="rotate 20s linear infinite"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="150px"
              height="150px"
              border="1px solid"
              borderColor={node.color + '30'}
              borderRadius="50%"
              animation="rotate 30s linear infinite reverse"
            />
            
            <Icon size={32} color="white" />
          </Circle>

          {/* Contenu à droite */}
          <Box
            flex={1}
            opacity={!isLeft ? 1 : 0}
            transform={!isLeft ? 'translateX(0)' : 'translateX(-50px)'}
            transition="all 0.5s"
          >
            {!isLeft && (
              <Box
                bg="rgba(255, 255, 255, 0.05)"
                p={6}
                borderRadius="2xl"
                border="2px solid"
                borderColor={node.color + '40'}
                backdropFilter="blur(10px)"
                ml={8}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateX(10px)',
                  borderColor: node.color,
                  boxShadow: `0 20px 60px ${node.color}40`
                }}
              >
                <VStack align="start" gap={3}>
                  <HStack justify="space-between" w="100%">
                    <Badge colorScheme="purple" fontSize="sm">{node.year}</Badge>
                    <Icon color={node.color} size={24} />
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold">{node.title}</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">{node.subtitle}</Text>
                  <Text fontSize="sm" color="whiteAlpha.600">{node.description}</Text>

                  {node.tech && (
                    <HStack gap={2} flexWrap="wrap">
                      {node.tech.map((tech: string) => (
                        <Badge key={tech} bg={node.color + '30'} color="white" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  )}

                  {node.skills && (
                    <VStack align="start" gap={1}>
                      {node.skills.map((skill: string) => (
                        <HStack key={skill} gap={2}>
                          <Box w="2px" h="2px" bg={node.color} borderRadius="full" />
                          <Text fontSize="xs" color="whiteAlpha.700">{skill}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  )}

                  {node.achievements && (
                    <VStack align="start" gap={1}>
                      {node.achievements.map((achievement: string, idx: number) => (
                        <HStack key={idx} gap={2}>
                          <Box w="2px" h="2px" bg={node.color} borderRadius="full" />
                          <Text fontSize="xs" color="whiteAlpha.700">{achievement}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  )}

                  {node.impact && (
                    <Text fontSize="sm" color={node.color} fontWeight="bold">
                      ✓ {node.impact}
                    </Text>
                  )}
                </VStack>
              </Box>
            )}
          </Box>
        </HStack>

        {/* Ligne de connexion */}
        {index < timelineNodes.length - 1 && (
          <Box
            position="absolute"
            left="50%"
            top="80px"
            transform="translateX(-50%)"
            width="4px"
            height="200px"
            bgGradient={`linear(to-b, ${node.color}, ${timelineNodes[index + 1].color})`}
            opacity={0.5}
            zIndex={1}
          />
        )}
      </Box>
    );
  };

  return (
    <Box minH="100vh" bg="#0a0e1a" color="white" position="relative" overflow="hidden">
      {/* Fond étoilé animé */}
      <Box position="fixed" top={0} left={0} right={0} bottom={0} pointerEvents="none">
        {stars.map((star, i) => (
          <Box
            key={i}
            position="absolute"
            width={`${star.width}px`}
            height={`${star.height}px`}
            bg="white"
            borderRadius="50%"
            top={`${star.top}%`}
            left={`${star.left}%`}
            opacity={star.opacity}
            animation={`twinkle ${star.animation}s infinite, float ${star.floatAnimation}s infinite`}
          />
        ))}
      </Box>

      {/* Barre de progression fixe */}
      <Box
        position="fixed"
        left={8}
        top="20%"
        bottom="20%"
        width="2px"
        bg="whiteAlpha.200"
        zIndex={100}
      >
        <Box
          width="100%"
          height={`${scrollProgress}%`}
          bgGradient="linear(to-b, #667eea, #764ba2)"
          boxShadow="0 0 20px #667eea"
          transition="height 0.1s"
        />
      </Box>

      {/* Header */}
      <Container maxW="1400px" py={16}>
        <VStack gap={4} mb={20}>
          <HStack gap={3}>
            <Star color="#ffd93d" size={36} fill="#ffd93d" />
            <Text 
              fontSize="5xl" 
              fontWeight="black"
              bgGradient="linear(to-r, #667eea, #764ba2, #f093fb)"
              bgClip="text"
            >
              Mon Parcours Cosmique
            </Text>
            <Star color="#ffd93d" size={36} fill="#ffd93d" />
          </HStack>
          <Text fontSize="xl" color="whiteAlpha.700" textAlign="center">
            Une odyssée à travers mes compétences et réalisations
          </Text>
        </VStack>

        {/* Timeline */}
        <Box py={12}>
          {timelineNodes.map((node, index) => (
            <NodeCard key={node.id} node={node} index={index} />
          ))}
        </Box>

        {/* Footer */}
        <VStack gap={4} py={16} opacity={0.6}>
          <Text fontSize="2xl">✨</Text>
          <Text fontSize="sm" color="whiteAlpha.600">
            Fin de la timeline • Prêt pour de nouvelles aventures
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default TimelinePortfolio;
