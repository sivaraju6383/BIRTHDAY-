import { useState } from 'react';
import { Mail } from 'lucide-react';

const envelopes = [
  { id: 1, title: "Open When You Are Sad 😔", msg: "Remember Ammu... your smile is too beautiful to hide ❤️" },
  { id: 2, title: "Open When You Miss Me 🥺", msg: "Distance or time can never remove beautiful memories ❤️" },
  { id: 3, title: "Open When You Need To Smile 😊", msg: "Just remember... someone somewhere is probably thinking about you right now ❤️" },
  { id: 4, title: "Open When You Feel Special 👑", msg: "You don't need anyone's permission to be special... you already are ❤️" },
  { id: 5, title: "Open When You Want A Surprise 🎁", msg: "Congratulations Ammu... you found another surprise! ❤️🥰" }
];

const Page6_Envelopes = ({ onNext }) => {
  const [opened, setOpened] = useState({});

  const handleOpen = (id) => {
    setOpened(prev => ({ ...prev, [id]: true }));
  };

  const allOpened = Object.keys(opened).length === envelopes.length;

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
        Open These Whenever You Need Me ❤️
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        maxWidth: '700px',
        marginBottom: '40px'
      }}>
        {envelopes.map((env, index) => (
          <div 
            key={env.id}
            onClick={() => handleOpen(env.id)}
            className={`glass-card animate-slide-in delay-${index + 1}`}
            style={{
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              background: opened[env.id] ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.2)',
              border: `1px solid ${opened[env.id] ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.4)'}`
            }}
          >
            {!opened[env.id] ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Mail size={30} color="var(--color-accent)" />
                <h3 style={{ fontSize: '1.3rem' }}>{env.title}</h3>
              </div>
            ) : (
              <div className="animate-fade-in" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1rem', color: 'rgba(0,0,0,0.5)', marginBottom: '10px' }}>{env.title}</h3>
                <p style={{ fontSize: '1.4rem', color: 'var(--color-accent)', fontFamily: 'var(--font-handwriting)' }}>
                  "{env.msg}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {allOpened && (
        <button onClick={onNext} className="glass-button animate-fade-in">
          Continue ❤️
        </button>
      )}
    </div>
  );
};

export default Page6_Envelopes;
