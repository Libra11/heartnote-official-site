import { Save, LibraryBig, Languages, Bell, History, ArrowRightLeft, BookOpenText, Trash2 } from 'lucide-react';

export default function MicroFeatures() {
  return (
    <section className="container" style={{ paddingBlock: '160px' }}>
      <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '64px' }}>微小，<br/>却<em>重若千钧。</em></h2>
        <p style={{ maxWidth: '500px' }}>伟大往往深藏在不可见的底层骨骼中。为了绝对流畅的书写直觉，我们不计成本地打磨了这些边缘细节。</p>
      </div>

      {/* Scattered Organic Layout instead of a boxy Grid */}
      <div className="scattered-grid reveal delay-100">
        
        <div className="scatter-item si-1">
           <Save size={28} className="icon-gold" />
           <h4>1000ms 断点防抖自存</h4>
           <p>丝滑剥离主线的静默落盘机制。即使系统强杀与极端断接，你的手稿也绝不丢失一字。</p>
        </div>

        <div className="scatter-item si-2">
           <LibraryBig size={28} className="icon-gold" />
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <h4>原生剥离媒体库</h4>
             <span className="badge">New</span>
           </div>
           <p>告别混杂，可一键萃取整个软件内出现过的高清相册底片与语音原脉冲音频。</p>
        </div>

        <div className="scatter-item si-3">
           <BookOpenText size={28} className="icon-gold" />
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <h4>无界同构阅写态</h4>
             <span className="badge">New</span>
           </div>
           <p>摧毁横亘在“阅读版”与“编辑版”之间的围墙。所见即所得，点到即改。且深度兼容设备底层高品质系统级原生字效映射。</p>
        </div>

        <div className="scatter-item si-4">
           <History size={28} className="icon-gold" />
           <h4>无极时间轴滚动引擎</h4>
           <p>超越 ListView 的重型渲染优化。容纳十年千万字量级，滑动体验依旧如德芙般顺滑无阻力。</p>
        </div>

        <div className="scatter-item si-5">
           <Trash2 size={28} className="icon-gold" />
           <h4>重力回收与红心刻印</h4>
           <p>增设闭环的数据保护垃圾桶。允许为最重要的瞬间倾注『红心』标记，单独聚敛光芒。</p>
        </div>

        <div className="scatter-item si-6">
           <Languages size={28} className="icon-gold" />
           <h4>全栈底座多语种环境</h4>
           <p>集成重量级 i18n 切换源，支持简中与 Native 英语流体式热切换响应。</p>
        </div>

        <div className="scatter-item si-7">
           <ArrowRightLeft size={32} className="icon-gold" style={{ margin: '0 auto 16px' }} />
           <h4>六域数据降维提取</h4>
           <p style={{ fontSize: '14px' }}>全系列 Markdown, PDF, Word, HTML, JSON 无阻挡解析包输出。</p>
        </div>

        <div className="scatter-item si-8">
           <Bell size={28} className="icon-gold" />
           <h4>每日写作硬件级闹铃</h4>
           <p>脱离服务器推送，完全依赖设备本地通知核心（Local Notifications）。准时召唤你的注意力，培养记录习惯，而绝不会泄漏你的上线时间。</p>
        </div>

      </div>
    </section>
  );
}
