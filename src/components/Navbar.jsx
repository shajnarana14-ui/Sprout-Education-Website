import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navGroups } from '../data/siteData';
import { Icon } from './Icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const close = () => { setOpen(false); setExpanded(null); };
  return <header className="site-header">
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="top-contact">
          <a href="tel:+9779712078863"><Icon name="phone" size={15}/> Quick Call</a>
          <a href="https://wa.me/9779712078863" target="_blank" rel="noreferrer"><Icon name="message" size={15}/> Chat with Us</a>
          <a href="mailto:sprouteducationconsultancy@gmail.com"><Icon name="mail" size={15}/> Email Us</a>
        </div>
        <div className="top-actions"><div className="socials" aria-label="Social media links"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="TikTok">♪</a></div><Link to="/contact" className="top-cta">Book a Free Consultation</Link></div>
      </div>
    </div>
    <nav className="navbar" aria-label="Main navigation">
      <div className="container nav-inner">
        <Link to="/" onClick={close} className="brand"><img src="/sprout-logo.png" alt="Sprout Education Consultancy" /></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><Icon name={open ? 'close' : 'menu'} size={26}/></button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navGroups.map(([label, items], index) => <div className={`nav-group ${expanded === index ? 'expanded' : ''}`} key={label}>
            <button onClick={() => setExpanded(expanded === index ? null : index)} aria-expanded={expanded === index}>{label}<Icon name="chevron" size={14}/></button>
            <div className="dropdown">{items.map(item => <Link to={`/explore/${label.toLowerCase().replaceAll(' ', '-')}/${item.toLowerCase().replaceAll(' ', '-')}`} onClick={close} key={item}>{item}</Link>)}</div>
          </div>)}
          <Link to="/explore/information/event" onClick={close}>Event</Link><Link to="/explore/information/blog" onClick={close}>Blog</Link>
          <Link to="/contact" onClick={close} className="nav-mobile-cta">Free Consultation</Link>
        </div>
      </div>
    </nav>
  </header>;
}
