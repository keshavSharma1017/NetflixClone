import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchPage from './pages/SearchPage';
import WatchPage from './pages/WatchPage';
import TVShowsPage from './pages/TVShowsPage';
import MoviesPage from './pages/MoviesPage';
import NewAndPopularPage from './pages/NewAndPopularPage';
import MyListPage from './pages/MyListPage';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';
import HelpCenterPage from './pages/HelpCenterPage';

// Protected Route Component
const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === '/login';
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="font-sans bg-[#141414] text-white">
      {!isLoginPage && <Navbar />}
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route path="/tv-shows" element={<ProtectedRoute element={<TVShowsPage />} />} />
        <Route path="/movies" element={<ProtectedRoute element={<MoviesPage />} />} />
        <Route path="/new" element={<ProtectedRoute element={<NewAndPopularPage />} />} />
        <Route path="/my-list" element={<ProtectedRoute element={<MyListPage />} />} />
        <Route path="/movie/:id" element={<ProtectedRoute element={<MovieDetailsPage />} />} />
        <Route path="/search" element={<ProtectedRoute element={<SearchPage />} />} />
        <Route path="/watch/:id" element={<ProtectedRoute element={<WatchPage />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path="/account" element={<ProtectedRoute element={<AccountPage />} />} />
        <Route path="/help" element={<ProtectedRoute element={<HelpCenterPage />} />} />
        
        {/* Redirect all other paths to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default App;