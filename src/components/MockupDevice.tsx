import { Search, PenTool, Sparkles, Book, History, FileText } from 'lucide-react';

interface MockupProps {
  variant?: 'editor' | 'dashboard' | 'calendar';
}

export default function MockupDevice({ variant = 'dashboard' }: MockupProps) {
  return (
    <div className="mockup-container">
      {/* Top Bar Navigation iOS wrapper */}
      <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '44px' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span>12:30</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '16px', height: '10px', borderRadius: '2px', border: '1px solid var(--text-main)' }}></div>
          <div style={{ width: '16px', height: '10px', borderRadius: '5px', background: 'var(--text-main)' }}></div>
        </div>
      </div>

      <div style={{ padding: '16px 24px', height: 'calc(100% - 44px)', overflowY: 'auto' }}>
        
        {variant === 'dashboard' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Header Area exactly mimicking dashboard_screen.dart */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '12px', color: 'var(--text-muted)' }}>
                  下午好，写下今天的片段
                </span>
                <span style={{ fontSize: '28px', fontWeight: 500, color: 'var(--text-main)', marginTop: '2px' }}>
                  HeartNote
                </span>
              </div>
              
              <div style={{ width: '40px', height: '40px', borderRadius: '20px', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Search size={18} color="var(--text-main)" />
              </div>
            </div>

            {/* Quick Actions Row */}
            <div style={{ display: 'flex', gap: '16px', overflowX: 'hidden' }}>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                 <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--accent)', boxShadow: '0 6px 16px rgba(212, 180, 131, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PenTool size={22} color="white" />
                 </div>
                 <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-muted)' }}>写日记</span>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                 <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={22} color="var(--text-main)" />
                 </div>
                 <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-muted)' }}>模板</span>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                 <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Book size={22} color="var(--text-main)" />
                 </div>
                 <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-muted)' }}>日记本</span>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                 <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <History size={22} color="var(--text-main)" />
                 </div>
                 <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-muted)' }}>回顾</span>
               </div>
            </div>

            {/* Streak Card */}
            <div style={{ width: '100%', height: '110px', borderRadius: '24px', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', boxShadow: 'var(--shadow-card)' }}>
               <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: 'radial-gradient(circle at top right, rgba(212, 180, 131, 0.2), transparent 80%)' }}></div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                 <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-muted)' }}>连续记录</span>
                 <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                   <span style={{ fontFamily: 'Playfair Display', fontSize: '36px', fontWeight: 500, color: 'var(--text-main)', lineHeight: 1 }}>24</span>
                   <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--accent)' }}>天</span>
                 </div>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '4px' }}>
                 <span style={{ fontSize: '20px' }}>🔥</span>
                 <span style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px' }}>继续保持！</span>
               </div>
            </div>

            {/* Stat Cards Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '16px', height: '140px', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-card)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '14px', background: 'var(--accent-sec)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                     <FileText size={14} color="var(--text-main)" />
                  </div>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)' }}>42</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>本月篇数</span>
                </div>
                
                <div style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '16px', height: '140px', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-card)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '14px', background: 'var(--accent-sec)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                     <PenTool size={14} color="var(--text-main)" />
                  </div>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)' }}>12.4k</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>总字数</span>
                </div>
            </div>
            
          </div>
        )}

      </div>
    </div>
  );
}
