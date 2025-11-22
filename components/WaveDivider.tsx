import React from 'react';

interface WaveDividerProps {
  colors?: string[];
  layers?: number;
  height?: string;
  className?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
  colors = ['#a8c0d8', '#95b3cc', '#8da9c4'],
  layers = 3,
  height = 'h-24 sm:h-32 md:h-40',
  className = ''
}) => {
  const waveColors = colors.slice(0, layers);
  
  while (waveColors.length < layers) {
    waveColors.push(waveColors[waveColors.length - 1] || '#a8c0d8');
  }

  const wavePaths = [
    'M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,112C1120,96,1280,96,1360,106.7L1440,117L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z',
    'M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,144C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z',
    'M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,48C1120,32,1280,32,1360,42.7L1440,53L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
  ];

  return (
    <div 
      className={`relative w-full ${className}`} 
      style={{ lineHeight: 0, marginTop: '-1px' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={`w-full ${height}`}
        style={{ display: 'block' }}
      >
        {waveColors.map((color, index) => (
          <path
            key={index}
            fill={color}
            d={wavePaths[index] || wavePaths[wavePaths.length - 1]}
          />
        ))}
      </svg>
    </div>
  );
};

export default WaveDivider;
