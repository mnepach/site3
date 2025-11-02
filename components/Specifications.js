function Specifications() {
  try {
    const specs = [
      {
        icon: 'list',
        title: 'Тип',
        value: 'преобразователь+грунтовка'
      },
      {
        icon: 'clock',
        title: 'Время высыхания',
        value: '30-60 минут'
      },
      {
        icon: 'palette',
        title: 'Под покраску',
        value: 'алкидные/акриловые краски'
      },
      {
        icon: 'factory',
        title: 'Применение',
        value: 'авто, трубы, конструкции'
      }
    ];

    return (
      <section className="py-12 sm:py-16" data-name="specifications" data-file="components/Specifications.js">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Характеристики</h2>
          </div>
          
          <div className="mb-8 sm:mb-10 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Технические характеристики" 
              className="w-full max-w-md specs-image rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-4">
            {specs.map((spec, index) => (
              <div key={index} className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <div className={`icon-${spec.icon} text-lg sm:text-xl text-white`}></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm sm:text-base font-semibold text-white">
                    <strong>{spec.title}:</strong> <span className="text-gray-300">{spec.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Specifications component error:', error);
    return null;
  }
}