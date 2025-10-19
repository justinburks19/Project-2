
//reteive size of elements for animation
import { useState, useRef, useLayoutEffect } from 'react';

export const useSize = () => {
  const containerRef = useRef(null);   // your <h1 className="col-6">
  const itemRef = useRef(null);        // your <motion.span>
  const [maxX, setMaxX] = useState(0);

  useLayoutEffect(() => {
    const c = containerRef.current;
    const i = itemRef.current;
    if (!c || !i) return;

    const measure = () => {
      const cw = c.clientWidth;   // width of the col
      const iw = i.clientWidth;   // width of the text
      setMaxX(Math.max(0, cw - iw));
    };

    // wait one frame so fonts/styles apply before measuring
    requestAnimationFrame(measure);

    // optional: keep correct on resize
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return { containerRef, itemRef, maxX };
}
