'use client';

import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import CartSidebar from './CartSidebar';

export default function Header() {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <>
      <header 
        className="bg-surface sticky top-0 z-50 shadow-header-subtle"
        style={{ height: '64px' }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo - Right side */}
          <h1 
            className="text-text-primary font-bold"
            style={{ fontSize: '20px', fontWeight: 700 }}
          >
            Telegram Stars
          </h1>

          {/* Middle: Empty space */}

          {/* Left side: Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative border border-outline rounded-button px-4 py-2 text-text-primary hover:bg-hover-bg transition-colors"
              style={{ 
                borderWidth: '1px',
                transition: 'background-color 200ms'
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

