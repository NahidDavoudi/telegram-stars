'use client';

import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotal,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('سبد خرید شما خالی است');
      return;
    }
    const total = getTotal();
    const confirmed = confirm(
      `تسویه حساب\n\nجمع کل: ${formatPrice(total)}\n\nآیا می‌خواهید به صفحه پرداخت هدایت شوید؟`
    );
    if (confirmed) {
      alert('در حال هدایت به درگاه پرداخت...');
      setTimeout(() => {
        alert('پرداخت با موفقیت انجام شد!');
        clearCart();
        onClose();
      }, 2000);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />
      <div
        className={`cart-sidebar fixed top-0 left-0 w-full sm:w-96 h-screen bg-surface shadow-hover z-50 transition-all flex flex-col ${
          isOpen ? 'open' : ''
        }`}
        style={{
          left: isOpen ? '0' : '-100%',
          transition: 'left 300ms ease-in-out',
          backgroundColor: '#eef4ed'
        }}
      >
        <div 
          className="p-6 border-b border-outline flex justify-between items-center"
          style={{ 
            borderWidth: '1px',
            borderColor: 'rgba(141, 169, 196, 0.3)'
          }}
        >
          <h3 
            className="font-bold"
            style={{ 
              fontSize: '24px', 
              fontWeight: 700,
              color: '#134074'
            }}
          >
            سبد خرید
          </h3>
          <button
            onClick={onClose}
            className="hover:text-text-primary transition-colors w-8 h-8 flex items-center justify-center"
            style={{ 
              transition: 'color 200ms',
              color: '#0b2545',
              fontSize: '32px'
            }}
          >
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p 
              className="text-center py-10"
              style={{ 
                fontSize: '14px',
                color: '#0b2545'
              }}
            >
              سبد خرید شما خالی است
            </p>
          ) : (
            <div className="space-y-0">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b mb-2 gap-2"
                  style={{ 
                    borderWidth: '1px',
                    borderColor: 'rgba(141, 169, 196, 0.3)'
                  }}
                >
                  <div className="flex-1">
                    <div 
                      className="font-medium"
                      style={{ 
                        fontSize: '16px', 
                        fontWeight: 500,
                        color: '#134074'
                      }}
                    >
                      {item.title}
                    </div>
                    <div 
                      className="font-medium"
                      style={{ 
                        fontSize: '14px', 
                        fontWeight: 500,
                        color: '#0b2545'
                      }}
                    >
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="border text-text-primary w-8 h-8 cursor-pointer font-medium flex items-center justify-center transition-colors"
                      style={{ 
                        borderWidth: '1px',
                        borderRadius: '10px',
                        transition: 'background-color 200ms',
                        borderColor: 'rgba(141, 169, 196, 0.5)',
                        color: '#134074',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(141, 169, 196, 0.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      −
                    </button>
                    <span 
                      className="min-w-6 text-center font-medium"
                      style={{ 
                        fontSize: '14px',
                        color: '#134074'
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border text-text-primary w-8 h-8 cursor-pointer font-medium flex items-center justify-center transition-colors"
                      style={{ 
                        borderWidth: '1px',
                        borderRadius: '10px',
                        transition: 'background-color 200ms',
                        borderColor: 'rgba(141, 169, 196, 0.5)',
                        color: '#134074',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(141, 169, 196, 0.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-transparent border-none text-red-500 cursor-pointer p-1 flex items-center justify-center transition-colors hover:bg-red-50"
                      style={{ 
                        borderRadius: '10px',
                        transition: 'background-color 200ms' 
                      }}
                      title="حذف"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div 
          className="p-6 border-t"
          style={{ 
            borderWidth: '1px',
            borderColor: 'rgba(141, 169, 196, 0.3)'
          }}
        >
          <div 
            className="flex justify-between mb-6 font-medium"
            style={{ 
              fontSize: '18px', 
              fontWeight: 500,
              color: '#134074'
            }}
          >
            <span>جمع کل:</span>
            <span>{formatPrice(getTotal())}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full text-white font-medium transition-all"
            style={{
              backgroundColor: '#134074',
              borderRadius: '12px',
              padding: '12px 18px',
              fontWeight: 500,
              transition: 'all 300ms',
              boxShadow: '0 2px 8px rgba(19, 64, 116, 0.2)'
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
            تسویه حساب
          </button>
        </div>
      </div>
    </>
  );
}
