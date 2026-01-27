import { Box, Icon } from '@chakra-ui/react'
import { Star } from 'lucide-react'

interface DecorativeCornersProps {
  color?: string
}

export const DecorativeCorners = ({ color = "brown.400" }: DecorativeCornersProps) => (
  <Box pointerEvents="none" position="absolute" inset={0} overflow="hidden" borderRadius="2xl">
    {/* Coin haut-gauche */}
    <Box position="absolute" top={0} left={0}>
      <Box w="40px" h="40px" borderTop="3px solid" borderLeft="3px solid" borderColor={color} borderTopLeftRadius="2xl" />
      <Icon position="absolute" top="-8px" left="-8px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin haut-droite */}
    <Box position="absolute" top={0} right={0}>
      <Box w="40px" h="40px" borderTop="3px solid" borderRight="3px solid" borderColor={color} borderTopRightRadius="2xl" />
      <Icon position="absolute" top="-8px" right="-8px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin bas-gauche */}
    <Box position="absolute" bottom={0} left={0}>
      <Box w="40px" h="40px" borderBottom="3px solid" borderLeft="3px solid" borderColor={color} borderBottomLeftRadius="2xl" />
      <Icon position="absolute" bottom="-8px" left="-8px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin bas-droite */}
    <Box position="absolute" bottom={0} right={0}>
      <Box w="40px" h="40px" borderBottom="3px solid" borderRight="3px solid" borderColor={color} borderBottomRightRadius="2xl" />
      <Icon position="absolute" bottom="-8px" right="-8px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
  </Box>
)

interface CottageCardProps {
  children: React.ReactNode
  accentColor?: string
}

export const CottageCard = ({ children, accentColor = "brown.400" }: CottageCardProps) => {
  return (
    <Box
      position="relative"
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
      border="4px solid"
      borderColor={accentColor}
      p={6}
      overflow="hidden"
    >
      <DecorativeCorners color={accentColor} />
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
      {/* Effet de papier naturel */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        bgGradient="linear(to-br, yellow.200, orange.200)"
        pointerEvents="none"
      />
    </Box>
  )
}

