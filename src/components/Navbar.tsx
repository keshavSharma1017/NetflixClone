import React, { useState, useEffect } from 'react';
import { SearchIcon, BellIcon, UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Reset search when location changes
    setShowSearch(false);
    setSearchQuery('');
  }, [location]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    } else {
      // Focus the input when showing search
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
          searchInput.focus();
        }
      }, 100);
    }
  };

  const handleNotificationClick = () => {
    // Placeholder for notification functionality
    alert('Notifications feature coming soon!');
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-2 px-4 md:px-16 flex items-center justify-between ${
        isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center">
        <Link to="/" className="mr-8">
          <svg 
            className="h-6 md:h-8 w-auto text-red-600" 
            viewBox="0 0 111 30" 
            fill="currentColor"
          >
            <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.196 0h5.063l3.062 7.874L105.063 0h5.063l-5.063 14.28h-.001zm-48.063.001L62.38 0h-5.936l-5.217 14.594L46.14 0h-5.936l-5.906 28.125h4.874l4.063-19.219 4.686 14.282h2.812l4.374-14.282 4.343 19.219H64l-6.996-28.125h-.007zm-7.438 8.406l-2.766 12.816-2.969-12.816c.001 0 5.735 0 5.735 0zM33.97 0l-3.062 12.6L27.97 0h-9.936l.001 28.125h4.843V8.906l4.592 19.219h4.375l4.405-19.686v19.686h4.843V0H33.97zm61.249 13.28l-4.842 14.845h-4.938l-7.03-28.125h5.437l4.156 19.422 4.25-19.422h4.625l4.126 19.422 4.156-19.422h5.437L98.595 28.125h-4.938l-4.97-14.845h-.008z"></path>
          </svg>
        </Link>
        
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white text-sm font-medium hover:text-gray-300">Home</Link>
          <Link to="/tv-shows" className="text-white text-sm font-medium hover:text-gray-300">TV Shows</Link>
          <Link to="/movies" className="text-white text-sm font-medium hover:text-gray-300">Movies</Link>
          <Link to="/new" className="text-white text-sm font-medium hover:text-gray-300">New & Popular</Link>
          <Link to="/my-list" className="text-white text-sm font-medium hover:text-gray-300">My List</Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <form 
            onSubmit={handleSearchSubmit}
            className={`flex items-center transition-all duration-300 ${
              showSearch 
                ? 'bg-black/80 border border-white/20 w-48 md:w-64' 
                : 'w-8'
            } rounded-sm overflow-hidden`}
          >
            <button 
              type="button" 
              onClick={handleSearchToggle}
              className="p-1.5 text-white hover:text-gray-300 transition-colors"
            >
              <SearchIcon size={20} />
            </button>
            <input
              id="search-input"
              type="text"
              placeholder="Titles, people, genres"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`bg-transparent text-white outline-none text-sm w-full py-1 ${
                showSearch ? 'opacity-100 mr-2' : 'w-0 opacity-0 absolute'
              } transition-all duration-300 placeholder-gray-400`}
            />
          </form>
        </div>
        
        <button 
          onClick={handleNotificationClick}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <BellIcon size={20} />
        </button>
        
        <div className="relative group">
          <button className="flex items-center text-white space-x-2">
            <div className="w-7 h-7 rounded bg-slate-600 flex items-center justify-center">
              <UserIcon size={16} />
            </div>
            <span className="hidden md:inline-block">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L4 6h8l-4 4z" fill="currentColor"></path>
              </svg>
            </span>
          </button>
          
          <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-800 rounded shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">Profile</Link>
            <Link to="/account" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">Account</Link>
            <Link to="/help" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">Help Center</Link>
            <button 
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 border-t border-gray-800 mt-1"
            >
              Sign out of Netflix
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;