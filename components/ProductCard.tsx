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
      style={{ 
        width: '280px', 
        height: '360px',
        margin: '16px'
      }}
    >
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        {/* FRONT SIDE - Exact Spec */}
        <div 
          className="card-front overflow-hidden flex flex-col transition-all duration-200 card-front-hover"
          style={{ 
            backgroundColor: '#fefefe',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            width: '100%',
            height: '100%'
          }}
        >
          {/* Image Container */}
          <div 
            className="relative overflow-hidden"
            style={{ 
              height: '220px',
              width: '100%',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px'
            }}
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center"
              style={{ objectFit: 'cover' }}
            >
              <svg
                className="w-20 h-20"
                style={{ color: 'rgba(19, 64, 116, 0.2)' }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* Footer: Price + Stars */}
          <div 
            className="flex flex-col flex-1"
            style={{ padding: '12px 16px' }}
          >
            {/* Price */}
            <div 
              className="font-medium mb-2"
              style={{ 
                fontSize: '16px', 
                fontWeight: 500,
                color: '#134074',
                marginBottom: '8px'
              }}
            >
              {formatNumber(product.price)} تومان
            </div>

            {/* Stars count */}
            <div className="flex items-center" style={{ gap: '4px' }}>
              <svg
                style={{ width: '18px', height: '18px', color: '#134074' }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span 
                style={{ 
                  fontSize: '14px',
                  color: '#134074'
                }}
              >
                {formatNumber(product.amount)} Stars
              </span>
            </div>
          </div>
        </div>

        {/* BACK SIDE - Exact Spec */}
        <div 
          className="card-back overflow-hidden flex flex-col"
          style={{ 
            backgroundColor: '#fefefe',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            padding: '16px',
            direction: 'rtl',
            textAlign: 'right',
            width: '100%',
            height: '100%'
          }}
        >
          {/* Title */}
          <h3 
            className="font-bold mb-2"
            style={{ 
              fontSize: '18px', 
              fontWeight: 700,
              color: '#134074',
              marginBottom: '8px'
            }}
          >
            {product.title}
          </h3>

          {/* Description */}
          <p 
            className="flex-1 mb-4"
            style={{ 
              fontSize: '14px',
              fontWeight: 400,
              color: '#555',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginBottom: '16px',
              lineHeight: '1.6'
            }}
          >
            {product.desc}
          </p>

          {/* Buy Button */}
          <button
            onClick={handleBuyClick}
            className="w-full text-white font-medium transition-all hover:bg-[#7e3fff]"
            style={{
              height: '44px',
              backgroundColor: '#6200EE',
              borderRadius: '12px',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            خرید
          </button>
        </div>
      </div>
    </div>
  );
}
