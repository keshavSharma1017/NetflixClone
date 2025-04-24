import React from 'react';
import { categories } from '../data/movies';
import MovieRow from '../components/MovieRow';

const MoviesPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-netflix-black">
      <div className="px-4 md:px-16">
        <h1 className="text-3xl font-bold mb-8">Movies</h1>
        {categories.map(category => (
          <MovieRow key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;