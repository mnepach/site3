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
      <section id="features" className="py-12 sm:py-16" data-name="features" data-file="components/Features.js">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Почему выбирают <span className="gradient-text">нас?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-5 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <div className={`icon-${feature.icon} text-xl sm:text-2xl text-white`}></div>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-tight">
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