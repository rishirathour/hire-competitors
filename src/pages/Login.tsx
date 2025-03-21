
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-row">
      {/* Left side (blue background with stats) */}
      <div className="w-1/2 bg-primary p-8 flex flex-col justify-center items-center text-white">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold mb-3">
            Excited to have you as one of our
          </h2>
          
          <div className="text-5xl font-bold mb-3">
            10,000+
          </div>
          <div className="mb-8">
            recruiters
          </div>
          
          <p className="text-lg mb-8">
            Thanks for being a part of our community! 💙
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="flex justify-center">
              <div className="flex items-center space-x-1 text-yellow-300">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                <span className="ml-2 text-white">4.9</span>
              </div>
            </div>
            <p className="mt-2 text-sm">
              Based on 500+ reviews from our recruiters
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side (form) */}
      <div className="w-1/2 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/9910dac9-7dde-465a-9c7b-a457e0fad50c.png" 
                alt="Switch iT Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-2xl text-primary">Switch iT</span>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-neutral mb-4">Sign in to access your recruiter dashboard</p>
          
          <form className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="email">Work Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your work email" 
                className="h-10"
              />
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-xs text-primary hover:text-primary-light">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  className="h-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-xs font-normal">Remember me for 30 days</Label>
            </div>
            
            <Button type="submit" className="w-full h-10 text-sm">
              Sign in
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full absolute"></div>
              <span className="bg-white px-4 relative text-xs text-neutral">Or sign in with</span>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-10 font-normal text-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="h-10 font-normal text-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          <p className="text-center mt-6 text-neutral text-sm">
            Don't have an account? <Link to="/signup" className="text-primary hover:text-primary-light font-medium">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
