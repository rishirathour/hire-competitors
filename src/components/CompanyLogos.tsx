
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
    { name: "Snowflake", logo: "/lovable-uploads/488e5952-a522-467e-ab7e-aaff67a87ef7.png" },
    { name: "Microsoft", logo: "/lovable-uploads/9910dac9-7dde-465a-9c7b-a457e0fad50c.png" },
    { name: "Google", logo: "/lovable-uploads/34bde5f7-f781-41a8-aabb-f1ef3de0c655.png" },
    { name: "IBM", logo: "/lovable-uploads/72423587-e89e-4714-83d9-82023285bd3d.png" },
    { name: "Amazon", logo: "/lovable-uploads/0aa27713-af56-4c86-ba3f-ffd0691b4258.png" },
  ];

  // Duplicate logos for continuous scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="company-logos-section" className="py-8 px-6 md:px-12 bg-[#F9F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full">
          <div 
            className={cn(
              "flex items-center gap-10 md:gap-16 lg:gap-24 animate-infinite-scroll",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{ transition: "opacity 0.5s ease-out" }}
          >
            {duplicatedLogos.map((company, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
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
      </div>
    </section>
  );
};

export default CompanyLogos;
