import { BarChart3, LineChart, PieChart } from 'lucide-react';

export default function ReviewShowcase() {
  return (
    <section className="container" style={{ padding: '80px 0 160px' }}>
      <div className="review-dashboard reveal">
        <div className="dash-content">
          <h2 style={{ fontSize: '48px', marginBottom: '24px' }}>量化你的<br/><em>情绪与时间。</em></h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', lineHeight: '1.7' }}>
            心记内置了极富质感的统计仪表盘。从每个月的心情温度曲线，到连续记录的火力值追踪，那些不被察觉的变化，都将以最美的图表形式予以呈现。
          </p>
          <div className="stats-list">
             <div className="stat-item">
               <BarChart3 size={24} color="var(--accent-sec)" />
               <span>全局字数与日更频次分布</span>
             </div>
             <div className="stat-item">
               <LineChart size={24} color="var(--accent-sec)" />
               <span>周/月级心情波动指数趋势</span>
             </div>
             <div className="stat-item">
               <PieChart size={24} color="var(--accent-sec)" />
               <span>年度使用热力图梳理</span>
             </div>
          </div>
        </div>
        <div className="dash-visual">
          {/* Abstract Chart UI */}
          <div className="chart-mock">
            <div className="chart-header">
               <span>心情趋势</span>
               <div className="tabs"><span className="active">本周</span> <span>本月</span></div>
            </div>
            <div className="chart-body">
               <div className="bars">
                 <div className="bar" style={{ height: '60%' }}></div>
                 <div className="bar" style={{ height: '80%' }}></div>
                 <div className="bar" style={{ height: '40%' }}></div>
                 <div className="bar highlight" style={{ height: '100%' }}></div>
                 <div className="bar" style={{ height: '70%' }}></div>
                 <div className="bar" style={{ height: '50%' }}></div>
                 <div className="bar" style={{ height: '90%' }}></div>
               </div>
               <div className="labels">
                 <span>周一</span><span>周二</span><span>周三</span><span>周四</span><span>周五</span><span>周六</span><span>周日</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
