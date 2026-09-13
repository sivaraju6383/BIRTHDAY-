import { useState, useEffect } from 'react';
import FloatingElements from './components/FloatingElements';
import AudioPlayer from './components/AudioPlayer';

import Loading from './pages/Loading';
import Page1_SecretEntry from './pages/Page1_SecretEntry';
import Page2_GrandSurprise from './pages/Page2_GrandSurprise';
import Page3_Message from './pages/Page3_Message';
import Page4_Memories from './pages/Page4_Memories';
import Page5_Reasons from './pages/Page5_Reasons';
import Page6_Envelopes from './pages/Page6_Envelopes';
import Page7_Quotes from './pages/Page7_Quotes';
import Page8_Timeline from './pages/Page8_Timeline';
import Page9_HiddenSurprise from './pages/Page9_HiddenSurprise';
import Page10_LoveWheel from './pages/Page10_LoveWheel';
import Page11_BirthdayCake from './pages/Page11_BirthdayCake';
import Page12_PhotoMovie from './pages/Page12_PhotoMovie';
import Page13_FinalLetter from './pages/Page13_FinalLetter';
import Page14_FinalSurprise from './pages/Page14_FinalSurprise';

const TOTAL_PAGES = 14;

function App() {
  const [currentPage, setCurrentPage] = useState(0); // 0 is Loading
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Stop background elements on certain cinematic pages
  const hideFloatingElements = currentPage === 0 || currentPage === 14;

  const nextPage = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleLoginSuccess = () => {
    setIsPlayingMusic(true);
    nextPage();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0: return <Loading onComplete={nextPage} />;
      case 1: return <Page1_SecretEntry onUnlock={handleLoginSuccess} />;
      case 2: return <Page2_GrandSurprise onNext={nextPage} />;
      case 3: return <Page3_Message onNext={nextPage} />;
      case 4: return <Page4_Memories onNext={nextPage} />;
      case 5: return <Page5_Reasons onNext={nextPage} />;
      case 6: return <Page6_Envelopes onNext={nextPage} />;
      case 7: return <Page7_Quotes onNext={nextPage} />;
      case 8: return <Page8_Timeline onNext={nextPage} />;
      case 9: return <Page9_HiddenSurprise onNext={nextPage} />;
      case 10: return <Page10_LoveWheel onNext={nextPage} />;
      case 11: return <Page11_BirthdayCake onNext={nextPage} />;
      case 12: return <Page12_PhotoMovie onNext={nextPage} />;
      case 13: return <Page13_FinalLetter onNext={nextPage} />;
      case 14: return <Page14_FinalSurprise />;
      default: return null;
    }
  };

  return (
    <>
      {!hideFloatingElements && <FloatingElements />}
      
      {currentPage > 0 && (
        <AudioPlayer 
          isPlaying={isPlayingMusic} 
          togglePlay={() => setIsPlayingMusic(!isPlayingMusic)} 
        />
      )}
      
      {/* Progress Indicator */}
      {currentPage > 1 && currentPage < 14 && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '6px',
          zIndex: 1000,
          background: 'rgba(0,0,0,0.2)',
          padding: '8px 12px',
          borderRadius: '20px',
          backdropFilter: 'blur(5px)'
        }}>
          {[...Array(TOTAL_PAGES - 1)].map((_, idx) => (
            <div key={idx} style={{
              width: '20px',
              height: '4px',
              borderRadius: '2px',
              backgroundColor: idx + 2 <= currentPage ? 'var(--color-accent)' : 'rgba(255,255,255,0.3)',
              boxShadow: idx + 2 <= currentPage ? '0 0 8px var(--color-accent)' : 'none',
              transition: 'all 0.3s ease'
            }} />
          ))}
        </div>
      )}

      {/* Page Content */}
      <div className="page-transition-enter-active" key={currentPage}>
        {renderPage()}
      </div>

      {/* Footer */}
      {currentPage > 0 && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.8rem',
          color: (currentPage === 13 || currentPage === 14 || currentPage === 7 || currentPage === 9 || currentPage === 12) ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)',
          zIndex: 1000,
          pointerEvents: 'none',
          textAlign: 'center',
          width: '100%'
        }}>
          Made With Endless Love ❤️<br/>
          For RADHIKA ❤️<br/>
          From Someone Who Wanted To Make You Smile 🥰
        </div>
      )}
    </>
  );
}

export default App;
