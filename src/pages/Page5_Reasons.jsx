import { useState } from 'react';

const reasons = [
  { id: 1, title: "❤️ Your Beautiful Smile", desc: "It completely lights up my world." },
  { id: 2, title: "🥰 Your Cute Reactions", desc: "They are my absolute favorite thing." },
  { id: 3, title: "❤️ Your Caring Heart", desc: "You have so much love to give." },
  { id: 4, title: "😊 The Way You Make Me Smile", desc: "Without even trying." },
  { id: 5, title: "✨ Your Beautiful Personality", desc: "Inside and out, you are stunning." },
  { id: 6, title: "💕 Your Presence", desc: "It brings me so much peace." },
  { id: 7, title: "🥹 Your Cuteness", desc: "It melts my heart every single time." },
  { id: 8, title: "❤️ The Way You Make Everything Better", desc: "Just by being there." },
  { id: 9, title: "😊 Your Happiness", desc: "Is the only thing I ever want." },
  { id: 10, title: "💗 Your Beautiful Heart", desc: "So pure and perfect." },
  { id: 11, title: "🥰 Your Memories With Me", desc: "Are my favorite treasures." },
  { id: 12, title: "❤️ The Way You Are", desc: "Uniquely, wonderfully you." },
  { id: 13, title: "✨ Everything About You", desc: "I wouldn't change a single thing." },
  { id: 14, title: "💕 Because You Are My Ammu", desc: "And that's the best reason of all." }
];

const Page5_Reasons = ({ onNext }) => {
  const [revealed, setRevealed] = useState({});

  const handleReveal = (id) => {
    setRevealed(prev => ({ ...prev, [id]: true }));
  };

  const allRevealed = Object.keys(revealed).length === reasons.length;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <h2 className="animate-fade-in" style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '40px', textAlign: 'center', fontFamily: 'var(--font-handwriting)' }}>
        14 Reasons Why Ammu Is Special ❤️
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px',
        width: '100%',
        maxWidth: '1200px',
        marginBottom: '40px'
      }}>
        {reasons.map((reason, index) => (
          <div 
            key={reason.id}
            onClick={() => handleReveal(reason.id)}
            className={`glass-card animate-fade-in delay-${(index % 5) + 1}`}
            style={{
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              transform: revealed[reason.id] ? 'scale(1.05)' : 'scale(1)',
              background: revealed[reason.id] ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.2)',
              borderLeft: `4px solid ${revealed[reason.id] ? 'var(--color-accent)' : 'transparent'}`
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: revealed[reason.id] ? '10px' : '0'
            }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgba(0,0,0,0.3)' }}>{String(reason.id).padStart(2, '0')}</span>
              <h3 style={{ fontSize: '1.2rem' }}>{reason.title}</h3>
            </div>
            
            {revealed[reason.id] ? (
              <p className="animate-fade-in" style={{ fontSize: '1rem', color: 'var(--color-dark)', fontStyle: 'italic' }}>
                {reason.desc}
              </p>
            ) : (
              <p style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '5px' }}>Tap to reveal</p>
            )}
          </div>
        ))}
      </div>

      {allRevealed && (
        <button onClick={onNext} className="glass-button animate-fade-in">
          Next Surprise ❤️
        </button>
      )}
    </div>
  );
};

export default Page5_Reasons;
