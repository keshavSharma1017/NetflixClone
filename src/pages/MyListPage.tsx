import React from 'react';
import { useMyList } from '../context/MyListContext';
import MovieCard from '../components/MovieCard';

const MyListPage: React.FC = () => {
  const { myList } = useMyList();

  return (
    <div className="pt-20 min-h-screen bg-netflix-black">
      <div className="px-4 md:px-16">
        <h1 className="text-3xl font-bold mb-8">My List</h1>
        {myList.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {myList.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">Your list is empty</p>
            <p className="text-gray-500 mt-2">Add movies and TV shows to your list to watch them later</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListPage;