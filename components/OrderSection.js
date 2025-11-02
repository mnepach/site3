function OrderSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    agreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  
  try {
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!formData.name || !formData.phone) {
        setErrorMessage('Пожалуйста, заполните все поля');
        setShowErrorModal(true);
        return;
      }
      
      if (!formData.agreed) {
        setErrorMessage('Необходимо согласиться с политикой конфиденциальности');
        setShowErrorModal(true);
        return;
      }
      
      setIsSubmitting(true);
      
      try {
        const response = await fetch('sendCPA.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: formData.name,
            phone: formData.phone,
            quantity: '1'
          })
        });
        
        const data = await response.json();
        
        if (data.success) {
          window.location.href = 'good.html';
        } else {
          setErrorMessage('Произошла ошибка при оформлении заказа. Попробуйте еще раз.');
          setShowErrorModal(true);
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Произошла ошибка при отправке заказа. Проверьте соединение с интернетом.');
        setShowErrorModal(true);
        setIsSubmitting(false);
      }
    };

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    };

    const closeErrorModal = () => {
      setShowErrorModal(false);
      setErrorMessage('');
    };

    return (
      <>
        <section id="order" className="py-8 sm:py-12 bg-gradient-to-b from-[var(--primary-color)] to-[var(--text-primary)]" data-name="order-section" data-file="components/OrderSection.js">
          <div className="mobile-container">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-xl gradient-bg flex items-center justify-center">
                  <div className="icon-shield-check text-2xl sm:text-3xl text-white"></div>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Преобразователь ржавчины <span className="gradient-text">грунтовка по металлу</span>
                </h2>
                
                <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6">
                  Комплексное решение против коррозии с защитным покрытием
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <span className="price-old">80 BYN</span>
                  <span className="price-new">39.99 BYN</span>
                  <span className="discount-badge">-50%</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6">Оформить заказ</h3>
                  
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3">
                  <input
                    type="checkbox"
                    name="agreed"
                    id="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className="mt-1 rounded border-[var(--border)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                  />
                  <label htmlFor="agreed" className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    Я согласен с <a href="politics.html" className="text-[var(--primary-color)] hover:underline" target="_blank">политикой конфиденциальности</a> и <a href="oferta.html" className="text-[var(--primary-color)] hover:underline" target="_blank">пользовательским соглашением</a>
                  </label>
                </div>
                  
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.phone || !formData.agreed}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Отправляем заказ...
                    </span>
                  ) : (
                    'Заказать'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {showErrorModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeErrorModal}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ошибка</h3>
                <p className="text-gray-600 mb-6">{errorMessage}</p>
                <button
                  onClick={closeErrorModal}
                  className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error('OrderSection component error:', error);
    return null;
  }
}