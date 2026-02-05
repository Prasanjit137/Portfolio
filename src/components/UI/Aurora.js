import React, { useEffect, useRef } from 'react';
import './Aurora.css';

const Aurora = ({ size = 120, colorA = '59,130,246', colorB = '16,185,129', blur = 20, ease = 0.15, hideDelay = 2000 }) => {
  const elRef = useRef(null);
  const trailContainerRef = useRef(null);
  const pos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const target = useRef({ ...pos.current });
  const prevPos = useRef({ ...pos.current });
  const rafRef = useRef(null);
  const hideTimer = useRef(null);
  const trailDots = useRef([]);

  useEffect(() => {
    const el = elRef.current;
    const container = trailContainerRef.current;
    if (!el || !container) return;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      el.style.opacity = '1';
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        if (el) el.style.opacity = '0';
      }, hideDelay);
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const createTrailDot = (x, y, alpha) => {
      const dot = document.createElement('div');
      dot.className = 'aurora-trail-dot';
      dot.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        transform: translate(-50%, -50%);
        opacity: ${alpha};
        pointer-events: none;
        z-index: 9998;
        filter: blur(${blur}px);
        mix-blend-mode: screen;
        background: radial-gradient(circle at 50% 50%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.03) 20%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 35%);
        box-shadow: 0 0 10px rgba(59,130,246,0.02), 0 0 5px rgba(16,185,129,0.01);
      `;
      container.appendChild(dot);
      return dot;
    };

    const animate = () => {
      // Smooth interpolation
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      // Compute velocity
      const vx = pos.current.x - prevPos.current.x;
      const vy = pos.current.y - prevPos.current.y;
      const velocity = Math.hypot(vx, vy);

      // Create trail dots along the path when moving
      if (velocity > 0.5) {
        const steps = Math.ceil(velocity / 8);
        for (let i = 0; i < steps; i++) {
          const t = i / steps;
          const trailX = prevPos.current.x + vx * t;
          const trailY = prevPos.current.y + vy * t;
          const alpha = 0.15 * (1 - t); // fade out along the trail
          
          const dot = createTrailDot(trailX, trailY, alpha);
          trailDots.current.push({ el: dot, createdAt: Date.now() });
        }
      }

      // Update main cursor follower
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;

      // Clean up old trail dots
      trailDots.current = trailDots.current.filter(dot => {
        const age = Date.now() - dot.createdAt;
        if (age > 600) {
          dot.el.remove();
          return false;
        }
        // Fade out
        const progress = age / 600;
        dot.el.style.opacity = String((1 - progress) * 0.15);
        return true;
      });

      prevPos.current.x = pos.current.x;
      prevPos.current.y = pos.current.y;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    el.style.opacity = '0';

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      trailDots.current.forEach(dot => dot.el.remove());
      trailDots.current = [];
    };
  }, [ease, hideDelay, size, blur]);

  const style = {
    width: `${size}px`,
    height: `${size}px`,
    filter: `blur(${blur}px)`
  };

  return (
    <>
      <div ref={trailContainerRef} />
      <div
        ref={elRef}
        className="aurora-follower"
        style={style}
        data-colors={`${colorA} ${colorB}`}
        aria-hidden="true"
      />
    </>
  );
};

export default Aurora;
