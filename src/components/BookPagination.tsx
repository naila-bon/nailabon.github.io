import { HStack, Text, IconButton } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookPaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const BookPagination = ({ currentPage, totalPages, onPrev, onNext }: BookPaginationProps) => (
  <HStack justify="center" mt={6} gap={4}>
    <IconButton aria-label="prev" onClick={onPrev} disabled={currentPage === 0}><ChevronLeft /></IconButton>
    <Text fontWeight="bold">{currentPage + 1} / {totalPages}</Text>
    <IconButton aria-label="next" onClick={onNext} disabled={currentPage === totalPages - 1}><ChevronRight /></IconButton>
  </HStack>
);

export default BookPagination;
