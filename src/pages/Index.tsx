
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Wallet, Backpack, Coins } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-100 to-green-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🌳</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">🦋</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🌺</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-pulse" style={{ animationDelay: '2s' }}>🐿️</div>
        <div className="absolute top-60 left-1/2 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>🍄</div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-2xl">
          <div className="text-8xl mb-6 animate-pulse">🌍</div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4 animate-fade-in">
            EcoExplorer
          </h1>
          <p className="text-xl md:text-2xl text-green-700 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover nature, earn rewards, protect our planet
          </p>
          <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Explore virtual maps, collect biodiversity, and redeem eco-friendly rewards
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full">
          <Card className="p-6 text-center bg-white/90 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl mb-3">🗺️</div>
            <h3 className="text-xl font-semibold mb-2">Explore Maps</h3>
            <p className="text-gray-600">Navigate vibrant virtual environments with joystick controls</p>
          </Card>

          <Card className="p-6 text-center bg-white/90 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Coins className="w-10 h-10 mx-auto mb-3 text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
            <p className="text-gray-600">Collect animals and plants to earn coins and points</p>
          </Card>

          <Card className="p-6 text-center bg-white/90 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Go Green</h3>
            <p className="text-gray-600">Redeem points for eco-friendly products and discounts</p>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            onClick={() => navigate('/login')}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3 animate-fade-in"
            style={{ animationDelay: '1.2s' }}
          >
            Start Exploring
          </Button>
          
          <Button 
            onClick={() => navigate('/register')}
            variant="outline"
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-3 animate-fade-in"
            style={{ animationDelay: '1.4s' }}
          >
            Create Account
          </Button>
        </div>

        {/* Quick Demo Link */}
        <Button 
          onClick={() => navigate('/game')}
          variant="link"
          className="text-green-600 hover:text-green-700 animate-fade-in"
          style={{ animationDelay: '1.6s' }}
        >
          Try Demo (No Login Required) →
        </Button>

        {/* Footer Features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md text-center">
          <div className="animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <Wallet className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm text-gray-600">Digital Wallet</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
            <Backpack className="w-8 h-8 mx-auto mb-2 text-amber-600" />
            <p className="text-sm text-gray-600">Collection</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '2.2s' }}>
            <div className="text-2xl mb-2">📱</div>
            <p className="text-sm text-gray-600">QR Codes</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '2.4s' }}>
            <div className="text-2xl mb-2">🌍</div>
            <p className="text-sm text-gray-600">Real Impact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
