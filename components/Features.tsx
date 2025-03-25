
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Building2, Users } from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('features-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const testimonials = [
    {
      quote: "Switch iT has revolutionized how we find talent. The pre-filtered candidates save us time and improve our hiring success rate.",
      author: "Mark T., HR Director",
      icon: <Building2 className="w-6 h-6 text-primary" />,
      delay: 100
    },
    {
      quote: "We've reduced our time-to-hire by 40% since using Switch iT. The quality of candidates is exceptional, and they're actually interested in making a move.",
      author: "Jessica L., Talent Acquisition Manager",
      icon: <Users className="w-6 h-6 text-primary" />,
      delay: 300
    }
  ];

  return (
    <section id="features-section" className="py-20 px-6 md:px-12 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-light/30 to-white -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Recruiters Choose <span className="text-primary">Switch iT</span>
          </h2>
          <p className="text-neutral mx-auto max-w-3xl text-lg">
            Our platform improves recruitment efficiency and leverages data-driven insights to connect you with the right talent.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white border border-neutral-light/50 rounded-2xl p-8 shadow-sm transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: isVisible ? `${testimonial.delay}ms` : '0ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  {testimonial.icon}
                </div>
              </div>
              <p className="text-neutral-dark mb-6 text-lg italic">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
