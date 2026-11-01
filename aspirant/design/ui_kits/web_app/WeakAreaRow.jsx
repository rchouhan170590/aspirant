window.WeakAreaRow = function WeakAreaRow({ topic, gs, accuracy, attempts }) {
  const weak = accuracy < 70;
  const color = accuracy < 50 ? '#B23A3A' : accuracy < 70 ? '#D97706' : '#3F6B5C';
  return <div style={{
    display:'grid', gridTemplateColumns:'1fr 100px 1fr 80px', gap:16,
    alignItems:'center', padding:'14px 0', borderBottom:'1px solid #E8E3D7',
  }}>
    <div>
      <div style={{ font:'500 15px/1.3 Inter, sans-serif', color:'#1A1F2E' }}>{topic}</div>
      <Mono color="#948D7E">{gs}</Mono>
    </div>
    <div style={{ font:'500 14px/1 "JetBrains Mono", monospace', color, textAlign:'right' }}>{accuracy}%</div>
    <div style={{ height:6, background:'#E8E3D7', borderRadius:9999, overflow:'hidden' }}>
      <div style={{ width: accuracy + '%', height:'100%', background: color }}/>
    </div>
    <div style={{ font:'400 13px/1 Inter, sans-serif', color:'#6E6759', textAlign:'right' }}>
      {attempts} attempts {weak && <span style={{ color:'#B23A3A', marginLeft:6 }}>· weak</span>}
    </div>
  </div>;
};
