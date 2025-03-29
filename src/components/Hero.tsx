
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const howItWorksSection = document.getElementById('how-it-works-section');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-center items-center px-6 md:px-12 py-10 -mt-15">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-light/30 to-white -z-10" />
      
      {/* Blue blob decoration */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl w-full mx-auto pt-16 md:pt-20 flex flex-col items-center">
        <div className="text-center mb-6">
          <div 
            className={cn(
              "inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4 transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Recruiter Tool
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight transition-all duration-700 delay-100",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Hire From Your <span className="text-primary">Competitors</span>
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-neutral-DEFAULT max-w-3xl mx-auto transition-all duration-700 delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Switch iT is a recruiter tool designed to bridge the gap between companies and professionals looking for career transitions, enabling recruiters to identify, engage, and connect with potential passive job seekers.
          </p>
        </div>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-4 mt-6 transition-all duration-700 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Link to="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg shadow-sm hover:shadow-md transition-all">
              Get Started
            </Button>
          </Link>
          <button 
            onClick={scrollToHowItWorks}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-neutral bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 border-neutral px-8 py-6 text-lg transition-colors hover:border-primary hover:text-primary"
          >
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
