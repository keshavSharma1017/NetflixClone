import React from 'react';

const HelpCenterPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-netflix-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Help Center</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-medium mb-4">Popular Topics</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <button className="p-4 bg-netflix-dark rounded-md text-left hover:bg-gray-800 transition-colors">
                <h3 className="font-medium mb-2">Can't sign in to Netflix</h3>
                <p className="text-sm text-gray-400">Get help signing in and troubleshoot common issues</p>
              </button>
              <button className="p-4 bg-netflix-dark rounded-md text-left hover:bg-gray-800 transition-colors">
                <h3 className="font-medium mb-2">Billing and Payments</h3>
                <p className="text-sm text-gray-400">Learn about billing and manage your payment methods</p>
              </button>
              <button className="p-4 bg-netflix-dark rounded-md text-left hover:bg-gray-800 transition-colors">
                <h3 className="font-medium mb-2">Netflix Plans and Pricing</h3>
                <p className="text-sm text-gray-400">Learn about Netflix plans and how to change them</p>
              </button>
              <button className="p-4 bg-netflix-dark rounded-md text-left hover:bg-gray-800 transition-colors">
                <h3 className="font-medium mb-2">Can't watch</h3>
                <p className="text-sm text-gray-400">Troubleshoot issues while trying to watch Netflix</p>
              </button>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
            <div className="bg-netflix-dark p-6 rounded-md">
              <p className="mb-4">Need more help? We're here for you.</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                Call Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;