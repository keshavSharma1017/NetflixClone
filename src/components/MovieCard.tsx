import React, { useState } from 'react';
import { PlayIcon, PlusIcon, ThumbsUpIcon, ChevronDownIcon } from 'lucide-react';
import { Movie } from '../types';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative flex-none w-[160px] md:w-[200px] h-[120px] md:h-[140px] transition-transform duration-300 hover:scale-110 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="w-full h-full object-cover rounded transition-all duration-300"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 rounded overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-90 rounded transition-opacity"
              style={{ backgroundImage: `url(${movie.backdrop_path})` }}
            />
            
            <div className="absolute inset-0 flex flex-col justify-between p-3 bg-gradient-to-b from-transparent via-black/50 to-black rounded">
              <div className="text-white font-semibold text-sm line-clamp-1">{movie.title}</div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-1">
                    <button className="p-1 bg-white rounded-full text-black hover:bg-white/90 transition-colors">
                      <PlayIcon size={14} />
                    </button>
                    <button className="p-1 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors">
                      <PlusIcon size={14} />
                    </button>
                    <button className="p-1 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors">
                      <ThumbsUpIcon size={14} />
                    </button>
                  </div>
                  
                  <button className="p-1 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors">
                    <ChevronDownIcon size={14} />
                  </button>
                </div>
                
                <div className="flex items-center text-xs text-white space-x-2">
                  <span className="text-green-500 font-bold">{movie.vote_average && Math.round(movie.vote_average * 10)}%</span>
                  {movie.release_date && <span>{new Date(movie.release_date).getFullYear()}</span>}
                </div>
              </div>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;