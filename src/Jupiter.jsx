import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Jupiter.css';

export default function Jupiter() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.background = '#f9fafb';
    return () => { document.body.style.background = '#dbe2eb'; };
  }, []);

  return (
    <div className="jupiter-wrapper">
      <div className="container">
        <Link className="back" to="/portfolio">← Back</Link>

        <h1 className="animate-entry delay-1">Jupiter — Gamification PRD</h1>

        <section className="hero animate-entry delay-2" aria-hidden="false">
          <img src="/portfolio/jupiter/images/hero.png" 
               alt="Jupiter hero" 
               fetchPriority="high"
               decoding="async"
               onError={(e) => { e.target.onerror = null; e.target.src = '/portfolio/jupiter/images/image1.png'; }} />
        </section>

        <section className="animate-entry delay-3">
          <h2>1. Strategic Context</h2>
          <p>Jupiter’s long-term strategic moat cannot be built on payments, which are fully commoditised, nor on banking rails, which are standardised. The real moat lies in habit formation: creating a financial behaviour ecosystem where users repeatedly return, not because they must, but because the system makes managing money feel rewarding, clarifying, and emotionally reinforcing.</p>
          <p>Budgeting should be that anchor habit, but current user behaviour demonstrates the opposite pattern: strong initial intent → rapid decay → long-term disengagement.</p>
          <p>This drop-off is not unique to Jupiter; it is a well-documented behaviour gap across global fintech products: people want to “be better with money,” but the cognitive load of tracking expenses, interpreting data, and making weekly adjustments is high. What Jupiter lacks is not data, but a behaviour-shaping layer that transforms information into meaning, meaning into action, and action into sustained habit.</p>
          <p>If Jupiter can turn budgeting into a weekly ritual, it unlocks a multi-year LTV flywheel.</p>
          <ul>
            <li>Monitor spending → reduce bad behaviours</li>
            <li>Build savings → increase deposits</li>
            <li>Form trust → adopt pots, UPI++, card features</li>
            <li>Become credit eligible → open lending opportunities</li>
            <li>Engage weekly → deepen retention loops</li>
          </ul>
          <p>The proposed Gamification Layer enables this by aligning product mechanics with human behavioural architecture.</p>
        </section>

        <hr className="sep animate-entry delay-4" />

        <section className="animate-entry delay-4">
          <h2>2. Problem Statement - The Behavioural Gap</h2>
          <p>The problem is not that users “don’t budget.” The problem is that Jupiter’s current structure asks users to do the hard part of budgeting—interpretation and discipline—without providing the emotional scaffolding required to sustain it.</p>
          <h3>2.1 Cognitive Interpretation Gap</h3>
          <p>Users do not struggle with numbers; they struggle with meaning. A category total of ₹3,450 is inert information. A contextual insight like “up 44% vs last week” is a narrative. Narratives activate the brain’s pattern-detection systems. Numbers activate working memory, which fatigues quickly. This is why current Insights underperform: they are accurate but meaningless without interpretation.</p>
          <h3>2.2 Motivation Gap</h3>
          <p>Discipline has no immediate reward; indulgence does. Ordering a meal = instant dopamine. Staying within budget = no visible reward. Unless the system creates micro-reward loops, intention always loses to temptation.</p>
          <h3>2.3 Action Gap</h3>
          <p>Even when meaning is clear, action is not. “Your food spending increased” is merely information. “Set a ₹2,500 weekly food budget?” is an actionable trigger. Without reducing the number of decisions required, users default to avoidance.</p>
          <h3>2.4 Feedback Loop Gap</h3>
          <p>Humans build habits through tight feedback loops. Jupiter’s budgeting currently provides:</p>
          <ul>
            <li>No weekly closure</li>
            <li>No emotional reinforcement</li>
            <li>No visible progress</li>
            <li>No comparative context</li>
          </ul>
          <p>The user is left floating in ambiguity. To correct behaviour, the system must provide fast, emotionally salient, and identity-building feedback.</p>
        </section>

        <hr className="sep animate-entry delay-4" />

        <section className="animate-entry delay-4">
          <h2>3. Product Vision</h2>
          <p>Build a behaviour-shaping financial layer that translates raw spending into emotionally resonant insights, action-ready triggers, and weekly progress loops - enabling young Indians to internalize financial discipline as part of their identity.</p>
          <p>This is not “gamification” in the entertainment sense. This is behavioural infrastructure, similar to what Duolingo did for learning or Strava did for fitness.</p>
        </section>

        <hr className="sep animate-entry delay-4" />

        <section className="animate-entry delay-4">
          <h2>4. Proposed Solution - The Behaviour Architecture</h2>
          <p>The solution consists of four interlocking systems, each reinforcing the others. Each is described deeply but clearly, ensuring the narrative remains digestible.</p>
          <h3>4.1 Insight Reframing Layer</h3>
          <p>The first step in behaviour change is comprehension, not action. We replace passive category totals with interpretive insights: Week-over-week changes, Percentage deltas, Contextual interpretation, Spend anomalies, Behaviour-based micro-narratives.</p>
          <p>Example: “You spent 44% more on Food this week - likely due to two Swiggy orders on Friday. If you repeat this pattern, you’ll overshoot next week’s food budget by ₹600.”</p>
          <p>This approach converts numeric data into stories the user can act on, reduces cognitive load by shifting interpretation from user → product, and builds emotional salience by highlighting implications, not just numbers.</p>
          <h3>4.2 Weekly Budget Challenge Engine</h3>
          <p>Instead of asking users to “create a budget,” which feels heavy, we offer a pre-framed prompt: “Set a Food challenge for next week? Recommended budget: ₹2,500.” The user makes a single binary decision: yes or no.</p>
          <p>Once activated, the challenge becomes a weekly behavioural loop: Budget limit, Real-time tracking, Smart nudges at 70% and 100%, Win/Loss evaluation every Sunday, Automatic reset prompt. Important: Win or lose, the user should feel safe returning.</p>
          <h3>4.3 Social Benchmarking Layer</h3>
          <p>People are more motivated by relative progress than absolute metrics. However, competitive ranking can be demotivating if not designed carefully. We use soft benchmarking: Percentile bands, City-level comparison, “Among users with similar budgets” framing — never showing “you are worse than X%”.</p>
          <p>Example: “You’re in the top 30% of Food budgeters in Bengaluru this week.”</p>
          <h3>4.4 Emotional Feedback Layer</h3>
          <p>Humans repeat behaviours that generate emotional closure. This layer uses confetti micro-interactions, haptic taps, expressive emojis, warm conversational tone, and weekly progress cards. Even small wins matter: “You stayed within budget despite a higher spend on Saturday - impressive discipline!”</p>
          <div className="figure" aria-hidden="false">
            <img src="/portfolio/jupiter/images/image1.png" alt="Challenge mockup (image1)" loading="lazy" decoding="async" />
          </div>
          <figcaption>Mockup: Weekly challenge UI.</figcaption>
        </section>

        <hr className="sep animate-entry delay-4" />

        <section className="animate-entry delay-4">
          <h2>Wireframe</h2>
          <div className="figure">
            <img src="/portfolio/jupiter/images/image2.png" alt="Wireframe (image2)" loading="lazy" decoding="async" />
          </div>
          <figcaption>Wireframe for the Gamification layer.</figcaption>
        </section>

        <hr className="sep animate-entry delay-4" />

        <section className="animate-entry delay-4">
          <h2>5. Technical Architecture</h2>
          <h3>5.1 Key Services</h3>
          <p>Insights Service: data ingestion → categorisation → weekly delta computation</p>
          <p>Budget Engine: challenge state machine; threshold computation</p>
          <p>Nudge Engine: dynamic triggers; rate limiting; user preference filters</p>
          <p>Ranking Engine: city segmentation; percentile computation; Z-score clustering</p>
          <p>Report Card Service: weekly aggregation; narrative generation</p>
          <h3>5.2 Data Requirements</h3>
          <p>Highly accurate categorisation (≥90% automated, manual override allowed)</p>
          <p>Transaction streaming via ledger service</p>
          <p>Weekly time-window aggregation</p>
          <p>Real-time nudge eligibility computation</p>
          <h3>5.3 System Goals</h3>
          <p>Low latency (&lt;200ms) for dashboard load</p>
          <p>State consistency for challenges (idempotent writes)</p>
          <p>High reliability for weekly evaluation (cron + queue backup)</p>
        </section>

        <hr className="sep animate-entry delay-4" />

        <section className="animate-entry delay-4">
          <h2>6. Measurement Framework</h2>
          <ul>
            <li>Awareness: Users who view Insights weekly → indicates meaningful narrative pull.</li>
            <li>Activation: Users who set challenges → indicates intent crystallisation.</li>
            <li>Engagement: Users who return midweek to track → indicates ongoing self-regulation behaviour.</li>
            <li>Behavioural Outcome: Reduction in category overspend → indicates real improvement, not vanity metrics.</li>
            <li>Retention: Users who complete 4+ weekly cycles → indicates habit formation.</li>
          </ul>
          <p>We measure causally: Does viewing insights → increase challenge adoption? Does challenge adoption → reduce overspend? Does reduced overspend → increase NPS or retention?</p>
        </section>

        <hr className="sep animate-entry delay-4" />

        <section className="animate-entry delay-4">
          <h2>7. Risks & Tradeoffs</h2>
          <p>Risk: Over-Nudging → Fatigue. Mitigation: 2/week limit, personalised nudge timing.</p>
          <p>Risk: Benchmarking → Shame. Mitigation: strictly positive framing; percentile bands only.</p>
          <p>Risk: Categorisation Errors → Distrust. Mitigation: manual edit flows; reinforced ML correction; recategorisation awareness alerts.</p>
          <p>Risk: Emotional Overload → Infantilisation. Mitigation: neutral colours, mature tone, controlled animation usage.</p>
          <p>Tradeoff: Personalisation Depth vs Cognitive Simplicity. We choose simplicity-first for V1 to build habit before complexity.</p>
        </section>

        <hr className="sep animate-entry delay-4" />

        <section className="animate-entry delay-4">
          <h2>8. Rollout Plan</h2>
          <p>Internal Dogfood: Validate tone, emotionality, narrative coherence</p>
          <p>Bangalore Android (40%): High UPI density + budget usage</p>
          <p>Mumbai Android (40%): Behavioural validation across another metro</p>
          <p>iOS Rollout: Users tend to be older → checks cross-cohort behavioural variance</p>
          <p>Pan-India: Scale after validating habit loops</p>
          <p>V2 Enhancements: Streaks, difficulty adjustment, cross-category challenges</p>
        </section>
      </div>
    </div>
  );
}