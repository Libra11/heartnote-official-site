import { useState, useEffect, useCallback } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Mic, Sparkles } from 'lucide-react';
import './Storyboard.css';
import { DashboardMain, DashboardStats, DashboardOnThisDay, EditorBase, EditorMarkdown, EditorMedia, EditorMetas, TimelineView, CalendarView, SettingsLock } from './mockups/AppPages';

interface Scene {
  time: string;
  duration: number; // in seconds
  visual: string;
  title: string;
  voice: string;
  layout: 'logo' | 'quick-cut' | 'mockup' | 'transition' | 'split-mockup';
  mockups: any[];
}

const SCENES: Scene[] = [
  { time: "0-3s", duration: 3, visual: "黑场到 Logo", title: "心记 HeartNote", voice: "“记录你自己，留给你自己。”", layout: 'logo', mockups: [] },
  { time: "3-10s", duration: 7, visual: "快切：首页/时间轴/日历/写作页", title: "你的私人日记 App", voice: "“心记，是一款专注隐私与记录体验的日记应用。”", layout: 'quick-cut', mockups: [DashboardMain, TimelineView] },
  { time: "10-20s", duration: 10, visual: "首页：连续记录、本月篇数、总字数", title: "每日进步，看得见", voice: "“连续记录、本月篇数、总字数，打开就能看到你的写作状态。”", layout: 'mockup', mockups: [DashboardMain] },
  { time: "20-30s", duration: 10, visual: "首页：心情趋势（周/月切换）", title: "心情趋势", voice: "“通过周和月趋势，快速观察情绪变化。”", layout: 'mockup', mockups: [DashboardStats] },
  { time: "30-40s", duration: 10, visual: "首页：那年今日", title: "那年今日", voice: "“那年今日，把过去同一天的记忆重新带回来。”", layout: 'mockup', mockups: [DashboardOnThisDay] },
  { time: "40-45s", duration: 5, visual: "章节过渡卡", title: "开始写作", voice: "", layout: 'transition', mockups: [] },
  { time: "45-60s", duration: 15, visual: "写日记页：文字输入、标题、段落", title: "写作体验", voice: "“写作从打开开始，输入流畅，结构清晰。”", layout: 'mockup', mockups: [EditorBase] },
  { time: "60-72s", duration: 12, visual: "Markdown 输入与预览切换", title: "支持 Markdown", voice: "“支持 Markdown 语法，适合结构化记录和高效排版。”", layout: 'mockup', mockups: [EditorMarkdown] },
  { time: "72-88s", duration: 16, visual: "插入图片、音频、视频、涂鸦、附件", title: "多媒体记录", voice: "“可插入图片、音频、视频、涂鸦及附件，完整保留视听信息。”", layout: 'quick-cut', mockups: [EditorBase, EditorMedia] },
  { time: "88-102s", duration: 14, visual: "多图布局弹窗、宫格展示", title: "多图智能布局", voice: "“多张图片支持智能布局，阅读更整洁。”", layout: 'mockup', mockups: [EditorMedia] },
  { time: "102-114s", duration: 12, visual: "拖拽调整块顺序", title: "自由拖拽", voice: "“内容块可自由拖拽，随时重排，不打断写作。”", layout: 'mockup', mockups: [EditorBase] },
  { time: "114-124s", duration: 10, visual: "选择心情/天气/标签/日记本", title: "结构化管理", voice: "“心情、天气、标签、日记本，让每篇日记容易归类与检索。”", layout: 'mockup', mockups: [EditorMetas] },
  { time: "124-132s", duration: 8, visual: "阅读模式与编辑切换", title: "阅读与编辑一键切换", voice: "“写完直接进入阅读模式，沉浸回看。”", layout: 'split-mockup', mockups: [EditorBase, EditorMarkdown] },
  { time: "132-144s", duration: 12, visual: "时间轴页面滚动、删除/多选删除", title: "时间轴", voice: "“时间轴按时间回看，支持单条和多选删除。”", layout: 'mockup', mockups: [TimelineView] },
  { time: "144-156s", duration: 12, visual: "日历页：周视图/月视图、当月统计", title: "日历视图", voice: "“日历视图展示结构，周月切换，并显示当月写作统计。”", layout: 'mockup', mockups: [CalendarView] },
  { time: "156-170s", duration: 14, visual: "日记本/标签/收藏 页面轮播", title: "内容管理", voice: "“通过日记本、标签和收藏，把内容管理得更有条理。”", layout: 'quick-cut', mockups: [TimelineView, DashboardMain] },
  { time: "170-182s", duration: 12, visual: "模板页与快速套用", title: "模板", voice: "“模板可复用写作结构，大大提升日常记录效率。”", layout: 'mockup', mockups: [EditorBase] },
  { time: "182-192s", duration: 10, visual: "回顾、时间胶囊、统计页面", title: "回顾与沉淀", voice: "“回顾、时间胶囊和统计功能，助你从记录中获得生活洞察。”", layout: 'split-mockup', mockups: [DashboardStats, DashboardOnThisDay] },
  { time: "192-200s", duration: 8, visual: "媒体库：图/音/视频汇总", title: "媒体库", voice: "“媒体库统一管理素材，快速定位来源日记。”", layout: 'mockup', mockups: [TimelineView] },
  { time: "200-206s", duration: 6, visual: "导入导出、备份恢复", title: "数据可迁移可备份", voice: "“支持导入导出与备份恢复，数据迁移更安心。”", layout: 'mockup', mockups: [SettingsLock] },
  { time: "206-210s", duration: 4, visual: "应用锁 + 回收站 + Logo 收尾", title: "安全可控", voice: "“应用锁与回收站双重保障，心记，记录真实的你。”", layout: 'quick-cut', mockups: [SettingsLock, SettingsLock] },
];

const BG_COLORS = [
  'radial-gradient(circle at 70% 50%, rgba(184, 151, 104, 0.15), transparent 60%)',
  'radial-gradient(circle at 30% 60%, rgba(56, 178, 172, 0.1), transparent 60%)',
  'radial-gradient(circle at 60% 30%, rgba(236, 72, 153, 0.08), transparent 60%)',
  'radial-gradient(circle at 80% 80%, rgba(66, 153, 225, 0.1), transparent 60%)'
];

const PhoneMockup = ({ component: Component, style }: { component?: any, style?: any }) => (
  <div className="script-phone-mockup" style={style}>
    <div className="speaker-notch">
      {/* Dynamic island inner dots */}
      <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '4px', background: '#111' }}></div>
      <div style={{ position: 'absolute', right: '26px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '4px', background: '#222' }}></div>
    </div>
    {Component ? 
      <div className="mockup-content-wrapper" style={{ width: '100%', height: '100%', borderRadius: '34px', overflow: 'hidden' }}>
        <Component />
      </div>
      : 
      <div className="mockup-placeholder">
        <span>🎬 暂无相关组件的映射</span>
      </div>
    }
  </div>
);

export default function StoryboardApp() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const prevSlide = useCallback(() => setCurrentIdx(p => Math.max(0, p - 1)), []);
  const nextSlide = useCallback(() => setCurrentIdx(p => Math.min(SCENES.length - 1, p + 1)), []);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
       const sceneDurationMs = SCENES[currentIdx].duration * 1000; 
       timer = setTimeout(() => {
          if (currentIdx < SCENES.length - 1) nextSlide();
          else setIsPlaying(false);
       }, sceneDurationMs);
    }
    return () => clearTimeout(timer);
  }, [currentIdx, isPlaying, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      isScrolling = true;
      if (e.deltaY > 50) nextSlide();
      else if (e.deltaY < -50) prevSlide();
      setTimeout(() => isScrolling = false, 1000);
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  return (
    <div className="story-app">
       <header className="story-header">
         <div className="brand" onClick={() => window.location.hash = ''} style={{cursor: 'pointer'}}>
           心记 <span style={{opacity: 0.4, fontWeight: 400, fontSize: '18px'}}>Director Script</span>
         </div>
         <div className="playback-controls">
           <span>{currentIdx + 1} / {SCENES.length}</span>
           <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn">
             {isPlaying ? <Pause size={16}/> : <Play size={16}/>}
           </button>
         </div>
       </header>

       <div className="story-container">
          {SCENES.map((scene, idx) => {
             let stateClass = '';
             if (idx === currentIdx) stateClass = 'active';
             else if (idx < currentIdx) stateClass = 'past';
             else stateClass = 'future';

             const bgStyle = {
               background: BG_COLORS[idx % BG_COLORS.length]
             };

             return (
               <div className={`story-slide ${stateClass}`} key={idx}>
                 <div className="ambient-blob" style={bgStyle}></div>
                 
                 {scene.layout === 'logo' && (
                    <div className="center-stage intro">
                       <h1 style={{fontSize: '80px', marginBottom: '24px'}}>{scene.title}</h1>
                       <div className="voice-text-center">{scene.voice}</div>
                       <div className="time-badge center" style={{ marginTop: '40px' }}>{scene.time} · {scene.duration}s</div>
                    </div>
                 )}

                 {scene.layout === 'transition' && (
                    <div className="center-stage">
                       <Sparkles size={48} color="var(--accent)" style={{marginBottom: '32px'}} />
                       <h1 style={{fontSize: '64px'}}>{scene.title}</h1>
                       <div className="time-badge center" style={{marginTop: '32px'}}>{scene.time} · {scene.visual}</div>
                    </div>
                 )}

                 {(scene.layout === 'mockup' || scene.layout === 'quick-cut' || scene.layout === 'split-mockup') && (
                   <>
                     <div className="slide-left">
                       <div className="time-badge">{scene.time} · {scene.duration}s</div>
                       <h2>{scene.title}</h2>
                       <p className="visual-desc-sm">视觉表现: {scene.visual}</p>
                       
                       {scene.voice && (
                         <div className="voice-card">
                           <Mic size={24} className="voice-icon" />
                           <div className="voice-text">{scene.voice}</div>
                         </div>
                       )}
                     </div>

                     <div className="slide-right">
                        <div className="mockup-stage">
                           {scene.layout === 'mockup' && (
                              <PhoneMockup component={scene.mockups[0]} />
                           )}
                           
                           {scene.layout === 'quick-cut' && (
                              <div className="multi-mockup stack">
                                 <PhoneMockup style={{ transform: 'translateX(40px) scale(0.9) rotate(5deg)', zIndex: 1, filter: 'blur(2px)', opacity: 0.6 }} component={scene.mockups[1]} />
                                 <PhoneMockup style={{ position: 'absolute', top: 0, left: '-20px', zIndex: 2 }} component={scene.mockups[0]} />
                              </div>
                           )}

                           {scene.layout === 'split-mockup' && (
                              <div className="multi-mockup flow">
                                 <PhoneMockup style={{ transform: 'rotate(-4deg)', marginRight: '-40px', zIndex: 2 }} component={scene.mockups[0]} />
                                 <PhoneMockup style={{ transform: 'scale(0.95) rotate(2deg)', zIndex: 1, marginTop: '40px' }} component={scene.mockups[1]} />
                              </div>
                           )}
                        </div>
                     </div>
                   </>
                 )}
               </div>
             )
          })}
       </div>

       <div className="story-footer">
          <div className="progress-bar">
             <div className="progress-fill" style={{ width: `${((currentIdx + 1) / SCENES.length) * 100}%` }}></div>
          </div>
          <div className="nav-hints">
            <button onClick={prevSlide} disabled={currentIdx === 0}><ChevronLeft size={18}/> 上一焦</button>
            <span className="hint-text">方向键 / 滚轮 切换分镜</span>
            <button onClick={nextSlide} disabled={currentIdx === SCENES.length - 1}>下一焦 <ChevronRight size={18}/></button>
          </div>
       </div>
    </div>
  );
}
