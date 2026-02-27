import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Mymind.css';

export default function Mymind() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.background = '#ffffff'; // Pure white
    return () => { document.body.style.background = '#dbe2eb'; };
  }, []);

  return (
    <div className="mymind-wrapper">
      <div className="container">
        <Link className="back" to="/portfolio">← Back</Link>

        <div className="animate-entry delay-1">
          <h1>My Favourite Product: mymind</h1>
          <div className="meta-line">Product Review · Design · Knowledge Management</div>
        </div>

        <img className="hero animate-entry delay-2" 
             src="/portfolio/mymind/images/hero.png" 
             alt="mymind interface" 
             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x675/e65100/ffffff.png?text=mymind+Interface'; }} />

        <section className="animate-entry delay-3">
          <p>If I had to pick one product that truly changed the way I think, create, and organise my life, it would be <strong>mymind</strong>.</p>
          <p>I use it constantly, and over time it has become more than just a tool - it’s a quiet space where I store ideas, inspiration, and thoughts without any pressure to organise them. Most tools demand attention. mymind, on the other hand, gives me peace.</p>
        </section>

        <section className="animate-entry delay-4">
          <h2>Why mymind feels different to me</h2>
          <p>Every productivity or note-taking app I’ve tried eventually becomes another system I need to maintain—naming files, managing folders, fixing tags, reorganising things when it all gets messy.</p>
          <p>mymind is the first product that removed that burden completely. I can save anything—an interesting article, a quote, an image that sparks an idea—and walk away.</p>
          <p>The product takes care of everything behind the scenes. No structure, no rules, no dashboards. Just my mind, exactly as it is. That’s the part that hooked me. It doesn’t ask me to think more; it lets me think less.</p>

          <h2>A design philosophy I deeply admire</h2>
          <p>The interface is so intentionally simple that it almost forces focus. There is nothing extra. No clutter, no unnecessary menus, no complex features competing for attention.</p>
          <p>It feels like stepping into a clean room where my thoughts have space to breathe. I love products that show restraint, and mymind is built on that principle. Every element feels considered. It’s minimal without being empty, and functional without being loud.</p>

          <h2>Intelligence that quietly works for me</h2>
          <p>What I also appreciate is how smart it is without ever feeling “techy.” mymind recognises objects in images, enriches links, extracts text, and makes everything searchable, automatically.</p>
          <p>There’s no setup. No onboarding guide. No expectations from me. It just works. It’s the kind of invisible intelligence I believe more products should aim for—powerful, but completely unobtrusive.</p>

          <h2>It’s a product that understands emotion</h2>
          <p>Beyond the functionality, mymind has a certain calmness to it. The design, the tone, the colours—all of it creates a sense of personal space. It doesn’t feel like a work tool; it feels like a place where my ideas can live without judgment.</p>
          <p>This taught me something important: <strong>Great products don’t just solve problems—they change how you feel</strong>. That emotional layer matters, and mymind embraces it beautifully.</p>

          <h2>A bold choice in a world chasing collaboration</h2>
          <p>What I respect the most is that mymind is unapologetically personal. It’s not trying to be a team workspace. It’s not trying to replace Slack or Notion. It knows exactly who it’s for—people who want a private thinking tool.</p>
          <p>There are no social app elements incorporated into this peaceful app. That clarity of purpose is rare, and it’s something I aspire to bring into my own product work.</p>

          <h2>How mymind has shaped the way I think about products</h2>
          <p>Using mymind has influenced my product philosophy in many ways:</p>
          <ul>
            <li>Keep complexity out of the user’s way.</li>
            <li>Don’t overbuild—restrained products often become the strongest.</li>
            <li>Focus on solving the emotional and cognitive problems, not just the functional ones.</li>
            <li>Build with a point of view and stick to it.</li>
            <li>Create an experience that feels effortless.</li>
          </ul>
          
          <blockquote>
            To me, mymind is a reminder that the best products disappear into your life—they don’t demand attention, they quietly enhance it.
          </blockquote>

          <p>It’s a product I genuinely love, and one that continues to inspire how I think about building meaningful, human-centric tools.</p>
        </section>
      </div>
    </div>
  );
}