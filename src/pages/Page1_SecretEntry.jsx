import { useState } from 'react';
import { Heart } from 'lucide-react';



const Page1_SecretEntry = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password === '0507') {
      setUnlocked(true);
      setTimeout(() => {
        onUnlock();
      }, 4000);
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
      zIndex: 10,
      background: unlocked ? '#050510' : 'transparent',
      transition: 'background 1.5s ease'
    }}>
      {unlocked ? (
        <div className="animate-fade-in" style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', color: 'white', zIndex: 100
        }}>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-handwriting)', marginBottom: '20px' }}>
            Welcome Ammu... ❤️
          </h1>
          {/* Explosion of small hearts */}
          {[...Array(50)].map((_, i) => (
            <Heart key={i} fill="red" color="red" style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              bottom: '-50px',
              width: `${10 + Math.random() * 20}px`,
              animation: `float ${2 + Math.random() * 2}s linear forwards`,
              animationDelay: `${Math.random()}s`
            }} />
          ))}
        </div>
      ) : (
        <>
          {/* LEFT SIDE */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(15px)'
          }}>
            <div className="glass-card animate-fade-in" style={{ padding: '40px', textAlign: 'center', maxWidth: '400px' }}>
              <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-handwriting)', color: 'var(--color-dark)', marginBottom: '10px' }}>
                Hey Ammu... ❤️
              </h1>
              <p style={{ marginBottom: '30px', fontSize: '1.2rem', color: 'var(--color-dark)', opacity: 0.8 }}>
                I have something very special waiting for you...
              </p>
              
              <h3 style={{ marginBottom: '20px', color: 'var(--color-accent)' }}>
                Enter Our Secret Password 🔐
              </h3>

              <form onSubmit={handleUnlock}>
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <Lock style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(0,0,0,0.5)' }} size={20} />
                  <input 
                    type="password" 
                    className="glass-input"
                    placeholder="Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ paddingLeft: '45px', border: error ? '2px solid red' : '' }}
                  />
                </div>
                
                <button type="submit" className="glass-button w-full" style={{ width: '100%', marginBottom: '15px' }}>
                  Unlock Your Surprise ❤️
                </button>
              </form>

              <button 
                onClick={() => setShowHint(!showHint)}
                style={{ background: 'none', color: 'var(--color-dark)', textDecoration: 'underline', fontSize: '0.9rem', opacity: 0.7 }}
              >
                Hint: Something Special About Us 👀❤️
              </button>
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
            position: 'relative',
            height: '500px',
            width: '100%'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.6), transparent)' }}></div>
            <div className="glass-card animate-fade-in delay-2" style={{
              padding: '30px 50px', textAlign: 'center', position: 'relative', zIndex: 2
            }}>
              <h1 style={{ fontSize: '3.5rem', color: 'var(--color-accent)', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                HAPPY BIRTHDAY<br/>RADHIKA ❤️🎂
              </h1>
              <p style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '10px', color: 'var(--color-dark)' }}>
                14 • 09 • 2007
              </p>
            </div>
          </div>
        </>
      )}
      
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

export default Page1_SecretEntry;
