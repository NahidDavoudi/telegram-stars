export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="bg-powder-blue flex items-center justify-center text-center"
      style={{ 
        height: '360px',
        padding: '32px'
      }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 
          className="text-prussian-blue font-bold mb-4"
          style={{ fontSize: '32px', fontWeight: 700 }}
        >
          خرید آسان و سریع Telegram Stars
        </h1>
        <p 
          className="text-prussian-blue/80"
          style={{ fontSize: '16px' }}
        >
          با بهترین قیمت و سریع‌ترین تحویل، استارهای تلگرام خود را خریداری کنید
        </p>
      </div>
    </section>
  );
}

