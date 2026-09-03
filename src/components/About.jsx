import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export default function About() {
  const points = ['One-on-one Strategic Counseling','University Selection Support','SOP & Document Guidance','Visa & Interview Preparation','Country Selection Guidance'];
  return <section className="section about" id="about"><div className="container about-grid">
    <div className="about-art"><div className="photo-card"><img loading="lazy" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80" alt="Graduating international students celebrating together"/></div><div className="experience-card"><strong>10+</strong><span>Years of trusted<br/>student guidance</span></div><div className="mini-badge">Global<br/><strong>Opportunities</strong></div></div>
    <div className="about-copy"><span className="section-kicker">About Sprout Education</span><h2>Your Trusted Global <em>Education Consultancy</em></h2><p>We guide students from their academic goals to university approval with clear advice, careful planning and dedicated support. Every journey is personal, so our experienced counselors help you make confident choices at each stage.</p><div className="check-grid">{points.map(p => <div key={p}><span><Icon name="check" size={16}/></span>{p}</div>)}</div><Link to="/contact" className="btn btn-dark">More About Us <Icon name="arrow"/></Link></div>
  </div></section>;
}
