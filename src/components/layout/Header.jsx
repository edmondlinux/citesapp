
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('darkMode') === 'true';
      }
      return false;
    });
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Toggle dark mode and persist to localStorage
    const toggleDarkMode = () => {
      const newDarkMode = !isDarkMode;
      setIsDarkMode(newDarkMode);
      localStorage.setItem('darkMode', newDarkMode.toString());
      
      // Apply or remove dark class to document
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Apply dark mode class on component mount
    React.useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDarkMode]);
  
  return (
    <header className="bg-white dark:bg-charcoal shadow-sm transition-colors">
      {/* Top navbar */}
      <nav className="bg-orange-700 dark:bg-orange-700 text-white py-3 transition-colors">
        <div className="container-big flex justify-between items-center">
          <div></div>
          <div className="flex items-center space-x-4">
           
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-orange-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Search */}
            <form className="flex items-center relative ml-0">
              {!isSearchOpen && (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1"
                >
                  <img src="/search.png" alt="Search" className="w-6 h-6" />
                </button>
              )}

              {isSearchOpen && (
                <>
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-1 text-orange-700 rounded-md border ml-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1  text-white rounded-2 ml-1"
                  >
                    <img src="/search.png" alt="Search" className="w-6 h-6" />
                  </button>
                  
                </>
              )}
            </form>
            
            
           
          </div>
        </div>
      </nav>

      {/* Main navbar */}
      <nav className="bg-white dark:bg-charcoal transition-colors">
        <div className="container-big flex justify-between items-center">
          
            
            <div>
              {/* Logo - LEFT */}
              <div className="flex items-center py-2">
                <img 
                  src={isDarkMode ? "/logo-white.svg" : "/logo-dark.svg"} 
                  alt="logo" 
                  className="w-32 h-16 object-contain max-w-none" 
                />
              </div>
            </div>
          

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-full h-0.5 bg-gray-600 dark:bg-white mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-600 dark:bg-white mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-600 dark:bg-white"></span>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link to="/news/landing" className="text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
              News
            </Link>
            <div className="relative group">
              <span className="text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                About CITES
              </span>
              <div className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">About CITES</h4>
                      <ul className="space-y-2">
                        <li><Link to="/disc/what" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">What is CITES?</Link></li>
                        <li><Link to="/disc/how" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">How CITES works?</Link></li>
                        <li><Link to="/disc/fund" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">How is CITES financed?</Link></li>
                        <li><Link to="/cites-violation-fines" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">CITES Violation Fines</Link></li>
                        <li><Link to="/reptile-transport-requirements" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Reptile Transport Requirements</Link></li>
                        <li><Link to="/apply-permit" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Apply for Permit</Link></li>
                       
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Parties</h4>
                      <ul className="space-y-2">
                        <li><button className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">List of parties to the convention</button></li>
                        <li><button className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Country profiles</button></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Secretariat</h4>
                      <ul className="space-y-2">
                        <li><button className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Overview</button></li>
                        <li><button className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Secretary-General</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <span className="text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                Documents
              </span>
            </div>
            <div className="relative group">
              <span className="text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                Implementation
              </span>
            </div>
            <div className="relative group">
              <span className="text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                Topics
              </span>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 transition-colors">
            <div className="space-y-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Home</Link>
              <Link to="/news/landing" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">News</Link>
              <Link to="/disc/what" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">What is CITES?</Link>
              <Link to="/disc/how" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">How CITES works?</Link>
              <Link to="/disc/fund" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">How is CITES financed?</Link>
              <Link to="/cites-violation-fines" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">CITES Violation Fines</Link>
              <Link to="/reptile-transport-requirements" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Reptile Transport Requirements</Link>
              <Link to="/apply-permit" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Apply for Permit</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
