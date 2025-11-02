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
      <section id="gallery" className="py-8 sm:py-12 bg-gradient-to-b from-[var(--surface)] to-[var(--primary-color)]" data-name="gallery" data-file="components/Gallery.js">
        <div className="mobile-container">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--text-primary)]">Фото товара</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-32 sm:h-40 object-cover"
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