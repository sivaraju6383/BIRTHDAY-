import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate floating hearts and stars
    const generateElements = () => {
      const newElements = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        type: Math.random() > 0.5 ? '❤️' : '✨',
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 20,
        animationDelay: Math.random() * 20,
        size: 10 + Math.random() * 20,
      }));
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute"
          style={{
            left: `${el.left}%`,
            bottom: '-50px',
            fontSize: `${el.size}px`,
            animation: `float ${el.animationDuration}s linear infinite`,
            animationDelay: `${el.animationDelay}s`,
            opacity: 0.6,
          }}
        >
          {el.type}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
