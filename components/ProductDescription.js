function ProductDescription() {
  try {
    return (
      <section id="description" className="py-12 sm:py-16" data-name="product-description" data-file="components/ProductDescription.js">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Описание</h2>
          </div>
          
          <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
            
            <div className="mb-6 sm:mb-8 overflow-hidden rounded-2xl flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Применение преобразователя" 
                className="w-full max-w-md description-image rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <p className="text-gray-200 leading-relaxed text-justify text-sm sm:text-base lg:text-lg">
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