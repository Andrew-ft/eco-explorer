
import React from 'react';
import { Card } from '@/components/ui/card';

interface QRCodeGeneratorProps {
  points: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ points }) => {
  // In a real app, you'd generate an actual QR code here
  const qrData = `ECO-POINTS:${points}:${Date.now()}`;

  return (
    <Card className="p-6 text-center bg-white">
      <h4 className="font-semibold mb-4">Your QR Code</h4>
      
      {/* Placeholder QR Code - in a real app, use a QR code library */}
      <div className="w-48 h-48 mx-auto mb-4 bg-gray-900 flex items-center justify-center text-white relative">
        <div className="grid grid-cols-8 gap-1 w-full h-full p-4">
          {[...Array(64)].map((_, i) => (
            <div 
              key={i} 
              className={`w-full h-full ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xs">
          QR CODE
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-2">
        Scan this code at partner stores
      </p>
      <p className="text-lg font-semibold text-green-600">
        {points} Points Available
      </p>
    </Card>
  );
};

export default QRCodeGenerator;
