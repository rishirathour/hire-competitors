
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

const CompleteSignup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || { email: '' };
  const [showPassword, setShowPassword] = useState(false);
  
  const handleCompleteSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the signup here
    // For now, we'll just navigate to the login page
    navigate('/login');
  };
  
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
                src="/lovable-uploads/6e8e8a76-3a07-4855-ab0d-423526c092ac.png" 
                alt="Switch iT Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-2xl text-primary">Switch iT</span>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Complete your profile</h1>
          <p className="text-neutral mb-4">Just a few more details to get you started</p>
          
          <form onSubmit={handleCompleteSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  type="text" 
                  placeholder="Enter first name" 
                  className="h-10"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  type="text" 
                  placeholder="Enter last name" 
                  className="h-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="workEmail">Work Email</Label>
              <Input 
                id="workEmail" 
                type="email" 
                value={email}
                className="h-10 bg-gray-50"
                readOnly
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="company">Company</Label>
              <Input 
                id="company" 
                type="text" 
                placeholder="Enter your company name" 
                className="h-10"
                required
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="signupPassword">Password</Label>
              <div className="relative">
                <Input 
                  id="signupPassword" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a password" 
                  className="h-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <p className="text-xs text-neutral">Must be at least 8 characters</p>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="mt-1" required />
              <Label htmlFor="terms" className="text-xs font-normal">
                I agree to Switch iT's <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </Label>
            </div>
            
            <Button type="submit" className="w-full h-10 text-sm">
              Complete Registration
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteSignup;
