
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Discovery {
  id: string;
  type: 'animal' | 'plant';
  name: string;
  rarity: 'common' | 'rare' | 'epic';
  description: string;
  habitat: string;
}

const Backpack = () => {
  const navigate = useNavigate();
  
  // This would come from your app state
  const discoveries: Discovery[] = [
    { id: '1', type: 'animal', name: 'Red Fox', rarity: 'common', description: 'A clever and adaptable mammal', habitat: 'Forests and grasslands' },
    { id: '2', type: 'plant', name: 'Oak Tree', rarity: 'common', description: 'A mighty deciduous tree', habitat: 'Temperate forests' },
    { id: '3', type: 'animal', name: 'Golden Eagle', rarity: 'rare', description: 'A majestic bird of prey', habitat: 'Mountains and cliffs' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-green-300 bg-green-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-green-600 bg-green-100';
      case 'rare': return 'text-blue-600 bg-blue-100';
      case 'epic': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-green-100 p-4">
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
          <h1 className="text-2xl font-bold">My Discoveries</h1>
        </div>

        {/* Stats */}
        <Card className="p-4 mb-6 bg-amber-50 border-amber-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-amber-800">Collection Stats</h3>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <div>
                <p className="text-2xl font-bold text-amber-700">{discoveries.length}</p>
                <p className="text-sm text-amber-600">Total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-700">
                  {discoveries.filter(d => d.type === 'animal').length}
                </p>
                <p className="text-sm text-green-600">Animals</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">
                  {discoveries.filter(d => d.type === 'plant').length}
                </p>
                <p className="text-sm text-blue-600">Plants</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Discoveries Grid */}
        <div className="space-y-4">
          {discoveries.length === 0 ? (
            <Card className="p-8 text-center">
              <div className="text-6xl mb-4">🎒</div>
              <h3 className="text-lg font-semibold mb-2">No discoveries yet!</h3>
              <p className="text-gray-600">Start exploring to find animals and plants</p>
            </Card>
          ) : (
            discoveries.map(discovery => (
              <Card key={discovery.id} className={`p-4 border-2 ${getRarityColor(discovery.rarity)}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    {discovery.type === 'animal' ? '🦊' : '🌺'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{discovery.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRarityBadge(discovery.rarity)}`}>
                        {discovery.rarity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{discovery.description}</p>
                    <p className="text-xs text-gray-500">
                      <strong>Habitat:</strong> {discovery.habitat}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {discoveries.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Keep exploring to discover more species!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Backpack;
