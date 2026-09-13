import { useState, useEffect } from 'react';
import { photos } from '../utils/photos';

const timelineSteps = [
  { text: "Once upon a time...", img: null },
  { text: null, img: photos[0] },
  { text: "Then came the memories...", img: null },
  { text: null, img: photos[1] },
  { text: null, img: photos[2] },
  { text: "And somehow...\nthese moments became very special ❤️", img: null },
  { text: null, img: photos[3] },
  { text: "But our story is still creating memories...", img: null }
];

const Page8_Timeline = ({ onNext }) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (stepIndex < timelineSteps.length) {
      const timer = setTimeout(() => {
        setStepIndex(prev => prev + 1);
      }, 4000); // 4 seconds per step
      return () => clearTimeout(timer);
    }
  }, [stepIndex]);

  const currentStep = timelineSteps[stepIndex];

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
      <h2 className="animate-fade-in" style={{ position: 'absolute', top: '40px', fontSize: '2.5rem', color: 'var(--color-accent)', fontFamily: 'var(--font-handwriting)' }}>
        Our Story In Memories ❤️
      </h2>

      <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {stepIndex < timelineSteps.length ? (
          <div key={stepIndex} className="animate-fade-in" style={{ textAlign: 'center' }}>
            {currentStep.text && (
              <h3 style={{ 
                fontSize: '2rem', 
                fontFamily: 'var(--font-handwriting)',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.5'
              }}>
                {currentStep.text}
              </h3>
            )}
            {currentStep.img && (
              <div className="glass-card" style={{ padding: '10px', background: 'white' }}>
                <img 
                  src={currentStep.img} 
                  alt="Memory" 
                  style={{ width: '300px', height: '300px', objectFit: 'contain', borderRadius: '4px' }} 
                />
              </div>
            )}
          </div>
        ) : (
          <button onClick={onNext} className="glass-button animate-fade-in">
            Next Surprise 🎁
          </button>
        )}
      </div>
    </div>
  );
};

export default Page8_Timeline;
