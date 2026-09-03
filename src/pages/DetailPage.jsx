import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icons';

const titleCase = value => value.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
const destinations = {
  canada: ['photo-1517935706615-2717063c2225', 'Welcoming campuses, respected qualifications and strong opportunities make Canada a leading choice for Nepalese students.', ['Universities & colleges', 'Scholarships and costs', 'Study permit guidance', 'Post-study opportunities']],
  australia: ['photo-1506973035872-a4ec16b8e8d9', 'Build a globally relevant education in vibrant Australian cities with courses designed for real-world careers.', ['Course and city selection', 'Intake planning', 'Financial documentation', 'Student visa support']],
  uk: ['photo-1513635269975-59663e0ac1ad', 'Earn a respected British qualification through focused programs at historic and innovative universities.', ['One-year master’s options', 'University shortlisting', 'CAS process support', 'Graduate route guidance']],
  usa: ['photo-1485738422979-f5c462d49f74', 'Explore flexible programs, world-leading research and extensive campus experiences across the United States.', ['University matching', 'SAT and English tests', 'Scholarship applications', 'F-1 interview preparation']],
  'new-zealand': ['photo-1469521669194-babb45599def', 'Study in a safe, welcoming country known for practical learning, natural beauty and quality education.', ['Institution selection', 'Program eligibility', 'Budget preparation', 'Visa application review']],
  germany: ['photo-1467269204594-9661b134dd2b', 'Access research-led education and strong industry connections in the heart of Europe.', ['Public university guidance', 'Language requirements', 'Blocked account planning', 'Application assistance']],
  denmark: ['photo-1513622470522-26c3c8a854bc', 'Experience collaborative, innovative education in one of Europe’s most student-friendly environments.', ['English-taught programs', 'University applications', 'Living-cost planning', 'Residence permit help']],
  france: ['photo-1502602898657-3e91760cbb34', 'Combine internationally recognized study with culture, innovation and diverse career opportunities.', ['Program discovery', 'Campus France guidance', 'Scholarship support', 'Visa documentation']],
  'south-korea': ['photo-1538485399081-7c8971c3e0a5', 'Join a technology-driven education system with dynamic campuses and exciting cultural experiences.', ['University matching', 'Scholarship guidance', 'Language preparation', 'Student visa support']],
};
const servicePhotos = {
  'abroad-study-preparation': 'photo-1523240795612-9a054b0db644', counseling: 'photo-1521737711867-e3b97375f902',
  documentation: 'photo-1450101499163-c8848c66ca85', 'skill-development-for-job-placement': 'photo-1551836022-d5d88e9218df',
  'visa-preparation': 'photo-1436491865332-7a61a109cc05', 'pre-departure-checklist': 'photo-1434394354979-a235cd36269d',
  ielts: 'photo-1456513080510-7bf3a84b82f8', pte: 'photo-1434030216411-0b793f4b4173', toefl: 'photo-1427504494785-3a9ca7044f45',
  blog: 'photo-1499750310107-5fef28a66643', event: 'photo-1540575467063-178a50c2df87',
};
const defaults = {
  services: ['Student support', 'Get focused, one-on-one support from experienced counselors who keep your study-abroad process clear and organized.', ['Personal consultation', 'A tailored action plan', 'Careful application review', 'Support until completion']],
  'test-preparation': ['Test preparation', 'Build your target English score with structured lessons, practical exercises and useful instructor feedback.', ['Diagnostic assessment', 'Focused skill lessons', 'Mock examinations', 'Progress feedback']],
  scholarship: ['Scholarship guidance', 'Discover funding opportunities for your chosen destination and prepare a strong, timely application.', ['Profile evaluation', 'Opportunity shortlisting', 'Essay and document review', 'Deadline management']],
  information: ['Sprout Education', 'Discover useful updates, student events and practical information for your international education journey.', ['Current guidance', 'Expert insights', 'Student resources', 'Counselor assistance']],
};
const imageUrl = id => 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=1400&q=85';

export default function DetailPage() {
  const { category, slug } = useParams();
  const title = titleCase(slug);
  const destination = destinations[slug];
  const fallback = defaults[category] || defaults.information;
  const isBlog = slug === 'blog';
  const isEvent = slug === 'event';
  const kicker = destination ? (category === 'scholarship' ? 'Scholarship opportunities' : 'Study destination') : fallback[0];
  const intro = destination ? destination[1] : isBlog ? 'Ideas, updates and practical guides created to help Nepalese students make confident study-abroad decisions.' : isEvent ? 'Meet counselors, university representatives and fellow students at upcoming Sprout Education information sessions.' : fallback[1];
  const points = destination ? destination[2] : fallback[2];
  const photo = destination?.[0] || servicePhotos[slug] || 'photo-1523050854058-8df90110c9f1';
  return <section className={'detail-page detail-' + category}>
    <div className="detail-hero"><div className="container detail-hero-grid">
      <div><span className="section-kicker light">{kicker}</span><h1>{title}</h1><p>{intro}</p><div className="detail-actions"><Link to="/contact" className="btn btn-primary">Book a Free Consultation <Icon name="arrow" /></Link><Link to="/" className="btn detail-back">← Back to Home</Link></div></div>
      <div className="detail-photo"><img src={imageUrl(photo)} alt={title + ' information'} /><span>{category === 'scholarship' ? 'Scholarship opportunities' : title}</span></div>
    </div></div>
    <div className="container detail-content"><div><span className="section-kicker">{isBlog ? 'Featured guidance' : isEvent ? 'What to expect' : 'How Sprout helps'}</span><h2>{isBlog ? 'Useful insights for your next move' : isEvent ? 'Connect, learn and plan ahead' : <>Make your next step with <em>confidence</em></>}</h2><p>{isBlog ? 'Explore guidance on applications, costs, visas and international student life. Our articles turn complicated topics into practical next steps.' : isEvent ? 'Our events give students and families direct access to reliable information, personal counseling and answers about applications and visas.' : 'Our experienced team makes the process clear and manageable. We begin by understanding your goals, then guide you with honest recommendations and careful preparation.'}</p></div><div className="detail-list">{points.map((point, index) => <div key={point}><span>0{index + 1}</span><strong>{point}</strong><Icon name="check" /></div>)}</div></div>
    {(isBlog || isEvent) && <div className="container detail-feature"><img src={imageUrl(isBlog ? 'photo-1523240795612-9a054b0db644' : 'photo-1524178232363-1fb2b075b655')} alt="" /><div><span className="section-kicker">{isBlog ? 'Latest from Sprout' : 'Student information sessions'}</span><h2>{isBlog ? 'Plan with better information' : 'Your questions, answered in person'}</h2><p>{isBlog ? 'Read practical guides about choosing destinations, calculating costs, preparing documents and building a strong application.' : 'Event schedules and registration details will be published here. Contact our team now to learn about the next available session.'}</p><Link to="/contact" className="btn btn-dark">{isBlog ? 'Ask a Counselor' : 'Register Your Interest'} <Icon name="arrow" /></Link></div></div>}
  </section>;
}
