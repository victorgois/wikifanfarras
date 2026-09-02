import logoMark from '../assets/logo-mark.png';
import './Header.css';

const LINKS = [
  { href: '#projeto', label: 'O projeto' },
  { href: '#universo-wiki', label: 'Universo wiki' },
  { href: '#repertorio', label: 'Repertório' },
  { href: '#cronograma', label: 'Cronograma' },
  { href: '#metas', label: 'Metas' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-bar">
        <a className="brand" href="#topo">
          <img src={logoMark} alt="" width="40" height="40" />
          <span>wikifanfarras</span>
        </a>
        <nav className="site-nav">
          {LINKS.map((l) => (
            <a key={l.href} className="nav-full" href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="#participar">
            Participar
          </a>
        </nav>
      </div>
    </header>
  );
}
