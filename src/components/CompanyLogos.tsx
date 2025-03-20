
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
    { name: "Spotify", logo: "/lovable-uploads/34bde5f7-f781-41a8-aabb-f1ef3de0c655.png" },
    { name: "Palo Alto Networks", logo: "/lovable-uploads/0aa27713-af56-4c86-ba3f-ffd0691b4258.png" },
    { name: "Snowflake", logo: "/lovable-uploads/488e5952-a522-467e-ab7e-aaff67a87ef7.png" },
    { name: "Sisense", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sisense_logo.svg/2560px-Sisense_logo.svg.png" },
    { name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1000px-American_Express_logo_%282018%29.svg.png" },
  ];

  return (
    <section id="company-logos-section" className="py-8 px-6 md:px-12 bg-[#F9F9FB]">
      <div className="max-w-7xl mx-auto">
        <div 
          className={cn(
            "flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transition: "opacity 0.5s ease-out" }}
        >
          {logos.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
