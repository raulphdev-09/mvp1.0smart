import { useEffect, useState } from 'react';

const sectionIds = ['inicio', 'servicos', 'processo', 'sobre', 'contato'];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = sectionIds.map(id => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    function updateActive() {
      const readingLine = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? 'inicio';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        current = sections.at(-1)?.id ?? current;
      }
      setActiveSection(current);
    }
    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    }
    const observer = new IntersectionObserver(scheduleUpdate, {
      rootMargin: '-20% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1],
    });
    sections.forEach(section => observer.observe(section));
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    updateActive();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return activeSection;
}
