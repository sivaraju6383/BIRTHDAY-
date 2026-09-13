import { useState } from 'react';
import { photos } from '../utils/photos';

const captions = [
  "Our beautiful memory ❤️",
  "My favorite person 🥰",
  "Every picture has a story ❤️",
  "My happiness 😊❤️",
  "Forever my favorite ❤️",
  "One photo... Thousands of memories ❤️"
];

const Page4_Memories = ({ onNext }) => {
  const [activeImg, setActiveImg] = useState(null);

  // Use the 5 photos, spread them out nicely
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <h2 className="animate-fade-in" style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '40px', textAlign: 'center', fontFamily: 'var(--font-handwriting)' }}>
        Our Beautiful Memories ❤️
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center',
        maxWidth: '1200px',
        marginBottom: '50px'
      }}>
        {photos.map((img, index) => (
          <div 
            key={index}
            className={`glass-card animate-fade-in delay-${(index % 5) + 1}`}
            onClick={() => setActiveImg(activeImg === index ? null : index)}
            style={{
              padding: '15px 15px 25px 15px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              transform: activeImg === index ? 'scale(1.5) translateY(-20px)' : `rotate(${index % 2 === 0 ? '-4deg' : '4deg'})`,
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'pointer',
              zIndex: activeImg === index ? 100 : 1,
              width: '280px',
              boxShadow: activeImg === index ? '0 20px 50px rgba(0,0,0,0.3)' : '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
            }}
          >
            <div style={{
              width: '100%',
              height: '300px',
              overflow: 'hidden',
              marginBottom: '15px',
              borderRadius: '4px'
            }}>
              <img 
                src={img} 
                alt="Memory" 
                className="contain-image"
              />
            </div>
            <p style={{ 
              textAlign: 'center', 
              fontFamily: 'var(--font-handwriting)', 
              fontSize: '1.4rem',
              color: 'var(--color-dark)'
            }}>
              {captions[index % captions.length]}
            </p>
          </div>
        ))}
      </div>

      <button onClick={onNext} className="glass-button animate-fade-in delay-5">
        There's Something Else 👀❤️
      </button>
    </div>
  );
};

export default Page4_Memories;
