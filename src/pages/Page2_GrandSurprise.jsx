import { useState, useEffect } from 'react';

const Page2_GrandSurprise = ({ onNext }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      setTimeout(() => setStep(1), 3000), // Show Happy Birthday
      setTimeout(() => setStep(2), 6000), // Show 14 Sept
      setTimeout(() => setStep(3), 9000), // Show And somehow
      setTimeout(() => setStep(4), 12000) // Show button
    ];
    return () => sequence.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      {step === 0 && (
        <h2 className="animate-pulse" style={{ fontSize: '2rem', color: 'var(--color-dark)' }}>
          Something magical is about to happen... ✨
        </h2>
      )}

      {step >= 1 && (
        <>
          <h1 className="animate-fade-in" style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            color: 'var(--color-accent)',
            marginBottom: '20px',
            textShadow: '0 4px 15px rgba(255, 77, 77, 0.3)'
          }}>
            HAPPY BIRTHDAY AMMU ❤️🎂
          </h1>
          {/* Confetti & Fireworks */}
          <div className="confetti-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {[...Array(50)].map((_, i) => (
              <div key={i} className="confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                backgroundColor: ['#ff4d4d', '#ffd700', '#ffb6c1', '#ffffff', '#e6e6fa'][Math.floor(Math.random() * 5)]
              }}></div>
            ))}
            <div className="firework"></div>
            <div className="firework" style={{ left: '20%', top: '30%' }}></div>
            <div className="firework" style={{ left: '80%', top: '40%' }}></div>
          </div>
        </>
      )}

      {step >= 2 && (
        <div className="animate-fade-in" style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-dark)', fontFamily: 'var(--font-handwriting)' }}>14 September ❤️</h2>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>On this day, a very special person came into this world...</p>
        </div>
      )}

      {step >= 3 && (
        <div className="animate-fade-in" style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '1.2rem' }}>And somehow...</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '10px', color: 'var(--color-accent)' }}>
            she became one of the most beautiful parts of my world ❤️
          </p>
        </div>
      )}

      {step >= 4 && (
        <button onClick={onNext} className="glass-button animate-fade-in" style={{ marginTop: '50px' }}>
          Continue Ammu ❤️ →
        </button>
      )}

      <style>{`
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          top: -10px;
          opacity: 0.8;
          animation: fall 4s linear infinite;
        }
        @keyframes fall {
          to { transform: translateY(100vh) rotate(720deg); }
        }
      `}</style>
    </div>
  );
};

export default Page2_GrandSurprise;
