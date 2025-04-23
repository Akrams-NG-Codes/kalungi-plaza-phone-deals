
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kalungi Plaza Phone Deals</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted destination for the best deals on mobile phones and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/phones" className="text-muted-foreground hover:text-primary">All Phones</Link>
              </li>
              <li>
                <Link to="/deals" className="text-muted-foreground hover:text-primary">Special Deals</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary">Returns & Refunds</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Kalungi Plaza, Main Street</li>
              <li>Kampala, Uganda</li>
              <li>Phone: +256 700 123 456</li>
              <li>Email: info@kalungiphonedeals.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kalungi Plaza Phone Deals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
