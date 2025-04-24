import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import { categories, getFeaturedMovie } from '../data/movies';
import { Movie } from '../types';

const HomePage: React.FC = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  
  useEffect(() => {
    setFeaturedMovie(getFeaturedMovie());
  }, []);
  
  if (!featuredMovie) return null;
  
  return (
    <div className="bg-[#141414] min-h-screen pb-8">
      <HeroBanner movie={featuredMovie} />
      
      <div className="relative -mt-10 md:-mt-16 z-10">
        {categories.map(category => (
          <MovieRow key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;