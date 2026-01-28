import {
  Box,
  VStack,
  Text,
  Image,
  HStack,
  Badge,
  Link,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Github, Mail, Linkedin, ExternalLink, Code, Zap, Server, Database, Briefcase, Users, Cpu } from "lucide-react";
import WashiTape from "./WashiTape";
import { getSkillKey } from "../data/bookPortfolioData";

interface PageContentProps {
  data: any;
  isLeft: boolean;
  isMobile?: boolean;
}

const PageContent = ({ data, isLeft, isMobile }: PageContentProps) => {
  const pageBg = "#fffdf0";
  const borderColor = "#e2e2d0";

  const commonStyles = {
    p: isMobile ? 3 : 6,
    h: "100%",
    bg: pageBg,
    position: "relative" as const,
    borderRadius: "8px",
    border: `2px solid ${borderColor}`,
    boxShadow: isLeft
      ? "inset -10px 0 20px rgba(0,0,0,0.05)"
      : "inset 10px 0 20px rgba(0,0,0,0.05)",
    overflow: "hidden" as const,
  };

  const skillColors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff"];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail size={16} />;
      case 'Linkedin': return <Linkedin size={16} />;
      case 'Github': return <Github size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  const getSkillIcon = (iconName?: string) => {
    const size = 24;
    const color = "#5d4037";
    switch (iconName) {
      case 'Code': return <Code size={size} color={color} />;
      case 'Zap': return <Zap size={size} color={color} />;
      case 'Server': return <Server size={size} color={color} />;
      case 'Database': return <Database size={size} color={color} />;
      case 'Briefcase': return <Briefcase size={size} color={color} />;
      case 'Users': return <Users size={size} color={color} />;
      default: return <Cpu size={size} color={color} />;
    }
  };

  const getCtaVariant = (variant?: string) => {
    switch (variant) {
      case 'primary': return '#5d4037';
      case 'secondary': return '#8d6e63';
      default: return '#5d4037';
    }
  };

  switch (data.type) {
    case "accueil":
      return (
        <VStack
          {...commonStyles}
          align="center"
          justify="start"
          gap={4}
        >
          {/* Washi Tape décorative pour la photo */}
          <Box position="absolute" top="60px" zIndex={2}>
            <Box
              bg="#ffb6c1"
              px={4}
              py={1}
              transform="rotate(-3deg)"
              boxShadow="sm"
            />
          </Box>
          
          {/* Photo avec cadre décoratif */}
          <Box
            border={isMobile ? "4px solid white" : "6px solid white"}
            boxShadow="lg"
            transform="rotate(-2deg)"
            mt={isMobile ? 2 : 4}
            position="relative"
          >
            <Image 
              src={data.photo} 
              alt="Naïla Bon" 
              w={isMobile ? "100px" : "140px"} 
              h={isMobile ? "125px" : "175px"} 
              objectFit="cover" 
            />
          </Box>
          
          {/* Titre et sous-titre */}
          <VStack gap={1} textAlign="center">
            <Text 
              fontSize="xl" 
              fontWeight="bold" 
              fontFamily="serif"
              color="#5d4037"
              lineHeight="short"
            >
              {data.title}
            </Text>
            <Text 
              fontSize="sm" 
              color="#8d6e63"
              fontStyle="italic"
            >
              {data.subtitle}
            </Text>
          </VStack>
          
          {/* Ligne décorative */}
          <Box h="2px" w="80%" bg="#d4c9ba" />
          
          {/* Contenu de présentation */}
          <Text 
            color="#5d4037" 
            fontSize="xs" 
            lineHeight="tall" 
            whiteSpace="pre-line"
            textAlign="center"
            px={2}
          >
            {data.content}
          </Text>
          
          {/* Boutons CTA - Grille 2x2 */}
          {data.cta && (
            <SimpleGrid columns={2} gap={2} w="full" mt={2} px={2}>
              {data.cta.map((cta: any, index: number) => (
                <Button
                  key={index}
                  size="xs"
                  bg={getCtaVariant(cta.variant)}
                  color="white"
                  fontSize="10px"
                  py={1}
                  px={2}
                  _hover={{ bg: "#4e342e", transform: "scale(1.02)" }}
                  transition="all 0.2s"
                  onClick={() => {
                    // Navigation par nom de page
                    const pageMap: Record<string, number> = {
                      'accueil': 0,
                      'parcours': 1,
                      'competences': 2,
                      'projets': 4,
                      'contact': 6
                    };
                    const targetPage = pageMap[cta.link.toLowerCase()];
                    if (targetPage !== undefined) {
                      const event = new CustomEvent('navigateToPage', { detail: targetPage });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  {cta.label}
                </Button>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      );

    case "parcours":
      return (
        <VStack {...commonStyles} align="start" gap={0}>
          <WashiTape color="#a0c4ff" />
          <Text 
            fontSize="xl" 
            fontWeight="bold" 
            color="#5d4037" 
            borderBottom="2px dashed #5d4037" 
            pb={2}
            w="full"
          >
            {data.title}
          </Text>
          
          {/* Timeline verticale avec ligne centrale */}
          <Box position="relative" w="full" mt={4} pl={4}>
            {/* Ligne verticale centrale */}
            <Box
              position="absolute"
              left="8px"
              top="0"
              bottom="0"
              w="2px"
              bg="linear-gradient(to bottom, #5d4037, #d4c9ba)"
              borderRadius="full"
            />
            
            <VStack align="start" gap={4} w="full">
              {data.items?.map((item: any, index: number) => (
                <Box key={index} position="relative" w="full" pl={6}>
                  {/* Point sur la timeline */}
                  <Box
                    position="absolute"
                    left="0"
                    top="6px"
                    w="4"
                    h="4"
                    bg="#5d4037"
                    borderRadius="full"
                    border="2px solid #fffdf0"
                    boxShadow="sm"
                  />
                  
                  {/* Carte avec style timeline */}
                  <Box
                    p={3}
                    bg="white"
                    borderRadius="md"
                    boxShadow="sm"
                    w="full"
                    borderTop="3px solid #5d4037"
                    transition="all 0.2s"
                    _hover={{ transform: "translateX(4px)", boxShadow: "md" }}
                  >
                    <HStack justify="space-between" wrap="wrap" mb={1}>
                      <Text fontSize="xs" fontWeight="bold" color="#5d4037" bg="#f5f0e6" px={2} py={0.5} borderRadius="sm">
                        {item.date}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" fontWeight="semibold" color="#3e2723">
                      {item.title}
                    </Text>
                    {item.subtitle && (
                      <Text fontSize="xs" color="#8d6e63" fontStyle="italic" mt={0.5}>
                        {item.subtitle}
                      </Text>
                    )}
                    <Text fontSize="xs" color="gray.600" mt={1} lineHeight="short">
                      {item.desc}
                    </Text>
                  </Box>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      );

    case "skills-left":
      // Vérifier si une compétence doit être mise en évidence
      const highlightSkillKeyLeft = typeof window !== 'undefined' ? sessionStorage.getItem('highlightSkill') : null;
      
      return (
        <VStack {...commonStyles} align="start" gap={2}>
          <WashiTape color="#caffbf" />
          <HStack justify="space-between" w="full">
            <Text fontSize="xl" fontWeight="bold" color="#5d4037" borderBottom="2px dashed #5d4037" pb={2}>
              {data.title}
            </Text>
          </HStack>
          <SimpleGrid columns={1} gap={2} w="full" mt={1}>
            {data.skills?.map((skill: any, index: number) => {
              const isHighlighted = skill.skillKey === highlightSkillKeyLeft;
              
              return (
                <Box
                  key={index}
                  p={3}
                  bg={isHighlighted ? "#e6fffa" : "white"}
                  borderRadius="md"
                  boxShadow={isHighlighted ? "lg" : "sm"}
                  borderTop="4px solid"
                  borderColor={isHighlighted ? "#38b2ac" : skillColors[index % skillColors.length]}
                  transition="all 0.2s"
                  _hover={{ transform: "scale(1.03)", boxShadow: "md", cursor: "pointer" }}
                  onClick={() => {
                    if (skill.highlightProject !== undefined) {
                      sessionStorage.setItem('highlightProject', skill.highlightProject.toString());
                      sessionStorage.removeItem('highlightSkill');
                      const event = new CustomEvent('navigateToPage', { detail: 4 });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  <VStack gap={2}>
                    {getSkillIcon(skill.icon)}
                    <Text fontSize="xs" fontWeight="bold" color={isHighlighted ? "#319795" : "#5d4037"} textAlign="center">
                      {skill.name}
                    </Text>
                    {skill.skillDescription && (
                      <Text fontSize="9px" color={isHighlighted ? "#319795" : "gray.600"} textAlign="center" lineHeight="short">
                        {skill.skillDescription}
                      </Text>
                    )}
                    {isHighlighted && (
                      <Badge colorScheme="teal" fontSize="xs">
                        ✨ Projet associé
                      </Badge>
                    )}
                  </VStack>
                </Box>
              );
            })}
          </SimpleGrid>
          <Text fontSize="xs" color="gray.500" textAlign="center" w="full" mt={2}>
            {highlightSkillKeyLeft ? 'Cliquez pour voir le projet associé' : 'Cliquez sur une compétence pour voir le projet associé'}
          </Text>
        </VStack>
      );

    case "skills-right":
      // Vérifier si une compétence doit être mise en évidence
      const highlightSkillKeyRight = typeof window !== 'undefined' ? sessionStorage.getItem('highlightSkill') : null;

      return (
        <VStack {...commonStyles} align="start" gap={2} pt={12}>
          <HStack justify="space-between" w="full">
        
            <Box />
          </HStack>
          <Box position="absolute" top="80px" left="50%" transform="translateX(-50%)">
            <WashiTape color="#caffbf" />
          </Box>
          <SimpleGrid columns={1} gap={2} w="full" mt={4}>
            {data.skills?.map((skill: any, index: number) => {
              const isHighlighted = skill.skillKey === highlightSkillKeyRight;
              
              return (
                <Box
                  key={index}
                  p={3}
                  bg={isHighlighted ? "#e6fffa" : "white"}
                  borderRadius="md"
                  boxShadow={isHighlighted ? "lg" : "sm"}
                  borderTop="4px solid"
                  borderColor={isHighlighted ? "#38b2ac" : skillColors[(index + 3) % skillColors.length]}
                  transition="all 0.2s"
                  _hover={{ transform: "scale(1.03)", boxShadow: "md", cursor: "pointer" }}
                  onClick={() => {
                    if (skill.highlightProject !== undefined) {
                      sessionStorage.setItem('highlightProject', skill.highlightProject.toString());
                      sessionStorage.removeItem('highlightSkill');
                      const event = new CustomEvent('navigateToPage', { detail: 4 });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  <VStack gap={2}>
                    {getSkillIcon(skill.icon)}
                    <Text fontSize="xs" fontWeight="bold" color={isHighlighted ? "#319795" : "#5d4037"} textAlign="center">
                      {skill.name}
                    </Text>
                    {skill.skillDescription && (
                      <Text fontSize="9px" color={isHighlighted ? "#319795" : "gray.600"} textAlign="center" lineHeight="short">
                        {skill.skillDescription}
                      </Text>
                    )}
                    {isHighlighted && (
                      <Badge colorScheme="teal" fontSize="xs">
                        ✨ Projet associé
                      </Badge>
                    )}
                  </VStack>
                </Box>
              );
            })}
          </SimpleGrid>
          <Text fontSize="xs" color="gray.500" textAlign="center" w="full" mt={2}>
            {highlightSkillKeyRight ? 'Cliquez pour voir le projet associé' : 'Cliquez sur une compétence pour voir le projet associé'}
          </Text>
        </VStack>
      );

    case "projects-grid-left":
      return (
        <VStack {...commonStyles} align="start" gap={3}>
          <HStack justify="space-between" w="full">
            <Text fontSize="xl" fontWeight="bold" color="#5d4037" borderBottom="2px dashed #5d4037" pb={2}>
              Mes Projets
            </Text>
          </HStack>
          
          {/* Grille de cartes projets - Page gauche */}
          <SimpleGrid columns={1} gap={3} w="full">
            {data.projects?.map((project: any, index: number) => (
              <Box
                key={project.id}
                p={3}
                bg="white"
                borderRadius="md"
                boxShadow="sm"
                borderTop="3px solid"
                borderColor={["#667eea", "#f093fb"][index % 2]}
                transition="all 0.2s"
                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
              >
                <VStack align="start" gap={2}>
                  <HStack justify="space-between" w="full" wrap="wrap">
                    <Text fontSize="sm" fontWeight="bold" color="#5d4037">
                      {project.title}
                    </Text>
                    {project.year && (
                      <Badge colorScheme="gray" fontSize="xs">
                        {project.year}
                      </Badge>
                    )}
                  </HStack>
                  
                  {project.award && (
                    <Badge colorScheme="yellow" fontSize="xs">
                      {project.award}
                    </Badge>
                  )}
                  
                  <Text fontSize="xs" color="gray.600" lineHeight="short">
                    {project.description}
                  </Text>
                  
                  <Box w="full">
                    <Text fontSize="xs" fontWeight="bold" color="#5d4037" mb={1}>
                      Technologies
                    </Text>
                    <HStack wrap="wrap" gap={1}>
                      {project.technologies.map((tech: string, i: number) => (
                        <Badge key={i} colorScheme="orange" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                  
                  <Box w="full">
                    <Text fontSize="xs" fontWeight="bold" color="#5d4037" mb={1}>
                      Compétences
                    </Text>
                    <HStack wrap="wrap" gap={1}>
                      {project.projectSkills.map((skill: string, i: number) => (
                        <Badge 
                          key={i} 
                          colorScheme="blue" 
                          fontSize="xs"
                          cursor="pointer"
                          _hover={{ bg: "blue.500", transform: "scale(1.05)" }}
                          transition="all 0.2s"
                          onClick={() => {
                            const skillKey = getSkillKey(skill);
                            sessionStorage.setItem('highlightSkill', skillKey);
                            const event = new CustomEvent('navigateToPage', { detail: 2 });
                            window.dispatchEvent(event);
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                  
                  {project.link && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" w="full">
                      <Button 
                        size="xs" 
                        bg="#5d4037" 
                        color="white" 
                        _hover={{ bg: "#4e342e" }} 
                        w="full"
                      >
                        Voir sur GitHub
                      </Button>
                    </Link>
                  )}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      );

    case "projects-grid-right":
      return (
        <VStack {...commonStyles} align="start" gap={3}>
          <HStack justify="space-between" w="full">
            <Box />
          </HStack>
          
          {/* Grille de cartes projets - Page droite */}
          <SimpleGrid columns={1} gap={3} w="full" mt={10}>
            {data.projects?.map((project: any, index: number) => (
              <Box
                key={project.id}
                p={3}
                bg="white"
                borderRadius="md"
                boxShadow="sm"
                borderTop="3px solid"
                borderColor={["#43e97b", "#a0c4ff"][index % 2]}
                transition="all 0.2s"
                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
              >
                <VStack align="start" gap={2}>
                  <HStack justify="space-between" w="full" wrap="wrap">
                    <Text fontSize="sm" fontWeight="bold" color="#5d4037">
                      {project.title}
                    </Text>
                    {project.year && (
                      <Badge colorScheme="gray" fontSize="xs">
                        {project.year}
                      </Badge>
                    )}
                  </HStack>
                  
                  {project.award && (
                    <Badge colorScheme="yellow" fontSize="xs">
                      {project.award}
                    </Badge>
                  )}
                  
                  <Text fontSize="xs" color="gray.600" lineHeight="short">
                    {project.description}
                  </Text>
                  
                  <Box w="full">
                    <Text fontSize="xs" fontWeight="bold" color="#5d4037" mb={1}>
                      Technologies
                    </Text>
                    <HStack wrap="wrap" gap={1}>
                      {project.technologies.map((tech: string, i: number) => (
                        <Badge key={i} colorScheme="orange" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                  
                  <Box w="full">
                    <Text fontSize="xs" fontWeight="bold" color="#5d4037" mb={1}>
                      Compétences
                    </Text>
                    <HStack wrap="wrap" gap={1}>
                      {project.projectSkills.map((skill: string, i: number) => (
                        <Badge 
                          key={i} 
                          colorScheme="blue" 
                          fontSize="xs"
                          cursor="pointer"
                          _hover={{ bg: "blue.500", transform: "scale(1.05)" }}
                          transition="all 0.2s"
                          onClick={() => {
                            const skillKey = getSkillKey(skill);
                            sessionStorage.setItem('highlightSkill', skillKey);
                            const event = new CustomEvent('navigateToPage', { detail: 2 });
                            window.dispatchEvent(event);
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                  
                  {project.link && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" w="full">
                      <Button 
                        size="xs" 
                        bg="#5d4037" 
                        color="white" 
                        _hover={{ bg: "#4e342e" }} 
                        w="full"
                      >
                        Voir sur GitHub
                      </Button>
                    </Link>
                  )}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      );

    case "contact":
      return (
        <VStack {...commonStyles} justify="start" gap={3}>
          <WashiTape color="#ffadad" />
          <Text fontSize="xl" fontWeight="bold" color="#5d4037" borderBottom="2px dashed #5d4037" pb={2}>
            {data.title}
          </Text>
          {data.content && (
            <Text fontSize="xs" color="gray.600" textAlign="center" whiteSpace="pre-line">
              {data.content}
            </Text>
          )}
          <VStack gap={2} align="start" w="full" mt={1}>
            {data.socials?.map((social: any, index: number) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap={2}
                color="#5d4037"
                fontSize="sm"
                _hover={{ color: "#8d6e63" }}
              >
                {getIconComponent(social.icon)}
                {social.platform}
              </Link>
            ))}
          </VStack>
          {data.items && (
            <VStack align="start" gap={2} w="full" mt={2}>
              {data.items.map((item: any, index: number) => (
                <Box key={index} p={2} bg="white" borderRadius="sm" w="full">
                  <Text fontSize="xs" fontWeight="bold" color="#5d4037">
                    {item.date}
                  </Text>
                  <Text fontSize="xs" fontWeight="semibold">
                    {item.title}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {item.desc}
                  </Text>
                </Box>
              ))}
            </VStack>
          )}
          <Link 
            href="/CV_Bon_Naïla.pdf" 
            download
            w="full"
            mt={2}
          >
            <Button 
              size="sm" 
              bg="#5d4037" 
              color="white" 
              _hover={{ bg: "#4e342e" }} 
              w="full"
            >
              📄 Télécharger mon CV
            </Button>
          </Link>
        </VStack>
      );

    case "back-cover":
      return <Box {...commonStyles} bg="#5d4037" border="8px solid #4e342e" />;

    default:
      return <Box {...commonStyles} />;
  }
};

export default PageContent;

