export default function ContactSection() {
  return (
    <section id="contact" className="bg-background py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-8">
          <h2 
            className="text-text-primary font-bold mb-4"
            style={{ fontSize: '24px', fontWeight: 700 }}
          >
            تماس با ما
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-surface border border-outline rounded-card p-6 transition-colors hover:bg-hover-bg"
              style={{ 
                transition: 'background-color 200ms'
              }}
            >
              <h3 
                className="text-text-primary font-bold mb-2"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                ایمیل
              </h3>
              <p 
                className="text-text-secondary"
                style={{ fontSize: '14px' }}
              >
                info@telegramstars.ir
              </p>
            </div>
            <div 
              className="bg-surface border border-outline rounded-card p-6 transition-colors hover:bg-hover-bg"
              style={{ 
                transition: 'background-color 200ms'
              }}
            >
              <h3 
                className="text-text-primary font-bold mb-2"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                تلگرام
              </h3>
              <p 
                className="text-text-secondary"
                style={{ fontSize: '14px' }}
              >
                @telegramstars
              </p>
            </div>
            <div 
              className="bg-surface border border-outline rounded-card p-6 transition-colors hover:bg-hover-bg"
              style={{ 
                transition: 'background-color 200ms'
              }}
            >
              <h3 
                className="text-text-primary font-bold mb-2"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                ساعات کاری
              </h3>
              <p 
                className="text-text-secondary"
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

