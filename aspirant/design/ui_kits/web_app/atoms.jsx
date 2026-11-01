/* component primitives for ui kit, scoped */
window.Badge = function Badge({ tone='outline', children }) {
  const tones = {
    ink: { bg:'#1A1F2E', color:'#FDFBF6' },
    sage: { bg:'rgba(63,107,92,0.12)', color:'#3F6B5C' },
    marigold: { bg:'rgba(217,119,6,0.12)', color:'#D97706' },
    vermillion: { bg:'rgba(178,58,58,0.10)', color:'#B23A3A' },
    outline: { bg:'transparent', color:'#4D4738', border:'1px solid #D8D2C3' },
  };
  const t = tones[tone] || tones.outline;
  return <span style={{
    font: '500 11px/1 Inter, sans-serif',
    textTransform:'uppercase', letterSpacing:'0.08em',
    padding:'5px 10px', borderRadius:9999,
    display:'inline-flex', alignItems:'center', gap:6,
    background: t.bg, color: t.color, border: t.border || '1px solid transparent',
  }}>{children}</span>;
};

window.Button = function Button({ variant='primary', children, onClick, icon }) {
  const v = {
    primary: { bg:'#1A1F2E', color:'#FDFBF6', border:'1px solid #1A1F2E' },
    secondary: { bg:'transparent', color:'#1A1F2E', border:'1px solid #D8D2C3' },
    ghost: { bg:'transparent', color:'#4D4738', border:'1px solid transparent' },
    accent: { bg:'#D97706', color:'#FDFBF6', border:'1px solid #D97706' },
  }[variant];
  return <button onClick={onClick} style={{
    font:'500 14px/1 Inter, sans-serif',
    padding:'10px 16px', borderRadius:4, cursor:'pointer',
    display:'inline-flex', alignItems:'center', gap:8,
    background: v.bg, color: v.color, border: v.border,
  }}>{icon}{children}</button>;
};

window.Mono = function Mono({ children, color='#4D4738' }) {
  return <span style={{ font:'500 12px/1.4 "JetBrains Mono", monospace', color }}>{children}</span>;
};

window.Eyebrow = function Eyebrow({ children }) {
  return <span style={{
    font:'600 11px/1.2 Inter, sans-serif',
    textTransform:'uppercase', letterSpacing:'0.12em', color:'#4D4738',
  }}>{children}</span>;
};

window.Icon = function Icon({ name, size=18 }) {
  // simple inline lucide-style strokes
  const paths = {
    'newspaper':'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2 M18 14h-8 M15 18h-5 M10 6h8v4h-8z',
    'search':'M21 21l-4.3-4.3 M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z',
    'sparkles':'M9 3l1.5 4L15 8.5 10.5 10 9 14l-1.5-4L3 8.5 7.5 7zM18 14l1 2.5L22 18l-3 1.5L18 22l-1-2.5L14 18l3-1.5z',
    'flame':'M8.5 14.5A2.5 2.5 0 0 0 11 17c0-1.5-.5-2-1-3-.5-1 0-2 1-2.5 1-.5 2 0 2 1.5 0 .5 0 1-.5 1.5 1.5-.5 2.5-2 2.5-4 0-2-1.5-3.5-2.5-4.5C12 5 11 4 11 2c-1 1-3 2-4 4-2 4 0 6 1 7-.5 0-2-.5-2-2 0 1.5.5 2.5 2.5 3.5z',
    'bookmark':'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z',
    'arrow-right':'M5 12h14 M12 5l7 7-7 7',
    'chevron-down':'M6 9l6 6 6-6',
    'chevron-right':'M9 6l6 6-6 6',
    'check':'M20 6L9 17l-5-5',
    'x':'M18 6L6 18 M6 6l12 12',
    'book-open':'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
    'target':'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    'archive':'M21 8v13H3V8 M1 3h22v5H1z M10 12h4',
    'message-square':'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
    'quote':'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.078c.92 0 .922 0 .922 1v1c0 1-1 2-2 2s-1 .008-1 1.031z',
    'menu':'M3 12h18 M3 6h18 M3 18h18',
  };
  const d = paths[name] || '';
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {d.split(' M').map((seg,i) => <path key={i} d={i===0?seg:'M'+seg}/>)}
  </svg>;
};
