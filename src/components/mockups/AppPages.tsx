import React from 'react';
import { 
  Home, Clock, Calendar, ChevronLeft, 
  MoreHorizontal, Image as ImageIcon, Mic, Video, Type, 
  Settings as SettingsIcon, Filter, Search,
  Edit3, PenTool, Paperclip, Star, Lock,
  Sun, Tag
} from 'lucide-react';

const ACCENT = '#D4B483';
const ACCENT_SEC = '#E8F1F2';
const TEXT_MAIN = '#2D3436';
const TEXT_MUTED = '#636E72';
const BG_PANEL = 'rgba(255, 255, 255, 0.65)';
const BG_PANEL_SOLID = '#FFFFFF';
const BG_APP = '#FDFBF7';
const BORDER_COLOR = 'rgba(255, 255, 255, 0.5)';

const SHADOW_CARD = '0 10px 40px -10px rgba(0, 0, 0, 0.05)';
const FONT_DISPLAY = '"Playfair Display", serif';
const FONT_BODY = '"Nunito Sans", sans-serif';

const StatusBar = () => (
  <div style={{ 
    height: '54px', width: '100%', display: 'flex', justifyContent: 'space-between', 
    padding: '20px 24px 0', fontSize: '15px', fontWeight: 600, color: TEXT_MAIN,
    zIndex: 90, position: 'relative', background: 'transparent' 
  }}>
    <span>09:41</span>
    <div style={{ display: 'flex', gap: '6.5px', alignItems: 'center' }}>
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
        <path d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V9C15 10.1046 14.1046 11 13 11H3C1.89543 11 1 10.1046 1 9V3Z" stroke="currentColor" strokeWidth="1"/>
        <path d="M17 4V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <rect x="2" y="2" width="12" height="8" rx="1.5" fill="currentColor"/>
      </svg>
    </div>
  </div>
);

const BottomNav = ({ active }: { active: string }) => (
  <div style={{ 
    position: 'absolute', bottom: '24px', left: '24px', right: '24px', 
    height: '72px', background: BG_PANEL, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    borderRadius: '24px', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
    boxShadow: SHADOW_CARD, border: `1px solid ${BORDER_COLOR}`, zIndex: 90
  }}>
    <NavIcon icon={<Home size={24} />} isActive={active === 'dashboard'} />
    <NavIcon icon={<Clock size={24} />} isActive={active === 'timeline'} />
    
    {/* FAB Center Button */}
    <div style={{ 
      width: '68px', height: '68px', 
      background: `linear-gradient(to bottom right, ${ACCENT}, #CBA66F)`, 
      borderRadius: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
      color: 'white', transform: 'translateY(-18px)', 
      boxShadow: `0 8px 18px 1px rgba(212, 180, 131, 0.34), 0 4px 10px rgba(0,0,0,0.22)`,
      border: '2px solid rgba(255,255,255,0.75)'
    }}>
       <Edit3 size={28} color="#fff" />
    </div>

    <NavIcon icon={<Calendar size={24} />} isActive={active === 'calendar'} />
    <NavIcon icon={<SettingsIcon size={24} />} isActive={active === 'settings'} />
  </div>
);

const NavIcon = ({ icon, isActive }: { icon: React.ReactNode, isActive: boolean }) => (
  <div style={{ 
    width: '48px', height: '100%', display: 'flex', flexDirection: 'column', 
    alignItems: 'center', justifyContent: 'center', gap: '4px',
    color: isActive ? TEXT_MAIN : TEXT_MUTED
  }}>
    {icon}
    <div style={{ 
      width: '4px', height: '4px', borderRadius: '2px', 
      background: TEXT_MAIN, opacity: isActive ? 1 : 0, transition: 'opacity 0.2s'
    }} />
  </div>
);

const GlassCard = ({ children, style, padding = '20px' }: any) => (
  <div style={{ 
    background: BG_PANEL, 
    backdropFilter: 'blur(12px)', 
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: '24px', 
    padding, 
    boxShadow: SHADOW_CARD, 
    border: `1px solid ${BORDER_COLOR}`,
    fontFamily: FONT_BODY,
    ...style 
  }}>
    {children}
  </div>
);

/* 1. Dashboard Pages */
export const DashboardMain = () => (
  <div style={{ width: '100%', height: '100%', background: BG_APP, color: TEXT_MAIN, display: 'flex', flexDirection: 'column', position: 'relative' }}>
    <StatusBar />
    <div style={{ padding: '0 24px', flex: 1, overflowY: 'hidden', overflowX: 'hidden' }}>
      <div style={{ margin: '12px 0 24px 0', fontSize: '32px', fontFamily: FONT_DISPLAY, fontWeight: 700, letterSpacing: '0.2px' }}>
        HeartNote.
      </div>
      
      {/* Streak Card */}
      <GlassCard style={{ marginBottom: '16px', position: 'relative', overflow: 'hidden' }} padding="24px">
        <div style={{ 
          position: 'absolute', right: '-20px', top: '-20px', width: '120px', height: '120px', 
          background: `radial-gradient(circle, ${ACCENT}25 0%, transparent 70%)` 
        }} />
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', color: TEXT_MUTED, marginBottom: '8px', textTransform: 'uppercase' }}>
          连续记录
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <div style={{ fontSize: '40px', fontFamily: FONT_DISPLAY, fontWeight: 500, color: TEXT_MAIN }}>24</div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: ACCENT, marginLeft: '4px' }}>天</div>
        </div>
      </GlassCard>

      {/* Stats Row */}
      <div style={{ display: 'flex', gap: '14px', marginBottom: '32px' }}>
        <GlassCard style={{ flex: 1 }} padding="16px">
          <div style={{ fontSize: '11px', fontWeight: 600, color: TEXT_MUTED, marginBottom: '6px' }}>本月篇数</div>
          <div style={{ fontSize: '28px', fontFamily: FONT_DISPLAY, fontWeight: 600, color: TEXT_MAIN }}>18</div>
        </GlassCard>
        <GlassCard style={{ flex: 1 }} padding="16px">
          <div style={{ fontSize: '11px', fontWeight: 600, color: TEXT_MUTED, marginBottom: '6px' }}>总字数</div>
          <div style={{ fontSize: '28px', fontFamily: FONT_DISPLAY, fontWeight: 600, color: TEXT_MAIN }}>45.2<span style={{fontSize:'16px', color: TEXT_MUTED}}>k</span></div>
        </GlassCard>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ fontSize: '15px', fontWeight: 700, fontFamily: FONT_DISPLAY, letterSpacing: '0.5px' }}>最近记录</div>
        <ChevronLeft size={20} color={TEXT_MUTED} style={{ transform: 'rotate(180deg)' }} />
      </div>

      {/* Recent Entry Card */}
      <GlassCard padding="0" style={{ width: '260px', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '72px', height: '72px', background: `radial-gradient(circle, ${ACCENT}25 0%, transparent 70%)` }} />
        
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '10px' }}>
            <Calendar size={12} color={TEXT_MUTED} />
            <span style={{ fontSize: '11px', fontWeight: 500, color: TEXT_MUTED }}>02/22 · 14:30</span>
            <div style={{ flex: 1 }} />
            <Star size={14} color={ACCENT} fill={ACCENT} />
          </div>
          
          <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px', color: TEXT_MAIN }}>雨后初晴的下午</div>
          <div style={{ fontSize: '13px', lineHeight: 1.6, color: TEXT_MAIN, opacity: 0.75, height: '42px', overflow: 'hidden' }}>
            今天遇到了一个很有趣的人，我们聊了很久。果然放慢脚步才会发现平淡生活里的光...
          </div>
          
          <div style={{ marginTop: '12px', display: 'flex', gap: '6px' }}>
            <div style={{ padding: '3px 8px', background: `${ACCENT_SEC}80`, borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Type size={10} color={TEXT_MUTED} />
              <span style={{ fontSize: '10px', color: TEXT_MUTED, fontWeight: 500 }}>245 字</span>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
    <BottomNav active="dashboard" />
  </div>
);

export const DashboardStats = () => (
  <div style={{ width: '100%', height: '100%', background: BG_APP, color: TEXT_MAIN, display: 'flex', flexDirection: 'column', position: 'relative' }}>
    <StatusBar />
    <div style={{ padding: '0 24px', flex: 1 }}>
      <div style={{ margin: '24px 0', fontSize: '20px', fontFamily: FONT_DISPLAY, fontWeight: 700 }}>心情趋势</div>
      <GlassCard style={{ height: '220px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 600, fontFamily: FONT_DISPLAY }}>2月</span>
          </div>
          <div style={{ fontSize: '11px', color: ACCENT, background: `${ACCENT}15`, padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>近 30 天</div>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '10px' }}>
          {[30, 45, 60, 40, 85, 75, 45, 60, 95].map((h, i) => (
            <div key={i} style={{ 
              width: '100%', height: `${h}%`, 
              background: h > 80 ? ACCENT : h > 50 ? ACCENT_SEC : `${TEXT_MUTED}20`, 
              borderRadius: '6px' 
            }} />
          ))}
        </div>
      </GlassCard>
    </div>
    <BottomNav active="dashboard" />
  </div>
);

export const DashboardOnThisDay = () => (
  <div style={{ width: '100%', height: '100%', background: BG_APP, color: TEXT_MAIN, display: 'flex', flexDirection: 'column', position: 'relative' }}>
    <StatusBar />
    <div style={{ padding: '0 24px', flex: 1 }}>
      <div style={{ margin: '24px 0', fontSize: '20px', fontFamily: FONT_DISPLAY, fontWeight: 700 }}>那年今日</div>
      <GlassCard style={{ background: TEXT_MAIN, color: '#FFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
          <Clock size={14} color={ACCENT} />
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', color: '#FFFFFF80' }}>2025年2月22日 · 1年前</div>
        </div>
        <div style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px', fontFamily: FONT_DISPLAY }}>去看了海</div>
        <div style={{ fontSize: '14px', opacity: 0.85, lineHeight: 1.7, fontFamily: FONT_BODY }}>
          沿着海岸线一直开，风很大，但心里很平静。也许这就是我一直寻找的感觉。耳机里放着那首熟悉的歌...
        </div>
        <div style={{ 
          marginTop: '24px', width: '100%', height: '140px', 
          background: 'rgba(255,255,255,0.08)', borderRadius: '16px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center' 
        }}>
          <ImageIcon opacity={0.3} size={32} />
        </div>
      </GlassCard>
    </div>
    <BottomNav active="dashboard" />
  </div>
);

/* 2. Editor Pages */
export const EditorBase = () => (
  <div style={{ width: '100%', height: '100%', background: BG_APP, color: TEXT_MAIN, display: 'flex', flexDirection: 'column', position: 'relative' }}>
    <StatusBar />
    {/* Editor App Bar */}
    <div style={{ padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ChevronLeft size={24} color={TEXT_MAIN} />
      </div>
      <div style={{ fontSize: '15px', fontWeight: 600, fontFamily: FONT_BODY }}>02/22 星期一</div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <div style={{ padding: '6px 12px', background: `${TEXT_MAIN}0F`, borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <PenTool size={14} color={TEXT_MAIN} />
          <span style={{ fontSize: '12px', fontWeight: 600 }}>编辑</span>
        </div>
        <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <MoreHorizontal size={20} color={TEXT_MAIN} />
        </div>
      </div>
    </div>

    {/* Metadata Bar */}
    <div style={{ padding: '12px 24px', display: 'flex', gap: '8px', borderBottom: `0.5px solid ${TEXT_MAIN}15` }}>
      <div style={{ padding: '4px 12px', background: `${ACCENT}15`, borderRadius: '12px', fontSize: '16px' }}>😊</div>
      <div style={{ padding: '4px 12px', background: `${ACCENT_SEC}80`, borderRadius: '12px', fontSize: '16px' }}>⛅</div>
      <div style={{ padding: '4px 12px', border: `1px dashed ${TEXT_MUTED}50`, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Tag size={12} color={TEXT_MUTED} />
        <span style={{ fontSize: '11px', color: TEXT_MUTED }}>标签</span>
      </div>
    </div>

    <div style={{ padding: '24px', flex: 1, fontFamily: FONT_BODY }}>
      <div style={{ fontSize: '26px', fontWeight: 700, fontFamily: FONT_DISPLAY, marginBottom: '20px', color: TEXT_MAIN }}>
        一个平常的下午
      </div>
      <div style={{ fontSize: '16px', lineHeight: 1.8, color: `${TEXT_MAIN}E6` }}>
        <p style={{ marginBottom: '16px' }}>阳光穿过树叶打在桌面上，形成斑驳的光影。</p>
        <p style={{ marginBottom: '16px' }}>今天决定把手头的事情先放一放，给自己泡了一杯茶。看着窗外发呆的过程，也是一种大脑的格式化。</p>
        <div style={{ width: '2px', height: '22px', background: ACCENT, animation: 'blink 1s infinite' }} />
      </div>
    </div>

    {/* Toolbar */}
    <div style={{ 
      padding: '12px 16px', background: BG_PANEL_SOLID, 
      borderTop: `0.5px solid ${TEXT_MAIN}15`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
    }}>
      <ImageIcon size={21} color={TEXT_MUTED} />
      <Video size={21} color={TEXT_MUTED} />
      <Mic size={21} color={TEXT_MUTED} />
      <PenTool size={21} color={TEXT_MUTED} />
      <Paperclip size={21} color={TEXT_MUTED} />
      <div style={{ width: '1px', height: '20px', background: `${TEXT_MAIN}20` }} />
      <Sun size={21} color={TEXT_MUTED} />
      <Tag size={21} color={TEXT_MUTED} />
    </div>
  </div>
);


export const EditorMarkdown = EditorBase; 
export const EditorMedia = EditorBase; 
export const EditorMetas = EditorBase; 

/* 3. Timeline & Calendar */
export const TimelineView = () => (
  <div style={{ width: '100%', height: '100%', background: BG_APP, color: TEXT_MAIN, display: 'flex', flexDirection: 'column', position: 'relative' }}>
    <StatusBar />
    <div style={{ padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '8px' }}>
        <Clock size={22} color={ACCENT} />
        <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: FONT_DISPLAY }}>时间轴</span>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div style={{ width: '36px', height: '36px', background: `${TEXT_MAIN}0F`, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Search size={18} />
        </div>
        <div style={{ width: '36px', height: '36px', background: `${TEXT_MAIN}0F`, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Filter size={18} />
        </div>
      </div>
    </div>

    <div style={{ padding: '20px 0', flex: 1, overflowY: 'hidden' }}>
      
      {/* Date Group */}
      <div style={{ padding: '0 16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', paddingLeft: '8px' }}>
          <div style={{ position: 'relative', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '7px', border: `2.5px solid ${ACCENT}`, background: `${ACCENT}26` }}></div>
            <div style={{ position: 'absolute', width: '4px', height: '4px', borderRadius: '2px', background: ACCENT }}></div>
          </div>
          <span style={{ marginLeft: '12px', fontSize: '13px', fontWeight: 700, fontFamily: FONT_DISPLAY, color: `${ACCENT}E6` }}>2025年2月22日 星期六</span>
          <div style={{ marginLeft: '12px', padding: '2px 8px', background: `${ACCENT}14`, borderRadius: '10px', fontSize: '10px', fontWeight: 600, color: `${ACCENT}B3` }}>2 篇</div>
        </div>
        <div style={{ paddingLeft: '20px', borderLeft: `2px solid ${ACCENT}33`, marginLeft: '18px' }}>
          
          {/* Card 1 */}
          <GlassCard padding="0" style={{ borderRadius: '16px', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', right: '-16px', top: '-16px', width: '56px', height: '56px', background: `radial-gradient(circle, ${ACCENT}20 0%, transparent 70%)` }} />
             <div style={{ padding: '14px' }}>
               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                 <div style={{ padding: '3px 8px', background: `${ACCENT}14`, borderRadius: '8px', fontSize: '12px', fontWeight: 700, color: `${ACCENT}D9`, letterSpacing: '0.5px' }}>
                   14:30
                 </div>
               </div>
               <div style={{ fontSize: '15px', fontWeight: 600, fontFamily: FONT_DISPLAY, marginBottom: '8px' }}>周末的冥想</div>
               <div style={{ fontSize: '13px', lineHeight: 1.6, color: `${TEXT_MAIN}A6` }}>彻底清空大脑，什么都不去想。呼吸，感受周身。</div>
             </div>
          </GlassCard>

          {/* Card 2 */}
          <GlassCard padding="0" style={{ borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
             <div style={{ padding: '14px' }}>
               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                 <div style={{ padding: '3px 8px', background: `${ACCENT}14`, borderRadius: '8px', fontSize: '12px', fontWeight: 700, color: `${ACCENT}D9` }}>
                   09:12
                 </div>
               </div>
               <div style={{ width: '100%', height: '120px', background: 'rgba(0,0,0,0.04)', borderRadius: '8px', marginBottom: '12px' }}></div>
               <div style={{ fontSize: '13px', lineHeight: 1.6, color: `${TEXT_MAIN}A6` }}>早晨的光线真好。给自己做了一顿丰盛的早餐，准备迎接美好的周末。</div>
             </div>
          </GlassCard>
        </div>
      </div>

    </div>
    <BottomNav active="timeline" />
  </div>
);

export const CalendarView = () => (
  <div style={{ width: '100%', height: '100%', background: BG_APP, color: TEXT_MAIN, display: 'flex', flexDirection: 'column', position: 'relative' }}>
    <StatusBar />
    <div style={{ padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '8px' }}>
        <Calendar size={22} color={ACCENT} />
        <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: FONT_DISPLAY }}>日历</span>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div style={{ width: '36px', height: '36px', background: `${TEXT_MAIN}0F`, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Search size={18} />
        </div>
      </div>
    </div>

    <div style={{ padding: '16px 20px', flex: 1 }}>
      <GlassCard padding="0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
        <div style={{ padding: '16px 0', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '24px', paddingRight: '24px' }}>
           <ChevronLeft size={20} color={ACCENT} />
           <span style={{ fontSize: '16px', fontWeight: 700, fontFamily: FONT_DISPLAY }}>2025年 2月</span>
           <ChevronLeft size={20} color={ACCENT} style={{ transform: 'rotate(180deg)' }}/>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: `${TEXT_MUTED}99`, paddingBottom: '12px' }}>
          <span style={{color: `${ACCENT}99`}}>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span style={{color: `${ACCENT}99`}}>六</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', padding: '0 8px 16px 8px' }}>
          {Array.from({length: 28}).map((_, i) => {
            const isEntry = [2,5,10,12,18,21].includes(i);
            const isSelected = i === 21;
            return (
              <div key={i} style={{ 
                aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                background: isSelected ? ACCENT : isEntry ? `${ACCENT}26` : 'transparent', 
                color: isSelected ? 'white' : TEXT_MAIN, 
                borderRadius: '8px', fontSize: '14px', fontWeight: isSelected || isEntry ? 700 : 500,
                border: isSelected ? 'none' : isEntry ? `1.5px solid ${ACCENT}59` : 'none'
              }}>
                {i + 1}
              </div>
            );
          })}
        </div>
      </GlassCard>

      <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Clock size={16} color={`${ACCENT}99`} />
        <span style={{ fontSize: '14px', fontWeight: 600, fontFamily: FONT_DISPLAY }}>2月22日 星期六</span>
        <div style={{ flex: 1 }} />
        <div style={{ padding: '2px 8px', background: `${ACCENT}1A`, borderRadius: '10px', fontSize: '11px', color: ACCENT, fontWeight: 600 }}>1 篇</div>
      </div>
      
      {/* Selected Day Entry */}
      <div style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ padding: '3px 8px', background: `${ACCENT}14`, borderRadius: '6px', fontSize: '12px', fontWeight: 700, color: ACCENT }}>14:30</div>
          <div style={{ padding: '3px 8px', fontSize: '12px', color: TEXT_MUTED }}>😊 快乐</div>
        </div>
        <div style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.8, color: `${TEXT_MAIN}E6` }}>
          彻底清空大脑，什么都不去想。呼吸，感受周身。阳光穿过树叶打在桌面上，形成斑驳的光影...
        </div>
      </div>
    </div>
    <BottomNav active="calendar" />
  </div>
);

/* 4. Settings & Lock */
export const SettingsLock = () => (
  <div style={{ width: '100%', height: '100%', background: BG_PANEL_SOLID, color: TEXT_MAIN, display: 'flex', flexDirection: 'column', position: 'relative' }}>
    <StatusBar />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      <Lock size={48} color={ACCENT} style={{ marginBottom: '24px' }} />
      <h2 style={{ fontSize: '20px', fontWeight: 700, fontFamily: FONT_DISPLAY, marginBottom: '12px', letterSpacing: '8px' }}>验证 PIN</h2>
      <p style={{ color: TEXT_MUTED, textAlign: 'center', fontSize: '13px', marginBottom: '40px' }}>4 位 PIN</p>
      
      <div style={{ display: 'flex', gap: '16px', marginBottom: '80px' }}>
         <div style={{ width: '12px', height: '12px', borderRadius: '6px', background: TEXT_MAIN }}></div>
         <div style={{ width: '12px', height: '12px', borderRadius: '6px', background: TEXT_MAIN }}></div>
         <div style={{ width: '12px', height: '12px', borderRadius: '6px', border: `1.5px solid ${TEXT_MAIN}33` }}></div>
         <div style={{ width: '12px', height: '12px', borderRadius: '6px', border: `1.5px solid ${TEXT_MAIN}33` }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '260px' }}>
         {[1,2,3,4,5,6,7,8,9,'',0,'del'].map((n, i) => (
            <div key={i} style={{ 
              aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              fontSize: '24px', fontWeight: 400, fontFamily: FONT_BODY,
              background: n !== '' && n !== 'del' ? `${TEXT_MAIN}08` : 'transparent', 
              borderRadius: '50%' 
            }}>
              {n === 'del' ? <ChevronLeft size={24} /> : n}
            </div>
         ))}
      </div>
    </div>
  </div>
);
