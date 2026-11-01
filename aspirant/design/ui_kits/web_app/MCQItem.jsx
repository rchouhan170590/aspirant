window.MCQItem = function MCQItem({ q, selected, onSelect, revealed }) {
  return <div style={{
    background:'#FDFBF6', border:'1px solid #D8D2C3', borderRadius:8,
    padding:24, marginBottom:16,
  }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8 }}>
      <Eyebrow>Prelims · {q.gs}</Eyebrow>
      <Mono color="#948D7E">{q.pyqPattern}</Mono>
    </div>
    <div style={{ font:'500 16px/1.5 Inter, sans-serif', marginBottom:14, color:'#1A1F2E' }}>
      {q.question}
    </div>
    {q.options.map((opt, i) => {
      const isSel = selected === i;
      const isCorrect = revealed && i === q.correct;
      const isWrong = revealed && isSel && i !== q.correct;
      let border = '#D8D2C3', bg = '#F7F2E8';
      if (isCorrect) { border = '#3F6B5C'; bg = 'rgba(63,107,92,0.06)'; }
      else if (isWrong) { border = '#B23A3A'; bg = 'rgba(178,58,58,0.05)'; }
      else if (isSel) { border = '#1A1F2E'; bg = '#FDFBF6'; }
      return <button key={i} onClick={() => !revealed && onSelect(i)} style={{
        display:'flex', gap:12, alignItems:'flex-start', width:'100%', textAlign:'left',
        padding:'12px 14px', border:`1px solid ${border}`, borderRadius:6,
        background: bg, marginBottom:8, cursor: revealed ? 'default' : 'pointer',
        font:'400 14px/1.5 Inter, sans-serif', color:'#1A1F2E',
      }}>
        <span style={{ font:'500 12px/1 "JetBrains Mono", monospace', color:'#6E6759', paddingTop:2, minWidth:14 }}>
          {String.fromCharCode(65 + i)}
        </span>
        <span style={{ flex:1 }}>{opt}</span>
        {isCorrect && <Icon name="check" size={16}/>}
        {isWrong && <Icon name="x" size={16}/>}
      </button>;
    })}
    {revealed && <div style={{ marginTop:14, padding:'12px 14px', background:'#F4F1EA', borderRadius:6, font:'400 14px/1.55 Spectral, serif', color:'#2E3340' }}>
      <Eyebrow>Why</Eyebrow>
      <div style={{ marginTop:6 }}>{q.explanation}</div>
    </div>}
  </div>;
};
