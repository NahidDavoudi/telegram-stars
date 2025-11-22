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
        className={`cart-sidebar fixed top-0 left-0 w-96 h-screen bg-surface shadow-hover z-50 transition-all flex flex-col ${
          isOpen ? 'open' : ''
        }`}
        style={{
          left: isOpen ? '0' : '-24rem',
          transition: 'left 300ms ease-in-out'
        }}
      >
        <div 
          className="p-6 border-b border-outline flex justify-between items-center"
          style={{ borderWidth: '1px' }}
        >
          <h3 
            className="text-text-primary font-bold"
            style={{ fontSize: '24px', fontWeight: 700 }}
          >
            سبد خرید
          </h3>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors w-8 h-8 flex items-center justify-center"
            style={{ transition: 'color 200ms' }}
          >
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p 
              className="text-center text-text-secondary py-10"
              style={{ fontSize: '14px' }}
            >
              سبد خرید شما خالی است
            </p>
          ) : (
            <div className="space-y-0">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b border-outline mb-2 gap-2"
                  style={{ borderWidth: '1px' }}
                >
                  <div className="flex-1">
                    <div 
                      className="font-medium text-text-primary"
                      style={{ fontSize: '16px', fontWeight: 500 }}
                    >
                      {item.title}
                    </div>
                    <div 
                      className="text-primary font-medium"
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="border border-outline text-text-primary w-8 h-8 rounded-button cursor-pointer font-medium flex items-center justify-center transition-colors hover:bg-hover-bg"
                      style={{ 
                        borderWidth: '1px',
                        transition: 'background-color 200ms'
                      }}
                    >
                      −
                    </button>
                    <span 
                      className="min-w-6 text-center font-medium text-text-primary"
                      style={{ fontSize: '14px' }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border border-outline text-text-primary w-8 h-8 rounded-button cursor-pointer font-medium flex items-center justify-center transition-colors hover:bg-hover-bg"
                      style={{ 
                        borderWidth: '1px',
                        transition: 'background-color 200ms'
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-transparent border-none text-red-500 cursor-pointer p-1 flex items-center justify-center transition-colors rounded-button hover:bg-red-50"
                      style={{ transition: 'background-color 200ms' }}
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
          className="p-6 border-t border-outline"
          style={{ borderWidth: '1px' }}
        >
          <div 
            className="flex justify-between mb-6 font-medium text-text-primary"
            style={{ fontSize: '18px', fontWeight: 500 }}
          >
            <span>جمع کل:</span>
            <span>{formatPrice(getTotal())}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full text-white font-medium transition-colors hover:bg-oxford-navy"
            style={{
              backgroundColor: '#134074',
              borderRadius: '10px',
              padding: '12px 18px',
              fontWeight: 500,
              transition: 'background-color 200ms'
            }}
          >
            تسویه حساب
          </button>
        </div>
      </div>
    </>
  );
}

