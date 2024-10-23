import React from 'react'
import { Link } from 'react-router-dom'
import { FaGlobe } from 'react-icons/fa' // Import the globe icon from react-icons

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <FaGlobe className="h-10 w-10 mr-3" />
            <Link to="/" className="text-2xl font-bold">
              Pandemic Aid
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium hover:text-blue-300">
              Home
            </Link>
            <Link to="/ngos" className="text-base font-medium hover:text-blue-300">
              NGOs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
