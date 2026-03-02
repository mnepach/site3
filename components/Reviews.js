function Reviews() {
  const [reviews] = React.useState([
    {
      id: 1,
      name: "Александр К.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      text: "Обработал кузов старой Нивы — результат потрясающий! Ржавчина превратилась в твёрдый слой, краска легла идеально. Раньше тратил целый день на зачистку, теперь всё за пару часов.",
      product: "MetalGuard — преобразователь ржавчины",
      rating: 5,
      photos: [
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: 2,
      name: "Сергей В.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      text: "Взял по акции 3+1, обработал ворота и забор. Нанёс, подождал час — можно красить. Работает отлично.",
      product: "MetalGuard × 4 (акция 3+1)",
      rating: 5,
      photos: [
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=300&q=80"
      ]
    }
  ]);

  const [current, setCurrent] = React.useState(0);
  const [formOpen, setFormOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [formName, setFormName] = React.useState("");
  const [formText, setFormText] = React.useState("");
  const [formFiles, setFormFiles] = React.useState([]);
  const [formPreviews, setFormPreviews] = React.useState([]);
  const [formError, setFormError] = React.useState("");
  const [lightbox, setLightbox] = React.useState(null);
  const startXRef = React.useRef(null);

  const total = reviews.length;
  const review = reviews[current];

  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);

  const handleTouchStart = e => (startXRef.current = e.touches[0].clientX);
  const handleTouchEnd = e => {
    if (startXRef.current === null) return;
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    startXRef.current = null;
  };

  const handleFileChange = e => {
    const files = Array.from(e.target.files);
    setFormFiles(files);
    setFormPreviews(files.map(f => URL.createObjectURL(f)));
  };

  const handleSubmit = () => {
    if (!formName.trim() || !formText.trim()) {
      setFormError("Пожалуйста, заполните имя и отзыв");
      return;
    }
    setFormError("");
    setFormOpen(false);
    setSuccessOpen(true);
    setFormName("");
    setFormText("");
    setFormFiles([]);
    setFormPreviews([]);
    setTimeout(() => setSuccessOpen(false), 3000);
  };

  const closeForm = () => {
    setFormOpen(false);
    setFormName("");
    setFormText("");
    setFormFiles([]);
    setFormPreviews([]);
    setFormError("");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Отзывы <span className="text-emerald-600">покупателей</span>
          </h2>
          <p className="text-gray-600">
            Более 800 довольных клиентов
          </p>
        </div>

        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 min-h-[240px]">

            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500"
              />
              <div>
                <div className="font-bold text-gray-900">{review.name}</div>
                <div className="flex text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">{review.product}</div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{review.text}</p>

            {review.photos?.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {review.photos.map((photo, idx) => (
                  <img
                    key={idx}
                    src={photo}
                    alt=""
                    onClick={() => setLightbox(photo)}
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200 cursor-pointer hover:scale-105 transition"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-emerald-600 text-white text-xl font-bold hover:bg-emerald-700 transition"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: idx === current ? "20px" : "8px",
                    background: idx === current ? "#059669" : "#d1d5db"
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-emerald-600 text-white text-xl font-bold hover:bg-emerald-700 transition"
            >
              ›
            </button>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setFormOpen(true)}
              className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition"
            >
              ✏️ Оставить отзыв
            </button>
          </div>
        </div>
      </div>

      {formOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-lg text-gray-900">Оставить отзыв</h3>
              <button onClick={closeForm}>×</button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={formName}
                onChange={e => setFormName(e.target.value)}
                placeholder="Ваше имя"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-emerald-600 outline-none"
              />

              <textarea
                value={formText}
                onChange={e => setFormText(e.target.value)}
                placeholder="Ваш отзыв"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-emerald-600 outline-none resize-none"
              />

              {formError && <p className="text-red-500 text-sm">{formError}</p>}

              <button
                onClick={handleSubmit}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                Отправить отзыв
              </button>
            </div>
          </div>
        </div>
      )}

      {successOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Спасибо за отзыв!</h3>
            <p className="text-gray-600 text-sm">Ваш отзыв успешно отправлен.</p>
          </div>
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </section>
  );
}