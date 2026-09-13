import { useEffect, useState } from 'react';
// We'll use CSS confetti in animations.
// Since I can't install randomly without package.json change, I'll create custom CSS confetti.

const Page2_GrandWish = ({ onNext }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);
    return () => clearTimeout(timer);
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
      <h1 className="animate-fade-in delay-1" style={{ 
        fontSize: 'clamp(3rem, 8vw, 6rem)', 
        color: 'var(--color-accent)',
        marginBottom: '20px',
        textShadow: '0 4px 15px rgba(255, 77, 77, 0.3)'
      }}>
        HAPPY BIRTHDAY MY LOVE ❤️🎉
      </h1>
      
      <p className="animate-fade-in delay-3" style={{
        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
        color: 'var(--color-dark)',
        maxWidth: '800px',
        lineHeight: '1.6',
        marginTop: '20px',
        fontFamily: 'var(--font-modern)',
        fontWeight: 300
      }}>
        Today is not just your birthday...<br/>
        It's the day my favorite person came into this world ❤️
      </p>

      {showButton && (
        <button 
          onClick={onNext}
          className="glass-button animate-fade-in"
          style={{ marginTop: '50px' }}
        >
          Continue Our Story ❤️
        </button>
      )}

      {/* Simple CSS Confetti wrapper */}
      <div className="confetti-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(50)].map((_, i) => (
          <div key={i} className="confetti" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            backgroundColor: ['#ff4d4d', '#ffd700', '#ffb6c1', '#ffffff', '#e6e6fa'][Math.floor(Math.random() * 5)]
          }}></div>
        ))}
      </div>

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
          to {
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Page2_GrandWish;
