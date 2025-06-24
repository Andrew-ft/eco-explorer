
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase authentication
    console.log('Login attempt:', { email, password });
    navigate('/game');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-blue-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🌍</div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">EcoExplorer</h1>
          <p className="text-gray-600">Discover nature, earn rewards</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Login
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Button 
              variant="link" 
              className="p-0 h-auto text-green-600 hover:text-green-700"
              onClick={() => navigate('/register')}
            >
              Sign up
            </Button>
          </p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700 text-center">
            🔗 Ready for Supabase integration
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
