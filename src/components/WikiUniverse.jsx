import useReveal from '../hooks/useReveal';
import { WIKI_PROJECTS, RAINBOW } from '../data/content';
import './WikiUniverse.css';

const ROTATIONS = [-2, 1.6, -1.2, 2];

export default function WikiUniverse() {
  const [ref, visible] = useReveal();
  return (
    <section id="universo-wiki">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Para quem está chegando agora</p>
          <h2>Um mapa rápido do universo wiki</h2>
          <p className="lede">
            "Wiki" não é sinônimo de Wikipédia — é um movimento inteiro, com vários projetos irmãos. Estes são os que
            a oficina usa na prática.
          </p>
        </div>
        <div ref={ref} className={`wiki-grid reveal ${visible ? 'in' : ''}`}>
          {WIKI_PROJECTS.map((p, i) => (
            <div
              className="wiki-card"
              key={p.name}
              style={{ '--accent': RAINBOW[i % RAINBOW.length], '--rot': `${ROTATIONS[i % ROTATIONS.length]}deg` }}
            >
              <img className="wiki-logo" src={p.logo} alt={`Logo: ${p.name}`} loading="lazy" />
              <p className="wiki-tag">{p.tag}</p>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
