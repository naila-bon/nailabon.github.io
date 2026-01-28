import React, { useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  Text,
  Image,
  Link,
  SimpleGrid,
  Button,
  CloseButton
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody
} from '@chakra-ui/modal';
import { Mail, User, Briefcase, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Types pour la navigation
type PageType = 'accueil' | 'projets' | 'competences' | 'contact';

// Composant pour les onglets (Marque-pages)
const Bookmark = ({ type, icon, label, color, activePage, setActivePage }: { type: PageType, icon: LucideIcon, label: string, color: string, activePage: PageType, setActivePage: (page: PageType) => void }) => (
  <Box
    as="button"
    onClick={() => setActivePage(type)}
    position="relative"
    bg={activePage === type ? color : 'gray.200'}
    p={3}
    mb={2}
    borderRightRadius="md"
    boxShadow="md"
    transition="0.3s"
    _hover={{ transform: 'translateX(5px)', bg: color }}
    display="flex"
    alignItems="center"
    width="160px"
    left="-10px"
  >
    {React.createElement(icon, { size: 18, style: { marginRight: 10 } })}
    <Text fontWeight="bold" fontSize="sm">{label}</Text>
  </Box>
);

const ScrapbookPortfolio = () => {
  const [activePage, setActivePage] = useState<PageType>('accueil');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{title: string, description: string} | null>(null);

  const handlePageClick = (type: PageType) => {
    setActivePage(type);
  };

  const handleProjectClick = (project: {title: string, description: string}) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box bg="#e9e4d9" minH="100vh" p={10} fontFamily="'Segoe UI', sans-serif">
      <Flex maxW="1000px" mx="auto" position="relative">

        {/* Navigation Marque-pages (Always on top) */}
        <Stack position="absolute" left="-150px" top="50px" zIndex={10} gap={0}>
          <Bookmark type="accueil" icon={User} label="Présentation" color="#ffadad" activePage={activePage} setActivePage={handlePageClick} />
          <Bookmark type="projets" icon={Briefcase} label="Mes Projets" color="#ffd6a5" activePage={activePage} setActivePage={handlePageClick} />
          <Bookmark type="competences" icon={Award} label="Compétences" color="#fdffb6" activePage={activePage} setActivePage={handlePageClick} />
          <Bookmark type="contact" icon={Mail} label="Contact & CV" color="#caffbf" activePage={activePage} setActivePage={handlePageClick} />
        </Stack>

        {/* Le Livre (Conteneur principal) */}
        <Box
          bg="#fffef0"
          w="full"
          minH="700px"
          boxShadow="2xl"
          borderRadius="sm"
          border="1px solid #d1cebd"
          p={12}
          position="relative"
          _before={{ // Effet reliure
            content: '""',
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '40px',
            background: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 100%)',
            borderRight: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          {/* Contenu Dynamique */}
          {activePage === 'accueil' && (
            <>
              <Stack gap={6} align="start">
                <Flex align="center" w="full">
                  <Box border="8px solid white" boxShadow="lg" transform="rotate(-2deg)">
                    <Image src="votre-photo.jpg" alt="Photo" w="200px" />
                  </Box>
                  <Stack gap={2} ml={6}>
                    <Text fontSize="2xl" fontWeight="bold">Votre Nom</Text>
                    <Text fontSize="lg" color="gray.600">Développeur Full-Stack</Text>
                    <Text fontSize="md" color="gray.500">Passionné par le développement web moderne</Text>
                  </Stack>
                </Flex>
                <Text fontSize="lg" color="gray.700">Bienvenue dans mon portfolio scrapbook !</Text>
              </Stack>
            </>
          )}
          {activePage === 'projets' && (
            <SimpleGrid columns={2} gap={6}>
              <Box p={4} bg="white" borderRadius="md" boxShadow="md">
                <Text fontSize="xl" fontWeight="bold">Projet 1</Text>
                <Text>Description du projet 1</Text>
                <Button onClick={() => handleProjectClick({title: 'Projet 1', description: 'Description détaillée du projet 1'})}>Voir plus</Button>
              </Box>
              <Box p={4} bg="white" borderRadius="md" boxShadow="md">
                <Text fontSize="xl" fontWeight="bold">Projet 2</Text>
                <Text>Description du projet 2</Text>
                <Button onClick={() => handleProjectClick({title: 'Projet 2', description: 'Description détaillée du projet 2'})}>Voir plus</Button>
              </Box>
            </SimpleGrid>
          )}
          {activePage === 'competences' && (
            <Stack gap={4}>
              <Text fontSize="2xl" fontWeight="bold">Mes Compétences</Text>
              <Text>React, TypeScript, Node.js, etc.</Text>
            </Stack>
          )}
          {activePage === 'contact' && (
            <Stack gap={4}>
              <Text fontSize="2xl" fontWeight="bold">Contact</Text>
              <Link href="mailto:email@example.com">Email</Link>
              <Link href="https://github.com/username">GitHub</Link>
            </Stack>
          )}
        </Box>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <CloseButton />
          <ModalBody>
            <Text>{selectedProject?.description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ScrapbookPortfolio;
