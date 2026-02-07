import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TrailPiece {
  id: number;
  x: number;
  y: number;
  color?: string;
}

export function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPiece[]>([]);
  const idRef = useRef(1);
  const lastRef = useRef(0);

  useEffect(() => {
    // Detect touch-capable devices and disable the custom cursor/trail
    const touchSupported = ('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
    setIsTouch(Boolean(touchSupported));

    if (touchSupported) return;

    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });

      // throttle trail pieces to ~30-40fps
      const now = Date.now();
      if (now - lastRef.current < 25) return;
      lastRef.current = now;

      const id = idRef.current++;
      const piece: TrailPiece = {
        id,
        x: e.clientX,
        y: e.clientY,
        color: undefined,
      };

      setTrail((prev) => {
        const next = [...prev, piece];
        // keep trail length bounded
        if (next.length > 30) next.shift();
        return next;
      });

      // remove after short life
      setTimeout(() => {
        setTrail((prev) => prev.filter(p => p.id !== id));
      }, 520);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t && (t.closest('button') || t.closest('a') || t.classList.contains('cursor-pointer'))) setIsHovering(true);
      else setIsHovering(false);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Pixel trail pieces */}
      {trail.map((t) => (
        <motion.div
          key={t.id}
          className="pixel-trail"
          style={{ x: t.x - 3, y: t.y - 3 }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.52, ease: 'easeOut' }}
        />
      ))}

      {/* Pixel square cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
        style={{ x: mouse.x - 8, y: mouse.y - 8 }}
        animate={{ scale: isHovering ? 1.4 : 1 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
      />
    </>
  );
}
