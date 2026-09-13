import { useState, useEffect } from 'react';
import { Gift, Heart } from 'lucide-react';
import { photos } from '../utils/photos';

const Page9_HiddenSurprise = ({ onNext }) => {
  const [step, setStep] = useState(0);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (step < 3) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: step < 3 ? '#050510' : 'transparent',
      color: step < 3 ? 'white' : 'var(--color-dark)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      transition: 'background-color 2s ease, color 2s ease',
      zIndex: 10
    }}>
      {step === 0 && (
        <h2 className="animate-fade-in" style={{ fontSize: '2rem' }}>Wait Ammu... 👀</h2>
      )}
      {step === 1 && (
        <h2 className="animate-fade-in" style={{ fontSize: '2rem' }}>You thought the surprises were over?</h2>
      )}
      {step === 2 && (
        <h2 className="animate-fade-in" style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>Not Yet... 😌❤️</h2>
      )}

      {step >= 3 && !opened && (
        <div className="glass-card animate-fade-in" style={{ padding: '50px' }}>
          <Gift size={80} color="var(--color-accent)" style={{ marginBottom: '30px', animation: 'pulse 2s infinite' }} />
          <br/>
          <button onClick={() => setOpened(true)} className="glass-button">
            OPEN THE GIFT 🎁
          </button>
        </div>
      )}

      {opened && (
        <div className="animate-fade-in" style={{ textAlign: 'center', width: '100%', maxWidth: '600px' }}>
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            marginBottom: '30px',
            border: '10px solid white',
            position: 'relative'
          }}>
            <img 
              src={photos[4]} 
              alt="Special Gift" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          
          <h2 className="animate-fade-in delay-1" style={{ 
            fontSize: '2rem', 
            color: 'var(--color-accent)',
            marginBottom: '30px',
            fontFamily: 'var(--font-handwriting)'
          }}>
            You Are One Of The Most Beautiful Gifts Life Gave Me ❤️
          </h2>
          
          <button onClick={onNext} className="glass-button animate-fade-in delay-3">
            Next ❤️
          </button>

          {/* Hearts effect */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
            {[...Array(20)].map((_, i) => (
              <Heart key={i} fill="red" color="red" style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                bottom: '-50px',
                width: `${10 + Math.random() * 30}px`,
                animation: `float ${3 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random()}s`
              }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page9_HiddenSurprise;
