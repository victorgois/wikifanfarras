import { RAINBOW } from '../data/content';
import { INSTRUMENT_ICONS } from './instrumentIcons';
import './RainbowRule.css';

// Cada instrumento usa uma cor fixa da roda da logo, na mesma ordem — a
// sequência dos 8 se repete até preencher toda a largura do elemento pai.
const COLORS = RAINBOW.slice(0, INSTRUMENT_ICONS.length);

// Repetições suficientes para cobrir telas bem largas; o CSS corta o excesso.
const REPEATS = 20;

export default function RainbowRule() {
  const items = Array.from({ length: INSTRUMENT_ICONS.length * REPEATS }, (_, i) => i % INSTRUMENT_ICONS.length);
  return (
    <div className="rainbow-rule" aria-hidden="true">
      {items.map((idx, i) => {
        const Icon = INSTRUMENT_ICONS[idx];
        return (
          <span key={i} style={{ color: COLORS[idx] }}>
            <Icon />
          </span>
        );
      })}
    </div>
  );
}
