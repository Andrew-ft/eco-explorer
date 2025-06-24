
import React from 'react';

interface PlayerAvatarProps {
  name: string;
  x: number;
  y: number;
  isCurrentPlayer: boolean;
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ name, x, y, isCurrentPlayer }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div className="relative">
        <div 
          className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-2xl shadow-lg transition-all duration-300 ${
            isCurrentPlayer 
              ? 'bg-blue-500 border-blue-300 animate-pulse' 
              : 'bg-green-500 border-green-300'
          }`}
        >
          🧑‍🌾
        </div>
        {isCurrentPlayer && (
          <div className="absolute -inset-2 rounded-full border-2 border-blue-400 animate-ping"></div>
        )}
      </div>
      <div className={`mt-1 px-2 py-1 rounded-full text-xs font-semibold text-white shadow-md ${
        isCurrentPlayer ? 'bg-blue-600' : 'bg-green-600'
      }`}>
        {name}
      </div>
    </div>
  );
};

export default PlayerAvatar;
