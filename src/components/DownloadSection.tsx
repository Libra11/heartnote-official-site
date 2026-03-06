import { Download, Smartphone, Cpu, Monitor } from 'lucide-react';
import { downloadApk, downloadDefault } from '../utils/download';

export default function DownloadSection() {
  return (
    <section id="download" className="container" style={{ paddingBlock: '40px 160px' }}>
      <div className="download-cta reveal">
        <h2>即刻开启你的数字记忆<br/><em>归档计划。</em></h2>
        <p>目前全功能 1.0 版本已全面就绪。完全免费，无令人厌烦的广告拦截，支持 Android 端部署。</p>
        
        <div className="dl-buttons">
          <button className="dl-btn dl-btn-primary" onClick={downloadDefault}>
            <Smartphone size={28} />
            <div className="dl-text">
              <span>Android 64位</span>
              <strong>arm64-v8a</strong>
            </div>
            <span className="dl-badge">推荐</span>
          </button>
        </div>

        <div className="dl-alternatives">
          <button className="dl-btn dl-btn-secondary" onClick={() => downloadApk('arm32')}>
            <Cpu size={20} />
            <span>32位 (arm-v7a)</span>
          </button>
          <button className="dl-btn dl-btn-secondary" onClick={() => downloadApk('x86_64')}>
            <Monitor size={20} />
            <span>x86_64 (模拟器)</span>
          </button>
        </div>
        
        <div className="download-meta" style={{ marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)' }}>
          <Download size={16} /> <span>当前版本：1.0.1+2 | 构建于 2026年2月</span>
        </div>
      </div>
    </section>
  );
}
