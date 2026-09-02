import useReveal from '../hooks/useReveal';
import { SETLIST, RAINBOW } from '../data/content';
import './Repertoire.css';

export default function Repertoire() {
  const [ref, visible] = useReveal();
  return (
    <section id="repertorio">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">O repertório</p>
          <h2>Cinco faixas, um objetivo comum</h2>
          <p className="lede">O que a oficina se propõe a tocar, do início ao fim.</p>
        </div>
        <ol ref={ref} className={`setlist reveal ${visible ? 'in' : ''}`}>
          {SETLIST.map((item, i) => (
            <li key={item.track} style={{ '--dot': RAINBOW[i % RAINBOW.length] }}>
              <span className="track">{item.track}</span>
              <p>
                <strong>{item.title}</strong>
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
