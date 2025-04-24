import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayIcon, PlusIcon, ThumbsUpIcon, ArrowLeftIcon } from 'lucide-react';
import { getMovieById } from '../data/movies';
import { Movie } from '../types';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const movieId = parseInt(id, 10);
      const foundMovie = getMovieById(movieId);
      
      setMovie(foundMovie || null);
      setIsLoading(false);
    }
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full" />
      </div>
    );
  }
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-2xl font-bold mb-4">Movie Not Found</h1>
        <p className="mb-6">The movie you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#141414] pb-16">
      {/* Hero Image */}
      <div className="relative h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop_path})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />
        </div>
        
        <Link to="/" className="absolute top-24 left-4 md:left-16 z-10 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
          <ArrowLeftIcon size={24} />
        </Link>
        
        <div className="relative h-full flex flex-col justify-end p-4 md:p-16 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {movie.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Link 
              to={`/watch/${movie.id}`}
              className="flex items-center justify-center bg-white text-black px-6 py-2 rounded-md font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <PlayIcon size={20} className="mr-2" />
              Play
            </Link>
            
            <button className="flex items-center justify-center bg-gray-600/70 text-white px-4 py-2 rounded-full transition-transform hover:scale-105 active:scale-95">
              <PlusIcon size={20} />
            </button>
            
            <button className="flex items-center justify-center bg-gray-600/70 text-white px-4 py-2 rounded-full transition-transform hover:scale-105 active:scale-95">
              <ThumbsUpIcon size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Movie Info */}
      <div className="px-4 md:px-16 mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center text-white/80 text-sm mb-4 space-x-4">
            <span className="text-green-500 font-semibold">
              {movie.vote_average && Math.round(movie.vote_average * 10)}% Match
            </span>
            <span>{movie.release_date && new Date(movie.release_date).getFullYear()}</span>
            <span className="border border-white/40 px-1 text-xs">HD</span>
          </div>
          
          <p className="text-white/90 text-base mb-6">
            {movie.overview}
          </p>
        </div>
        
        <div>
          <div className="text-white/60 text-sm space-y-2">
            <p><span className="text-white/40">Genres:</span> Drama, Thriller, Crime</p>
            <p><span className="text-white/40">Director:</span> David Fincher</p>
            <p><span className="text-white/40">Cast:</span> Jesse Eisenberg, Andrew Garfield, Justin Timberlake</p>
            <p><span className="text-white/40">This movie is:</span> Cerebral, Suspenseful</p>
          </div>
        </div>
      </div>
      
      {/* Poster Image */}
      <div className="mt-12 px-4 md:px-16">
        <h2 className="text-xl text-white font-semibold mb-4">More Like This</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="aspect-[2/3] rounded overflow-hidden hover:scale-105 transition-transform duration-300">
            <img 
              src={movie.poster_path}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* More similar posters would be here */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;