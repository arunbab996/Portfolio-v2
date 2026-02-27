export default function Home() {
  return (
    <>
      <main id="app" className="index-page-content">
        <section className="stagger-content">
          
          <div className="name pop-link pop-side">
            Arun Baburaj
            <img src="/avatar.jpg" alt="Me waving" className="pop-img pop-lg" />
          </div>

          <div className="desc">
            Product Manager, Researcher, and Generalist.
            Building software at the intersection of{' '}
            <span>AI, Venture Capital, and Human Behavior.</span>
          </div>

          <div className="current">
            <span className="spacer">
              I'm currently leading a product at{' '}
              <a href="https://tryspecter.com" target="_blank" rel="noopener noreferrer" className="pop-link">
                Specter
                <img src="/specterhq_logo (2).jpeg" alt="Specter Logo" className="pop-img" />
              </a>.
            </span>

            Previously built <strong>Homehunter Club</strong> (rental intelligence for Gen-Z)
            and <strong>Acclr8</strong> (hiring infrastructure for Indian startups).
          </div>
        </section>
      </main>

      {/* Social Icons - Now ONLY on the Index Page */}
      <div className="social-fixed">
        <a href="https://www.linkedin.com/in/arunbaburaj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.98 0h3.83v2.16h.05c.53-1 1.84-2.16 3.79-2.16 4.05 0 4.8 2.67 4.8 6.14V24h-4v-8.16c0-1.95-.03-4.45-2.71-4.45-2.71 0-3.13 2.12-3.13 4.31V24h-4V8z"/></svg>
        </a>
        <a href="https://x.com/96Arun" target="_blank" rel="noopener noreferrer" aria-label="X">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2h3.314l-7.26 8.3L24 22h-6.828l-5.343-7.027L5.463 22H2.148l7.78-8.888L0 2h6.828l4.973 6.533L18.244 2zm-1.157 18h1.843L7.08 4h-1.89l11.897 16z"/></svg>
        </a>
        <a href="mailto:arunbaburajc@gmail.com" aria-label="Email">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </div>
    </>
  );
}