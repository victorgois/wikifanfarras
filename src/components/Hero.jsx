import { useEffect, useState } from 'react';
import logoIcon from '../assets/logo-icon.png';
import { RAINBOW, PROPOSAL_URL, WORKSHOPS } from '../data/content';
import './Hero.css';

function nextWorkshop() {
  const now = new Date();
  const upcoming = WORKSHOPS.find((w) => new Date(w.date) >= now);
  return upcoming ?? WORKSHOPS[WORKSHOPS.length - 1];
}

function countdownLabel(workshop) {
  const diff = Math.ceil((new Date(workshop.date) - new Date()) / 86400000);
  if (diff > 1) return `faltam ${diff} dias`;
  if (diff === 1) return 'é amanhã';
  if (diff === 0) return 'é hoje';
  return 'já aconteceu';
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

const CONFETTI_COUNT = 26;

const CONFETTI = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
  left: `${randomBetween(2, 96).toFixed(1)}%`,
  top: `${randomBetween(4, 90).toFixed(1)}%`,
  size: `${randomBetween(6, 14).toFixed(1)}px`,
  radius: Math.random() > 0.5 ? '50%' : '2px',
  delay: `${randomBetween(0, 5).toFixed(2)}s`,
  duration: `${randomBetween(4.5, 10).toFixed(2)}s`,
  drift: `${randomBetween(-46, 46).toFixed(0)}px`,
  rotate: `${randomBetween(200, 620).toFixed(0)}deg`,
  color: RAINBOW[i % RAINBOW.length],
}));

export default function Hero() {
  const [workshop, setWorkshop] = useState(nextWorkshop());
  const [label, setLabel] = useState(countdownLabel(workshop));

  useEffect(() => {
    const id = setInterval(() => {
      const w = nextWorkshop();
      setWorkshop(w);
      setLabel(countdownLabel(w));
    }, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="confetti" aria-hidden="true">
        {CONFETTI.map((c, i) => (
          <span
            key={i}
            style={{
              left: c.left,
              top: c.top,
              width: c.size,
              height: c.size,
              borderRadius: c.radius,
              background: c.color,
              animationDelay: c.delay,
              animationDuration: c.duration,
              '--drift': c.drift,
              '--rotate': c.rotate,
            }}
          />
        ))}
      </div>
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Wiki Apoia 2026 · Belo Horizonte</p>
          <h1>
            A FANFARRA
            <br />
            ENTRA NA <em>WIKIPÉDIA</em>
          </h1>
          <p className="hero-sub">
            Belo Horizonte tem dezenas de bandas de fanfarra tocando nas ruas há mais de uma década — e quase
            nenhuma linha escrita sobre elas na maior enciclopédia do mundo.{' '}
            <strong>
              Três oficinas práticas de edição da Wikipédia e do Commons — duas online e uma presencial — feitas com
              e para quem toca.
            </strong>
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={PROPOSAL_URL} target="_blank" rel="noopener">
              Ler a proposta completa ↗
            </a>
            <a className="btn btn-ghost" href="#participar">
              Como participar
            </a>
          </div>
          <p className="date-chip">
            {workshop.label} · <b>{workshop.short}</b> — {label}
          </p>
        </div>
        <div className="hero-badge">
          <img src={logoIcon} alt="Logo do Wikifanfarras: um trompete e um trombone cruzados sobre uma caixa e um surdo, dentro de um redemoinho colorido em formato de globo" />
        </div>
      </div>
    </section>
  );
}
