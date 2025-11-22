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
    setIsFlipped(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="card-wrapper cursor-pointer w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] max-w-[320px]"
      onClick={handleCardClick}
      style={{ 
        height: '400px',
        margin: '0.5rem'
      }}
    >
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div 
          className="card-front overflow-hidden flex flex-col transition-all duration-300"
          style={{ 
            backgroundColor: '#eef4ed',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(19, 64, 116, 0.08), 0 4px 16px rgba(19, 64, 116, 0.04)',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(141, 169, 196, 0.2)'
          }}
        >
          <div 
            className="relative overflow-hidden"
            style={{ 
              height: '240px',
              width: '100%',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
              background: 'linear-gradient(135deg, #8da9c4 0%, #a8c0d8 100%)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-24 h-24"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <div 
            className="flex flex-col flex-1 justify-between"
            style={{ padding: '20px' }}
          >
            <div>
              <div 
                className="font-bold mb-2"
                style={{ 
                  fontSize: '24px', 
                  fontWeight: 700,
                  color: '#134074',
                  marginBottom: '8px'
                }}
              >
                {formatNumber(product.price)} تومان
              </div>
              <div className="flex items-center" style={{ gap: '6px' }}>
                <svg
                  style={{ width: '20px', height: '20px', color: '#0b2545' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span 
                  style={{ 
                    fontSize: '16px',
                    color: '#0b2545',
                    fontWeight: 500
                  }}
                >
                  {formatNumber(product.amount)} Stars
                </span>
              </div>
            </div>
            <div 
              className="text-center text-sm"
              style={{ 
                color: '#8da9c4',
                fontSize: '13px',
                marginTop: '12px'
              }}
            >
              برای جزئیات کلیک کنید
            </div>
          </div>
        </div>

        <div 
          className="card-back overflow-hidden flex flex-col"
          style={{ 
            backgroundColor: '#eef4ed',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(19, 64, 116, 0.08), 0 4px 16px rgba(19, 64, 116, 0.04)',
            padding: '24px',
            direction: 'rtl',
            textAlign: 'right',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(141, 169, 196, 0.2)'
          }}
        >
          <h3 
            className="font-bold mb-3"
            style={{ 
              fontSize: '20px', 
              fontWeight: 700,
              color: '#134074',
              marginBottom: '12px'
            }}
          >
            {product.title}
          </h3>

          <p 
            className="flex-1 mb-4"
            style={{ 
              fontSize: '14px',
              fontWeight: 400,
              color: '#0b2545',
              lineHeight: '1.7',
              marginBottom: '20px'
            }}
          >
            {product.desc}
          </p>

          <button
            onClick={handleBuyClick}
            className="w-full text-white font-medium transition-all"
            style={{
              height: '48px',
              backgroundColor: '#134074',
              borderRadius: '12px',
              fontWeight: 500,
              fontSize: '16px',
              boxShadow: '0 2px 8px rgba(19, 64, 116, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0b2545';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(19, 64, 116, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#134074';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(19, 64, 116, 0.2)';
            }}
          >
            خرید
          </button>
        </div>
      </div>
    </div>
  );
}
