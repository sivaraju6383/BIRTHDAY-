import { useState } from 'react';
import { Lock, Heart } from 'lucide-react';

const Page1_Login = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'iloveyou') {
      setUnlocked(true);
      setTimeout(() => onUnlock(), 1500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      zIndex: 10
    }}>
      {/* LEFT SIDE */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="glass-card animate-fade-in" style={{ padding: '40px', textAlign: 'center', maxWidth: '400px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--color-accent)' }}>
            A little surprise is waiting for you ❤️
          </h2>
          <p style={{ marginBottom: '30px', fontSize: '1.2rem', color: 'var(--color-dark)' }}>
            Enter the secret password
          </p>

          <form onSubmit={handleUnlock}>
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <Lock style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(0,0,0,0.5)' }} size={20} />
              <input 
                type="password" 
                className="glass-input"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: '45px', border: error ? '1px solid red' : '' }}
              />
            </div>
            
            <button 
              type="submit" 
              className="glass-button w-full"
              style={{ width: '100%', marginBottom: '15px' }}
            >
              {unlocked ? <Heart className="animate-heartbeat" color="red" fill="red" /> : 'Unlock My Surprise 🔐'}
            </button>
          </form>

          <button 
            onClick={() => setShowHint(!showHint)}
            style={{
              background: 'none',
              color: 'var(--color-dark)',
              textDecoration: 'underline',
              fontSize: '0.9rem',
              opacity: 0.7
            }}
          >
            Need a hint?
          </button>
          
          {showHint && (
            <p className="animate-fade-in" style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
              Hint: Three words, 8 letters. What I feel for you.
            </p>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={{
        flex: 1,
        backgroundImage: 'url("https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(255,255,255,0.4), transparent)'
        }}></div>
        <div className="glass-card animate-fade-in delay-2" style={{
          padding: '30px 50px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--color-accent)', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Happy Birthday<br/>My Love ❤️🎂
          </h1>
        </div>
      </div>

      {/* Responsive logic for mobile: hide right side or stack it. I'll add a quick media query via inline styles where possible or just stack. Since inline media queries don't work, I'll rely on global.css later if needed, but for now flexWrap works. */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="display: flex; minHeight: 100vh"] {
            flex-direction: column !important;
          }
          div[style*="flex: 1"] {
            min-height: 50vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Page1_Login;
