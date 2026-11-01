window.AppShell = function AppShell({ tab, setTab, children }) {
  const tabs = [
    { id:'today', label:'Today' },
    { id:'ask', label:'Ask' },
    { id:'practice', label:'Practice' },
    { id:'weak', label:'Weak Areas' },
    { id:'archive', label:'Archive' },
  ];
  return <div style={{ minHeight:'100vh', background:'#F7F2E8', color:'#1A1F2E', font:'400 15px/1.55 Inter, sans-serif' }}>
    <header style={{ maxWidth:1180, margin:'0 auto', padding:'24px 32px 8px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <img src="../../assets/diya.svg" alt="" style={{ height:28 }}/>
        <span style={{ font:'600 19px/1 Spectral, serif', letterSpacing:'-0.01em' }}>upsc<span style={{color:'#D97706'}}>.</span>brain</span>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <Mono color="#948D7E">26 Apr · 06:14 IST</Mono>
        <div style={{ width:32, height:32, borderRadius:9999, background:'#1A1F2E', color:'#FDFBF6', display:'flex', alignItems:'center', justifyContent:'center', font:'500 13px/1 Inter, sans-serif' }}>RK</div>
      </div>
    </header>
    <nav style={{ maxWidth:1180, margin:'0 auto', padding:'0 32px', borderBottom:'1px solid #E8E3D7', display:'flex', gap:0 }}>
      {tabs.map(t => {
        const active = t.id === tab;
        return <button key={t.id} onClick={() => setTab(t.id)} style={{
          font:'500 14px/1 Inter, sans-serif',
          padding:'14px 16px', background:'transparent', border:'none', cursor:'pointer',
          color: active ? '#1A1F2E' : '#6E6759',
          borderBottom: active ? '2px solid #1A1F2E' : '2px solid transparent',
          marginBottom:-1,
        }}>{t.label}</button>;
      })}
    </nav>
    <main style={{ maxWidth:1180, margin:'0 auto', padding:'32px' }}>{children}</main>
  </div>;
};
