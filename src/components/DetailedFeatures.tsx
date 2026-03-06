import { Image, Mic, PenTool, Hash, LayoutTemplate, MapPin, CalendarHeart } from 'lucide-react';

export default function DetailedFeatures() {
  return (
    <section className="container" style={{ padding: '160px 0' }}>
      
      <div className="overlap-feature-row reveal">
         <div className="overlap-text front-layer">
            <h2>不止纯文本的<br/><em>全栖聚合流</em></h2>
            <p className="subtitle">它能吸收你所有的情绪切面。插入一段午后蝉鸣，或是手绘一笔涂鸦，这些不同材质的元素都在你的时间轴上畅爽铺开。</p>
            <ul className="feature-list" style={{ marginTop: '24px' }}>
              <li><Image size={24} className="icon-gold" /> 无损质感的高清宫格相册</li>
              <li><Mic size={24} className="icon-gold" /> 随录随存的原生音频播放轨</li>
              <li><PenTool size={24} className="icon-gold" /> 无缝调用的极简灵感画板</li>
              <li><LayoutTemplate size={24} className="icon-gold" /> 丝滑的拖拽手势序列重组</li>
            </ul>
         </div>

         <div className="overlap-visual back-layer leaf-bg">
            <div className="abstract-ui-card float-anim" style={{ transform: 'rotate(4deg)' }}>
              <div className="skeleton-line title"></div>
              <div className="skeleton-tags">
                <span></span><span></span><span></span>
              </div>
              <div className="skeleton-line body w-full"></div>
              <div className="skeleton-line body w-3/4"></div>
              <div className="skeleton-gallery">
                <div className="photo"></div><div className="photo"></div>
              </div>
              <div className="skeleton-audio"></div>
            </div>
         </div>
      </div>

      <div className="overlap-feature-row reverse reveal delay-200" style={{ marginTop: '180px' }}>
         <div className="overlap-text front-layer">
            <h2>像大脑突触般的<br/><em>精密检索网</em></h2>
            <p className="subtitle">无论十年记忆如何堆砌，都可以瞬间定位。强大的 FTS 搜索引擎和立体的交叉分析模型，构筑了不可撼动的信息城池。</p>
            <ul className="feature-list" style={{ marginTop: '24px' }}>
              <li><Hash size={24} className="icon-gold" /> 宏大的树状标签云地图</li>
              <li><CalendarHeart size={24} className="icon-gold" /> 精准锁定的全局月历雷达</li>
              <li><MapPin size={24} className="icon-gold" /> 高自由度的立体交叉查询</li>
            </ul>
         </div>

         <div className="overlap-visual back-layer arch-bg">
            <div className="abstract-ui-card float-anim" style={{ transform: 'rotate(-4deg)', display: 'flex', justifyContent: 'center' }}>
              <div className="tag-cloud">
               <span className="t1">那年盛夏</span> <span className="t2">读书笔记</span> <span className="t3">琐碎日常</span>
               <span className="t4">奇思妙想</span> <span className="t1">胶片漫游</span> <span className="t2">深夜飞行</span>
              </div>
              <div style={{ padding: '0 24px', flex: 1 }}>
                 <div className="skeleton-line" style={{ height: '56px', borderRadius: '28px' }}></div>
                 <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                    <div className="skeleton-line" style={{ width: '80px', borderRadius: '16px', height: '24px' }}></div>
                    <div className="skeleton-line" style={{ width: '100px', borderRadius: '16px', height: '24px' }}></div>
                    <div className="skeleton-line" style={{ width: '60px', borderRadius: '16px', height: '24px' }}></div>
                 </div>
              </div>
            </div>
         </div>
      </div>

    </section>
  );
}
