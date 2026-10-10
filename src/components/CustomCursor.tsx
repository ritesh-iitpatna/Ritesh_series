import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

const LABELS: Record<string, string> = { view: 'VIEW', play: '▶', link: '↗', drag: '↔', close: '✕' };

/**
 * High-performance custom cursor:
 * - 0ms positional latency: directly mapped to clientX/clientY without spring lag,
 *   matching the native Windows hardware cursor speed.
 * - Decoupled hover detection on pointerover/pointerout to eliminate continuous
 *   re-rendering and DOM traversal on every mousemove.
 * - Desktop only; disabled for reduced motion or touch devices.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  // Direct motion values without useSpring delay for 1:1 Windows cursor tracking speed
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  const visibleRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-custom-cursor');

    const updateHoverState = (target: EventTarget | null) => {
      const t = target as HTMLElement | null;
      if (!t) return;
      const tagged = t.closest<HTMLElement>('[data-cursor]');
      const nextMode = tagged?.dataset.cursor ?? null;
      const nextHoverLink = !tagged && !!t.closest('a, button, [role="button"], input, textarea, select');

      setMode((prev) => (prev !== nextMode ? nextMode : prev));
      setHoverLink((prev) => (prev !== nextHoverLink ? nextHoverLink : prev));
    };

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
        updateHoverState(e.target);
      }
    };

    const handleOver = (e: PointerEvent) => {
      updateHoverState(e.target);
    };

    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
      setMode(null);
      setHoverLink(false);
    };

    const press = () => setDown(true);
    const release = (e: PointerEvent) => {
      setDown(false);
      updateHoverState(e.target);
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', handleOver, { passive: true });
    document.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', handleOver);
      document.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  const label = mode ? LABELS[mode] : null;
  const size = label ? (mode === 'view' ? 72 : 52) : hoverLink ? 34 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full will-change-transform"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        scale: down ? 0.85 : 1,
        backgroundColor: label ? 'rgba(229,19,43,0.92)' : hoverLink ? 'rgba(244,241,236,0.08)' : 'rgba(244,241,236,1)',
        borderColor: hoverLink && !label ? 'rgba(244,241,236,0.7)' : 'rgba(244,241,236,0)',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
    >
      <span className="absolute inset-0 rounded-full border" style={{ borderColor: 'inherit' }} />
      {hoverLink && !label && (
        <span className="h-1 w-1 rounded-full bg-bone opacity-70" />
      )}
      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-sans text-[11px] font-bold tracking-[0.18em] text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
