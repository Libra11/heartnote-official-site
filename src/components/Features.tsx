import { PenTool, Library, LayoutGrid, CalendarDays, NotebookPen } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="container" style={{ position: 'relative' }}>
      <div className="section-header reveal" style={{ paddingLeft: '5%', marginBottom: '100px' }}>
        <h2 style={{ fontSize: '72px' }}>思想，<br/><em>本该灵动如水。</em></h2>
        <p style={{ maxWidth: '600px', fontSize: '20px' }}>打破方正刻板的记录网格，释放无边的表达欲。我们没有复杂的社交圈，只有一座可以长期积累的、充满生命力的精神家园。</p>
      </div>
      
      <div className="organic-features">
        
        {/* Tall Arched Feature */}
        <div className="org-card arc-tall reveal delay-100">
           <div className="bento-icon-box" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
             <CalendarDays size={32} strokeWidth={1.5} />
           </div>
           <h3>时光胶囊</h3>
           <p>写给未来的信件。设定时间，系统将在那一天准时唤醒这段沉睡的记忆。</p>
        </div>

        {/* Wide Blob Feature */}
        <div className="org-card blob-wide reveal delay-200">
           <div className="bento-icon-box">
             <PenTool size={32} strokeWidth={1.5} />
           </div>
           <div style={{ zIndex: 2, position: 'relative' }}>
             <h3>强大自由的 Block</h3>
             <p style={{ maxWidth: '300px' }}>告别死板排版。支持图文混排、音视频与涂鸦，像搭建艺术品一样自由组合。</p>
           </div>
           
           <div className="blob-visual">
              <div style={{ width: '100%', height: '16px', background: 'var(--border-light)', borderRadius: '8px', marginBottom: '16px' }}></div>
              <div style={{ width: '80%', height: '16px', background: 'var(--border-light)', borderRadius: '8px', marginBottom: '32px' }}></div>
              <div style={{ width: '100%', height: '140px', background: 'var(--border-light)', borderRadius: '32px', display: 'flex', gap: '8px', padding: '12px' }}>
                 <div style={{ flex: 1, background: 'rgba(0,0,0,0.03)', borderRadius: '20px' }}></div>
                 <div style={{ flex: 1, background: 'rgba(0,0,0,0.03)', borderRadius: '20px' }}></div>
              </div>
           </div>
        </div>
        
        {/* Five Year Journal Feature */}
        <div className="org-card five-year-card reveal delay-100">
           <div className="bento-icon-box">
             <NotebookPen size={32} strokeWidth={1.5} />
           </div>
           <h3>五年日记</h3>
           <p>同一天，不同年份。在一条时间线上纵览五年间的成长轨迹，见证自己的变化。</p>
           <div className="five-year-visual">
              <div className="year-line"></div>
              <div className="year-dot"></div>
              <div className="year-dot"></div>
              <div className="year-dot"></div>
              <div className="year-dot"></div>
              <div className="year-dot active"></div>
           </div>
        </div>
        
        {/* Leaf Shape Feature */}
        <div className="org-card leaf-shape reveal delay-200">
           <div className="bento-icon-box">
             <LayoutGrid size={32} strokeWidth={1.5} />
           </div>
           <h3 style={{ marginTop: 'auto', marginBottom: '12px', fontSize: '28px' }}>完备组织系统</h3>
           <p>多本账簿与灵活嵌套标签，千万字归类游刃有余。</p>
        </div>
        
        {/* Horizontal Pill Feature */}
        <div className="org-card pill-horizontal reveal delay-200">
           <div style={{ display: 'flex', gap: '40px', alignItems: 'center', width: '100%' }}>
             <div className="bento-icon-box" style={{ marginBottom: 0, flexShrink: 0, width: '88px', height: '88px', borderRadius: '44px' }}>
               <Library size={36} strokeWidth={1.5} />
             </div>
             <div>
               <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>那年今日检索</h3>
               <p style={{ maxWidth: '450px' }}>通过情绪温度、实时天气筛选与年度热力日历，让沉底的记忆碎片重见天日。</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
