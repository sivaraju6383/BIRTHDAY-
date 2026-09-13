import { useState, useEffect } from 'react';
import { photos } from '../utils/photos';

const Page12_PhotoMovie = ({ onNext }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (photoIndex < photos.length) {
      const timer = setTimeout(() => {
        setPhotoIndex(prev => prev + 1);
      }, 4000); // 4 seconds per photo for cinematic feel
      return () => clearTimeout(timer);
    }
  }, [photoIndex]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 10
    }}>
      {/* Cinematic Slideshow */}
      {photoIndex < photos.length ? (
        <div key={photoIndex} style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <img 
            src={photos[photoIndex]} 
            alt="Cinematic Memory" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain', 
              opacity: 0.6,
              animation: 'zoomPan 6s linear forwards'
            }} 
          />
          {/* Vignette */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, transparent 20%, #000 120%)'
          }}></div>
        </div>
      ) : (
        <div className="animate-fade-in" style={{ textAlign: 'center', color: 'white', padding: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-handwriting)', marginBottom: '20px' }}>
            Every Picture Has A Memory...
          </h2>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-handwriting)', color: 'var(--color-accent)', marginBottom: '40px' }}>
            And Every Memory Is Special ❤️
          </h2>
          <button onClick={onNext} className="glass-button" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
            The Final Letter 💌
          </button>
        </div>
      )}

      <style>{`
        @keyframes zoomPan {
          from { transform: scale(1) translateX(0); }
          to { transform: scale(1.1) translateX(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Page12_PhotoMovie;
