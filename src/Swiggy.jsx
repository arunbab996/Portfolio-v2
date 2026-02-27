import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Swiggy.css';

export default function Swiggy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.background = '#f9fafb';
    return () => { document.body.style.background = '#dbe2eb'; };
  }, []);

  return (
    <div className="swiggy-wrapper">
      <div className="container">
        <Link to="/portfolio" className="back">← Back</Link>

        <h1 className="animate-entry delay-1">Swiggy Case Study: Enabling Multi-Restaurant Composite Delivery</h1>

        <div className="hero animate-entry delay-2">
          <img 
            src="/portfolio/swiggy/images/hero.png" 
            alt="Swiggy hero"
            fetchPriority="high"
            decoding="async"
            onError={(e) => { e.target.onerror = null; e.target.src = '/portfolio/swiggy/images/image1.png'; }}
          />
        </div>

        <section className="animate-entry delay-3">
          <h2>1. Product Background</h2>
          <p>Swiggy is India’s largest food delivery platform, with more than 2.7 lakh restaurants onboarded across 500+ cities. Its logistics network and fleet optimisation are among the best in the world. Swiggy built Instamart, Genie, and Dineout on top of this same logistics infrastructure.</p>
          <p>Food delivery is a high-frequency business but also high-churn. Reducing friction and meeting strong user intent is critical for both revenue and retention.</p>
          <p>This case study focuses specifically on a behaviour observed in Tier-1 users: ordering multiple items from different restaurants in a single meal window.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>2. Problem Statement</h2>
          <p>Today, users cannot combine items from multiple restaurants into one order. They need to:</p>
          <ul>
            <li>Place multiple separate orders</li>
            <li>Pay multiple delivery fees</li>
            <li>Wait for multiple riders</li>
          </ul>
          <p>This creates friction for:</p>
          <ul>
            <li>Users with different taste preferences in the same household</li>
            <li>Users who want a meal + dessert combo from different outlets</li>
            <li>Users who want to try items across restaurants</li>
          </ul>
          <p><strong>The opportunity:</strong> Let users build a composite order across restaurants and get a single delivery.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>3. User Personas</h2>
          <h3>Rahul — 29, Bengaluru</h3>
          <p>Works at a tech startup, lives with his partner. Both have different food preferences. Orders 12–15 times a month.</p>
          <h3>Nandini — 24, Pune</h3>
          <p>Lives with roommates. Group orders are frequent. They want different items from different restaurants.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>4. Insights</h2>
          <ul>
            <li>Food preferences diverge heavily within the same household</li>
            <li>Swiggy Genie is sometimes used as a hack for cross-restaurant orders</li>
            <li>Users care about timing — they want everything to arrive together</li>
            <li>High-intent use cases (weekends, celebrations) see willingness to pay a premium</li>
          </ul>
        </section>

        <section className="animate-entry delay-4">
          <h2>5. Proposed Solution: Composite Food Cart</h2>
          <p>The idea: Allow users to add items from multiple restaurants into one composite cart as long as they meet certain radius, timing, and compatibility constraints.</p>

          <div className="figure">
            <img src="/portfolio/swiggy/images/image1.png" alt="Composite cart mockup" loading="lazy" decoding="async" />
          </div>
          <figcaption>Mockup of multi-restaurant cart flow</figcaption>

          <h3>Key Features</h3>
          <ul>
            <li>Add items from multiple restaurants</li>
            <li>Single checkout and payment</li>
            <li>Unified delivery tracking</li>
            <li>Smart batching by kitchen readiness time</li>
            <li>Price transparency for additional logistics fee</li>
          </ul>
        </section>

        <section className="animate-entry delay-4">
          <h2>6. Operational Constraints</h2>
          <ul>
            <li>Only restaurants within a specific delivery corridor can be combined</li>
            <li>Rider needs optimal batching path</li>
            <li>Kitchen prep time mismatch must be handled (buffering + sequencing)</li>
            <li>High-load zones may disable composite ordering dynamically</li>
          </ul>
          <div className="figure">
            <img src="/portfolio/swiggy/images/image2.png" alt="Delivery batching mockup" loading="lazy" decoding="async" />
          </div>
          <figcaption>Batching and routing constraints</figcaption>
        </section>

        <section className="animate-entry delay-4">
          <h2>7. Pricing Model</h2>
          <p>Composite delivery introduces new marginal costs on Swiggy’s logistics side. A simple, transparent model can solve this:</p>
          <div className="table-wrap">
            <div className="table-card">
              <table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Base delivery</td><td>₹35–₹45</td></tr>
                  <tr><td>Additional restaurant pickup</td><td>₹15–₹25</td></tr>
                  <tr><td>Peak-time dynamic fee</td><td>₹10–₹20</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <p>High-intent users are comfortable paying +₹20 to +₹40 for convenience.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>8. Success Metrics</h2>
          <ul>
            <li>Conversion rate for multi-restaurant carts</li>
            <li>Incremental AOV for composite vs single-restaurant orders</li>
            <li>Order success rate (batched delivery completion)</li>
            <li>Repeat rate for users who try composite ordering</li>
          </ul>
        </section>

        <section className="animate-entry delay-4">
          <h2>9. Risks & Mitigations</h2>
          <ul>
            <li><strong>Delay risk:</strong> Mitigated with prep-time sequencing</li>
            <li><strong>Rider overload:</strong> Enable composite ordering only during stable capacity</li>
            <li><strong>User confusion on fees:</strong> Upfront price explanation</li>
            <li><strong>Operational failure:</strong> Auto-split into two orders if incompatibility detected</li>
          </ul>
        </section>

        <section className="animate-entry delay-4">
          <h2>10. Final Recommendation</h2>
          <p>The Composite Cart unlocks a new behaviour for Swiggy: household-level ordering instead of individual ordering. This expands AOV, improves retention and increases Swiggy’s defensibility against competitors.</p>
          <p>Given India’s diverse food preferences, composite food ordering has very strong product-market fit potential in Tier-1 households.</p>
        </section>
      </div>
    </div>
  );
}