import { ShieldCheck, HardDriveDownload, Cloud, LockKeyhole } from 'lucide-react';

export default function Security() {
  return (
    <section id="security" className="container">
      <div className="security-showcase reveal">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '13px', fontWeight: 600, marginBottom: '40px', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)' }}>
          <ShieldCheck size={16} />
          数据主权在您手中
        </div>
        
        <h3>
          你的隐私，<br/>
          <em>不可妥协</em>。
        </h3>
        
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', lineHeight: 1.6 }}>
          在这个随意贩卖用户数据的时代，我们为您筑起最高围墙。心记采用纯离线架构，核心数据与多媒体文件实施物理隔离加密机制。
        </p>
        
        <div className="security-grid">
          <div className="security-item reveal delay-100">
             <h4><LockKeyhole size={24} color="var(--accent)" /> 金库级隔离机制</h4>
             <p>A/B/C 三级加密体系。基础数据默认降级，高级别依托 SQLCipher 内核提供阻断式防提取能力，富媒体落盘前执行 AES-GCM 隔离编码。</p>
          </div>
          
          <div className="security-item reveal delay-200">
             <h4><HardDriveDownload size={24} color="var(--accent)" /> 数据永远属于你</h4>
             <p>拒绝数字绑架。支持随时一键导出为 Markdown、PDF 或完整包裹。无缝跨平台迁移重置，把一切选择权交还于您。</p>
          </div>
          
          <div className="security-item reveal delay-300">
             <h4><Cloud size={24} color="var(--accent)" /> 可信云自主备份</h4>
             <p>若您不信任第三方云平台，可直接桥接私人 OSS 对象存储。配合本地加密策略实现端到端绝对闭环的备份。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
