import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Joystick from '@/components/Joystick';
import PlayerAvatar from '@/components/PlayerAvatar';
import DiscoveryModal from '@/components/DiscoveryModal';
import { Wallet, Backpack } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Player {
  id: string;
  x: number;
  y: number;
  name: string;
}

interface Discovery {
  id: string;
  type: 'animal' | 'plant';
  name: string;
  x: number;
  y: number;
  rarity: 'common' | 'rare' | 'epic';
  description: string;
  habitat: string;
}

const Game = () => {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [otherPlayers] = useState<Player[]>([
    { id: '2', x: 30, y: 40, name: 'Explorer Alex' },
    { id: '3', x: 70, y: 60, name: 'Nature Sam' },
    { id: '4', x: 20, y: 80, name: 'Eco Maya' }
  ]);
  
  const [discoveries, setDiscoveries] = useState<Discovery[]>([
    { id: '1', type: 'animal', name: 'Red Fox', x: 25, y: 35, rarity: 'common', description: 'A clever and adaptable mammal', habitat: 'Forests and grasslands' },
    { id: '2', type: 'plant', name: 'Oak Tree', x: 60, y: 45, rarity: 'common', description: 'A mighty deciduous tree', habitat: 'Temperate forests' },
    { id: '3', type: 'animal', name: 'Golden Eagle', x: 80, y: 20, rarity: 'rare', description: 'A majestic bird of prey', habitat: 'Mountains and cliffs' },
    { id: '4', type: 'plant', name: 'Orchid', x: 40, y: 70, rarity: 'epic', description: 'A rare and beautiful flower', habitat: 'Tropical rainforests' }
  ]);

  const [collectedDiscoveries, setCollectedDiscoveries] = useState<Discovery[]>([]);
  const [selectedDiscovery, setSelectedDiscovery] = useState<Discovery | null>(null);
  const [coins, setCoins] = useState(0);
  const [points, setPoints] = useState(0);

  const handleJoystickMove = (direction: { x: number; y: number }) => {
    setPlayerPosition(prev => ({
      x: Math.max(0, Math.min(100, prev.x + direction.x * 2)),
      y: Math.max(0, Math.min(100, prev.y + direction.y * 2))
    }));
  };

  const checkForDiscoveries = () => {
    discoveries.forEach(discovery => {
      const distance = Math.sqrt(
        Math.pow(playerPosition.x - discovery.x, 2) + 
        Math.pow(playerPosition.y - discovery.y, 2)
      );
      
      if (distance < 5 && !collectedDiscoveries.find(d => d.id === discovery.id)) {
        setSelectedDiscovery(discovery);
        setCollectedDiscoveries(prev => [...prev, discovery]);
        setDiscoveries(prev => prev.filter(d => d.id !== discovery.id));
        setCoins(prev => {
          const newCoins = prev + 50;
          const newPoints = Math.floor(newCoins / 50) * 10;
          setPoints(newPoints);
          return newCoins;
        });
      }
    });
  };

  useEffect(() => {
    checkForDiscoveries();
  }, [playerPosition]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-green-200 relative overflow-hidden">
      {/* Top UI Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
        <Card className="p-3 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center gap-4 text-sm font-semibold">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span>{coins} coins</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>{points} points</span>
            </div>
          </div>
        </Card>
        
        <div className="flex gap-2">
          <Button 
            onClick={() => navigate('/wallet')}
            className="bg-green-600 hover:bg-green-700"
            size="sm"
          >
            <Wallet className="w-4 h-4" />
          </Button>
          <Button 
            onClick={() => navigate('/backpack')}
            className="bg-amber-600 hover:bg-amber-700"
            size="sm"
          >
            <Backpack className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Game Map */}
      <div 
        ref={mapRef}
        className="w-full h-screen relative"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)
          `
        }}
      >
        {/* Trees and Nature Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-pulse"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 90 + 5}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              🌳
            </div>
          ))}
        </div>

        {/* Discoveries */}
        {discoveries.map(discovery => (
          <div
            key={discovery.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-bounce text-2xl cursor-pointer hover:scale-110 transition-transform"
            style={{
              left: `${discovery.x}%`,
              top: `${discovery.y}%`,
              animationDelay: `${Math.random() * 1}s`
            }}
          >
            {discovery.type === 'animal' ? '🦊' : '🌺'}
          </div>
        ))}

        {/* Other Players */}
        {otherPlayers.map(player => (
          <PlayerAvatar
            key={player.id}
            name={player.name}
            x={player.x}
            y={player.y}
            isCurrentPlayer={false}
          />
        ))}

        {/* Current Player */}
        <PlayerAvatar
          name="You"
          x={playerPosition.x}
          y={playerPosition.y}
          isCurrentPlayer={true}
        />
      </div>

      {/* Joystick */}
      <div className="absolute bottom-8 left-8 z-20">
        <Joystick onMove={handleJoystickMove} />
      </div>

      {/* Discovery Modal */}
      {selectedDiscovery && (
        <DiscoveryModal
          discovery={selectedDiscovery}
          onClose={() => setSelectedDiscovery(null)}
        />
      )}
    </div>
  );
};

export default Game;
