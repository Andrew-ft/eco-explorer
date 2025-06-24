
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Discovery {
  id: string;
  type: 'animal' | 'plant';
  name: string;
  rarity: 'common' | 'rare' | 'epic';
  description: string;
  habitat: string;
}

interface DiscoveryModalProps {
  discovery: Discovery;
  onClose: () => void;
}

const DiscoveryModal: React.FC<DiscoveryModalProps> = ({ discovery, onClose }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-green-600 bg-green-100';
      case 'rare': return 'text-blue-600 bg-blue-100';
      case 'epic': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="p-6 max-w-sm w-full bg-white animate-scale-in">
        <div className="text-center">
          <div className="text-6xl mb-4">
            {discovery.type === 'animal' ? '🦊' : '🌺'}
          </div>
          
          <h2 className="text-2xl font-bold mb-2">{discovery.name}</h2>
          
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${getRarityColor(discovery.rarity)}`}>
            {discovery.rarity.toUpperCase()}
          </div>
          
          <p className="text-gray-600 mb-3">{discovery.description}</p>
          
          <div className="text-sm text-gray-500 mb-6">
            <strong>Habitat:</strong> {discovery.habitat}
          </div>
          
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-6">
            <div className="text-lg font-bold text-yellow-700">+50 Coins!</div>
            <div className="text-sm text-yellow-600">Added to your wallet</div>
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Continue Exploring
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DiscoveryModal;
