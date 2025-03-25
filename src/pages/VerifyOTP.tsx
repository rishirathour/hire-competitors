
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from '@/components/ui/input-otp';

const VerifyOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || { email: '' };
  const [otp, setOtp] = useState('');
  
  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      navigate('/complete-signup', { state: { email } });
    }
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
          
          <h1 className="text-3xl font-bold mb-2">Verify your email</h1>
          <p className="text-neutral mb-4">
            We've sent a 6-digit verification code to <span className="font-medium">{email}</span>
          </p>
          
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="flex justify-center mb-4">
              <InputOTP 
                maxLength={6} 
                value={otp} 
                onChange={setOtp}
                render={({ slots }) => (
                  <InputOTPGroup>
                    {slots.map((slot, index) => (
                      <InputOTPSlot key={index} {...slot} index={index} />
                    ))}
                  </InputOTPGroup>
                )} 
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 text-base"
              disabled={otp.length !== 6}
            >
              Verify Code
            </Button>
            
            <div className="text-center mt-4">
              <p className="text-sm text-neutral">
                Didn't receive a code? <button type="button" className="text-primary hover:text-primary-light">Resend</button>
              </p>
            </div>
          </form>
          
          <p className="text-center mt-6 text-neutral text-sm">
            <Link to="/signup" className="text-primary hover:text-primary-light font-medium">
              Use a different email address
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
