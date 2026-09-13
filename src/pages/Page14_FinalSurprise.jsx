import { useState } from 'react';
import { Heart } from 'lucide-react';

const Page14_FinalSurprise = () => {
  const [clicked, setClicked] = useState(false);
  const [step, setStep] = useState(0);

  const handleClick = () => {
    setClicked(true);
    // Sequence the reveal
    setTimeout(() => setStep(1), 2000); // "I ❤️ YOU"
    setTimeout(() => setStep(2), 5000); // "Happy Birthday My Ammu" + Explosion
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: clicked ? '#000' : 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      transition: 'background-color 2s ease',
      overflow: 'hidden',
      zIndex: 10
    }}>
      {!clicked ? (
        <div className="animate-fade-in">
          <h2 style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '40px', fontFamily: 'var(--font-handwriting)' }}>
            One Last Thing Ammu... ❤️
          </h2>
          <button onClick={handleClick} className="glass-button animate-pulse" style={{ fontSize: '1.5rem', padding: '20px 50px' }}>
            CLICK HERE ❤️
          </button>
        </div>
      ) : (
        <div style={{ color: 'white', zIndex: 10 }}>
          {step === 1 && (
            <h1 className="animate-fade-in" style={{ 
              fontSize: 'clamp(5rem, 15vw, 10rem)', 
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-handwriting)'
            }}>
              I ❤️ YOU
            </h1>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h1 style={{ 
                fontSize: 'clamp(3rem, 8vw, 6rem)', 
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-handwriting)',
                marginBottom: '40px',
                textShadow: '0 0 20px rgba(255,77,77,0.5)'
              }}>
                Happy Birthday My Ammu 🥰❤️
              </h1>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>THANK YOU FOR BEING PART OF MY LIFE ❤️</h3>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>ONCE AGAIN...</h3>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>HAPPY BIRTHDAY RADHIKA ❤️🎂🎉</h2>
            </div>
          )}
        </div>
      )}

      {/* The Grand Explosion */}
      {step === 2 && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5 }}>
          {/* Hundreds of hearts */}
          {[...Array(150)].map((_, i) => (
            <Heart 
              key={`heart-${i}`}
              color={i % 2 === 0 ? "red" : "#ffd1dc"}
              fill={i % 2 === 0 ? "red" : "#ffd1dc"}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                bottom: '-50px',
                width: `${10 + Math.random() * 40}px`,
                height: `${10 + Math.random() * 40}px`,
                animation: `float ${2 + Math.random() * 4}s linear forwards`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          {/* Confetti */}
          {[...Array(100)].map((_, i) => (
            <div key={`confetti-${i}`} style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: '-10px',
              width: '10px', height: '10px',
              backgroundColor: ['#ff4d4d', '#ffd700', '#ffb6c1', '#ffffff', '#e6e6fa'][Math.floor(Math.random() * 5)],
              animation: `fall ${3 + Math.random() * 3}s linear forwards`,
              animationDelay: `${Math.random()}s`
            }}></div>
          ))}
          {/* Fireworks */}
          <div className="firework" style={{ left: '20%', top: '20%' }}></div>
          <div className="firework" style={{ left: '80%', top: '30%' }}></div>
          <div className="firework" style={{ left: '50%', top: '40%' }}></div>
          <div className="firework" style={{ left: '30%', top: '60%' }}></div>
          <div className="firework" style={{ left: '70%', top: '70%' }}></div>
        </div>
      )}
    </div>
  );
};

export default Page14_FinalSurprise;
