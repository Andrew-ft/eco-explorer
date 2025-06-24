
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import QRCodeGenerator from '@/components/QRCodeGenerator';

const Wallet = () => {
  const navigate = useNavigate();
  const [coins] = useState(150); // This would come from your app state
  const [points] = useState(30);
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/game')}
            className="p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">My Wallet</h1>
        </div>

        {/* Balance Cards */}
        <div className="space-y-4 mb-8">
          <Card className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Coins</h3>
                <p className="text-3xl font-bold">{coins}</p>
              </div>
              <div className="text-4xl">🪙</div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Points</h3>
                <p className="text-3xl font-bold">{points}</p>
              </div>
              <div className="text-4xl">⭐</div>
            </div>
          </Card>
        </div>

        {/* Conversion Info */}
        <Card className="p-4 mb-6 bg-green-50 border-green-200">
          <div className="text-center">
            <h4 className="font-semibold text-green-800 mb-2">Conversion Rate</h4>
            <p className="text-green-600">50 Coins = 10 Points</p>
            <p className="text-sm text-green-500 mt-1">
              Next conversion at {50 - (coins % 50)} more coins
            </p>
          </div>
        </Card>

        {/* Redeem Options */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold">Redeem Points</h3>
          
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🛒</div>
              <div className="flex-1">
                <h4 className="font-semibold">Supermarket Discounts</h4>
                <p className="text-sm text-gray-600">Use points for discounts at partner stores</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🌱</div>
              <div className="flex-1">
                <h4 className="font-semibold">Eco-Friendly Products</h4>
                <p className="text-sm text-gray-600">Purchase sustainable items</p>
              </div>
            </div>
          </Card>
        </div>

        {/* QR Code Section */}
        <div className="space-y-4">
          <Button 
            onClick={() => setShowQR(!showQR)}
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={points < 10}
          >
            {showQR ? 'Hide QR Code' : 'Generate QR Code'}
          </Button>

          {points < 10 && (
            <p className="text-sm text-gray-500 text-center">
              You need at least 10 points to generate a QR code
            </p>
          )}

          {showQR && points >= 10 && (
            <QRCodeGenerator points={points} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
