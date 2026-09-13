import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay before switching
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
      zIndex: 1000,
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <Heart className="animate-heartbeat" size={80} color="var(--color-accent)" fill="var(--color-accent)" />
      
      <h2 style={{ 
        marginTop: '30px', 
        fontFamily: 'var(--font-handwriting)', 
        fontSize: '2.5rem',
        color: 'var(--color-accent)' 
      }}>
        Preparing Something Special For You ❤️
      </h2>

      <div style={{
        width: '300px',
        height: '6px',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: '10px',
        marginTop: '30px',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: 'var(--color-accent)',
          transition: 'width 0.1s linear',
          boxShadow: '0 0 10px var(--color-accent)'
        }}></div>
      </div>
      <p style={{ marginTop: '10px', fontWeight: 600, color: 'var(--color-dark)' }}>{progress}%</p>
    </div>
  );
};

export default Loading;
