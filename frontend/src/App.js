import { useState } from "react";
import "@/App.css";
import Marquee from "react-fast-marquee";

// Band Data
const BAND_INFO = {
  name: "DISCÍPULOS",
  spotify: "https://open.spotify.com/intl-pt/artist/5C5ggWPG2OVPxwd6QDdp61",
  instagram: "https://instagram.com/discipulosabanda",
  tiktok: "https://tiktok.com/@discipulosabanda",
  youtube: "https://youtube.com/@ABandaDISCIPULOS",
  merch: "https://www.dscpls.shop",
  logo: "https://i.imgur.com/0lwwt3N.jpeg"
};

const MEMBERS = [
  { name: "Henriz", role: "Vocalista & Liricista", location: "MS", color: "#39ff14" },
  { name: "Gebriel", role: "Vocalista & Liricista", location: "SP", color: "#ff00ff" },
  { name: "BRAMA VH$", role: "Vocalista, Prod & Designer", location: "Pará", color: "#00ffff" },
  { name: "Bru Sant", role: "Produtor", location: "SP", color: "#ffff00" },
  { name: "diogocaster", role: "Produtor", location: "PI", color: "#ff6600" },
  { name: "Nilhipp", role: "Produtor", location: "PR", color: "#ff0066" }
];

// Navigation Component
const NavBar = ({ currentPage, setCurrentPage }) => (
  <nav className="navbar" data-testid="navbar">
    <div className="nav-container">
      {["home", "sobre", "discografia", "membros", "merch"].map((page) => (
        <button
          key={page}
          data-testid={`nav-${page}`}
          className={`nav-btn ${currentPage === page ? "active" : ""}`}
          onClick={() => page === "merch" ? window.open(BAND_INFO.merch, "_blank") : setCurrentPage(page)}
        >
          {page === "merch" ? "★ MERCH ★" : page.toUpperCase()}
        </button>
      ))}
    </div>
  </nav>
);

// Home Page
const HomePage = () => (
  <div className="page home-page" data-testid="home-page">
    <div className="hero">
      <div className="logo-container">
        <img src={BAND_INFO.logo} alt="DISCÍPULOS" className="band-logo glitch" data-testid="band-logo" />
      </div>
      
      <h1 className="band-title glitch-text" data-testid="band-title">DISCÍPULOS</h1>
      <p className="tagline blink">★ HIP-HOP ALTERNATIVO ★</p>
      
      <div className="gif-container">
        <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="gif" className="decorative-gif" />
        <img src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" alt="gif" className="decorative-gif" />
      </div>
      
      <div className="spotify-embed" data-testid="spotify-embed">
        <iframe 
          style={{ borderRadius: "0px", border: "2px solid #39ff14" }}
          src="https://open.spotify.com/embed/artist/5C5ggWPG2OVPxwd6QDdp61?utm_source=generator&theme=0" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          title="Spotify Player"
        />
      </div>
      
      <div className="social-links" data-testid="social-links">
        <a href={BAND_INFO.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram" data-testid="link-instagram">INSTAGRAM</a>
        <a href={BAND_INFO.tiktok} target="_blank" rel="noopener noreferrer" className="social-btn tiktok" data-testid="link-tiktok">TIKTOK</a>
        <a href={BAND_INFO.youtube} target="_blank" rel="noopener noreferrer" className="social-btn youtube" data-testid="link-youtube">YOUTUBE</a>
        <a href={BAND_INFO.spotify} target="_blank" rel="noopener noreferrer" className="social-btn spotify" data-testid="link-spotify">SPOTIFY</a>
      </div>
      
      <div className="gif-row">
        <img src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" alt="gif" className="decorative-gif small" />
        <img src="https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif" alt="gif" className="decorative-gif small" />
        <img src="https://media.giphy.com/media/l378bu6ZYmzS6nBGU/giphy.gif" alt="gif" className="decorative-gif small" />
      </div>
    </div>
  </div>
);

// About Page
const SobrePage = () => (
  <div className="page sobre-page" data-testid="sobre-page">
    <div className="window">
      <div className="window-header">
        <span className="window-title">★ SOBRE A BANDA ★</span>
        <div className="window-controls">
          <span className="control">_</span>
          <span className="control">□</span>
          <span className="control">X</span>
        </div>
      </div>
      <div className="window-content">
        <div className="about-content">
          <img src="https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif" alt="gif" className="about-gif" />
          
          <h2 className="section-title">QUEM SOMOS</h2>
          <p className="about-text">
            <span className="highlight">DISCÍPULOS</span> é um coletivo de hip-hop alternativo brasileiro, 
            formado por artistas de diferentes estados do país unidos pela música e pela vontade de 
            criar algo único e autêntico.
          </p>
          
          <p className="about-text">
            Inspirados pela energia revolucionária de grupos como <span className="highlight">BROCKHAMPTON</span>, 
            nossa música mistura beats experimentais, letras introspectivas e uma estética visual que 
            desafia o convencional.
          </p>
          
          <div className="stats-box">
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">MEMBROS</span>
            </div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">ESTADOS</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">VISÃO</span>
            </div>
          </div>
          
          <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" alt="gif" className="about-gif" />
        </div>
      </div>
    </div>
  </div>
);

// Discography Page
const DiscografiaPage = () => (
  <div className="page discografia-page" data-testid="discografia-page">
    <div className="window wide">
      <div className="window-header">
        <span className="window-title">♫ DISCOGRAFIA ♫</span>
        <div className="window-controls">
          <span className="control">_</span>
          <span className="control">□</span>
          <span className="control">X</span>
        </div>
      </div>
      <div className="window-content">
        <div className="disco-intro">
          <img src="https://media.giphy.com/media/tqfS3mgQU28ko/giphy.gif" alt="music" className="disco-gif" />
          <p className="disco-text">OUÇA NOSSA MÚSICA NO SPOTIFY</p>
          <img src="https://media.giphy.com/media/tqfS3mgQU28ko/giphy.gif" alt="music" className="disco-gif" />
        </div>
        
        <div className="spotify-full" data-testid="spotify-full-player">
          <iframe 
            style={{ borderRadius: "0px", border: "none" }}
            src="https://open.spotify.com/embed/artist/5C5ggWPG2OVPxwd6QDdp61?utm_source=generator&theme=0" 
            width="100%" 
            height="450" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Full Player"
          />
        </div>
        
        <div className="cta-box">
          <a href={BAND_INFO.spotify} target="_blank" rel="noopener noreferrer" className="cta-btn" data-testid="spotify-cta">
            ▶ ABRIR NO SPOTIFY ◀
          </a>
        </div>
        
        <div className="gif-row" style={{ marginTop: '20px' }}>
          <img src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" alt="gif" className="decorative-gif small" />
          <img src="https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif" alt="gif" className="decorative-gif small" />
        </div>
      </div>
    </div>
  </div>
);

// Members Page
const MembrosPage = () => (
  <div className="page membros-page" data-testid="membros-page">
    <div className="window wide">
      <div className="window-header">
        <span className="window-title">★ TOP 6 ★ MEMBROS</span>
        <div className="window-controls">
          <span className="control">_</span>
          <span className="control">□</span>
          <span className="control">X</span>
        </div>
      </div>
      <div className="window-content">
        <div className="members-grid" data-testid="members-grid">
          {MEMBERS.map((member, index) => (
            <div 
              key={member.name} 
              className="member-card"
              style={{ borderColor: member.color }}
              data-testid={`member-${index}`}
            >
              <div className="member-avatar" style={{ borderColor: member.color }}>
                <span className="avatar-letter" style={{ color: member.color }}>
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="member-name" style={{ color: member.color }}>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-location">📍 {member.location}</p>
              <div className="member-decoration">
                <span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gif-decoration">
          <img src="https://media.giphy.com/media/3ohhweiVB36rAlqVCE/giphy.gif" alt="gif" className="bottom-gif" />
          <img src="https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif" alt="gif" className="bottom-gif" />
        </div>
      </div>
    </div>
  </div>
);

// Marquee Component
const MarqueeBar = () => (
  <div className="marquee-container" data-testid="marquee">
    <Marquee gradient={false} speed={50}>
      <span className="marquee-text">
        ★ DISCÍPULOS ★ HIP-HOP ALTERNATIVO ★ NOVO SOM ★ SIGA NAS REDES ★ 
        MERCH DISPONÍVEL ★ DISCÍPULOS ★ HIP-HOP ALTERNATIVO ★ NOVO SOM ★ 
        SIGA NAS REDES ★ MERCH DISPONÍVEL ★
      </span>
    </Marquee>
  </div>
);

// CRT Effect Overlay
const CRTOverlay = () => (
  <div className="crt-overlay" aria-hidden="true" />
);

// Main App
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "sobre":
        return <SobrePage />;
      case "discografia":
        return <DiscografiaPage />;
      case "membros":
        return <MembrosPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App myspace-vibes" data-testid="app-container">
      <CRTOverlay />
      <MarqueeBar />
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer" data-testid="footer">
        <p>© 2024 DISCÍPULOS - TODOS OS DIREITOS RESERVADOS</p>
        <p className="footer-sub">MADE WITH ♥ AND NOSTALGIA</p>
        <div className="visitor-counter">
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="gif" className="counter-gif" />
          <span>VISITANTE #000{Math.floor(Math.random() * 9999)}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
