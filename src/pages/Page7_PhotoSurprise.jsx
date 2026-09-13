import { useState } from 'react';
import { Gift } from 'lucide-react';

const Page7_PhotoSurprise = ({ onNext }) => {
  const [opened, setOpened] = useState(false);

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
      {!opened ? (
        <div className="glass-card animate-fade-in" style={{ padding: '50px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>One Last Surprise For You... 🎁❤️</h2>
          <button 
            onClick={() => setOpened(true)}
            className="glass-button animate-pulse"
            style={{ fontSize: '1.2rem', padding: '15px 40px' }}
          >
            <Gift style={{ marginRight: '10px' }} />
            Open Your Gift 🎁
          </button>
        </div>
      ) : (
        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
          <div style={{
            width: '80vw',
            maxWidth: '600px',
            height: '60vh',
            maxHeight: '600px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            marginBottom: '30px',
            border: '10px solid white',
            position: 'relative'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80" 
              alt="Special Surprise" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
            {/* Sparkles effect overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, transparent 20%, rgba(255,255,255,0.4) 150%)',
              pointerEvents: 'none'
            }}></div>
          </div>
          
          <h2 className="animate-fade-in delay-2" style={{ 
            fontSize: '3rem', 
            color: 'var(--color-accent)',
            marginBottom: '30px',
            fontFamily: 'var(--font-handwriting)'
          }}>
            You are my favorite gift from life ❤️
          </h2>
          
          <button onClick={onNext} className="glass-button animate-fade-in delay-4">
            Next ❤️
          </button>
        </div>
      )}
    </div>
  );
};

export default Page7_PhotoSurprise;
