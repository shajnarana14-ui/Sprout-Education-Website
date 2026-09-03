import { Link } from 'react-router-dom';
import { Icon } from './Icons';
const items = [
  ['01','Expert Counseling','Get clear, one-on-one guidance based on your goals, profile and preferred future.'],
  ['02','Application Support','Move from shortlist to submission with accurate applications and careful document review.'],
  ['03','Visa Preparation','Prepare a confident visa application with financial guidance and interview practice.'],
  ['04','Test Preparation','Build your IELTS, PTE or TOEFL score with structured training and expert feedback.'],
];
export default function Services(){return <section className="section services" id="services"><div className="container"><div className="section-heading centered"><span className="section-kicker light">How we help</span><h2>Support that moves you <em>forward</em></h2><p>From your first question to your flight, we keep every step clear and manageable.</p></div><div className="service-grid">{items.map(([n,t,d])=><article className="service-card" key={t}><span className="service-number">{n}</span><div className="service-icon">{n==='01'?'◎':n==='02'?'▤':n==='03'?'◇':'✎'}</div><h3>{t}</h3><p>{d}</p><Link to="/contact" aria-label={`Learn about ${t}`}>Learn more <Icon name="arrow" size={17}/></Link></article>)}</div></div></section>}
