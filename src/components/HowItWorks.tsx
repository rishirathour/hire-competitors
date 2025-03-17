
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
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

    const element = document.getElementById('how-it-works-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const steps = [
    {
      number: "1",
      title: "Data-Driven Candidate Search",
      description: "Use our powerful tools to find high-intent candidates who match your specific hiring needs.",
      delay: 100
    },
    {
      number: "2",
      title: "Access Filtered Leads",
      description: "Browse through pre-filtered candidates who are genuinely interested in new opportunities.",
      delay: 300
    },
    {
      number: "3",
      title: "Reduce Hiring Friction",
      description: "Reach out to interested professionals directly, improving recruitment efficiency and reducing time-to-hire.",
      delay: 500
    }
  ];

  return (
    <section id="how-it-works-section" className="py-20 px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-light/30 to-white -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-primary">Switch iT</span> Works for Recruiters
          </h2>
          <p className="text-neutral mx-auto max-w-3xl text-lg">
            Our platform makes it easy for recruiters to find and connect with the perfect candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white border border-neutral-light/50 rounded-2xl p-8 shadow-sm transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: isVisible ? `${step.delay}ms` : '0ms' }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-primary font-semibold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/signup">
            <Button 
              className={cn(
                "bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg shadow-sm hover:shadow-md transition-all duration-500",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
            >
              Start Finding Candidates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
