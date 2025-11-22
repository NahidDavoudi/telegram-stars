'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-oxford-navy text-mint-cream py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 
            className="text-mint-cream font-bold mb-4"
            style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 700 }}
          >
            تماس با ما
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-white/10 backdrop-blur-sm border border-powder-blue/20 p-6 transition-all"
              style={{ 
                borderRadius: '12px',
                transition: 'all 200ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 
                className="text-mint-cream font-bold mb-2"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                ایمیل
              </h3>
              <p 
                className="text-powder-blue/90"
                style={{ fontSize: '14px' }}
              >
                info@telegramstars.ir
              </p>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-sm border border-powder-blue/20 p-6 transition-all"
              style={{ 
                borderRadius: '12px',
                transition: 'all 200ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 
                className="text-mint-cream font-bold mb-2"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                تلگرام
              </h3>
              <p 
                className="text-powder-blue/90"
                style={{ fontSize: '14px' }}
              >
                @telegramstars
              </p>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-sm border border-powder-blue/20 p-6 transition-all"
              style={{ 
                borderRadius: '12px',
                transition: 'all 200ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 
                className="text-mint-cream font-bold mb-2"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                ساعات کاری
              </h3>
              <p 
                className="text-powder-blue/90"
                style={{ fontSize: '14px' }}
              >
                24 ساعته، 7 روز هفته
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
