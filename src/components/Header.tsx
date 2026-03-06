import { Heart } from 'lucide-react';

export default function Header({ scrolled }: { scrolled: boolean }) {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="/" className="logo-group">
          <div className="logo-icon">
            <Heart size={20} fill="var(--text-main)" color="var(--text-main)" strokeWidth={1.5} />
          </div>
          <span>HeartNote</span>
        </a>
        
        <nav className="nav-links">
          <a href="#features">设计理念</a>
          <a href="#security">隔离策略</a>
          <a href="#download">体验</a>
        </nav>
        
        <div className="header-actions">
          <button className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14px' }}>
            获取应用
          </button>
        </div>
      </div>
    </header>
  );
}
