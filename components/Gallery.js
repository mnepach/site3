function Gallery() {
  try {
    const images = [
      {
        url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Преобразователь ржавчины'
      },
      {
        url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Применение на металле'
      },
      {
        url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Результат применения'
      },
      {
        url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Защитное покрытие'
      }
    ];

    return (
      <section id="gallery" className="py-12 sm:py-16" data-name="gallery" data-file="components/Gallery.js">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Фото товара</h2>
          </div>
          
          <div className="gallery-grid gap-4">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-32 sm:h-40 md:h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Gallery component error:', error);
    return null;
  }
}