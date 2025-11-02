function ProductDescription() {
  try {
    return (
      <section id="description" className="py-8 sm:py-12 bg-[var(--surface)]" data-name="product-description" data-file="components/ProductDescription.js">
        <div className="mobile-container">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--text-primary)]">Описание</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            
            <div className="mb-6 sm:mb-8 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Применение преобразователя" 
                className="w-full rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-inner border border-white/50">
              <p className="text-[var(--text-secondary)] leading-relaxed text-justify text-sm sm:text-base lg:text-lg">
                Инновационный преобразователь ржавчины с функцией грунтовки химически реагирует с коррозией, превращая её в прочное защитное покрытие. Не требует механической зачистки перед нанесением, создаёт идеальную основу для последующей покраски. Подходит для обработки кузовов автомобилей, металлических конструкций, труб и других поверхностей. Эффективно работает даже с глубокой коррозией, значительно продлевая срок службы металлических изделий.
              </p>
              
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductDescription component error:', error);
    return null;
  }
}