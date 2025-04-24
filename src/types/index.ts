export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date?: string;
  vote_average?: number;
  genre_ids?: number[];
}

export interface Category {
  id: string;
  title: string;
  movies: Movie[];
}

export interface User {
  email: string;
  password: string;
}