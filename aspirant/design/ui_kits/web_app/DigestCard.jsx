window.DigestCard = function DigestCard({ article, expanded, onToggle }) {
  return <article style={{
    background:'#FDFBF6', border:'1px solid #D8D2C3', borderRadius:8,
    padding:24, marginBottom:16,
  }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:6 }}>
      <Eyebrow>{article.gs} · {article.topic}</Eyebrow>
      <Mono color="#948D7E">{article.source} · {article.time}</Mono>
    </div>
    <h2 style={{ font:'600 22px/1.3 Spectral, serif', letterSpacing:'-0.005em', margin:'0 0 10px', color:'#1A1F2E' }}>
      {article.title}
    </h2>
    <p style={{ font:'400 16px/1.65 Spectral, serif', color:'#2E3340', margin:'0 0 14px' }}>
      {article.summary}
    </p>
    <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom: expanded ? 16 : 0 }}>
      <Badge tone="outline">{article.mcqs} Prelims MCQs</Badge>
      <Badge tone="outline">{article.mains} Mains</Badge>
      {article.essay && <Badge tone="marigold">Essay angle</Badge>}
      {article.pyq && <Badge tone="outline">{article.pyq}</Badge>}
    </div>
    {expanded && <div style={{ borderTop:'1px solid #E8E3D7', paddingTop:16, marginTop:16 }}>
      <Eyebrow>Key facts</Eyebrow>
      <ul style={{ font:'400 15px/1.6 Spectral, serif', color:'#2E3340', margin:'8px 0 16px', paddingLeft:18 }}>
        {article.facts.map((f,i) => <li key={i} style={{ marginBottom:4 }}>{f}</li>)}
      </ul>
      <Eyebrow>PYQ link</Eyebrow>
      <p style={{ font:'400 14px/1.55 Inter, sans-serif', color:'#4D4738', margin:'6px 0 0' }}>{article.pyqNote}</p>
    </div>}
    <div style={{ marginTop:14 }}>
      <button onClick={onToggle} style={{
        font:'500 13px/1 Inter, sans-serif', background:'transparent', border:'none',
        color:'#1A1F2E', cursor:'pointer', padding:0, display:'inline-flex', alignItems:'center', gap:6,
      }}>{expanded ? 'Collapse' : 'Open digest'} <Icon name={expanded ? 'chevron-down' : 'chevron-right'} size={14}/></button>
    </div>
  </article>;
};
