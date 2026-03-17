import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-darkCard transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          © {currentYear} Prem Nanda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
