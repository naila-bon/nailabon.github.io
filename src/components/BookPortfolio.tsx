import { useState, useRef, useEffect } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import HTMLFlipBook from 'react-pageflip';
import BookNavigation from './BookNavigation';
import PageContent from './PageContent';
import BookPagination from './BookPagination';
import { pages, navigationLabels } from '../data/bookPortfolioData';

const BookPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookReady, setIsBookReady] = useState(false);
  const flipBook = useRef<any>(null);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const onInit = (e: any) => {
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
    <Box minH="100vh" bg="#e9e4d9" py={12} fontFamily="'Comic Sans MS', cursive, sans-serif">
      <Container maxW="1100px">
        <BookNavigation
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          labels={navigationLabels}
        />

        {/* Le Livre 3D avec Flip Effect */}
        <Box display="flex" justifyContent="center">
          <style>
            {`
6              .demo-book .page {
                background: #fffdf0;
                border: 1px solid #e2e2d0;
              }
              .demo-book {
                box-shadow: 0 0 20px rgba(0,0,0,0.5);
              }
            `}
          </style>
          <HTMLFlipBook
            width={400}
            height={600}
            size="fixed"
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            onInit={onInit}
            ref={flipBook}
            className="demo-book"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={true}
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
                <PageContent data={page} isLeft={false} />
              </div>
            ))}
          </HTMLFlipBook>
        </Box>

        <BookPagination
          currentPage={currentPage}
          totalPages={pages.length}
          onPrev={handleFlipPrev}
          onNext={handleFlipNext}
        />
      </Container>
    </Box>
  );
};

export default BookPortfolio;
