import { useState, useEffect } from 'react';

const quotes = [
  "You are my favorite notification ❤️",
  "Your smile is still one of my favorite things in this world 😊❤️",
  "Some people make life beautiful just by being part of it ❤️",
  "You are not perfect...\nbut you are perfectly special to me ❤️",
  "Every beautiful memory becomes better when you are in it ❤️"
];

const Page7_Quotes = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < quotes.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 5000); // 5 seconds per quote for cinematic feel
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a1a', // Dark Starry sky
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
      {/* Starry background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        {[...Array(60)].map((_, i) => (
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

      <h2 className="animate-fade-in" style={{ 
        position: 'absolute', 
        top: '40px', 
        fontSize: '2rem', 
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'var(--font-modern)',
        fontWeight: 300
      }}>
        Some Things I Want You To Know ❤️
      </h2>

      <div style={{
        height: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '800px'
      }}>
        {currentIndex < quotes.length ? (
          <p 
            key={currentIndex} 
            className="animate-fade-in" 
            style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontFamily: 'var(--font-handwriting)',
              lineHeight: '1.6',
              color: 'var(--color-primary)',
              textShadow: '0 0 15px rgba(255, 209, 220, 0.4)',
              whiteSpace: 'pre-wrap'
            }}
          >
            {quotes[currentIndex]}
          </p>
        ) : (
          <button onClick={onNext} className="glass-button animate-fade-in" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
            Our Journey ❤️
          </button>
        )}
      </div>
    </div>
  );
};

export default Page7_Quotes;
