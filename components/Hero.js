function Hero() {
  try {
    return (
      <section className="relative py-6 sm:py-8 md:py-10" data-name="hero" data-file="components/Hero.js">
        <div className="mobile-container">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-block glass-card rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-4 sm:mb-6">
              <span className="text-white font-medium text-xs sm:text-sm">⚡ РЖАВЧИНА ИСЧЕЗАЕТ НАВСЕГДА</span>
            </div>
          </div>
          
          <div className="text-center text-white mb-4 sm:mb-6">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Преобразователь ржавчины" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md hero-image rounded-2xl shadow-2xl"
              />
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
              Преобразователь ржавчины
              <span className="block text-xl sm:text-2xl md:text-3xl mt-1 gradient-text">грунтовка по металлу</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-300 px-4 max-w-2xl mx-auto">
              Комплексное решение против коррозии с защитным покрытием.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-gray-400 line-through text-lg sm:text-xl">80 BYN</span>
              <span className="text-3xl sm:text-4xl font-bold gradient-text">39.99 BYN</span>
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">-50%</span>
            </div>
            
            <div className="flex justify-center">
              <a href="#order" className="btn-primary inline-block text-sm sm:text-base">
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