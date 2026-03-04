function StickyBanner() {
  const [visible, setVisible] = React.useState(false);
  const [closed, setClosed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !closed) {
        setVisible(true);
      } else if (window.scrollY <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [closed]);

  const handleClose = () => {
    setClosed(true);
    setVisible(false);
  };

  if (closed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: visible ? '16px' : '-120px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        transition: 'top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        width: 'calc(100% - 32px)',
        maxWidth: '480px',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(236, 72, 153, 0.95))',
        backdropFilter: 'blur(12px)',
        borderRadius: '16px',
        padding: '12px 16px',
        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.5), 0 2px 8px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        animation: 'pulse-ring 2s ease-in-out infinite',
      }}>
        <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', fontWeight: '500', marginBottom: '2px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Есть вопросы?
        </div>
        <a
          href="tel:+375292258014"
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: '16px',
            textDecoration: 'none',
            letterSpacing: '0.3px',
            display: 'block',
          }}
        >
          +375 (29) 225-80-14
        </a>
      </div>

      <a
        href="tel:+375292258014"
        style={{
          background: 'rgba(255,255,255,0.25)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.4)',
          borderRadius: '10px',
          padding: '8px 14px',
          fontSize: '13px',
          fontWeight: '600',
          textDecoration: 'none',
          flexShrink: 0,
          transition: 'background 0.2s',
        }}
      >
        Позвонить
      </a>

      <button
        onClick={handleClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.7)',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          borderRadius: '6px',
          transition: 'color 0.2s',
        }}
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }
      `}</style>
    </div>
  );
}