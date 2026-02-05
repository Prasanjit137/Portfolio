import React, { useEffect, useRef, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { SPLINE_SCENE_URL } from '../../utils/constants';
import './SplineScene.css';

const SplineScene = () => {
  const splineRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const handleLoad = (spline) => {
    splineRef.current = spline;
  };

  // Debounced scroll handler to prevent jitteriness
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      // Minimal scroll processing - can be enhanced later
      if (splineRef.current) {
        // Commented out unused calculation
        // const scrollY = window.scrollY;
        // const scrollFactor = scrollY * 0.005;
      }
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <div className="spline-container">
      <Spline
        scene={SPLINE_SCENE_URL}
        onLoad={handleLoad}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div className="spline-overlay"></div>
    </div>
  );
};

export default SplineScene;