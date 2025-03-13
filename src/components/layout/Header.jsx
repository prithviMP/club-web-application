import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            CLUB
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/brands" className="hover:text-primary transition-colors">
              Brands
            </Link>
            <Link to="/collections" className="hover:text-primary transition-colors">
              Collections
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/wishlist" className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/cart" className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="/account" className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link
              to="/products"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/brands"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              to="/collections"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex space-x-6 pt-4 border-t border-gray-800">
              <Link
                to="/wishlist"
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link
                to="/cart"
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              <Link
                to="/account"
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;