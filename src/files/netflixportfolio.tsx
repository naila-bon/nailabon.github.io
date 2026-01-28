import React, { useState, useRef } from 'react';
import { Box, Container, Text, VStack, HStack, Badge, Button, IconButton } from '@chakra-ui/react';
import { Play, Info, Star, ExternalLink } from 'lucide-react';

const NetflixPortfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    {
      id: 'frontend',
      name: 'Développement Frontend',
      projects: [
        {
          id: 1,
          title: 'Dashboard Analytics',
          subtitle: 'Interface temps réel',
          description: 'Application de visualisation de données avec graphiques interactifs et mise à jour en temps réel. Utilisée par 1000+ utilisateurs quotidiens.',
          tech: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
          rating: 4.8,
          featured: true,
          impact: 'Réduction de 60% du temps d\'analyse'
        },
        {
          id: 2,
          title: 'E-commerce Platform',
          subtitle: 'Marketplace moderne',
          description: 'Plateforme complète avec panier, paiement sécurisé, gestion des commandes et interface d\'administration.',
          tech: ['Next.js', 'Stripe', 'Prisma', 'Tailwind'],
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
          rating: 4.9,
          featured: true,
          impact: 'Augmentation conversion de 40%'
        },
        {
          id: 3,
          title: 'Design System',
          subtitle: 'Bibliothèque de composants',
          description: 'Système de design complet avec composants réutilisables, documentation et thématisation.',
          tech: ['React', 'Storybook', 'Styled Components'],
          image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
          rating: 4.7,
          featured: false,
          impact: 'Cohérence sur 15 applications'
        }
      ]
    },
    {
      id: 'backend',
      name: 'Développement Backend',
      projects: [
        {
          id: 4,
          title: 'API RESTful',
          subtitle: 'Architecture microservices',
          description: 'API évolutive avec authentification JWT, rate limiting, et documentation Swagger complète.',
          tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
          rating: 4.8,
          featured: true,
          impact: 'Gestion de 50k requêtes/minute'
        },
        {
          id: 5,
          title: 'Real-time Chat',
          subtitle: 'Messagerie instantanée',
          description: 'Système de chat en temps réel avec rooms, notifications push et historique de messages.',
          tech: ['Socket.io', 'MongoDB', 'Node.js'],
          image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800',
          rating: 4.6,
          featured: false,
          impact: '10k utilisateurs simultanés'
        }
      ]
    },
    {
      id: 'fullstack',
      name: 'Projets Full-Stack',
      projects: [
        {
          id: 6,
          title: 'Project Management Tool',
          subtitle: 'Gestion de projets collaborative',
          description: 'Outil complet de gestion de projets avec tableaux Kanban, calendrier, et suivi du temps.',
          tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
          rating: 4.9,
          featured: true,
          impact: 'Productivité équipe +35%'
        },
        {
          id: 7,
          title: 'Social Media Platform',
          subtitle: 'Réseau social de niche',
          description: 'Plateforme sociale avec profils, feed, likes, commentaires et système de followers.',
          tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
          rating: 4.7,
          featured: false,
          impact: '5k utilisateurs actifs'
        }
      ]
    }
  ];

  const ScrollContainer = ({ children, title }: { children: React.ReactNode; title: string }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
      if (scrollRef.current) {
        const scrollAmount = direction === 'left' ? -800 : 800;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    return (
      <Box position="relative">
        <Text fontSize="2xl" fontWeight="bold" mb={4} px={8}>{title}</Text>
        
        <IconButton
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={() => scroll('left')}
          bg="rgba(0, 0, 0, 0.7)"
          _hover={{ bg: 'rgba(0, 0, 0, 0.9)' }}
          opacity={0.6}
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.3s"
        >
          ‹
        </IconButton>

        <IconButton
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={() => scroll('right')}
          bg="rgba(0, 0, 0, 0.7)"
          _hover={{ bg: 'rgba(0, 0, 0, 0.9)' }}
          opacity={0.6}
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.3s"
        >
          ›
        </IconButton>

        <Box
          ref={scrollRef}
          overflowX="auto"
          overflowY="hidden"
          css={{
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          px={8}
          role="group"
        >
          <HStack gap={4} pb={4}>
            {children}
          </HStack>
        </Box>
      </Box>
    );
  };

  const ProjectCard = ({ project, isFeatured = false }: { project: { id: number; title: string; subtitle: string; description: string; tech: string[]; image: string; rating: number; featured: boolean; impact: string }; isFeatured?: boolean }) => {
    const isHovered = hoveredProject === project.id;

    return (
      <Box
        minW={isFeatured ? '600px' : '320px'}
        h={isFeatured ? '400px' : '180px'}
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        cursor="pointer"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        transition="all 0.3s ease"
        transform={isHovered ? 'scale(1.05)' : 'scale(1)'}
        boxShadow={isHovered ? '0 20px 60px rgba(0, 0, 0, 0.8)' : '0 4px 10px rgba(0, 0, 0, 0.5)'}
        zIndex={isHovered ? 10 : 1}
      >
        {/* Image de fond */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={`url(${project.image})`}
          bgSize="cover"
          backgroundPosition="center"
          filter={isHovered ? 'brightness(0.4)' : 'brightness(0.7)'}
          transition="filter 0.3s"
        />

        {/* Gradient overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-b, transparent 0%, rgba(0,0,0,0.9) 100%)"
        />

        {/* Content */}
        <VStack
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={6}
          align="start"
          gap={2}
        >
          <HStack gap={2}>
            <Badge colorScheme="red" fontSize="xs">
              <HStack gap={1}>
                <Star size={10} fill="currentColor" />
                <Text>{project.rating}</Text>
              </HStack>
            </Badge>
            {project.tech.slice(0, 3).map(tech => (
              <Badge key={tech} colorScheme="purple" fontSize="xs">{tech}</Badge>
            ))}
          </HStack>

          <Text fontSize={isFeatured ? '3xl' : 'xl'} fontWeight="black" color="white">
            {project.title}
          </Text>
          
          <Text fontSize={isFeatured ? 'md' : 'sm'} color="whiteAlpha.800">
            {project.subtitle}
          </Text>

          {/* Visible seulement au hover */}
          {isHovered && (
            <VStack align="start" gap={3} w="100%">
              <Text fontSize="sm" color="whiteAlpha.900">
                {project.description}
              </Text>

              <Text fontSize="xs" color="green.400" fontWeight="bold">
                ✓ {project.impact}
              </Text>

              <HStack gap={2} w="100%">
                <Button
                  colorScheme="whiteAlpha"
                  bg="white"
                  color="black"
                  size="sm"
                  _hover={{ bg: 'whiteAlpha.800' }}
                >
                  <HStack gap={2}>
                    <Play size={16} />
                    <Text>Voir le projet</Text>
                  </HStack>
                </Button>
                <IconButton
                  colorScheme="whiteAlpha"
                  variant="outline"
                  size="sm"
                >
                  <Info size={16} />
                </IconButton>
                <IconButton
                  colorScheme="whiteAlpha"
                  variant="outline"
                  size="sm"
                >
                  <ExternalLink size={16} />
                </IconButton>
              </HStack>
            </VStack>
          )}
        </VStack>
      </Box>
    );
  };

  // Projet hero
  const heroProject = categories[0]?.projects?.find(p => p.featured) || null;

  return (
    <Box minH="100vh" bg="#141414" color="white">
      {/* Hero Section */}
      <Box
        position="relative"
        h="80vh"
        bgImage={heroProject ? `url(${heroProject.image})` : undefined}
        bgSize="cover"
        backgroundPosition="center"
      >
        {/* Gradient overlays */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-b, rgba(20,20,20,0.3) 0%, rgba(20,20,20,0.9) 70%, #141414 100%)"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-r, rgba(20,20,20,0.9) 0%, transparent 50%)"
        />

        <Container maxW="1400px" h="100%" position="relative">
          <VStack align="start" justify="end" h="100%" pb={20} maxW="600px">
            <Badge colorScheme="red" fontSize="sm" mb={2}>
              PROJET PHARE
            </Badge>
            <Text fontSize="6xl" fontWeight="black" lineHeight="1.1">
              {heroProject?.title}
            </Text>
            <Text fontSize="xl" color="whiteAlpha.900" mb={4}>
              {heroProject?.description}
            </Text>
            
            <HStack gap={3} mb={6}>
              {heroProject?.tech?.map(tech => (
                <Badge key={tech} colorScheme="purple" fontSize="md" px={3} py={1}>
                  {tech}
                </Badge>
              ))}
            </HStack>

            <HStack gap={3}>
              <Button
                size="lg"
                colorScheme="whiteAlpha"
                bg="white"
                color="black"
                _hover={{ bg: 'whiteAlpha.800' }}
                px={8}
              >
                <HStack gap={2}>
                  <Play />
                  <Text>Découvrir</Text>
                </HStack>
              </Button>
              <Button
                size="lg"
                colorScheme="whiteAlpha"
                variant="outline"
                _hover={{ bg: 'whiteAlpha.200' }}
                px={8}
              >
                <HStack gap={2}>
                  <Info />
                  <Text>Plus d'infos</Text>
                </HStack>
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Categories */}
      <Box py={8}>
        <VStack gap={12} align="stretch">
          {categories.map(category => (
            <ScrollContainer key={category.id} title={category.name}>
              {category.projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ScrollContainer>
          ))}
        </VStack>
      </Box>

      {/* Fixed Navigation */}
      <HStack
        position="fixed"
        top={0}
        left={0}
        right={0}
        p={6}
        zIndex={100}
        bgGradient="linear(to-b, rgba(20,20,20,0.9) 0%, transparent 100%)"
      >
        <Container maxW="1400px">
          <HStack justify="space-between">
            <HStack gap={8}>
              <Text fontSize="2xl" fontWeight="black" color="red.500">
                PORTFOLIO
              </Text>
              <HStack gap={6} fontSize="sm">
                <Text cursor="pointer" _hover={{ color: 'whiteAlpha.700' }}>Accueil</Text>
                <Text cursor="pointer" _hover={{ color: 'whiteAlpha.700' }}>Projets</Text>
                <Text cursor="pointer" _hover={{ color: 'whiteAlpha.700' }}>Compétences</Text>
                <Text cursor="pointer" _hover={{ color: 'whiteAlpha.700' }}>Contact</Text>
              </HStack>
            </HStack>
            <Button size="sm" colorScheme="red">
              Télécharger CV
            </Button>
          </HStack>
        </Container>
      </HStack>
    </Box>
  );
};

export default NetflixPortfolio;
