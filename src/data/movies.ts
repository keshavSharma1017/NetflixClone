import { Movie, Category } from '../types';

// Sample movie data (in a real app, this would come from an API)
const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    backdrop_path: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    release_date: "2016-07-15",
    vote_average: 8.6,
    genre_ids: [18, 10765, 9648]
  },
  {
    id: 2,
    title: "The Crown",
    backdrop_path: "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    release_date: "2016-11-04",
    vote_average: 8.7,
    genre_ids: [18, 36]
  },
  {
    id: 3,
    title: "Black Mirror",
    backdrop_path: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    release_date: "2011-12-04",
    vote_average: 8.4,
    genre_ids: [18, 10765]
  },
  {
    id: 4,
    title: "Money Heist",
    backdrop_path: "https://images.pexels.com/photos/2516417/pexels-photo-2516417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/8105037/pexels-photo-8105037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history.",
    release_date: "2017-05-02",
    vote_average: 8.3,
    genre_ids: [80, 18]
  },
  {
    id: 5,
    title: "Ozark",
    backdrop_path: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/5998400/pexels-photo-5998400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    release_date: "2017-07-21",
    vote_average: 8.4,
    genre_ids: [80, 18]
  },
  {
    id: 6,
    title: "The Witcher",
    backdrop_path: "https://images.pexels.com/photos/2088233/pexels-photo-2088233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/5900265/pexels-photo-5900265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    release_date: "2019-12-20",
    vote_average: 8.2,
    genre_ids: [10759, 10765]
  },
  {
    id: 7,
    title: "Peaky Blinders",
    backdrop_path: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps.",
    release_date: "2013-09-12",
    vote_average: 8.5,
    genre_ids: [80, 18]
  },
  {
    id: 8,
    title: "Dark",
    backdrop_path: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    release_date: "2017-12-01",
    vote_average: 8.6,
    genre_ids: [18, 9648, 10765]
  },
  {
    id: 9,
    title: "Breaking Bad",
    backdrop_path: "https://images.pexels.com/photos/3617618/pexels-photo-3617618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/2850886/pexels-photo-2850886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    release_date: "2008-01-20",
    vote_average: 8.7,
    genre_ids: [18, 80]
  },
  {
    id: 10,
    title: "Narcos",
    backdrop_path: "https://images.pexels.com/photos/3098970/pexels-photo-3098970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    poster_path: "https://images.pexels.com/photos/1058401/pexels-photo-1058401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    overview: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.",
    release_date: "2015-08-28",
    vote_average: 8.1,
    genre_ids: [80, 18]
  }
];

// Create categories with movies
export const categories: Category[] = [
  {
    id: "trending",
    title: "Trending Now",
    movies: [...movies].sort(() => 0.5 - Math.random()).slice(0, 7)
  },
  {
    id: "popular",
    title: "Popular on Netflix",
    movies: [...movies].sort(() => 0.5 - Math.random()).slice(0, 7)
  },
  {
    id: "originals",
    title: "Netflix Originals",
    movies: [...movies].sort(() => 0.5 - Math.random()).slice(0, 7)
  },
  {
    id: "toprated",
    title: "Top Rated",
    movies: [...movies].sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0)).slice(0, 7)
  },
  {
    id: "crime",
    title: "Crime TV Shows",
    movies: movies.filter(movie => movie.genre_ids?.includes(80)).slice(0, 7)
  },
  {
    id: "drama",
    title: "Dramas",
    movies: movies.filter(movie => movie.genre_ids?.includes(18)).slice(0, 7)
  }
];

// Function to get a featured movie for the hero banner
export const getFeaturedMovie = (): Movie => {
  return movies[Math.floor(Math.random() * movies.length)];
};

// Function to search movies
export const searchMovies = (query: string): Movie[] => {
  if (!query) return [];
  
  const lowercasedQuery = query.toLowerCase();
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(lowercasedQuery) || 
    movie.overview.toLowerCase().includes(lowercasedQuery)
  );
};

// Function to get a movie by ID
export const getMovieById = (id: number): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};