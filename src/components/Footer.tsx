import React from 'react';
import { GithubIcon, InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = {
    facebook: 'https://facebook.com/netflix',
    instagram: 'https://instagram.com/netflix',
    twitter: 'https://twitter.com/netflix',
    github: 'https://github.com/netflix'
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleServiceCode = () => {
    const code = prompt('Please enter your service code:');
    if (code) {
      // Handle service code logic here
      alert(`Service code ${code} submitted`);
    }
  };

  return (
    <footer className="bg-black text-gray-400 py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <button 
            onClick={() => handleSocialClick(socialLinks.facebook)}
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon size={20} />
          </button>
          <button 
            onClick={() => handleSocialClick(socialLinks.instagram)}
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </button>
          <button 
            onClick={() => handleSocialClick(socialLinks.twitter)}
            className="hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon size={20} />
          </button>
          <button 
            onClick={() => handleSocialClick(socialLinks.github)}
            className="hover:text-white transition-colors"
            aria-label="Github"
          >
            <GithubIcon size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
          <div className="space-y-2">
            <button onClick={() => window.open('/audio-description', '_blank')} className="block hover:underline">
              Audio Description
            </button>
            <button onClick={() => window.open('/investor-relations', '_blank')} className="block hover:underline">
              Investor Relations
            </button>
            <button onClick={() => window.open('/legal-notices', '_blank')} className="block hover:underline">
              Legal Notices
            </button>
          </div>
          <div className="space-y-2">
            <button onClick={() => window.open('/help', '_blank')} className="block hover:underline">
              Help Center
            </button>
            <button onClick={() => window.open('/jobs', '_blank')} className="block hover:underline">
              Jobs
            </button>
            <button onClick={() => window.open('/cookie-preferences', '_blank')} className="block hover:underline">
              Cookie Preferences
            </button>
          </div>
          <div className="space-y-2">
            <button onClick={() => window.open('/gift-cards', '_blank')} className="block hover:underline">
              Gift Cards
            </button>
            <button onClick={() => window.open('/terms', '_blank')} className="block hover:underline">
              Terms of Use
            </button>
            <button onClick={() => window.open('/corporate-information', '_blank')} className="block hover:underline">
              Corporate Information
            </button>
          </div>
          <div className="space-y-2">
            <button onClick={() => window.open('/media-center', '_blank')} className="block hover:underline">
              Media Center
            </button>
            <button onClick={() => window.open('/privacy', '_blank')} className="block hover:underline">
              Privacy
            </button>
            <button onClick={() => window.open('/contact-us', '_blank')} className="block hover:underline">
              Contact Us
            </button>
          </div>
        </div>
        
        <button 
          onClick={handleServiceCode}
          className="border border-gray-800 text-sm inline-block px-2 py-1 mb-4 hover:text-white transition-colors"
        >
          Service Code
        </button>
        
        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Netflix Clone. This is a demo project created for educational purposes. Not affiliated with Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;