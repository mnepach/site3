function Footer() {
  try {
    return (
      <footer className="bg-white py-8 sm:py-12 mt-16" data-name="footer" data-file="components/Footer.js">
        <div className="mobile-container">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md">
                <div className="icon-shield text-lg sm:text-xl text-white"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">MetalGuard</span>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <div className="icon-clock text-sm sm:text-base"></div>
                <span className="text-sm sm:text-base">пн-вс 09:00 - 21:00</span>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="icon-phone text-sm sm:text-base text-purple-600"></div>
                  <a href="tel:+375292258014" className="text-sm sm:text-base text-gray-700 hover:text-purple-600 transition-colors">
                    +375 (29) 225-80-14
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="icon-mail text-sm sm:text-base text-purple-600"></div>
                  <a href="mailto:alivitarget@mail.ru" className="text-sm sm:text-base text-gray-700 hover:text-purple-600 transition-colors">
                    alivitarget@mail.ru
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 sm:pt-6 space-y-2 sm:space-y-3">
              <div className="text-xs sm:text-sm text-gray-600">
                <p>ООО "АЛИВИТАРГЕТ" УНП 193766073</p>
                <p>220113, до востребования</p>
                <p className="mt-1 sm:mt-2">Акция действует на всей территории Беларуси</p>
              </div>
              
              <div className="text-xs sm:text-sm text-gray-600">
                <p>© 2025 MetalGuard. Все права защищены.</p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2">
                  <a href="politics.html" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">Политика конфиденциальности</a>
                  <a href="oferta.html" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">Публичная оферта</a>
                  <a href="obmen_vozvrat.html" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">Обмен и возврат</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}