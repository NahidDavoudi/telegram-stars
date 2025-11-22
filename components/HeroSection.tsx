export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="bg-powder-blue flex items-center justify-center text-center"
      style={{ 
        minHeight: '400px',
        padding: '48px 24px'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h1 
          className="text-prussian-blue font-bold mb-6"
          style={{ 
            fontSize: 'clamp(28px, 5vw, 40px)', 
            fontWeight: 700,
            lineHeight: '1.2'
          }}
        >
          خرید آسان و سریع Telegram Stars
        </h1>
        <p 
          className="text-prussian-blue/80"
          style={{ 
            fontSize: 'clamp(14px, 3vw, 18px)',
            lineHeight: '1.6'
          }}
        >
          با بهترین قیمت و سریع‌ترین تحویل، استارهای تلگرام خود را خریداری کنید
        </p>
      </div>
    </section>
  );
}
