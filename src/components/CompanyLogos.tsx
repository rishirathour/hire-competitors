
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CompanyLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('company-logos-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const logos = [
    { name: "Company 1", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=50&fit=crop&auto=format" },
    { name: "Company 2", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=50&fit=crop&auto=format" },
    { name: "Company 3", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=50&fit=crop&auto=format" },
    { name: "Company 4", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=50&fit=crop&auto=format" },
    { name: "Company 5", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=50&fit=crop&auto=format" },
  ];

  return (
    <section id="company-logos-section" className="py-12 px-6 md:px-12 bg-neutral-light/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-neutral text-lg">Trusted by leading companies</p>
        </div>
        
        <div 
          className={cn(
            "flex flex-wrap justify-center items-center gap-8 md:gap-12",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transition: "opacity 0.5s ease-out" }}
        >
          {logos.map((company, index) => (
            <div 
              key={index} 
              className="w-24 md:w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
