export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="flex items-center justify-center text-center"
      style={{ 
        height: '360px',
        backgroundColor: 'rgba(98, 0, 238, 0.2)', // Primary with 20% opacity
        padding: '32px'
      }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 
          className="text-text-primary font-bold mb-4"
          style={{ fontSize: '32px', fontWeight: 700 }}
        >
          خرید آسان و سریع Telegram Stars
        </h1>
        <p 
          className="text-text-secondary"
          style={{ fontSize: '16px' }}
        >
          با بهترین قیمت و سریع‌ترین تحویل، استارهای تلگرام خود را خریداری کنید
        </p>
      </div>
    </section>
  );
}

