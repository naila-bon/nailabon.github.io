import {
  Box,
  VStack,
  Text,
  Image,
  HStack,
  Badge,
  Link,
} from "@chakra-ui/react";
import { Github, Mail } from "lucide-react";
import WashiTape from "./WashiTape";

interface PageContentProps {
  data: any;
  isLeft: boolean;
}

const PageContent = ({ data, isLeft }: PageContentProps) => {
  const pageBg = "#fffdf0";
  const borderColor = "#e2e2d0";

  const commonStyles = {
    p: 10,
    h: "100%",
    bg: pageBg,
    position: "relative" as const,
    borderRadius: "8px ",
    border: `2px solid ${borderColor}`,
    boxShadow: isLeft
      ? "inset -10px 0 20px rgba(0,0,0,0.05)"
      : "inset 10px 0 20px rgba(0,0,0,0.05)",
  };

  switch (data.type) {
    case "cover":
      return (
        <VStack
          {...commonStyles}
          bg="#5d4037"
          color="#d7ccc8"
          justify="center"
          gap={4}
          border="8px solid #4e342e"
        >
          <Box
            border="2px solid #8d6e63"
            p={6}
            textAlign="center"
            borderRadius="md"
          >
            <Text fontSize="4xl" fontWeight="bold" fontFamily="serif">
              {data.title}
            </Text>
            <Box h="2px" bg="#8d6e63" my={2} />
            <Text fontSize="md" fontStyle="italic">
              {data.subtitle}
            </Text>
          </Box>
          <Text mt={10} fontWeight="bold">
            {data.author}
          </Text>
        </VStack>
      );

    case "intro":
      return (
        <VStack {...commonStyles} align="start" gap={6}>
          <WashiTape color="#ffadad" />
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="#5d4037"
            borderBottom="2px dashed #5d4037"
          >
            {data.title}
          </Text>
          <Box
            border="10px solid white"
            boxShadow="md"
            transform="rotate(-3deg)"
            alignSelf="center"
            mt={4}
          >
            <Image src={data.photo} alt="Ma Photo" w="140px" />
          </Box>
          <Text color="#5d4037" fontSize="md" lineHeight="tall">
            {data.content}
          </Text>
        </VStack>
      );

    case "skills":
      return (
        <VStack {...commonStyles} align="start">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            {data.title}
          </Text>
          {data.categories?.map((cat: any) => (
            <Box
              key={cat.label}
              mb={4}
              p={3}
              bg={cat.color}
              borderRadius="sm"
              transform="rotate(1deg)"
              w="full"
              boxShadow="sm"
            >
              <Text fontWeight="bold">{cat.label}</Text>
              <HStack wrap="wrap" mt={1}>
                {cat.items.map((i: string) => (
                  <Badge key={i} variant="outline" colorScheme="blackAlpha">
                    {i}
                  </Badge>
                ))}
              </HStack>
            </Box>
          ))}
        </VStack>
      );

    case "experience":
      return (
        <VStack {...commonStyles} align="start">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            {data.title}
          </Text>
          {data.items?.map((item: any, index: number) => (
            <Box
              key={index}
              mb={4}
              p={3}
              bg="white"
              borderRadius="sm"
              boxShadow="sm"
              w="full"
            >
              <Text fontSize="lg" fontWeight="bold">
                {item.date}
              </Text>
              <Text fontSize="md" fontWeight="semibold">
                {item.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {item.desc}
              </Text>
            </Box>
          ))}
        </VStack>
      );

    case "contact":
      return (
        <VStack {...commonStyles} justify="center" gap={6}>
          <WashiTape color="#caffbf" />
          <Text fontSize="2xl" fontWeight="bold">
            {data.title}
          </Text>
          <VStack gap={3} align="start">
            <Link
              href="mailto:test@test.com"
              display="flex"
              alignItems="center"
            >
              <Mail size={18} style={{ marginRight: 8 }} /> Mon Email
            </Link>
            <Link href="#" display="flex" alignItems="center">
              <Github size={18} style={{ marginRight: 8 }} /> Mon GitHub
            </Link>
            <Link href="#" fontWeight="bold" color="blue.600">
              📄 Télécharger mon CV
            </Link>
          </VStack>
        </VStack>
      );

    case "back-cover":
      return <Box {...commonStyles} bg="#5d4037" border="8px solid #4e342e" />;

    default:
      return <Box {...commonStyles} />;
  }
};

export default PageContent;
