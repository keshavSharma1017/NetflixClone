import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Category } from '../types';
import MovieCard from './MovieCard';

interface MovieRowProps {
  category: Category;
}

const MovieRow: React.FC<MovieRowProps> = ({ category }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75;
        
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg md:text-xl text-white font-bold mb-2 px-4 md:px-16">
        {category.title}
      </h2>
      
      <div className="group relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-0 bottom-0 z-10 bg-black/30 hover:bg-black/60 transition-all duration-200 text-white w-12 opacity-0 group-hover:opacity-100 flex items-center justify-center disabled:opacity-0"
          onClick={() => scroll('left')}
          disabled={!rowRef.current || rowRef.current.scrollLeft === 0}
        >
          <ChevronLeftIcon size={24} />
        </button>
        
        {/* Movies Row */}
        <div
          ref={rowRef}
          className="flex overflow-x-scroll scrollbar-hide gap-2 px-4 md:px-16 py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {category.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        {/* Right Arrow */}
        <button
          className="absolute right-0 top-0 bottom-0 z-10 bg-black/30 hover:bg-black/60 transition-all duration-200 text-white w-12 opacity-0 group-hover:opacity-100 flex items-center justify-center"
          onClick={() => scroll('right')}
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;