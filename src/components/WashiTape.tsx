import { Box } from '@chakra-ui/react';

interface WashiTapeProps {
  color?: string;
}

const WashiTape = ({ color = "#ffadad" }: WashiTapeProps) => (
  <Box
    position="absolute"
    top="-10px"
    left="50%"
    transform="translateX(-50%) rotate(-2deg)"
    w="80px"
    h="20px"
    bg={color}
    opacity={0.7}
    boxShadow="sm"
    zIndex={5}
    _after={{
      content: '""',
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      border: '1px dashed rgba(0,0,0,0.1)'
    }}
  />
);

export default WashiTape;
