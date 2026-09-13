import { MailOpen } from 'lucide-react';
import { useState } from 'react';

const Page3_Letter = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <h2 className="animate-fade-in" style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '30px' }}>
        A Letter From My Heart 💌
      </h2>

      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="glass-card animate-pulse"
          style={{
            padding: '50px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <MailOpen size={64} color="var(--color-accent)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>Tap to open your letter ❤️</span>
        </button>
      ) : (
        <div className="glass-card animate-fade-in" style={{
          maxWidth: '600px',
          padding: '40px',
          textAlign: 'center',
          lineHeight: '1.8',
          fontSize: '1.1rem'
        }}>
          <p style={{ marginBottom: '15px' }}>Happy Birthday to the most beautiful person in my life ❤️</p>
          <p style={{ marginBottom: '15px' }}>
            You are not just my girlfriend, you are my happiness, my smile, my favorite thought, and one of the most special people in my world.
          </p>
          <p style={{ marginBottom: '15px' }}>
            I hope this year brings you endless happiness, beautiful memories, success, and everything your heart wishes for.
          </p>
          <p style={{ marginBottom: '15px' }}>Thank you for being you.</p>
          <p style={{ marginBottom: '15px' }}>Thank you for making my life more beautiful.</p>
          <p style={{ marginBottom: '30px', fontWeight: 'bold' }}>And most importantly...<br/>Thank you for being part of my story ❤️</p>
          
          <button onClick={onNext} className="glass-button">
            Something More For You 👀❤️
          </button>
        </div>
      )}
    </div>
  );
};

export default Page3_Letter;
