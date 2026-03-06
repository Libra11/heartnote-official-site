export default function Header({ scrolled }: { scrolled: boolean }) {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="/" className="logo-group">
          <div className="logo-icon">
            <img src="/app_icon.png" alt="HeartNote 应用图标" />
          </div>
          <span>HeartNote</span>
        </a>
        
        <nav className="nav-links">
          <a href="#features">设计理念</a>
          <a href="#security">隔离策略</a>
          <a href="#download">体验</a>
        </nav>
      </div>
    </header>
  );
}
