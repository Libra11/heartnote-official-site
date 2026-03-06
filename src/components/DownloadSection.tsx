import { Download, Apple, MonitorSmartphone } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="container" style={{ padding: '40px 0 160px' }}>
      <div className="download-cta reveal">
        <h2>即刻开启你的数字记忆<br/><em>归档计划。</em></h2>
        <p>目前全功能 1.0 版本已全面就绪。完全免费，无令人厌烦的广告拦截，支持 iOS 与 Android 双流端部署。</p>
        
        <div className="dl-buttons">
          <button className="dl-btn">
            <Apple size={28} />
            <div className="dl-text">
              <span>Download on the</span>
              <strong>App Store</strong>
            </div>
          </button>
          
          <button className="dl-btn">
            <MonitorSmartphone size={28} />
            <div className="dl-text">
              <span>Get it for</span>
              <strong>Android APK</strong>
            </div>
          </button>
        </div>
        
        <div className="download-meta" style={{ marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)' }}>
          <Download size={16} /> <span>当前版本：1.0.0+4 | 构建于 2026年2月</span>
        </div>
      </div>
    </section>
  );
}
