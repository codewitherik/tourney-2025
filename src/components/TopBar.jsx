import React from 'react'

const TopBar = () => {
  return (
    <div>
      <header className='bg-white shadow-md fixed top-0 left-0 right-0 z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-beetween items-center'>
            <h1 className='text-primary font-bold text-xl cursor pointer'>Tourney-Turnierplaner</h1>
        </div>
        
        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex text-gray-700">
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#preise" className="hover:text-primary transition">Preise</a>
          <a href="#kontakt" className="hover:text-primary transition">Kontakt</a>
        </nav>

        {/* Auth Button */}
        <div>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-red-500 transition">
            Login
          </button>
        </div>
      </div>
      </header>
  );
}

export default TopBar
