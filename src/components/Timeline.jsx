import useReveal from '../hooks/useReveal';
import { TIMELINE } from '../data/content';
import './Timeline.css';

export default function Timeline() {
  const [ref, visible] = useReveal();
  return (
    <section id="cronograma">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Cronograma · 1 a 30 de setembro de 2026</p>
          <h2>Um mês, do mapeamento à editatona</h2>
        </div>
        <div ref={ref} className={`timeline reveal ${visible ? 'in' : ''}`}>
          {TIMELINE.map((item) => (
            <div className={`tl-item ${item.live ? 'is-live' : ''}`} key={item.date + item.title}>
              <p className="tl-date">
                {item.date}
                {item.tag && <span className="live-tag">{item.tag}</span>}
              </p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
