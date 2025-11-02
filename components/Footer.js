function Footer() {
  try {
    return (
      <footer className="py-8 sm:py-12 bg-[var(--text-primary)] text-white" data-name="footer" data-file="components/Footer.js">
        <div className="mobile-container">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-bg flex items-center justify-center">
                <div className="icon-shield text-lg sm:text-xl text-white"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold">MetalGuard</span>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center gap-2">
                <div className="icon-clock text-sm sm:text-base"></div>
                <span className="text-sm sm:text-base">пн-вс 09:00 - 21:00</span>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="icon-phone text-sm sm:text-base"></div>
                  <a href="tel:+375292258014" className="text-sm sm:text-base hover:text-gray-300 transition-colors">
                    +375 (29) 225-80-14
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="icon-mail text-sm sm:text-base"></div>
                  <a href="mailto:alivitarget@mail.ru" className="text-sm sm:text-base hover:text-gray-300 transition-colors">
                    alivitarget@mail.ru
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-4 sm:pt-6 space-y-2 sm:space-y-3">
              <div className="text-xs sm:text-sm text-gray-400">
                <p>ООО "АЛИВИТАРГЕТ" УНП 193766073</p>
                <p>220113, до востребования</p>
                <p className="mt-1 sm:mt-2">Акция действует на всей территории Беларуси</p>
              </div>
              
              <div className="text-xs sm:text-sm text-gray-400">
                <p>© 2025 MetalGuard. Все права защищены.</p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2">
                  <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                  <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
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