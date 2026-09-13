import { useState, useEffect } from 'react';

const quotes = [
  "You are my today and all of my tomorrows ❤️",
  "In a world full of temporary things, you are my favorite forever ❤️",
  "Your smile is still my favorite view 😊❤️",
  "I don't need a perfect life, I just need you in my life ❤️"
];

const Page6_Quotes = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < quotes.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 4000); // 4 seconds per quote
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

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
      <h2 className="animate-fade-in" style={{ 
        position: 'absolute', 
        top: '40px', 
        fontSize: '2rem', 
        color: 'var(--color-accent)' 
      }}>
        Words From My Heart ❤️
      </h2>

      <div style={{
        height: '200px',
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
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontFamily: 'var(--font-handwriting)',
              lineHeight: '1.5'
            }}
          >
            {quotes[currentIndex]}
          </p>
        ) : (
          <button onClick={onNext} className="glass-button animate-fade-in">
            Continue ❤️
          </button>
        )}
      </div>
    </div>
  );
};

export default Page6_Quotes;
