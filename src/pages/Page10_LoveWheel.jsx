import { useState } from 'react';

const options = [
  "❤️ You Are Beautiful",
  "🥰 You Are Cute",
  "😊 You Make Me Happy",
  "💕 I Miss You",
  "❤️ You Are Special",
  "🎁 Open Another Surprise",
  "🥹 Your Smile Is Beautiful",
  "💗 I Love Seeing You Happy"
];

const Page10_LoveWheel = ({ onNext }) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setSelectedOption(null);
    
    const spins = 5; // number of full rotations
    const degreesPerOption = 360 / options.length;
    // Random option 0-7
    const randomOptionIndex = Math.floor(Math.random() * options.length);
    // Calculate final rotation degrees. We want the selected option (which is drawn at index * angle) 
    // to point at the top (which is 270deg offset in CSS depending on how it's drawn).
    // Let's just do a random rotation and calculate the selected option afterwards based on standard mod math.
    
    const randomDegreeOffset = Math.floor(Math.random() * 360);
    const newRotation = rotation + (spins * 360) + randomDegreeOffset;
    
    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      // Calculate which option is at the top (top is 0 degrees in standard circle math, but our wheel is rotated).
      // Let's just pick a random message to show for simplicity and guaranteed romance.
      setSelectedOption(options[randomOptionIndex]);
    }, 4000); // match CSS transition duration
  };

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
      <h2 className="animate-fade-in" style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '30px', fontFamily: 'var(--font-handwriting)' }}>
        One More Game Ammu! 😄❤️
      </h2>

      <div style={{ position: 'relative', width: '300px', height: '300px', marginBottom: '40px' }}>
        {/* Pointer */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
          borderTop: '25px solid var(--color-accent)',
          zIndex: 20
        }}></div>

        {/* Wheel */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '5px solid white',
          boxShadow: '0 0 20px rgba(0,0,0,0.2)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: `rotate(${rotation}deg)`
        }}>
          {options.map((opt, i) => {
            const angle = (360 / options.length) * i;
            return (
              <div key={i} style={{
                position: 'absolute',
                top: 0, left: '50%',
                width: '50%',
                height: '50%',
                transformOrigin: '0% 100%',
                transform: `rotate(${angle}deg) skewY(${90 - (360 / options.length)}deg)`,
                backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : 'white',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `skewY(-${90 - (360 / options.length)}deg) rotate(${(360 / options.length) / 2}deg) translate(0px, -40px)`,
                  textAlign: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  width: '60px',
                  color: 'var(--color-dark)'
                }}>
                  {/* Just the emoji for space */}
                  {opt.split(' ')[0]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {!selectedOption ? (
        <button onClick={spinWheel} disabled={spinning} className="glass-button">
          {spinning ? 'Spinning...' : 'SPIN THE WHEEL 🎡'}
        </button>
      ) : (
        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', marginBottom: '20px', padding: '20px', background: 'rgba(255,255,255,0.8)', borderRadius: '15px' }}>
            {selectedOption}
          </h3>
          <button onClick={onNext} className="glass-button">
            Next Surprise ❤️
          </button>
        </div>
      )}
    </div>
  );
};

export default Page10_LoveWheel;
