import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="pt-20 min-h-screen bg-netflix-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        
        <div className="bg-netflix-dark p-6 rounded-md">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-24 h-24 rounded-md bg-gray-600 flex items-center justify-center text-4xl">
              {user?.email.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-medium">{user?.email}</h2>
              <p className="text-gray-400">Premium Plan</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Language</h3>
              <select className="bg-transparent border border-gray-600 rounded px-3 py-2">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Playback Settings</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Autoplay next episode</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Autoplay previews</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;