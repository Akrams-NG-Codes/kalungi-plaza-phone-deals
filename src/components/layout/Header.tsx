import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cart = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Tyga<span className="text-secondary">Gadget</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/phones" className="text-foreground hover:text-primary transition-colors">
              All Phones
            </Link>
            <Link to="/deals" className="text-foreground hover:text-primary transition-colors">
              Deals
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>

          {/* Search, Cart and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center border rounded-md focus-within:ring-1 focus-within:ring-primary">
              <Input
                type="text"
                placeholder="Search phones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" size="sm" className="text-gray-400">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
              {cart.getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.getCartCount()}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex items-center border rounded-md mb-4">
              <Input
                type="text"
                placeholder="Search phones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 focus-visible:ring-0"
              />
              <Button variant="ghost" size="sm" className="text-gray-400">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/phones" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Phones
              </Link>
              <Link 
                to="/deals" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
