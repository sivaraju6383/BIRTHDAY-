import { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

const AudioPlayer = ({ isPlaying, togglePlay }) => {
  const iframeRef = useRef(null);
  
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      if (isPlaying) {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      } else {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    }
  }, [isPlaying]);

  return (
    <>
      <div style={{ position: 'fixed', top: '-1000px', left: '-1000px', opacity: 0, pointerEvents: 'none' }}>
        <iframe 
          ref={iframeRef}
          width="100" 
          height="100" 
          src="https://www.youtube.com/embed/nyuo9-OjNNg?enablejsapi=1&autoplay=1&loop=1&playlist=nyuo9-OjNNg" 
          title="Background Music" 
          frameBorder="0" 
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
      <button 
        onClick={togglePlay}
        className="glass-button animate-pulse"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '12px',
          borderRadius: '50%',
        }}
        title="Toggle Music"
      >
        {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  );
};

export default AudioPlayer;
