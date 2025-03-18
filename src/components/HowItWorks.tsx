
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
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
      description: "Use our powerful tools to find high-intent passive jobseekers who match your specific hiring needs.",
      delay: 100
    },
    {
      number: "2",
      title: "Access Filtered Leads",
      description: "Browse through pre-filtered passive jobseekers who are genuinely interested in new opportunities.",
      delay: 300
    },
    {
      number: "3",
      title: "Reduce Hiring Friction",
      description: "Reach out to interested professionals directly, improving recruitment efficiency and reducing time-to-hire.",
      delay: 500
    }
  ];

  const handleVideoControl = () => {
    const video = document.getElementById('demo-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="how-it-works-section" className="py-20 px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-light/30 to-white -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-primary">Switch iT</span> Works for Recruiters
          </h2>
          <p className="text-neutral mx-auto max-w-3xl text-lg">
            Our platform makes it easy for recruiters to find and connect with passive jobseekers.
          </p>
        </div>

        {/* Video Component - reduced by 70% */}
        <div 
          className={cn(
            "mb-20 relative rounded-2xl overflow-hidden shadow-xl transition-all duration-700 max-w-2xl mx-auto",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
            <video
              id="demo-video"
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
              <Button 
                onClick={handleVideoControl}
                size="lg"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-16 h-16 flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6 ml-1" />
                )}
              </Button>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
            How Switch iT helps recruiters find passive jobseekers
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white border border-neutral-light/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out",
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
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
