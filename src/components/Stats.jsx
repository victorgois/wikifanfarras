import useReveal from '../hooks/useReveal';
import { STATS, RAINBOW } from '../data/content';
import './Stats.css';

const ROTATIONS = [-2, 1.6, -1.2, 2, -1.6, 1.2];

export default function Stats() {
  const [ref, visible] = useReveal();
  return (
    <section id="metas">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Metas quantitativas</p>
          <h2>O que a oficina pretende deixar registrado</h2>
        </div>
        <div ref={ref} className={`stat-grid reveal ${visible ? 'in' : ''}`}>
          {STATS.map((s, i) => (
            <div
              className="stat"
              key={s.label}
              style={{ '--accent': RAINBOW[i % RAINBOW.length], '--rot': `${ROTATIONS[i % ROTATIONS.length]}deg` }}
            >
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
