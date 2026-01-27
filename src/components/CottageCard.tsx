import { Box, Icon } from '@chakra-ui/react'
import { Star } from 'lucide-react'

interface DecorativeCornersProps {
  color?: string
}

export const DecorativeCorners = ({ color = "brown.700" }: DecorativeCornersProps) => (
  <Box pointerEvents="none" position="absolute" inset={0} overflow="hidden" borderRadius="2xl">
    {/* Coin haut-gauche */}
    <Box position="absolute" top={0} left={0}>
      <Box w="30px" h="30px" borderTop="4px solid" borderLeft="4px solid" borderColor={color} borderTopLeftRadius="xl" />
      <Icon position="absolute" top="-8px" left="-8px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin haut-droite */}
    <Box position="absolute" top={0} right={0}>
      <Box w="30px" h="30px" borderTop="4px solid" borderRight="4px solid" borderColor={color} borderTopRightRadius="xl" />
      <Icon position="absolute" top="-8px" right="-8px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin bas-gauche */}
    <Box position="absolute" bottom={0} left={0}>
      <Box w="30px" h="30px" borderBottom="4px solid" borderLeft="4px solid" borderColor={color} borderBottomLeftRadius="xl" />
      <Icon position="absolute" bottom="-8px" left="-8px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
    {/* Coin bas-droite */}
    <Box position="absolute" bottom={0} right={0}>
      <Box w="30px" h="30px" borderBottom="4px solid" borderRight="4px solid" borderColor={color} borderBottomRightRadius="xl" />
      <Icon position="absolute" bottom="-8px" right="-8px" color={color} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth={2}>
        <Star />
      </Icon>
    </Box>
  </Box>
)

interface CottageCardProps {
  children: React.ReactNode
  accentColor?: string
  flex?: number
  minH?: string
}

export const CottageCard = ({ children, accentColor = "brown.700", flex, minH }: CottageCardProps) => {
  return (
    <Box
      position="relative"
      bg="#5D3A1A"
      borderRadius="2xl"
      boxShadow="2xl"
      border="4px solid"
      borderColor={accentColor}
      p={4}
      overflow="hidden"
      flex={flex}
      minH={minH}
    >
      {/* Wood texture */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.08}
        bgImage="repeating-linear-gradient(90deg, transparent, transparent 3px, #2d1810 3px, #2d1810 6px)"
        pointerEvents="none"
      />
      <DecorativeCorners color={accentColor} />
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  )
}

