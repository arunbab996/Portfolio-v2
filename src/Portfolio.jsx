import { Link } from 'react-router-dom';
export default function Portfolio() {
  return (
    <main className="portfolio-main stagger-content">
      
      <div className="section-block">
        <div className="col-header">Product Perspectives</div>
        
        <div className="grid-layout">
          <Link to="/portfolio/specter/" className="project-card">
            <img 
              src="/images/0.webp" 
              alt="Specter Talent" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="project-meta">
              <div className="project-title">Specter Talent</div>
              <div className="project-tagline">Building the founder discovery engine powering modern startup scouting.</div>
            </div>
          </Link>
          
          <Link to="/portfolio/semanticrentalsearch/" className="project-card">
            <img 
              src="/images/semantic.png" 
              alt="Intent-Driven Rental Search" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="project-meta">
              <div className="project-title">Intent-Driven Rental Search</div>
              <div className="project-tagline">Designed a semantic + agent-based search flow to reduce time-to-rent by removing filter overload.</div>
            </div>
          </Link>
          
          <Link to="/portfolio/homehunter/" className="project-card">
            <img 
              src="https://res.cloudinary.com/dp67k01qy/image/upload/v1766217335/Gemini_Generated_Image_njmoz2njmoz2njmo_nxjofd.png" 
              alt="HomeHunter" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="project-meta">
              <div className="project-title">HomeHunter</div>
              <div className="project-tagline">Marketplace validation & scale decision.</div>
            </div>
          </Link>

          <Link to="/portfolio/mymind/" className="project-card">
            <img 
              src="/portfolio/mymind/images/hero.png" 
              alt="mymind" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="project-meta">
              <div className="project-title">My Favourite Product: mymind</div>
              <div className="project-tagline">Why this AI-powered extension changed how I think and create.</div>
            </div>
          </Link>

          <Link to="/portfolio/dunzo/" className="project-card">
            <img 
              src="/images/1.webp" 
              alt="Dunzo" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="project-meta">
              <div className="project-title">Dunzo: AOV Optimization</div>
              <div className="project-tagline">The Tale of Maximising Average Order Value.</div>
            </div>
          </Link>

          <Link to="/portfolio/jupiter/" className="project-card">
            <img 
              src="/images/2.webp" 
              alt="Jupiter Gamification" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="project-meta">
              <div className="project-title">Jupiter: App Gamification</div>
              <div className="project-tagline">Incorporating game elements into a Neobank experience.</div>
            </div>
          </Link>

          <Link to="/portfolio/swiggy/" className="project-card">
            <img 
              src="/images/3.jpeg" 
              alt="Swiggy" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="project-meta">
              <div className="project-title">Swiggy: Bulk Delivery</div>
              <div className="project-tagline">How to tackle multiple food orders from multiple restaurants.</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="section-block">
        <div className="col-header">Experiments, Prototypes & Proofs of Concept</div>
        
        <div className="grid-layout">
          <a href="https://btc.heyabc.xyz" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/bitcoin.webp" 
              alt="Magic Internet Money" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">Magic Internet Money</div>
              <div className="tool-sub">Exploring real-time financial data visualization and mental models.</div>
            </div>
          </a>

          <a href="https://www.discoveryos.xyz/" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/slash.svg" 
              alt="discovery/OS" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">discovery/OS</div>
              <div className="tool-sub">Market intelligence on emerging companies.</div>
            </div>
          </a>

          <a href="https://x.com/YCDiscoveryBot" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/Y_Combinator_logo(1).png" 
              alt="Y Combinator Bot" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">Y Combinator Bot</div>
              <div className="tool-sub">Built to automate early startup discovery and reduce manual scanning.</div>
            </div>
          </a>

          <a href="https://voyager-umber.vercel.app" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/voya.png" 
              alt="Voyager" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">Voyager</div>
              <div className="tool-sub">Your AI Travel Concierge.</div>
            </div>
          </a>

          <a href="https://pokedex-sigma-three-64.vercel.app/" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/pokedex.png" 
              alt="Pokédex" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">Pokédex</div>
              <div className="tool-sub">Your digital Poké-companion. Gotta fetch ’em all.</div>
            </div>
          </a>

          <a href="https://xpay-prototype.vercel.app" className="tool-card" target="_blank" rel="noopener noreferrer">
            <div className="canvas-frame" style={{ backgroundColor: '#1e293b' }}>
              <img 
                src="/images/xpay.png" 
                alt="xPay" 
                style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
                onLoad={(e) => e.target.style.opacity = 1}
              />
            </div>
            <div className="tool-meta">
              <div className="tool-title">xPay</div>
              <div className="tool-sub">Prototype invoicing flow built to help Indian contractors seamlessly bill US clients.</div>
            </div>
          </a>

          <a href="https://kyc-debugger-v2.vercel.app" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/cybrilla.png" 
              alt="Cybrilla" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">Cybrilla (KYC Debugger)</div>
              <div className="tool-sub">An internal dashboard prototype designed to quickly debug and resolve KYC failures.</div>
            </div>
          </a>

          <a href="https://reflow-prototype.vercel.app" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/reflow.png" 
              alt="Reflow" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">Reflow</div>
              <div className="tool-sub">AI-driven analysis of blocked communication to help teams diagnose and resolve critical decision bottlenecks.</div>
            </div>
          </a>

          <a href="https://certa-risk-intel.vercel.app" className="tool-card" target="_blank" rel="noopener noreferrer">
            <div className="canvas-frame" style={{ backgroundColor: '#f8fafc' }}>
              <img 
                src="/images/certa.png" 
                alt="Certa" 
                style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
                onLoad={(e) => e.target.style.opacity = 1}
              />
            </div>
            <div className="tool-meta">
              <div className="tool-title">Strategic Risk Intelligence</div>
              <div className="tool-sub">An AI-powered screening interface built to instantly surface critical entity risks across global news, legal, and regulatory databases.</div>
            </div>
          </a>

          <a href="https://draper-ai-engine.vercel.app" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/draper.png" 
              alt="Draper" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">Draper</div>
              <div className="tool-sub">Reverse-engineers successful social media ads to extract the exact factors driving their high impressions.</div>
            </div>
          </a>

          <a href="https://scopex-web-app.vercel.app" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/scopex.png" 
              alt="ScopeX" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">ScopeX</div>
              <div className="tool-sub">A cross-border payment prototype built to seamlessly automate recurring transactions from the EU to India.</div>
            </div>
          </a>

          <a href="https://polaroid-sand.vercel.app" className="tool-card" target="_blank" rel="noopener noreferrer">
            <img 
              className="tool-thumb" 
              src="/images/polaroid.png" 
              alt="Polaroid" 
              style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="tool-meta">
              <div className="tool-title">Polaroid</div>
              <div className="tool-sub">A fun image-editing tool that instantly transforms user uploads into classic Polaroid-style photos.</div>
            </div>
          </a>
        </div>
      </div>
      
    </main>
  );
}