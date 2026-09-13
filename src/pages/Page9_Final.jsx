import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Page9_Final = () => {
  const [step, setStep] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    if (step < 4) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const triggerLove = () => {
    setShowHearts(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#050510',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 10
    }}>
      {/* Starry background effect */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at center, #1a1a2e 0%, #050510 100%)',
        zIndex: -1
      }}>
        {[...Array(50)].map((_, i) => (
          <div key={`star-${i}`} style={{
            position: 'absolute',
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            backgroundColor: 'white',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animation: `pulse ${2 + Math.random() * 3}s infinite`
          }} />
        ))}
      </div>

      <div style={{ maxWidth: '800px', zIndex: 10 }}>
        {step >= 0 && (
          <p className="animate-fade-in" style={{ fontSize: '1.5rem', marginBottom: '40px', fontWeight: 300 }}>
            I made this little website just to see you smile ❤️
          </p>
        )}

        {step >= 1 && (
          <p className="animate-fade-in delay-1" style={{ fontSize: '1.8rem', marginBottom: '40px', fontStyle: 'italic' }}>
            Because today...<br/>
            The most special person deserves the most special surprise ❤️
          </p>
        )}

        {step >= 2 && (
          <h1 className="animate-fade-in delay-1" style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            color: 'var(--color-accent)', 
            marginBottom: '40px',
            fontFamily: 'var(--font-handwriting)',
            textShadow: '0 0 20px rgba(255,77,77,0.5)'
          }}>
            HAPPY BIRTHDAY MY LOVE ❤️🎂🎉
          </h1>
        )}

        {step >= 3 && (
          <div className="glass-card-dark animate-fade-in delay-1" style={{ padding: '30px', marginBottom: '40px' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', fontWeight: 300 }}>
              I hope your smile never fades.<br/>
              I hope your dreams come true.<br/>
              And I hope I can always be there to celebrate your beautiful moments ❤️
            </p>
          </div>
        )}

        {step >= 4 && !showHearts && (
          <button 
            onClick={triggerLove}
            className="glass-button animate-fade-in"
            style={{ 
              backgroundColor: 'rgba(255,77,77,0.2)', 
              color: 'white', 
              borderColor: 'rgba(255,77,77,0.5)',
              padding: '15px 40px',
              fontSize: '1.2rem'
            }}
          >
            One More Surprise ❤️
          </button>
        )}

        {showHearts && (
          <div className="animate-fade-in">
            <h1 style={{ 
              fontSize: 'clamp(4rem, 10vw, 8rem)', 
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-handwriting)',
              animation: 'pulse 1s infinite'
            }}>
              I LOVE YOU ❤️
            </h1>
          </div>
        )}
      </div>

      {showHearts && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5 }}>
          {[...Array(100)].map((_, i) => (
            <Heart 
              key={`heart-${i}`}
              color="red"
              fill="red"
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                bottom: '-50px',
                width: `${10 + Math.random() * 40}px`,
                height: `${10 + Math.random() * 40}px`,
                animation: `float ${3 + Math.random() * 4}s linear forwards`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page9_Final;
