import { useEffect } from "react";

export default function useMasonry(containerRef, rowHeight = 10, gap = 8) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll(".gallery__link")
    );

    if (!items.length) return;

    const resizeObserver = new ResizeObserver(() => {
      items.forEach(item => {
        const content = item.firstElementChild; // figure
        if (!content) return;

        const height = content.getBoundingClientRect().height;
        const rowSpan = Math.ceil((height + gap) / rowHeight);

        item.style.gridRowEnd = `span ${rowSpan}`;
      });
    });

    // observa o conteúdo real
    items.forEach(item => {
      const content = item.firstElementChild;
      if (content) resizeObserver.observe(content);
    });

    // força cálculo inicial (importante!)
    window.requestAnimationFrame(() => {
      items.forEach(item => {
        const content = item.firstElementChild;
        if (!content) return;

        const height = content.getBoundingClientRect().height;
        const rowSpan = Math.ceil((height + gap) / rowHeight);

        item.style.gridRowEnd = `span ${rowSpan}`;
      });
    });

    return () => resizeObserver.disconnect();
  }, [containerRef, rowHeight, gap]);
}
