import { useEffect } from 'react';
import './Principles.css';

export default function Principles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      title: "Bias toward shipping.",
      text: "If something can be shared in a week, don’t let it sit for a month. Small shipped projects beat big unfinished ideas."
    },
    {
      title: "Start from the user, not the feature.",
      text: "Understand the person - their pain, workflow, and constraints - before designing product or recommending investments."
    },
    {
      title: "Write to think.",
      text: "When confused, write. Clear writing forces clearer thinking and better decisions."
    },
    {
      title: "Long-term games, long-term people.",
      text: "Careers compound. Prefer collaborators you can imagine working with for a decade."
    },
    {
      title: "Data-informed, not data-paralysed.",
      text: "Numbers should sharpen judgement, not replace it; use qualitative feedback when sample sizes are small."
    }
  ];

  return (
    <div className="principles-wrapper">
      <div className="page-title">Principles</div>

      <ul>
        {principles.map((principle, index) => (
          <li 
            key={index} 
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div>
              <strong>{principle.title}</strong>
              <p>{principle.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}