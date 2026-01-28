import { Box, Container, Text, VStack, HStack, Grid, Badge } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/progress';
import { TrendingUp, Award, Code, Users, Zap, Target, Calendar, GitBranch } from 'lucide-react';

const DashboardPortfolio = () => {

  const kpis = [
    { 
      label: 'Projets Complétés', 
      value: '24', 
      change: '+12%', 
      trend: 'increase',
      icon: Award,
      color: '#10b981'
    },
    { 
      label: 'Technologies Maîtrisées', 
      value: '18', 
      change: '+4', 
      trend: 'increase',
      icon: Code,
      color: '#3b82f6'
    },
    { 
      label: 'Taux de Satisfaction', 
      value: '98%', 
      change: '+5%', 
      trend: 'increase',
      icon: Users,
      color: '#8b5cf6'
    },
    { 
      label: 'Lignes de Code', 
      value: '150k+', 
      change: '+23k', 
      trend: 'increase',
      icon: GitBranch,
      color: '#f59e0b'
    }
  ];

  const skills = [
    { name: 'React & TypeScript', level: 95, projects: 12, hours: 850 },
    { name: 'Node.js & Express', level: 85, projects: 8, hours: 620 },
    { name: 'UI/UX Design', level: 90, projects: 15, hours: 740 },
    { name: 'PostgreSQL & MongoDB', level: 80, projects: 10, hours: 530 },
    { name: 'DevOps & Cloud', level: 75, projects: 6, hours: 450 },
    { name: 'API Architecture', level: 88, projects: 9, hours: 680 }
  ];

  const timeline = [
    { 
      quarter: 'Q1 2024', 
      completed: 8,
      projects: [
        { name: 'E-commerce Platform', impact: 'high', tech: 'React, Node.js' },
        { name: 'Dashboard Analytics', impact: 'high', tech: 'TypeScript, D3.js' }
      ]
    },
    { 
      quarter: 'Q2 2024', 
      completed: 6,
      projects: [
        { name: 'Mobile App Backend', impact: 'medium', tech: 'Express, MongoDB' },
        { name: 'Design System', impact: 'high', tech: 'Storybook, Figma' }
      ]
    },
    { 
      quarter: 'Q3 2024', 
      completed: 7,
      projects: [
        { name: 'API Gateway', impact: 'high', tech: 'Node.js, Redis' },
        { name: 'Client Portal', impact: 'medium', tech: 'React, Chakra UI' }
      ]
    },
    { 
      quarter: 'Q4 2024', 
      completed: 9,
      projects: [
        { name: 'Real-time Chat', impact: 'high', tech: 'Socket.io, React' },
        { name: 'Payment Integration', impact: 'critical', tech: 'Stripe, Node.js' }
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    const colors: Record<string, string> = {
      critical: '#ef4444',
      high: '#10b981',
      medium: '#f59e0b',
      low: '#6b7280'
    };
    return colors[impact] || colors.low;
  };

  return (
    <Box minH="100vh" bg="#0a0e1a" color="white">
      {/* Header */}
      <Box bg="rgba(15, 23, 42, 0.8)" backdropFilter="blur(20px)" borderBottom="1px solid" borderColor="whiteAlpha.100">
        <Container maxW="1400px" py={4}>
          <HStack justify="space-between">
            <HStack gap={3}>
              <Box bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" p={2} borderRadius="lg">
                <TrendingUp size={24} />
              </Box>
              <VStack align="start" gap={0}>
                <Text fontSize="2xl" fontWeight="black">Performance Dashboard</Text>
                <Text fontSize="sm" color="whiteAlpha.600">Portfolio Analytics • Dernière mise à jour: Aujourd'hui</Text>
              </VStack>
            </HStack>
            <HStack gap={2}>
              <Badge colorScheme="green" fontSize="sm" px={3} py={1}>En ligne</Badge>
              <Badge colorScheme="purple" fontSize="sm" px={3} py={1}>BUT 3</Badge>
            </HStack>
          </HStack>
        </Container>
      </Box>

      <Container maxW="1400px" py={8}>
        <VStack gap={8} align="stretch">

          {/* KPIs Grid */}
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {kpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <Box
                  key={idx}
                  bg="linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)"
                  p={6}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: `0 20px 40px ${kpi.color}30`,
                    borderColor: kpi.color
                  }}
                >
                  {/* Glow effect */}
                  <Box
                    position="absolute"
                    top="-50%"
                    right="-50%"
                    width="200%"
                    height="200%"
                    bg={`radial-gradient(circle, ${kpi.color}20 0%, transparent 70%)`}
                    pointerEvents="none"
                  />
                  
                  <VStack align="start" gap={3} position="relative">
                    <HStack justify="space-between" w="100%">
                      <Box bg={kpi.color + '20'} p={2} borderRadius="lg">
                        <Icon color={kpi.color} size={20} />
                      </Box>
                      <Badge
                        bg={kpi.trend === 'increase' ? 'green.500' : 'red.500'}
                        color="white"
                        fontSize="xs"
                        px={2}
                      >
                        {kpi.change}
                      </Badge>
                    </HStack>
                    <Box>
                      <Text fontSize="3xl" fontWeight="black">{kpi.value}</Text>
                      <Text fontSize="sm" color="whiteAlpha.600">{kpi.label}</Text>
                    </Box>
                  </VStack>
                </Box>
              );
            })}
          </Grid>

          {/* Main Content Grid */}
          <Grid templateColumns="2fr 1fr" gap={6}>
            
            {/* Skills Chart */}
            <Box
              bg="linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)"
              p={6}
              borderRadius="2xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
            >
              <HStack justify="space-between" mb={6}>
                <VStack align="start" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">Niveau de Compétences</Text>
                  <Text fontSize="sm" color="whiteAlpha.600">Progression et expérience acquise</Text>
                </VStack>
                <Target color="#667eea" size={24} />
              </HStack>

              <VStack gap={5} align="stretch">
                {skills.map((skill, idx) => (
                  <Box 
                    key={idx}
                    p={4}
                    bg="whiteAlpha.50"
                    borderRadius="xl"
                    transition="all 0.3s"
                    _hover={{ bg: 'whiteAlpha.100', transform: 'translateX(8px)' }}
                  >
                    <HStack justify="space-between" mb={2}>
                      <Text fontWeight="bold">{skill.name}</Text>
                      <HStack gap={4} fontSize="sm" color="whiteAlpha.600">
                        <HStack gap={1}>
                          <Award size={14} />
                          <Text>{skill.projects} projets</Text>
                        </HStack>
                        <HStack gap={1}>
                          <Calendar size={14} />
                          <Text>{skill.hours}h</Text>
                        </HStack>
                      </HStack>
                    </HStack>
                    <HStack gap={3}>
                      <Progress
                        value={skill.level} 
                        flex={1}
                        h="8px"
                        borderRadius="full"
                        bg="whiteAlpha.200"
                        sx={{
                          '& > div': {
                            background: `linear-gradient(90deg, #667eea ${skill.level}%, #764ba2 100%)`
                          }
                        }}
                      />
                      <Text fontSize="sm" fontWeight="bold" minW="45px">{skill.level}%</Text>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Activity Feed */}
            <Box
              bg="linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)"
              p={6}
              borderRadius="2xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
            >
              <HStack justify="space-between" mb={6}>
                <VStack align="start" gap={0}>
                  <Text fontSize="xl" fontWeight="bold">Activité Récente</Text>
                  <Text fontSize="sm" color="whiteAlpha.600">Derniers projets livrés</Text>
                </VStack>
                <Zap color="#f59e0b" size={24} />
              </HStack>

              <VStack gap={4} align="stretch">
                {timeline.slice().reverse().map((period, idx) => (
                  <Box key={idx}>
                    <HStack justify="space-between" mb={3}>
                      <Text fontSize="sm" fontWeight="bold" color="#667eea">{period.quarter}</Text>
                      <Badge colorScheme="purple">{period.completed} complétés</Badge>
                    </HStack>
                    <VStack gap={2} align="stretch" pl={4} borderLeft="2px solid" borderColor="whiteAlpha.200">
                      {period.projects.map((project, pIdx) => (
                        <Box
                          key={pIdx}
                          p={3}
                          bg="whiteAlpha.50"
                          borderRadius="lg"
                          borderLeft="3px solid"
                          borderLeftColor={getImpactColor(project.impact)}
                        >
                          <Text fontSize="sm" fontWeight="bold" mb={1}>{project.name}</Text>
                          <Text fontSize="xs" color="whiteAlpha.600">{project.tech}</Text>
                        </Box>
                      ))}
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </Box>
          </Grid>

          {/* Performance Bars */}
          <Box
            bg="linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)"
            p={6}
            borderRadius="2xl"
            border="1px solid"
            borderColor="whiteAlpha.100"
          >
            <Text fontSize="xl" fontWeight="bold" mb={6}>Performance Trimestrielle</Text>
            <HStack gap={4} align="end" h="200px">
              {timeline.map((period, idx) => (
                <VStack key={idx} flex={1} h="100%" justify="end" gap={2}>
                  <Box
                    w="100%"
                    h={`${(period.completed / 10) * 100}%`}
                    bg={`linear-gradient(180deg, #667eea 0%, #764ba2 100%)`}
                    borderRadius="lg"
                    position="relative"
                    transition="all 0.5s"
                    _hover={{
                      transform: 'scaleY(1.05)',
                      boxShadow: '0 0 30px rgba(102, 126, 234, 0.6)'
                    }}
                    style={{ transformOrigin: 'bottom' }}
                  >
                    <Text
                      position="absolute"
                      top="-25px"
                      left="50%"
                      transform="translateX(-50%)"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      {period.completed}
                    </Text>
                  </Box>
                  <Text fontSize="sm" color="whiteAlpha.600">{period.quarter}</Text>
                </VStack>
              ))}
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default DashboardPortfolio;
