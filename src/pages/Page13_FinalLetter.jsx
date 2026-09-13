import { useState, useEffect } from 'react';

const lines = [
  "Ammu...",
  "I made this little world just for you ❤️",
  "Not because a website can explain everything...",
  "But because I wanted to give you something different...",
  "Something you could explore...",
  "Something that could make you smile...",
  "Something that reminds you...",
  "That today...",
  "You are very special ❤️"
];

const Page13_FinalLetter = ({ onNext }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, 3000); // 3 seconds per line
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowFinal(true), 1500);
    }
  }, [lineIndex]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#050510',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 10
    }}>
      {/* Starry background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        {[...Array(50)].map((_, i) => (
          <div key={i} style={{
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
        {lineIndex < lines.length ? (
          <h2 key={lineIndex} className="animate-fade-in" style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontFamily: 'var(--font-handwriting)',
            color: 'var(--color-primary)',
            textShadow: '0 0 10px rgba(255, 209, 220, 0.3)'
          }}>
            {lines[lineIndex]}
          </h2>
        ) : showFinal ? (
          <div className="animate-fade-in">
            <h1 style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
              color: 'var(--color-accent)', 
              marginBottom: '10px',
              fontFamily: 'var(--font-handwriting)',
              textShadow: '0 0 20px rgba(255,77,77,0.5)'
            }}>
              HAPPY BIRTHDAY RADHIKA ❤️🎂🎉
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>
              14 SEPTEMBER
            </p>
            
            <div style={{ fontSize: '1.2rem', lineHeight: '2', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', marginBottom: '40px' }}>
              <p>May your life always be filled with happiness ❤️</p>
              <p>May your dreams always come true ✨</p>
              <p>May your smile always remain beautiful 😊</p>
              <p>And may you always remember...</p>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--color-accent)', marginTop: '20px', fontStyle: 'normal' }}>
                YOU ARE SPECIAL ❤️
              </p>
            </div>

            <button onClick={onNext} className="glass-button" style={{ 
              backgroundColor: 'rgba(255,77,77,0.2)', 
              color: 'white', 
              borderColor: 'rgba(255,77,77,0.5)',
              padding: '15px 40px',
              fontSize: '1.2rem'
            }}>
              Proceed ❤️
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Page13_FinalLetter;
