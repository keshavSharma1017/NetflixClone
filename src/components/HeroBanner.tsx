import React from 'react';
import { PlayIcon, InfoIcon } from 'lucide-react';
import { Movie } from '../types';
import { Link } from 'react-router-dom';

interface HeroBannerProps {
  movie: Movie;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movie }) => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdrop_path})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 md:px-16 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
          {movie.title}
        </h1>
        
        <div className="flex items-center text-white/80 text-sm mb-4 space-x-4">
          <span className="text-green-500 font-semibold">
            {movie.vote_average && Math.round(movie.vote_average * 10)}% Match
          </span>
          <span>{movie.release_date && new Date(movie.release_date).getFullYear()}</span>
        </div>
        
        <p className="text-white/90 text-sm md:text-base mb-6 line-clamp-3 md:line-clamp-4 max-w-2xl drop-shadow-md">
          {movie.overview}
        </p>
        
        <div className="flex flex-wrap gap-3">
          <Link 
            to={`/watch/${movie.id}`}
            className="flex items-center justify-center bg-white text-black px-6 py-2 rounded-md font-medium transition-transform hover:scale-105 active:scale-95"
          >
            <PlayIcon size={20} className="mr-2" />
            Play
          </Link>
          
          <Link
            to={`/movie/${movie.id}`}
            className="flex items-center justify-center bg-gray-600/70 text-white px-6 py-2 rounded-md font-medium transition-transform hover:scale-105 active:scale-95"
          >
            <InfoIcon size={20} className="mr-2" />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;