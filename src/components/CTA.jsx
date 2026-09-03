import { Link } from 'react-router-dom';
import { Icon } from './Icons';
export default function CTA(){return <section className="cta-section"><div className="container cta-inner"><div><span className="section-kicker light">Your journey can start today</span><h2>Ready to turn your study abroad dream into a plan?</h2></div><Link to="/contact" className="btn btn-white">Book a Free Consultation <Icon name="arrow"/></Link></div></section>}
