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
        <section id="order" className="py-12 sm:py-16" data-name="order-section" data-file="components/OrderSection.js">
          <div className="mobile-container">
            <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <div className="icon-shield-check text-2xl sm:text-3xl text-white"></div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                  Преобразователь ржавчины <span className="gradient-text">грунтовка по металлу</span>
                </h2>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  Комплексное решение против коррозии с защитным покрытием
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <span className="text-gray-400 line-through text-lg sm:text-xl">80 BYN</span>
                  <span className="text-3xl sm:text-4xl font-bold gradient-text">39.99 BYN</span>
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">-50%</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-white">Оформить заказ</h3>
                  
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
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
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreed"
                    id="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                  />
                  <label htmlFor="agreed" className="text-xs sm:text-sm text-gray-300">
                    Я согласен с <a href="politics.html" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors" target="_blank">политикой конфиденциальности</a> и <a href="oferta.html" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors" target="_blank">пользовательским соглашением</a>
                  </label>
                </div>
                  
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.phone || !formData.agreed}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={closeErrorModal}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ошибка</h3>
                <p className="text-gray-300 mb-6">{errorMessage}</p>
                <button
                  onClick={closeErrorModal}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg"
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