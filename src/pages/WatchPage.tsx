import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { getMovieById } from '../data/movies';
import { Movie } from '../types';

const WatchPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  
  useEffect(() => {
    if (id) {
      const movieId = parseInt(id, 10);
      const foundMovie = getMovieById(movieId);
      setMovie(foundMovie || null);
    }
  }, [id]);
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full" />
      </div>
    );
  }
  
  return (
    <div className="bg-black min-h-screen relative">
      <div className="absolute top-0 left-0 w-full p-4 z-10 bg-gradient-to-b from-black/80 to-transparent">
        <Link 
          to={`/movie/${movie.id}`}
          className="flex items-center text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowLeftIcon size={24} className="mr-2" />
          <span className="font-medium">Back</span>
        </Link>
      </div>
      
      <div className="h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl aspect-video bg-gray-900 overflow-hidden relative flex items-center justify-center">
          <img 
            src={movie.backdrop_path}
            alt={movie.title}
            className="w-full h-full object-cover opacity-40"
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 max-w-lg">{movie.title}</h1>
            <p className="mb-8 text-sm md:text-base max-w-xl opacity-90">
              This is a demo application. In a real Netflix clone, a video player would be implemented here.
            </p>
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <svg 
                className="w-8 h-8 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;