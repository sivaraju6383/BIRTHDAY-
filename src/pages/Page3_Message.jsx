import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Page3_Message = ({ onNext }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Typewriter takes ~4s, show button after 5s
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '800px',
        padding: '50px',
        width: '100%',
        position: 'relative'
      }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '30px', fontFamily: 'var(--font-handwriting)' }}>
          Dear Ammu... ❤️
        </h2>
        
        <div className="typewriter" style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          color: 'var(--color-dark)',
          textAlign: 'left'
        }}>
{`Happy Birthday to the most special person in my life ❤️

Radhika, you are not just someone special to me...
You are my happiness, my favorite smile, my beautiful thought, and someone who can make my day better just by being there.

Today is your day, Ammu ❤️

I hope your life is always filled with happiness.
I hope all your dreams come true.
I hope you always keep that beautiful smile.

Thank you for being you.
Thank you for being part of my life.
And thank you for giving me so many beautiful moments ❤️

Happy Birthday once again, Ammu...

You deserve all the happiness in this world ❤️🎂`}
        </div>

        {showButton && (
          <div style={{ textAlign: 'center', marginTop: '40px' }} className="animate-fade-in">
            <button onClick={onNext} className="glass-button" style={{ 
              borderRadius: '30px', 
              padding: '15px 40px',
              backgroundColor: 'rgba(255, 77, 77, 0.1)',
              borderColor: 'var(--color-accent)'
            }}>
              <Heart fill="red" color="red" size={20} />
              Open My Next Surprise ❤️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page3_Message;
