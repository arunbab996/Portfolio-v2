import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dunzo.css';

export default function Dunzo() {
  useEffect(() => {
    window.scrollTo(0, 0); 
    document.body.style.background = '#f9fafb';
    return () => { document.body.style.background = '#dbe2eb'; };
  }, []);

  return (
    <div className="dunzo-wrapper">
      <div className="container">
        <Link to="/portfolio" className="back">← Back</Link>

        <div className="animate-entry delay-1">
          <h1>Dunzo Daily – Increasing Average Order Value (AOV)</h1>
          <div className="meta-line"><em>Type: Product Strategy / Growth · Domain: Hyperlocal Commerce, B2C</em></div>
        </div>

        <img 
          className="hero animate-entry delay-2" 
          src="/portfolio/dunzo/images/hero.png" 
          alt="Dunzo tile / hero image" 
          fetchPriority="high"
          decoding="async"
          onError={(e) => { e.target.onerror = null; e.target.src = '/portfolio/dunzo/images/image1.png'; }}
        />

        <section className="animate-entry delay-3">
          <h2>1. Product Background</h2>
          <p>Dunzo Daily is Dunzo’s quick-commerce grocery delivery business, offering delivery of essentials—fresh produce, dairy, meat, packaged foods, and household items—typically under 19 minutes.</p>
          <p>For this case study, I focused exclusively on Dunzo Daily’s grocery delivery business, which operates on a dark-store model and competes directly with Instamart, Blinkit, Zepto and BigBasket Now.</p>
          <p>Given the high frequency and low margin nature of grocery delivery, the business heavily depends on improving basket economics. One of the most critical levers here is the Average Order Value (AOV), which directly impacts revenue per order and determines whether unit economics can be sustainable.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>2. Problem Statement</h2>
          <p>Every grocery order includes fixed costs—delivery, picking/packing, and payment gateway fees. When users place low-value or single-item orders, these costs cannot be recovered, pushing the business into negative contribution margins.</p>
          <p>To improve unit economics sustainably, Dunzo wanted to explore product-led interventions that increase AOV by 30–40%, specifically for high-potential user cohorts:</p>
          <ul>
            <li>Young Couples (24–30 years)</li>
            <li>Families with Kids (28–40 years)</li>
          </ul>
          <p><strong>The goal:</strong> Increase average cart size and encourage high-value items per transaction without harming user experience or conversion.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>3. Understanding Unit Economics</h2>
          <p>Dunzo Daily completed ~55 lakh orders in June (year referenced). The business operated with a monthly burn of ₹176 Cr, driven by delivery cost, storage/handling/packaging and payment gateway charges.</p>
          <p><strong>AOV = Revenue / Number of Orders</strong></p>
          <p>To improve AOV, we can:</p>
          <ul>
            <li>Increase revenue per order (larger baskets)</li>
            <li>Reduce the proportion of small-cart orders</li>
          </ul>
        </section>

        <section className="animate-entry delay-4">
          <h2>4. User Research & Personas</h2>
          <p><strong>Primary Segments</strong></p>
          <ul>
            <li>Young Couples (24–30 years)</li>
            <li>Families with Kids (28–40 years)</li>
          </ul>
          <h3>Persona Examples</h3>
          <p><strong>Rahul Dravid – 34, Married, Bengaluru</strong></p>
          <p>Chief of Technical Staff at a sports startup. Planned shopper; prefers ordering weekly essentials. Wants a fast, frictionless checkout.</p>
          <p><strong>Rishabh Pant – 26, Single, Hyderabad</strong></p>
          <p>Product Designer, lives with flatmates. Shops impulsively, values speed and convenience.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>5. Key Insights</h2>
          <ul>
            <li>Users often forget essential items when directly jumping to checkout.</li>
            <li>Complementary products (e.g., razor → shaving cream) are underutilised as upsell opportunities.</li>
            <li>Decision fatigue leads to cart abandonment—users prefer bundled solutions.</li>
            <li>Post-checkout screen real estate is underused and could help with future-order discovery.</li>
          </ul>
        </section>

        <section className="animate-entry delay-4">
          <h2>6. Solution Strategy</h2>
          <h3>1. Reposition “Add More” in Checkout (Medium Effort, High Impact)</h3>
          <p>By repositioning “+ Add More” prominently at the end of the Review Items list, it triggers a last-minute review of essentials, encourages cart top-ups and leverages the psychology of “I’m already paying for delivery; let me get everything in one go.” This reduces low-value orders and improves average basket size.</p>
          <figure className="figure-card">
            <img src="/portfolio/dunzo/images/image1.png" alt="Reposition Add More mock" loading="lazy" decoding="async" />
          </figure>
          <figcaption>Repositioning the “Add More” CTA in checkout to prompt top-ups.</figcaption>

          <h3>2. Item Prompts – Contextual Recommendations (High Effort, High Impact)</h3>
          <p>Introduce intelligent “Customers Also Bought” recommendations across Checkout and Product category pages (e.g., Razor → Shaving cream, Pasta → Pasta sauce).</p>
          <figure className="figure-card">
            <img src="/portfolio/dunzo/images/image2.png" alt="Item prompts mock" loading="lazy" decoding="async" />
          </figure>
          <figcaption>Contextual item prompts on checkout and product pages to reduce decision effort.</figcaption>

          <h3>3. Combos – Item Bundles (High Effort, High Impact)</h3>
          <p>Launch a dedicated Combos section with pre-curated bundles (Weekly vegetable packs, Breakfast kits, Cleaning essentials). Designed based on popular regional buying patterns and seasonal changes.</p>
          <figure className="figure-card">
            <img src="/portfolio/dunzo/images/image3.png" alt="Combos mock" loading="lazy" decoding="async" />
          </figure>
          <figcaption>Pre-curated bundles (Combos) for convenience and higher AOV.</figcaption>

          <h3>4. Post-Checkout Nudges (Low Effort, Low Impact)</h3>
          <p>After order placement, replace the idle delivery-tracking screen with “Popular purchases in your neighbourhood”, discovery nudges, and new/seasonal item suggestions to educate users for the next purchase.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>7. Competitor Benchmarking</h2>
          <p>Competitors already use a mix of bundled SKUs, high-visibility upsells, and smart recommendations. Dunzo can close the gap via better personalization + placement.</p>
          <div className="table-wrap">
            <div className="table-card" role="table">
              <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Funding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Swiggy Instamart</td><td>$3.6B</td></tr>
                  <tr><td>BigBasket</td><td>$1.3B</td></tr>
                  <tr><td>Blinkit</td><td>$1B</td></tr>
                  <tr><td>Zepto</td><td>$360M</td></tr>
                  <tr><td>Milkbasket</td><td>$38.5M</td></tr>
                  <tr><td>JioMart</td><td>Subsidiary of Reliance</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="animate-entry delay-4">
          <h2>8. Impact Estimation</h2>
          <p>Proposed Solution, Priority, AOV Impact are summarised below. Highest AOV lift comes from combining Item Prompts + Combos.</p>
          <div className="table-wrap">
            <div className="table-card" role="table">
              <table>
                <thead>
                  <tr>
                    <th>Proposed Solution</th>
                    <th>Priority</th>
                    <th>AOV Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Reposition “+ Add More”</td><td>Medium</td><td>High</td></tr>
                  <tr><td>Item Prompts (Upsell)</td><td>High</td><td>High</td></tr>
                  <tr><td>Combos / Bundles</td><td>High</td><td>High</td></tr>
                  <tr><td>Post-Checkout Nudges</td><td>Low</td><td>Low</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="animate-entry delay-4">
          <h2>9. Success Metrics</h2>
          <p>To measure impact on both behaviour and business outcomes:</p>
          <div className="table-wrap">
            <div className="table-card" role="table">
              <table>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Metric</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Are users discovering features?</td><td>% users interacting with Add More / Combos</td></tr>
                  <tr><td>Are they converting?</td><td>Funnel progression (view → add → purchase)</td></tr>
                  <tr><td>Are they satisfied?</td><td>NPS, post-checkout feedback</td></tr>
                  <tr><td>Is AOV increasing?</td><td>AOV of exposed users vs control group</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="animate-entry delay-4">
          <h2>10. Final Recommendation</h2>
          <p>The most effective approach is a stacked strategy:</p>
          <p><strong>Phase 1 – Quick Wins</strong></p>
          <ul>
            <li>Reposition “+ Add More”</li>
            <li>Enable basic complementary recommendations</li>
          </ul>
          <p><strong>Phase 2 – High Growth</strong></p>
          <ul>
            <li>Launch region-specific Combos</li>
            <li>Upgrade recommendation engine using purchase + behavioural data</li>
          </ul>
          <p><strong>Phase 3 – Habit Building</strong></p>
          <ul>
            <li>Post-checkout nudges</li>
            <li>Weekly curated packs for retention</li>
          </ul>
          <p><strong>Expected outcome:</strong><br />30–40% improvement in AOV over 8–12 weeks for targeted user cohorts, with meaningful improvement to contribution margins.</p>
        </section>

      </div>
    </div>
  );
}