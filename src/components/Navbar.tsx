
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl bg-clip-text text-primary">Switch iT</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-neutral-dark hover:text-primary transition-colors">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-primary hover:bg-primary-light text-white shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
