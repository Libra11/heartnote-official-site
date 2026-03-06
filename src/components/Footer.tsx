import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer relative">
      <div className="container">
        <div className="footer-main">
          
          <div className="footer-brand">
             <h2><em>Heart</em>Note</h2>
             <p>
               留一处只属于自己的自留地。<br/>
               记下的不只是文字，而是时间刻下的回声。
             </p>
             <div className="footer-badges" style={{ marginTop: '32px', display: 'flex', gap: '8px' }}>
                <div style={{ padding: '8px 16px', borderRadius: '100px', background: 'var(--text-main)', color: '#fff', fontSize: '13px', fontWeight: 600 }}>当前版本 1.0.1+2</div>
             </div>
          </div>
          <div className="footer-col">
            <h4>核心特性</h4>
            <ul>
              <li><a href="#features">Block 媒体流编辑器</a></li>
              <li><a href="#features">那年今日与随机回顾</a></li>
              <li><a href="#features">全面情绪与写作统计</a></li>
              <li><a href="#features">FTS 级全文高速检索</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>数据与隐私</h4>
            <ul>
              <li><a href="#security">数据库防提取加密</a></li>
              <li><a href="#security">全量数据无损迁移 (导出/导入)</a></li>
              <li><a href="#security">本地/自设 OSS 端到端备份</a></li>
              <li><a href="#security">生物识别屏保锁</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>关于心记</h4>
            <ul>
              <li><a href="#">关于我们 (V1.0.1+2)</a></li>
              <li><a href="#">用户协议 (EULA)</a></li>
              <li><a href="#">隐私政策 (Privacy Policy)</a></li>
              <li><a href="https://github.com/libra">联系开发者</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 心记项目组 (HeartNote). 全离线数字管理方案。</p>
          <p className="footer-note" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            用 <Heart size={14} color="var(--accent)" fill="var(--accent)" /> 打破时间遗忘
          </p>
        </div>
      </div>
    </footer>
  );
}
