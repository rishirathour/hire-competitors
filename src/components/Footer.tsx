
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <span className="text-2xl font-bold text-primary">Switch iT</span>
            </div>
            <p className="text-neutral text-sm mb-4 pr-6">
              The ultimate recruiter tool for finding hidden talent and improving your hiring process.
            </p>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-neutral hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-neutral hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-neutral hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-neutral hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-DEFAULT text-sm mb-4 md:mb-0">
            © 2025 Switch iT. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="https://twitter.com" className="text-neutral hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link to="https://linkedin.com" className="text-neutral hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
