import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    try {
      setIsLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/6044820/pexels-photo-6044820.jpeg?auto=compress&cs=tinysrgb&w=1260)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative w-full max-w-md p-8 bg-black/75 rounded-md">
        <div className="mb-6">
          <svg 
            className="h-8 w-auto text-red-600 mx-auto mb-8" 
            viewBox="0 0 111 30" 
            fill="currentColor"
          >
            <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.196 0h5.063l3.062 7.874L105.063 0h5.063l-5.063 14.28h-.001zm-48.063.001L62.38 0h-5.936l-5.217 14.594L46.14 0h-5.936l-5.906 28.125h4.874l4.063-19.219 4.686 14.282h2.812l4.374-14.282 4.343 19.219H64l-6.996-28.125h-.007zm-7.438 8.406l-2.766 12.816-2.969-12.816c.001 0 5.735 0 5.735 0zM33.97 0l-3.062 12.6L27.97 0h-9.936l.001 28.125h4.843V8.906l4.592 19.219h4.375l4.405-19.686v19.686h4.843V0H33.97zm61.249 13.28l-4.842 14.845h-4.938l-7.03-28.125h5.437l4.156 19.422 4.25-19.422h4.625l4.126 19.422 4.156-19.422h5.437L98.595 28.125h-4.938l-4.97-14.845h-.008z"></path>
          </svg>
          
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </h1>
        </div>
        
        {error && (
          <div className="bg-red-600/80 text-white p-3 mb-4 rounded text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 text-white p-3 rounded font-medium hover:bg-red-700 transition-colors disabled:bg-red-800 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="mt-6">
          <p className="text-gray-400 text-sm">
            {isLogin ? "New to Netflix?" : "Already have an account?"}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white hover:underline"
            >
              {isLogin ? 'Sign up now' : 'Sign in now'}
            </button>.
          </p>
          
          <p className="text-gray-500 text-xs mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;