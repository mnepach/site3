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
      <section className="py-8 sm:py-12 bg-white" data-name="specifications" data-file="components/Specifications.js">
        <div className="mobile-container">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Характеристики</h2>
          </div>
          
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Технические характеристики" 
              className="w-full max-w-md specs-image rounded-xl shadow-lg"
            />
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-[var(--surface)] rounded-lg">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                  <div className={`icon-${spec.icon} text-sm sm:text-lg text-white`}></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                    <strong>{spec.title}:</strong> {spec.value}
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