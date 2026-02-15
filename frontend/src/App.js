import { useState } from "react";
import "@/App.css";
import Marquee from "react-fast-marquee";

// Band Data
const BAND_INFO = {
  name: "DISCÍPULOS",
  spotify: "https://open.spotify.com/intl-pt/artist/5C5ggWPG2OVPxwd6QDdp61",
  spotifyEmbed: "https://open.spotify.com/embed/artist/5C5ggWPG2OVPxwd6QDdp61?utm_source=generator&theme=0",
  instagram: "https://instagram.com/discipulosabanda",
  tiktok: "https://tiktok.com/@discipulosabanda",
  youtube: "https://youtube.com/@ABandaDISCIPULOS",
  merch: "https://www.dscpls.shop",
  logo: "https://i.imgur.com/0lwwt3N.jpeg"
};

const MEMBERS = [
  { name: "Henriz", role: "Vocalista & Liricista", location: "MS", color: "#00CED1" },
  { name: "Gebriel", role: "Vocalista & Liricista", location: "SP", color: "#FFD700" },
  { name: "BRAMA VH$", role: "Vocalista, Prod & Designer", location: "Pará", color: "#40E0D0" },
  { name: "Bru Sant", role: "Produtor", location: "SP", color: "#F0E68C" },
  { name: "diogocaster", role: "Produtor", location: "PI", color: "#00CED1" },
  { name: "Nilhipp", role: "Produtor", location: "PR", color: "#FFD700" }
];

// CSS Animated Icons (MySpace style)
const FireIcon = () => <span className="fire-icon">🔥</span>;
const StarIcon = () => <span className="star-icon">⭐</span>;
const SparkleIcon = () => <span className="sparkle-icon">✨</span>;
const HeartIcon = () => <span className="heart-icon">💖</span>;
const MusicIcon = () => <span className="music-icon">🎵</span>;
const SkullIcon = () => <span className="skull-icon">💀</span>;

// Lactopulga Welcome Component
const LactopulgaWelcome = () => (
  <div className="lactopulga-section" data-testid="lactopulga-welcome">
    <div className="lactopulga-container">
      <div className="lactopulga-avatar">
        <img src={BAND_INFO.logo} alt="Lactopulga" className="lactopulga-img" />
      </div>
      <div className="speech-bubble">
        <p className="lactopulga-text">
          oii :p eu sou o <span className="highlight">lactopulga</span>, seja bem-vindo ao nosso site! :D
        </p>
        <p className="lactopulga-sub">~* clica ai pra conhecer a gente *~</p>
      </div>
    </div>
    <div className="welcome-icons">
      <FireIcon /><SparkleIcon /><FireIcon />
    </div>
  </div>
);

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
      <LactopulgaWelcome />
      
      <div className="logo-container">
        <img src={BAND_INFO.logo} alt="DISCÍPULOS" className="band-logo" data-testid="band-logo" />
      </div>
      
      <h1 className="band-title" data-testid="band-title">DISCÍPULOS</h1>
      <p className="tagline blink">★ HIP-HOP ALTERNATIVO ★</p>
      
      <div className="icon-container">
        <FireIcon /><StarIcon /><SparkleIcon /><StarIcon /><FireIcon />
      </div>
      
      <div className="spotify-embed" data-testid="spotify-embed">
        <iframe 
          style={{borderRadius: "12px"}}
          src="https://open.spotify.com/embed/artist/5C5ggWPG2OVPxwd6QDdp61?utm_source=generator&theme=0"
          width="100%" 
          height="152" 
          frameBorder="0" 
          allowFullScreen
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
      
      <div className="icon-row">
        <HeartIcon /><MusicIcon /><SparkleIcon /><MusicIcon /><HeartIcon />
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
          <div className="icon-row"><FireIcon /><SkullIcon /><FireIcon /></div>
          
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
          
          <div className="icon-row"><SparkleIcon /><StarIcon /><SparkleIcon /></div>
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
          <MusicIcon />
          <p className="disco-text">OUÇA NOSSA MÚSICA NO SPOTIFY</p>
          <MusicIcon />
        </div>
        
        <div className="spotify-full" data-testid="spotify-full-player">
          <iframe 
            src={BAND_INFO.spotifyEmbed}
            width="100%" 
            height="450" 
            frameBorder="0" 
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
        
        <div className="icon-row" style={{ marginTop: '20px' }}>
          <FireIcon /><MusicIcon /><StarIcon /><MusicIcon /><FireIcon />
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
                <StarIcon /><StarIcon /><StarIcon />
              </div>
            </div>
          ))}
        </div>
        
        <div className="icon-row" style={{ marginTop: '30px' }}>
          <FireIcon /><SkullIcon /><SparkleIcon /><SkullIcon /><FireIcon />
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
        <p className="footer-sub">MADE WITH <HeartIcon /> AND NOSTALGIA</p>
        <div className="visitor-counter">
          <SparkleIcon />
          <span>VISITANTE #000{Math.floor(Math.random() * 9999)}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
