function OrderSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    agreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [notification, setNotification] = React.useState(null);

  try {
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.agreed) {
        setNotification({ type: 'error', message: 'Необходимо согласиться с политикой конфиденциальности' });
        setTimeout(() => setNotification(null), 4000);
        return;
      }
      
      setIsSubmitting(true);
      
      try {
        const formBody = new FormData();
        formBody.append('name', formData.name);
        formBody.append('phone', formData.phone);
        
        const response = await fetch('sendCPA.php', {
          method: 'POST',
          body: formBody
        });
        
        const data = await response.json();
        
        if (data.success) {
          window.location.href = 'good.html';
        } else {
          throw new Error(data.error || 'Ошибка при оформлении заказа');
        }
      } catch (error) {
        console.error('Order error:', error);
        setNotification({ 
          type: 'error', 
          message: 'Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте снова или свяжитесь с нами по телефону.' 
        });
        setTimeout(() => setNotification(null), 5000);
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

    return (
      <section id="order" className="py-8 sm:py-16 bg-gradient-to-b from-white to-[var(--surface-blue)]" data-name="order-section" data-file="components/OrderSection.js">
        {notification && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setNotification(null)}></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md p-4 sm:p-6 rounded-2xl shadow-2xl bg-red-500 text-white">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Ошибка оформления</h3>
                  <p className="text-sm sm:text-base font-medium leading-relaxed">{notification.message}</p>
                </div>
                <button 
                  onClick={() => setNotification(null)}
                  className="w-full bg-white text-red-500 py-2.5 sm:py-3 px-6 rounded-xl text-sm sm:text-base font-bold hover:bg-gray-100 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </>
        )}
        
        <div className="mobile-container">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[var(--border)]">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block promotion-badge mb-4 animate-pulse">
                🔥 АКЦИЯ 3+1 = ЧЕТВЁРТЫЙ В ПОДАРОК!
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[var(--text-primary)]">
                Преобразователь ржавчины<br />
                <span className="gradient-text">с грунтовочным эффектом</span>
              </h2>
              
              <div className="bg-gradient-to-br from-[var(--surface-blue)] to-white p-4 sm:p-5 rounded-xl text-sm sm:text-base text-[var(--text-primary)] border border-[var(--primary-color)]/20 shadow-lg">
                <div className="font-bold mb-2 text-[var(--primary-color)] text-base sm:text-lg">Условия акции:</div>
                <div className="space-y-1">
                  <div>✓ Купите 3 упаковки по цене 39.99 BYN</div>
                  <div>✓ Получите 4-ю упаковку бесплатно</div>
                  <div>✓ Итого: 4 упаковки за 119.97 BYN вместо 319.96 BYN</div>
                  <div className="font-bold text-[var(--accent-color)] mt-3 text-base sm:text-lg">Экономия: 199.99 BYN!</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-[var(--text-primary)]">Оформить заказ</h3>
                
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 text-base border-2 border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] touch-manipulation transition-all"
                  style={{ fontSize: '16px' }}
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
                  className="w-full px-4 py-4 text-base border-2 border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] touch-manipulation transition-all"
                  style={{ fontSize: '16px' }}
                />
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  name="agreed"
                  id="agreed"
                  checked={formData.agreed}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 rounded border-2 border-[var(--border)] text-[var(--primary-color)] focus:ring-[var(--primary-color)] cursor-pointer"
                />
                <label htmlFor="agreed" className="text-sm sm:text-base text-[var(--text-secondary)] cursor-pointer select-none">
                  Я согласен с{' '}
                  <a 
                    href="politics.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary-color)] hover:text-[var(--accent-color)] underline underline-offset-2 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    политикой конфиденциальности
                  </a>
                  {' '}и{' '}
                  <a 
                    href="oferta.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary-color)] hover:text-[var(--accent-color)] underline underline-offset-2 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    пользовательским соглашением
                  </a>
                </label>
              </div>
                
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.name || !formData.phone || !formData.agreed}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed py-5 text-xl font-bold shadow-2xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Отправляем заказ...
                  </span>
                ) : (
                  'Заказать сейчас'
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('OrderSection component error:', error);
    return null;
  }
}