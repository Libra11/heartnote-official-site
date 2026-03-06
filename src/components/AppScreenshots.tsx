/**
 * Author: Libra
 * Date: 2026-02-20 23:53:56
 * LastEditTime: 2026-03-06 16:18:52
 * LastEditors: Libra
 * Description: 
*/
import { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const screenshots = [
  { id: 1, title: '首页仪表盘 (Dashboard)', src: '/screenshots/dashboard.png' },
  { id: 2, title: 'Block 流式编辑器 (Editor)', src: '/screenshots/editor.png' },
  { id: 3, title: '多维时间轴 (Timeline)', src: '/screenshots/timeline.png' },
  { id: 4, title: '图表与统计 (Review/Stats)', src: '/screenshots/stats.png' },
  { id: 5, title: '日历 (calendar)', src: '/screenshots/calendar.png' },
  { id: 6, title: '设置与个性化主页 (Settings)', src: '/screenshots/settings.png' },
];

export default function AppScreenshots() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="screenshots" className="container" style={{ paddingBlock: '80px 160px', overflow: 'hidden' }}>
      <div className="section-header reveal screenshots-header">
        <div className="screenshots-text">
          <h2><em>心记</em> 界面掠影</h2>
          <p>从每个按钮到每一层阴影，精细打磨的感官体验。</p>
        </div>
        <div className="gallery-nav">
          <button onClick={() => scroll('left')} className="nav-btn"><ArrowLeft size={24} /></button>
          <button onClick={() => scroll('right')} className="nav-btn"><ArrowRight size={24} /></button>
        </div>
      </div>

      <div className="screenshot-gallery reveal delay-200" ref={scrollRef}>
        {screenshots.map((s) => (
          <div key={s.id} className="screenshot-item">
            <div className="phone-mockup-frame">
              {/* Actual image tag (hidden if source doesn't exist yet, but ready to load) */}
              <img 
                src={s.src} 
                alt={s.title} 
                className="actual-screenshot"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }} 
              />
              
              {/* Fallback placeholder visible underneath the transparent/broken image */}
              <div className="image-placeholder">
                 <span className="placeholder-text">
                   图片占位<br/><br/>
                   <span style={{ fontSize: '11px', fontFamily: 'monospace' }}>public{s.src}</span>
                 </span>
              </div>
            </div>
            <h4 className="screenshot-title">{s.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
