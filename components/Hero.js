function Hero() {
  try {
    return (
      <section className="relative py-8 sm:py-12 bg-[var(--primary-color)]" data-name="hero" data-file="components/Hero.js">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        
        <div className="mobile-container relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block bg-white/20 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <span className="text-white font-medium text-sm sm:text-base">⚡ РЖАВЧИНА ИСЧЕЗАЕТ НАВСЕГДА</span>
            </div>
          </div>
          
          <div className="text-center text-white mb-6 sm:mb-8">
            <div className="mb-6 sm:mb-8">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Преобразователь ржавчины" 
                className="w-full max-w-xs sm:max-w-sm mx-auto rounded-xl shadow-2xl"
              />
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-shadow">
              Преобразователь ржавчины
              <span className="block text-xl sm:text-2xl md:text-3xl mt-1">грунтовка по металлу</span>
            </h1>
            
            <p className="text-base sm:text-lg mb-6 opacity-90 px-4">
              Комплексное решение против коррозии с защитным покрытием.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="price-old text-white/70">80 BYN</span>
              <span className="price-new text-white">39.99 BYN</span>
              <span className="discount-badge">-50%</span>
            </div>
            
            <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-4 sm:justify-center">
              <a href="#order" className="btn-primary block sm:inline-block">
                Заказать сейчас
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}