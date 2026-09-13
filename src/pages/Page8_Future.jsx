import { useState, useEffect } from 'react';

const messages = [
  "More memories...",
  "More laughter...",
  "More adventures...",
  "More birthdays...",
  "And hopefully...",
  "A lot more moments together ❤️"
];

const Page8_Future = ({ onNext }) => {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (visibleItems < messages.length) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleItems]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <h2 className="animate-fade-in" style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '50px', textAlign: 'center' }}>
        Our Story Has Just Started ❤️
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        maxWidth: '600px',
        marginBottom: '50px'
      }}>
        {messages.map((msg, index) => (
          <div 
            key={index}
            className={`glass-card ${index < visibleItems ? 'animate-slide-in' : ''}`}
            style={{
              padding: '20px',
              opacity: index < visibleItems ? 1 : 0,
              transform: index < visibleItems ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.5s ease',
              textAlign: index % 2 === 0 ? 'left' : 'right',
              marginLeft: index % 2 === 0 ? '0' : 'auto',
              marginRight: index % 2 === 0 ? 'auto' : '0',
              width: '80%'
            }}
          >
            <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>{msg}</p>
          </div>
        ))}
      </div>

      {visibleItems === messages.length && (
        <button onClick={onNext} className="glass-button animate-fade-in">
          The Final Surprise ❤️
        </button>
      )}

      <style>{`
        .animate-slide-in {
          animation: slideIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Page8_Future;
