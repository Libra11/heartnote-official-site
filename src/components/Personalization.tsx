import { Settings, Palette, Type, ScanFace, DatabaseBackup } from 'lucide-react';

export default function Personalization() {
  return (
    <section className="container" style={{ padding: '80px 0' }}>
      <div className="section-header reveal">
        <h2><em>重塑</em>灵魂底色。</h2>
        <p>你的日记本，应当符合你此刻的心境。不仅有强大的数据后盾，我们也开放了从排版系统到全局主题的绝大部分自定义接口，将掌控权全权交予你。</p>
      </div>

      <div className="personalization-grid">
        <div className="theme-showcase reveal delay-100">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <Palette size={24} color="var(--accent)" />
            <h3 style={{ fontSize: '24px' }}>10+ 款高质感预设主题</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>
            从轻柔的 Soft 纸张，到硬核的 Terminal 命令行，再到静谧的 Midnight 午夜。只需一键，整个应用的所有毛玻璃、渐变、边框与高亮色将随之彻底改变。
          </p>

          {/* Theme Palette Mock UI */}
          <div className="theme-palette-mock">
            <div className="theme-circle active" style={{ background: '#FDFBF7', border: '2px solid #B89768' }}></div>
            <div className="theme-circle" style={{ background: '#1c1c1e', border: '1px solid rgba(255,255,255,0.1)' }}></div>
            <div className="theme-circle" style={{ background: '#F4F5F7', border: '1px solid rgba(0,0,0,0.1)' }}></div>
            <div className="theme-circle" style={{ background: '#2D3436', border: '1px solid rgba(255,255,255,0.1)' }}></div>
            <div className="theme-circle" style={{ background: '#E0E5EC', border: '1px solid rgba(0,0,0,0.1)' }}></div>
            <div className="theme-circle" style={{ background: '#1A1C23', border: '1px solid rgba(255,255,255,0.1)' }}></div>
            <div className="theme-circle" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.2)' }}></div>
            <div className="theme-circle" style={{ background: '#F5E6CC', border: '1px solid rgba(0,0,0,0.1)' }}></div>
          </div>
        </div>

        <div className="settings-list reveal delay-200">
          <div className="setting-card">
            <div className="setting-icon"><Type size={20} color="var(--text-main)" /></div>
            <div className="setting-info">
              <h4>字族与排版选择</h4>
              <p>全局衬线/非衬线字体切换，间距与圆角倍数精细调节，适应所有阅读习惯。</p>
            </div>
          </div>

          <div className="setting-card">
            <div className="setting-icon"><ScanFace size={20} color="var(--text-main)" /></div>
            <div className="setting-info">
              <h4>FaceID / 指纹锁定</h4>
              <p>针对后台多任务与冷启动的生物识别防御机制，严防窥探。</p>
            </div>
          </div>

          <div className="setting-card">
            <div className="setting-icon"><DatabaseBackup size={20} color="var(--text-main)" /></div>
            <div className="setting-info">
              <h4>开放式备份与导出</h4>
              <p>完整的 SQL 数据导出、自建 OSS 对象存储同步通道，以及 Markdown 档案打包。</p>
            </div>
          </div>
          
          <div className="setting-card">
            <div className="setting-icon"><Settings size={20} color="var(--text-main)" /></div>
            <div className="setting-info">
              <h4>我的与系统设置</h4>
              <p>所有功能开关全部集中聚合，无需繁琐层级即可掌控整个 HeartNote。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
