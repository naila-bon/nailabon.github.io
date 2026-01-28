import { useState, useRef, useEffect } from "react";
import { Box, Container, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HTMLFlipBook from "react-pageflip";
import BookNavigation from "./BookNavigation";
import PageContent from "./PageContent";
import { DecorativeCorners } from "./DecorativeCorners";
import { pages, navigationLabels } from "../data/bookPortfolioData";

// Hook personnalisé pour les dimensions responsives du livre
const useBookDimensions = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false }) ?? false;
  
  // Dimensions du livre selon la taille de l'écran
  const bookWidth = isMobile ? 280 : isTablet ? 420 : 500;
  const bookHeight = isMobile ? 380 : isTablet ? 520 : 600;
  
  // Dimensions du conteneur extérieur
  const containerWidth = isMobile ? 320 : isTablet ? 460 : 1060;
  const containerHeight = isMobile ? 420 : isTablet ? 560 : 630;
  
  // Épaisseur du livre (effet 3D)
  const bookThickness = isMobile ? 8 : 12;
  
  return { bookWidth, bookHeight, containerWidth, containerHeight, bookThickness, isMobile, isTablet };
};

const BookPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookReady, setIsBookReady] = useState(false);
  const flipBook = useRef<any>(null);
  
  // Dimensions responsives
  const { bookWidth, bookHeight, containerWidth, containerHeight, bookThickness, isMobile, isTablet } = useBookDimensions();

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

  // Gestionnaire pour la navigation depuis les boutons CTA
  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      const targetPage = e.detail;
      
      if (flipBook.current && flipBook.current.pageFlip()) {
        const pageFlip = flipBook.current.pageFlip();
        
        // Petit délai pour s'assurer que le livre est prêt
        setTimeout(() => {
          pageFlip.turnToPage(targetPage);
          setCurrentPage(targetPage);
        }, 100);
      }
    };

    window.addEventListener('navigateToPage', handleNavigate as EventListener);
    return () => {
      window.removeEventListener('navigateToPage', handleNavigate as EventListener);
    };
  }, []);

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
      py={isMobile ? 4 : 12}
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
      <Container maxW={isMobile ? "100%" : "1100px"} px={isMobile ? 2 : 4}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
        >
          {/* Navigation avec prop isMobile pour adapter l'affichage */}
          <BookNavigation
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            labels={navigationLabels}
            isMobile={isMobile}
          />
          
          {/* Simulated overhanging cover background */}
          <Box
            minWidth={containerWidth}
            maxWidth={containerWidth}
            minHeight={containerHeight}
            maxHeight={containerHeight}
            bg="#5d4037"
            borderRadius={isMobile ? "lg" : "2xl"}
            borderTop="2px solid #e4e4d0"
            borderLeft="2px solid #e4e4d0" 
            borderBottom="2px solid #1e1105" 
            borderRight="2px solid #1e1105" 
            boxShadow="
              inset 4px 4px 8px rgba(255,255,255,0.2),
              inset -4px -4px 8px rgba(0,0,0,0.3)
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
              backgroundPosition: "0 0, 2px 0",
              backgroundRepeat: "repeat",
              borderRadius: isMobile ? "lg" : "2xl",
            }}
            zIndex={0}
          >
            {/* Tranche du livre */}
            <Box
              position="absolute"
              top={0}
              bottom={0}
              left="50%"
              w={isMobile ? "4" : "12"}
              transform="translateX(-50%)"
              bg="#3e2a20"
              borderRadius="sm"
              boxShadow="
                inset 0 4px 6px rgba(255,255,255,0.2),
                inset 0 -4px 6px rgba(0,0,0,0.3)
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
              left={isMobile ? "2px" : "10px"}
              top="50%"
              transform="translateY(-50%)"
              zIndex={3}
              size={isMobile ? "sm" : "lg"}
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
              right={isMobile ? "2px" : "10px"}
              top="50%"
              transform="translateY(-50%)"
              zIndex={3}
              size={isMobile ? "sm" : "lg"}
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
              minWidth={isMobile ? bookWidth + 20 : containerWidth - 40}
              maxWidth={isMobile ? bookWidth + 20 : containerWidth - 40}
              minHeight={isMobile ? bookHeight - 10 : containerHeight - 35}
              maxHeight={isMobile ? bookHeight - 10 : containerHeight - 35}
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
                width={bookWidth}
                height={bookHeight}
                size="fixed"
                minWidth={bookWidth}
                maxWidth={bookWidth}
                minHeight={bookHeight}
                maxHeight={bookHeight}
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
                  <div key={index} className="page">
                    <PageContent data={page} isLeft={false} isMobile={isMobile} />
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
