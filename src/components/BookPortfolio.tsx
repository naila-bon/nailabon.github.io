import { useState, useRef, useEffect } from "react";
import { Box, Container, IconButton } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HTMLFlipBook from "react-pageflip";
import BookNavigation from "./BookNavigation";
import PageContent from "./PageContent";
import { DecorativeCorners } from "./DecorativeCorners";
import { pages, navigationLabels } from "../data/bookPortfolioData";

const BookPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookReady, setIsBookReady] = useState(false);
  const flipBook = useRef<any>(null);

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const onInit = () => {
    setIsBookReady(true);
  };

  useEffect(() => {
    if (isBookReady && flipBook.current && flipBook.current.pageFlip()) {
      flipBook.current.pageFlip().turnToPage(currentPage);
    }
  }, [currentPage, isBookReady]);

  const handleFlipPrev = () => {
    if (flipBook.current && flipBook.current.pageFlip()) {
      flipBook.current.pageFlip().flipPrev();
    }
  };

  const handleFlipNext = () => {
    if (flipBook.current && flipBook.current.pageFlip()) {
      flipBook.current.pageFlip().flipNext();
    }
  };

  return (
<Box
  minH="100vh"
  bg="#181512"
  py={12}
  fontFamily="'Comic Sans MS', cursive, sans-serif"
  position="relative"
  _before={{
    content: '""',
    position: "absolute",
    inset: 0,
    bgImage: `
      radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 2px),
      radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 3px),
      radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 3px)
    `,
    backgroundSize: "20px 20px, 30px 30px, 25px 25px",
    backgroundRepeat: "repeat",
    filter: "blur(1px)",
    zIndex: 0,
    
  }}
>
      <Container maxW="1100px">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
        >
          <BookNavigation
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            labels={navigationLabels}
          />
          {/* Simulated overhanging cover background */}
          <Box
            minWidth={1060}
            maxWidth={1060}
            minHeight={630}
            maxHeight={630}
            bg="#5d4037"
            borderRadius="2xl"
            borderTop="2px solid #e4e4d0"
            borderLeft="2px solid #e4e4d0" 
            borderBottom="2px solid #1e1105" 
            borderRight="2px solid #1e1105" 
            boxShadow="
  inset 4px 4px 8px rgba(255,255,255,0.2),   // lumière en haut/gauche
  inset -4px -4px 8px rgba(0,0,0,0.3)        // ombre en bas/droite
"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="visible"
            _before={{
              content: '""',
              position: "absolute",
              inset: 0,
              bgImage: `
      repeating-linear-gradient(
        to right,
        rgba(0,0,0,0.05) 0px,
        rgba(0,0,0,0.05) 1px,
        transparent 1px,
        transparent 3px
      ),
      repeating-linear-gradient(
        to right,
        rgba(0,0,0,0.03) 0px,
        rgba(0,0,0,0.03) 2px,
        transparent 2px,
        transparent 5px
      )
    `,
              backgroundPosition: "0 0, 2px 0", // décalage pour irrégularité
              backgroundRepeat: "repeat",
              borderRadius: "2xl",
            }}
            zIndex={0}
          >
            {/* Tranche */}

            <Box
              position="absolute"
              top={0}
              bottom={0}
              left="50%"
              w="12"
              transform="translateX(-50%)"
              bg="#3e2a20"
              borderRadius="sm"
              boxShadow="
  inset 0 4px 6px rgba(255,255,255,0.2),   // lumière en haut
  inset 0 -4px 6px rgba(0,0,0,0.3)         // ombre en bas
  "
              zIndex={0}
            />

            <DecorativeCorners color="#b68200" />

            {/* Left Arrow */}
            <IconButton
              aria-label="Previous page"
              onClick={handleFlipPrev}
              disabled={currentPage === 0}
              position="absolute"
              left="10px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={3}
              size="lg"
              variant="ghost"
              color="white"
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
              _disabled={{ opacity: 0.5 }}
            >
              <ChevronLeft />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
              aria-label="Next page"
              onClick={handleFlipNext}
              disabled={currentPage === pages.length - 1}
              position="absolute"
              right="10px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={3}
              size="lg"
              variant="ghost"
              color="white"
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
              _disabled={{ opacity: 0.5 }}
            >
              <ChevronRight />
            </IconButton>

            {/* Page edges (paper stack) */}
            <Box
              zIndex={2}
              minWidth={1020}
              maxWidth={1050}
              minHeight={595}
              maxHeight={595}
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              bgGradient="linear(to-r, #e6ded5, #d4c9ba)"
              bg="#e6ded5"
              borderRadius="sm"
              boxShadow="inset -1px 0 2px rgba(0,0,0,0.25)"
              opacity={0.9}
              _before={{
                content: '""',
                position: "absolute",
                inset: 0,
                bgImage:
                  "repeating-linear-gradient(to bottom, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 2px)",
              }}
            >
              <HTMLFlipBook
                width={500}
                height={600}
                size="fixed"
                minWidth={500}
                maxWidth={500}
                minHeight={600}
                maxHeight={600}
                maxShadowOpacity={0.5}
                showCover={false}
                mobileScrollSupport={true}
                onFlip={onFlip}
                onInit={onInit}
                ref={flipBook}
                className="demo-book"
                style={{ zIndex: 1 }}
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={false}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
              >
                {pages.map((page, index) => (
                  <div key={index} className="page" >
                    <PageContent data={page} isLeft={false} />
                  </div>
                ))}
              </HTMLFlipBook>
            </Box>
          </Box>
        </Box>

     
      </Container>
    </Box>
  );
};

export default BookPortfolio;
