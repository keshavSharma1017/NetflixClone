import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchMovies } from '../data/movies';
import { Movie } from '../types';
import { ArrowLeftIcon } from 'lucide-react';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    
    if (query) {
      const foundMovies = searchMovies(query);
      setResults(foundMovies);
    } else {
      setResults([]);
    }
    
    setIsLoading(false);
  }, [location.search]);
  
  return (
    <div className="bg-[#141414] min-h-screen pt-24 px-4 md:px-16 pb-16">
      <div className="flex items-center mb-8">
        <Link to="/" className="text-white p-2 mr-4 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
          <ArrowLeftIcon size={20} />
        </Link>
        
        <h1 className="text-2xl text-white font-semibold">
          Search Results
        </h1>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center p-12">
          <div className="animate-spin w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full" />
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map(movie => (
            <Link 
              key={movie.id} 
              to={`/movie/${movie.id}`}
              className="group relative aspect-video rounded overflow-hidden"
            >
              <img 
                src={movie.backdrop_path}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3">
                <span className="text-white font-medium">{movie.title}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-white py-16">
          <p className="text-xl mb-2">No results found</p>
          <p className="text-gray-400">
            Try adjusting your search to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;