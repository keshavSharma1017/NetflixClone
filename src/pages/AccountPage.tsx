import React from 'react';
import { useAuth } from '../context/AuthContext';

const AccountPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="pt-20 min-h-screen bg-netflix-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Account</h1>
        
        <div className="space-y-8">
          <section className="bg-netflix-dark p-6 rounded-md">
            <h2 className="text-2xl font-medium mb-4">Membership & Billing</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Email</p>
                <p>{user?.email}</p>
              </div>
              <div>
                <p className="text-gray-400">Password</p>
                <p>********</p>
              </div>
              <button className="text-blue-500 hover:underline">Change password</button>
            </div>
          </section>
          
          <section className="bg-netflix-dark p-6 rounded-md">
            <h2 className="text-2xl font-medium mb-4">Plan Details</h2>
            <div className="space-y-2">
              <p className="text-lg">Premium Plan</p>
              <p className="text-gray-400">4K + HDR</p>
              <button className="text-blue-500 hover:underline">Change plan</button>
            </div>
          </section>
          
          <section className="bg-netflix-dark p-6 rounded-md">
            <h2 className="text-2xl font-medium mb-4">Security & Privacy</h2>
            <div className="space-y-4">
              <button className="text-blue-500 hover:underline">Manage devices</button>
              <button className="text-blue-500 hover:underline">Sign out of all devices</button>
              <button className="text-blue-500 hover:underline">Download your personal information</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;