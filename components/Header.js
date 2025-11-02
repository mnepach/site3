function Header() {
  try {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="mobile-container py-3">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-bg flex items-center justify-center">
                <div className="icon-shield text-lg sm:text-xl text-white"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold gradient-text">MetalGuard</span>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
