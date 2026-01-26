import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Text, VStack, HStack, Input, Link } from '@chakra-ui/react';
import { Terminal, Code, Briefcase, Mail, User, ChevronRight } from 'lucide-react';

const TerminalPortfolio = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '> Initialisation du portfolio...' },
    { type: 'success', text: '> Système prêt. Tapez "help" pour commencer.' }
  ]);
  const inputRef = useRef(null);
  const historyEndRef = useRef(null);

  const commands = {
    help: {
      desc: 'Liste des commandes disponibles',
      action: () => [
        { type: 'info', text: '═══════════════════════════════════════' },
        { type: 'command', text: 'help      - Afficher cette aide' },
        { type: 'command', text: 'about     - À propos de moi' },
        { type: 'command', text: 'skills    - Mes compétences techniques' },
        { type: 'command', text: 'projects  - Mes projets et réalisations' },
        { type: 'command', text: 'contact   - Me contacter' },
        { type: 'command', text: 'clear     - Effacer le terminal' },
        { type: 'info', text: '═══════════════════════════════════════' }
      ]
    },
    about: {
      desc: 'En savoir plus sur moi',
      action: () => [
        { type: 'header', text: '┌─ PROFIL ────────────────────────────┐' },
        { type: 'info', text: '│ Nom: [Ton Nom]                       │' },
        { type: 'info', text: '│ Formation: BUT Informatique          │' },
        { type: 'info', text: '│ Spécialité: Développement Web        │' },
        { type: 'info', text: '│ Passionné par le code propre et      │' },
        { type: 'info', text: '│ les interfaces modernes              │' },
        { type: 'header', text: '└──────────────────────────────────────┘' }
      ]
    },
    skills: {
      desc: 'Compétences techniques',
      action: () => [
        { type: 'header', text: '╔══ COMPÉTENCES ══════════════════════╗' },
        { type: 'skill', text: '  ▸ Frontend     ████████░░  80%' },
        { type: 'skill', text: '  ▸ Backend      ███████░░░  70%' },
        { type: 'skill', text: '  ▸ DevOps       ██████░░░░  60%' },
        { type: 'skill', text: '  ▸ UI/UX        ████████░░  85%' },
        { type: 'header', text: '╚═════════════════════════════════════╝' },
        { type: 'info', text: 'Technologies: React, TypeScript, Node.js...' }
      ]
    },
    projects: {
      desc: 'Projets réalisés',
      action: () => [
        { type: 'project', text: '[1] E-commerce Platform' },
        { type: 'info', text: '    → Stack: React, Node.js, MongoDB' },
        { type: 'info', text: '    → Intégration paiement, gestion stock' },
        { type: 'project', text: '[2] Dashboard Analytics' },
        { type: 'info', text: '    → Stack: TypeScript, Chakra UI' },
        { type: 'info', text: '    → Visualisation données temps réel' },
        { type: 'project', text: '[3] API RESTful' },
        { type: 'info', text: '    → Stack: Express, PostgreSQL' },
        { type: 'info', text: '    → Architecture microservices' }
      ]
    },
    contact: {
      desc: 'Informations de contact',
      action: () => [
        { type: 'success', text: '📧 Email: contact@exemple.fr' },
        { type: 'success', text: '🔗 LinkedIn: linkedin.com/in/...' },
        { type: 'success', text: '💼 GitHub: github.com/...' },
        { type: 'success', text: '📱 Téléphone: +33 6 XX XX XX XX' }
      ]
    },
    clear: {
      desc: 'Effacer le terminal',
      action: () => 'clear'
    }
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `> ${cmd}` }];

    if (trimmedCmd === '') {
      setHistory(newHistory);
      return;
    }

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd].action();
      setHistory([...newHistory, ...result]);
    } else {
      setHistory([
        ...newHistory,
        { type: 'error', text: `Commande "${cmd}" non reconnue. Tapez "help" pour l'aide.` }
      ]);
    }
  };

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const getTextColor = (type) => {
    switch (type) {
      case 'system': return '#00ff41';
      case 'success': return '#00ff41';
      case 'error': return '#ff0055';
      case 'info': return '#00d4ff';
      case 'command': return '#ffaa00';
      case 'header': return '#ff00ff';
      case 'skill': return '#00ffaa';
      case 'project': return '#ffff00';
      case 'input': return '#ffffff';
      default: return '#cccccc';
    }
  };

  return (
    <Box 
      minH="100vh" 
      bg="linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)"
      p={4}
      position="relative"
      overflow="hidden"
    >
      {/* Effet scanline */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        pointerEvents="none"
        opacity={0.03}
        backgroundImage="repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)"
        animation="scanline 8s linear infinite"
        sx={{
          '@keyframes scanline': {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(20px)' }
          }
        }}
      />

      <Container maxW="1200px" py={8}>
        <VStack align="stretch" spacing={6}>
          {/* Header */}
          <HStack 
            bg="rgba(0, 255, 65, 0.1)" 
            p={4} 
            borderRadius="lg"
            border="1px solid"
            borderColor="rgba(0, 255, 65, 0.3)"
            boxShadow="0 0 20px rgba(0, 255, 65, 0.2)"
          >
            <Terminal color="#00ff41" size={24} />
            <Text 
              color="#00ff41" 
              fontFamily="'Courier New', monospace"
              fontSize="xl"
              fontWeight="bold"
              textShadow="0 0 10px rgba(0, 255, 65, 0.5)"
            >
              portfolio.exe v2.0.1
            </Text>
          </HStack>

          {/* Terminal Window */}
          <Box
            bg="rgba(0, 0, 0, 0.8)"
            borderRadius="lg"
            border="2px solid"
            borderColor="rgba(0, 255, 65, 0.4)"
            boxShadow="0 0 40px rgba(0, 255, 65, 0.3), inset 0 0 60px rgba(0, 255, 65, 0.05)"
            p={6}
            minH="500px"
            maxH="70vh"
            overflowY="auto"
            position="relative"
            onClick={() => inputRef.current?.focus()}
            cursor="text"
            css={{
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(0, 255, 65, 0.1)',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(0, 255, 65, 0.4)',
                borderRadius: '4px',
              },
            }}
          >
            <VStack align="stretch" spacing={2} fontFamily="'Courier New', monospace">
              {history.map((line, idx) => (
                <Text
                  key={idx}
                  color={getTextColor(line.type)}
                  fontSize="sm"
                  whiteSpace="pre-wrap"
                  textShadow={`0 0 8px ${getTextColor(line.type)}40`}
                  animation={line.type === 'input' ? 'none' : 'fadeIn 0.3s ease-in'}
                  sx={{
                    '@keyframes fadeIn': {
                      '0%': { opacity: 0, transform: 'translateX(-10px)' },
                      '100%': { opacity: 1, transform: 'translateX(0)' }
                    }
                  }}
                >
                  {line.text}
                </Text>
              ))}
              
              {/* Input line */}
              <form onSubmit={handleSubmit}>
                <HStack spacing={2} pt={2}>
                  <ChevronRight color="#00ff41" size={16} />
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    variant="unstyled"
                    color="#ffffff"
                    fontFamily="'Courier New', monospace"
                    fontSize="sm"
                    placeholder="Tapez une commande..."
                    _placeholder={{ color: 'rgba(255, 255, 255, 0.3)' }}
                    autoFocus
                    spellCheck={false}
                  />
                </HStack>
              </form>
              <div ref={historyEndRef} />
            </VStack>
          </Box>

          {/* Footer hints */}
          <HStack 
            justify="center" 
            spacing={4} 
            fontSize="sm" 
            color="rgba(0, 255, 65, 0.6)"
            fontFamily="'Courier New', monospace"
          >
            <Text>💡 Astuce: Tapez "help" pour commencer</Text>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default TerminalPortfolio;
