import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Movie } from '../types';

interface MyListContextType {
  myList: Movie[];
  addToList: (movie: Movie) => void;
  removeFromList: (movieId: number) => void;
  isInList: (movieId: number) => boolean;
}

const MyListContext = createContext<MyListContextType | undefined>(undefined);

export const MyListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [myList, setMyList] = useState<Movie[]>([]);

  const addToList = (movie: Movie) => {
    setMyList(prev => {
      if (!prev.some(m => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromList = (movieId: number) => {
    setMyList(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isInList = (movieId: number) => {
    return myList.some(movie => movie.id === movieId);
  };

  return (
    <MyListContext.Provider value={{ myList, addToList, removeFromList, isInList }}>
      {children}
    </MyListContext.Provider>
  );
};

export const useMyList = () => {
  const context = useContext(MyListContext);
  if (context === undefined) {
    throw new Error('useMyList must be used within a MyListProvider');
  }
  return context;
};