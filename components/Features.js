function Features() {
  try {
    const features = [
      {
        icon: 'refresh-ccw',
        title: 'Преобразование',
        description: 'Ржавчина в защитный слой.'
      },
      {
        icon: 'shield-check',
        title: 'Защита',
        description: 'Долговременный антикоррозийный эффект.'
      },
      {
        icon: 'palette',
        title: 'Грунтовка',
        description: 'Готовое основание под покраску.'
      },
      {
        icon: 'wrench',
        title: 'Универсальность',
        description: 'Для всех типов металла.'
      }
    ];

    return (
      <section id="features" className="py-8 sm:py-12 bg-white" data-name="features" data-file="components/Features.js">
        <div className="mobile-container">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Почему выбирают <span className="gradient-text">нас?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className={`icon-${feature.icon} text-lg sm:text-2xl text-white`}></div>
                </div>
                
                <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-tight">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}