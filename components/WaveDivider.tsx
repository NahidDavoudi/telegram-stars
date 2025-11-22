import React from 'react';

interface WaveDividerProps {
  /**
   * رنگ‌های موج‌ها (از جلو به عقب)
   * اگر یک رنگ داده شود، رنگ‌های دیگر به صورت خودکار تولید می‌شوند
   */
  colors?: string[];
  /**
   * تعداد لایه‌های موج (پیش‌فرض: 3)
   */
  layers?: number;
  /**
   * ارتفاع موج (پیش‌فرض: responsive)
   */
  height?: string;
  /**
   * کلاس‌های اضافی
   */
  className?: string;
}

/**
 * کامپوننت Layered Waves - موج‌های چندلایه Material Minimalism
 * 
 * سه موج روی هم با رنگ‌های نزدیک به هم که حس عمق می‌دهند
 * اما هنوز مینیمال و Material-friendly باقی می‌مانند
 */
const WaveDivider: React.FC<WaveDividerProps> = ({
  colors = ['#a2d9ff', '#8bcfff', '#74c6ff'],
  layers = 3,
  height = 'h-32 md:h-48 lg:h-56',
  className = ''
}) => {
  // اطمینان از اینکه تعداد رنگ‌ها با تعداد لایه‌ها برابر باشد
  const waveColors = colors.slice(0, layers);
  
  // اگر رنگ‌ها کمتر از لایه‌ها باشند، رنگ‌های پیش‌فرض اضافه می‌کنیم
  while (waveColors.length < layers) {
    waveColors.push(waveColors[waveColors.length - 1] || '#a2d9ff');
  }

  // Path های موج (از نمونه Material Minimalism)
  const wavePaths = [
    'M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,176C1120,192,1280,192,1360,181.3L1440,171L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z',
    'M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,144C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z',
    'M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,240C1120,256,1280,256,1360,245.3L1440,235L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
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
