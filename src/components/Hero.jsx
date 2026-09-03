import { Link } from 'react-router-dom';
import { Icon } from './Icons';

const services = ['Study Abroad', 'Career Counselling', 'Visa Assistance', 'Admission Guidance', 'Partnership Visa'];
export default function Hero() {
  return <section className="hero">
    <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
    <div className="container hero-grid">
      <div className="hero-copy">
        <span className="eyebrow"><span>✦</span> Nepal’s trusted study abroad partner</span>
        <h1>Your success journey <em>starts with us</em></h1>
        <p>Sprout Education Consultancy, From university selection to visa approval, we simplify your path to studying in the UK, USA, Canada and beyond.</p>
        <div className="hero-buttons"><Link className="btn btn-primary" to="/contact">Study abroad cost calculator <Icon name="arrow"/></Link><Link className="btn btn-outline" to="/contact">Scholarship eligibility test</Link></div>
        <div className="trust-row"><div className="student-stack"><span>AS</span><span>PA</span><span>RK</span><b>+</b></div><p><strong>1,000+ students</strong><br/>guided toward global education</p></div>
      </div>
      <div className="hero-visual" aria-label="Three step study abroad journey">
        <div className="flag-tags"><span>🇬🇧 <b>UK</b></span><span>🇺🇸 <b>USA</b></span><span>🇨🇦 <b>CANADA</b></span></div>
        <div className="visual-card">
          <div className="card-glow"/>
          <div className="visual-top"><div><small>SPROUT PATHWAY</small><span>Your roadmap abroad</span></div><b><i/> On track</b></div>
          <div className="route-wrap">
            <div className="journey-line"><i/><i/><i/><span className="route-plane">✈</span></div>
            <div className="journey-steps">
              <div><span className="milestone-icon">⌂</span><b>Step 01</b><strong>University<br/>Selection</strong></div>
              <div><span className="milestone-icon">★</span><b>Step 02</b><strong>Scholarship<br/>Guidance</strong></div>
              <div><span className="milestone-icon final">✓</span><b>Final Step</b><strong>Visa<br/>Approval</strong></div>
            </div>
          </div>
          <div className="success-card"><span className="success-icon">✓</span><div><small>APPLICATION STATUS</small><strong>Ready for your next chapter</strong></div><span className="status-arrow">↗</span></div>
          <div className="ticket-stub"><small>DESTINATION</small><strong>YOUR FUTURE</strong><span>SPR ✦ 2026</span></div>
        </div>
        <div className="hero-stamp"><span>YOUR FUTURE</span><strong>✈</strong><span>STARTS HERE</span></div>
      </div>
    </div>
    <div className="container quick-select"><div><span className="pulse"/><strong>What Service Are You Looking For?</strong></div><div className="quick-links">{services.map((s,i) => <Link to="/contact" key={s}><span>{['◎','◇','✈','▤','♡'][i]}</span>{s}</Link>)}</div></div>
  </section>;
}
