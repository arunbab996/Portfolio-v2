import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SemanticSearch.css';

export default function SemanticSearch() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.background = '#ffffff'; // Pure white
    return () => { document.body.style.background = '#dbe2eb'; };
  }, []);

  return (
    <div className="semantic-search-wrapper">
      <div className="container">
        <Link className="back" to="/portfolio">← Back</Link>

        <div className="animate-entry delay-1">
          <h1>Intent-Driven Rental Search</h1>
          <div className="meta-line">Prototype Case Study · AI Agents · Product Design</div>
        </div>

        <a href="https://uprent-agent.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img className="hero animate-entry delay-2" 
               src="/portfolio/semanticrentalsearch/images/hero.png" 
               alt="upRent Prototype Interface"
               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x800/eef2f6/333.png?text=hero.png+missing'; }} />
        </a>

        <section className="animate-entry delay-3">
          <p>Renting is one of those problems people complain about constantly but rarely stop to redesign properly. Most rental platforms still assume that if users are given enough filters, they’ll eventually find what they want.</p>
          <p>In practice, that rarely happens. People don’t think in parameters; they think in intent.</p>
          <p>After coming across an early-stage proptech startup, I decided to build a small prototype to explore whether a different approach could reduce friction in the rental journey. Instead of starting with features or metrics, I started with a simple question: why is it still so hard to go from “I want a place” to “I’ve booked a viewing”?</p>
          
          <p style={{ marginTop: '32px', marginBottom: '40px' }}>
              <a href="https://uprent-agent.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#111219', textDecoration: 'none', borderBottom: '2px solid #111219', paddingBottom: '1px' }}>
                  <strong>Visit the Working Prototype ↗</strong>
              </a>
          </p>

          <p>From my own experience and from watching how people actually search for homes, the core issue seemed to be translation. Users know what they want, but they struggle to express it in the rigid language platforms expect. Someone might say they want a quiet apartment near public transport, within a certain budget, and available soon. What the platform hears is a set of incomplete filters that either return nothing or flood the user with irrelevant results.</p>
          
          <img className="content-img" src="/portfolio/semanticrentalsearch/images/rigid-matching.png" alt="Rigid Matching Diagram" style={{ display: 'block' }} />

          <p>The hypothesis behind the prototype was straightforward: if users can express intent in natural language, the system should adapt to them rather than the other way around. Instead of forcing precision early, it should accept ambiguity, make trade-offs explicit, and help users move forward quickly.</p>

          <img className="content-img" src="/portfolio/semanticrentalsearch/images/weighted-ranking.png" alt="Weighted Ranking Diagram" style={{ display: 'block' }} />

          <p>The prototype I built uses a chat-style interface where users describe what they’re looking for in plain language. That input is parsed into a set of structured signals - budget constraints, location preferences, timing, and softer lifestyle requirements.</p>
          <p>Importantly, these signals aren’t treated as absolute filters. They’re weighted and used to score listings relative to one another. This ranking-first approach was a deliberate choice. In real rental decisions, people rarely find a perfect match. They make compromises. By ranking listings and explaining why something shows up higher or lower, the system mirrors how users actually evaluate options. A place might rank second because it’s slightly over budget but much closer to public transport. That context matters more than a binary “match or no match.”</p>
          <p>Another issue I wanted to address was unrealistic expectations. Many rental searches fail not because there are no options, but because the user’s budget or constraints don’t align with the market they’re searching in. To handle this, I added a market check layer that evaluates whether the user’s requirements are realistic for a given location. When they aren’t, the system explains what’s off and suggests what to relax. When they are, it moves the user forward instead of leaving them stuck browsing.</p>

          <h3>Search Methodology Comparison</h3>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Traditional Filter Search</th>
                  <th>Intent-Driven AI Search</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Requires users to translate their needs into rigid parameters and "platform language."</td>
                  <td>Allows users to express their intent using plain, natural language.</td>
                </tr>
                <tr>
                  <td>Forces precision early in the journey.</td>
                  <td>Accepts ambiguity and helps users make trade-offs explicit later on.</td>
                </tr>
                <tr>
                  <td>Treats inputs as absolute filters leading to a binary "match or no match" outcome.</td>
                  <td>Parses inputs as structured signals used to weight and rank listings relative to one another.</td>
                </tr>
                <tr>
                  <td>Often results in zero results or a flood of irrelevant options due to incomplete filters.</td>
                  <td>Mirrors how users evaluate options by ranking listings based on weighted compromises.</td>
                </tr>
                <tr>
                  <td>Allows users to search with unrealistic constraints, leading to dead ends.</td>
                  <td>Includes a "market check layer" to evaluate if requirements are realistic for the location.</td>
                </tr>
                <tr>
                  <td>The process ends at displaying results, leaving a gap between intent and action.</td>
                  <td>Bridges the gap to action by drafting viewing request emails in real time once a match is found.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Speed is critical in rental markets, so the prototype doesn’t stop at showing results. Once a user finds a suitable option, the system drafts a viewing request email to the landlord in real time. This removes yet another small but meaningful delay between intent and action - something that often determines whether a deal happens or not.</p>
          <p>I also included commercial logic directly in the search experience. For each listing, the system estimates what the user would typically pay in traditional agent fees and compares it to the platform’s fees. The idea wasn’t to “sell,” but to surface value at the exact moment the user is making a decision, rather than relying on abstract marketing claims elsewhere.</p>
          <p>The prototype was built using mock data and simple heuristics rather than complex models. That was intentional. The goal wasn’t accuracy at scale, but clarity of thought. I wanted to make the decision logic inspectable and easy to iterate on, rather than hiding everything behind a black box.</p>
          <p>Building this reinforced a pattern I’ve seen before: most friction in marketplaces doesn’t come from lack of features, but from poorly designed decision-making. When systems help users think clearly and act quickly, outcomes improve on both sides of the marketplace.</p>
          <p>This project also reflects how I prefer to work. Instead of describing ideas or writing speculative docs, I tend to build small, concrete systems to test assumptions. That approach has served me well in previous 0→1, data-heavy products, where progress came from tightening feedback loops rather than perfect planning.</p>
          <p>If I were to take this further, the next step would be to let the system learn from outcomes - which listings actually convert, which constraints matter most by city, and how landlord response times affect ranking. Those feedback loops are where this kind of system becomes truly powerful.</p>
          <p>This prototype was never meant to be a finished product. It was a way to think clearly about a broken process and explore how intent-driven systems could meaningfully reduce time-to-rent. For me, it’s a good example of how building something tangible can lead to better conversations and better decisions than abstract problem statements ever could.</p>
        </section>
      </div>
    </div>
  );
}