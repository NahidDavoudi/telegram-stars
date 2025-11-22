'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { formatNumber } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { addToCart } = useCart();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setIsFlipped(false); // Flip back after purchase
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Only flip if clicking on card, not on buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="card-wrapper cursor-pointer"
      onClick={handleCardClick}
      style={{ width: '280px', height: '360px' }}
    >
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        {/* FRONT SIDE - SPEC Compliant */}
        <div className="card-front bg-surface rounded-card shadow-idle overflow-hidden flex flex-col">
          {/* Image */}
          <div 
            className="relative overflow-hidden"
            style={{ 
              height: '220px',
              width: '100%',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px'
            }}
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center"
              style={{ objectFit: 'cover' }}
            >
              <svg
                className="w-20 h-20 text-primary/30"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* Info Section */}
          <div className="px-4 py-2 flex flex-col flex-1">
            {/* Price */}
            <div 
              className="text-primary font-medium mb-2"
              style={{ fontSize: '16px', fontWeight: 500 }}
            >
              {formatNumber(product.price)} تومان
            </div>

            {/* Stars count */}
            <div className="flex items-center gap-2">
              <svg
                className="text-text-secondary"
                style={{ width: '18px', height: '18px' }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span 
                className="text-text-secondary"
                style={{ fontSize: '14px' }}
              >
                {formatNumber(product.amount)} Stars
              </span>
            </div>
          </div>
        </div>

        {/* BACK SIDE - SPEC Compliant */}
        <div 
          className="card-back bg-surface rounded-card shadow-idle overflow-hidden flex flex-col"
          style={{ 
            padding: '16px',
            direction: 'rtl',
            textAlign: 'right'
          }}
        >
          {/* Title */}
          <h3 
            className="text-text-primary font-bold mb-2"
            style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}
          >
            {product.title}
          </h3>

          {/* Description */}
          <p 
            className="text-text-secondary flex-1 mb-4"
            style={{ 
              fontSize: '14px',
              fontWeight: 400,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {product.desc}
          </p>

          {/* Buy Button */}
          <button
            onClick={handleBuyClick}
            className="w-full text-white font-medium transition-colors hover:bg-primary-variant"
            style={{
              height: '44px',
              backgroundColor: '#6200EE',
              borderRadius: '10px',
              fontWeight: 500,
              transition: 'background-color 200ms'
            }}
          >
            خرید
          </button>
        </div>
      </div>
    </div>
  );
}
