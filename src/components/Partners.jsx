import useReveal from '../hooks/useReveal';
import { PARTNERS, RAINBOW } from '../data/content';
import './Partners.css';

export default function Partners() {
  const [ref, visible] = useReveal();
  return (
    <section id="parceiros">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Parceiros</p>
          <h2>Bandas que abriram a roda</h2>
          <p className="lede">
            Fanfarras de Belo Horizonte que já topraram tocar junto com o projeto desde a proposta.
          </p>
        </div>
        <div ref={ref} className={`partner-row reveal ${visible ? 'in' : ''}`}>
          {PARTNERS.map((p, i) => (
            <div className="partner" key={p}>
              <i style={{ background: RAINBOW[i % RAINBOW.length] }}></i>
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
