window.AskBox = function AskBox({ value, onChange, onSubmit, intent, response, loading }) {
  const intents = [
    { id:'concept', label:'Concept' },
    { id:'doubt', label:'Doubt' },
    { id:'mcq', label:'MCQ' },
    { id:'mains', label:'Mains' },
    { id:'essay', label:'Essay' },
    { id:'anthro', label:'Anthropology' },
  ];
  return <div>
    <div style={{
      background:'#FDFBF6', border:'1px solid #D8D2C3', borderRadius:12,
      padding:20, marginBottom:16,
    }}>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Ask a concept, paste a doubt, or request MCQs on any topic"
        style={{
          width:'100%', minHeight:80, border:'none', outline:'none', resize:'vertical',
          font:'400 16px/1.55 Spectral, serif', color:'#1A1F2E', background:'transparent',
        }}
      />
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12, paddingTop:12, borderTop:'1px solid #E8E3D7' }}>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
          {intents.map(i => {
            const active = intent === i.id;
            return <span key={i.id} style={{
              font:'500 11px/1 Inter, sans-serif', textTransform:'uppercase', letterSpacing:'0.08em',
              padding:'6px 10px', borderRadius:9999,
              background: active ? '#1A1F2E' : 'transparent',
              color: active ? '#FDFBF6' : '#6E6759',
              border: active ? '1px solid #1A1F2E' : '1px solid #D8D2C3',
            }}>{i.label}</span>;
          })}
        </div>
        <Button variant="primary" onClick={onSubmit} icon={<Icon name="arrow-right" size={14}/>}>Ask</Button>
      </div>
    </div>
    {(loading || response) && <div style={{
      background:'#FDFBF6', border:'1px solid #D8D2C3', borderRadius:8, padding:24,
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10 }}>
        <Eyebrow>{intents.find(i => i.id === intent)?.label || 'Concept'} · routed to specialist</Eyebrow>
        <Mono color="#948D7E">RAG · top 8 · score 0.71</Mono>
      </div>
      {loading ? <div style={{ font:'400 15px/1.6 Spectral, serif', color:'#948D7E' }}>Retrieving from knowledge base…</div>
        : <div style={{ font:'400 16px/1.7 Spectral, serif', color:'#1A1F2E' }}>{response}</div>}
      {!loading && response && <div style={{ marginTop:14, paddingTop:14, borderTop:'1px solid #E8E3D7', display:'flex', gap:8, flexWrap:'wrap' }}>
        <Badge tone="outline">Mains 2019 Q9</Badge>
        <Badge tone="outline">Prelims 2017</Badge>
        <Badge tone="sage">Verified · Laxmikanth</Badge>
      </div>}
    </div>}
  </div>;
};
