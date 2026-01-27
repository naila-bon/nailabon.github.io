import { Box, Icon } from '@chakra-ui/react'
import { Star } from 'lucide-react'

interface DecorativeCornersProps {
  color?: string
}

export const DecorativeCorners = ({ color = "brown.600" }: DecorativeCornersProps) => (
  <Box pointerEvents="none" position="absolute" inset={0} overflow="hidden" borderRadius="2xl">
    {/* Coin haut-gauche */}
    <Box position="absolute" top={0} left={0}>
      <Box w="30px" h="30px" borderTop="3px solid" borderLeft="3px solid" borderColor={color} borderTopLeftRadius="xl" />
      <Icon position="absolute" top="-6px" left="-6px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin haut-droite */}
    <Box position="absolute" top={0} right={0}>
      <Box w="30px" h="30px" borderTop="3px solid" borderRight="3px solid" borderColor={color} borderTopRightRadius="xl" />
      <Icon position="absolute" top="-6px" right="-6px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin bas-gauche */}
    <Box position="absolute" bottom={0} left={0}>
      <Box w="30px" h="30px" borderBottom="3px solid" borderLeft="3px solid" borderColor={color} borderBottomLeftRadius="xl" />
      <Icon position="absolute" bottom="-6px" left="-6px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin bas-droite */}
    <Box position="absolute" bottom={0} right={0}>
      <Box w="30px" h="30px" borderBottom="3px solid" borderRight="3px solid" borderColor={color} borderBottomRightRadius="xl" />
      <Icon position="absolute" bottom="-6px" right="-6px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
  </Box>
)

interface WoodCardProps {
  children: React.ReactNode
  accentColor?: string
}

export const CottageCard = ({ children, accentColor = "brown.600" }: WoodCardProps) => {
  return (
    <Box
      position="relative"
      bgGradient="linear(to-br, #8B4513, #A0522D, #CD853F)"
      borderRadius="2xl"
      boxShadow="2xl"
      border="4px solid"
      borderColor={accentColor}
      p={1}
      overflow="hidden"
    >
      {/* Wood texture effect */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.1}
        bgImage="repeating-linear-gradient(90deg, transparent, transparent 2px, #000 2px, #000 4px)"
        pointerEvents="none"
      />
      <DecorativeCorners color={accentColor} />
      <Box
        position="relative"
        bgGradient="linear(to-br, #DEB887, #F5DEB3)"
        borderRadius="xl"
        p={6}
      >
        <Box position="relative" zIndex={1}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

