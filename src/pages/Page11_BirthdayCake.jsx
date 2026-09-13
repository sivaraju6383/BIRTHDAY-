import { useState } from 'react';

const Page11_BirthdayCake = ({ onNext }) => {
  const [candlesBlown, setCandlesBlown] = useState([false, false, false]);

  const blowCandle = (index) => {
    const newCandles = [...candlesBlown];
    newCandles[index] = true;
    setCandlesBlown(newCandles);
  };

  const allBlown = candlesBlown.every(c => c === true);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      zIndex: 10
    }}>
      <h2 className="animate-fade-in" style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '10px', fontFamily: 'var(--font-handwriting)' }}>
        Make A Birthday Wish Ammu ❤️
      </h2>
      <p className="animate-fade-in delay-1" style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--color-dark)', textAlign: 'center' }}>
        Close Your Eyes...<br/>
        Make A Wish...<br/>
        And Blow The Candles (Tap them!) 🥹❤️
      </p>

      {/* Cake Drawing using CSS */}
      <div style={{ position: 'relative', width: '250px', height: '200px', marginBottom: '50px' }}>
        
        {/* Candles */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', position: 'absolute', bottom: '120px', width: '100%', zIndex: 5 }}>
          {[0, 1, 2].map((i) => (
            <div 
              key={i} 
              onClick={() => blowCandle(i)}
              style={{
                width: '15px',
                height: '50px',
                backgroundColor: '#fff',
                border: '2px solid #ddd',
                borderRadius: '3px',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {/* Flame */}
              {!candlesBlown[i] && (
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '15px',
                  height: '25px',
                  backgroundColor: '#ffd700',
                  borderRadius: '50% 50% 20% 20%',
                  boxShadow: '0 0 10px #ff4d4d',
                  animation: 'pulse 0.5s infinite alternate'
                }}></div>
              )}
            </div>
          ))}
        </div>

        {/* Cake Tiers */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '25px',
          width: '200px',
          height: '80px',
          backgroundColor: '#ffb6c1',
          borderRadius: '10px 10px 0 0',
          borderBottom: '10px solid #fff',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          zIndex: 4
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '250px',
          height: '40px',
          backgroundColor: '#ff99a8',
          borderRadius: '10px',
          zIndex: 3
        }}></div>
      </div>

      {allBlown && (
        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '30px', fontFamily: 'var(--font-handwriting)' }}>
            I Hope Every Wish You Make Comes True ❤️
          </h2>
          <button onClick={onNext} className="glass-button">
            Next Surprise 🎁
          </button>
          {/* Fireworks */}
          <div className="confetti-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: -1 }}>
            <div className="firework" style={{ left: '30%', top: '30%' }}></div>
            <div className="firework" style={{ left: '70%', top: '40%' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page11_BirthdayCake;
