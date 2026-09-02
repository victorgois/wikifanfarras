// Ícones em traço único (currentColor), simplificados ao essencial para
// continuar legíveis no tamanho minúsculo em que aparecem na RainbowRule.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Trompete() {
  return (
    <svg {...base}>
      <path d="M2 12h5" />
      <rect x="7" y="9" width="3.4" height="6" rx="0.6" />
      <path d="M10.4 9.6 20 6v12l-9.6-3.6z" />
    </svg>
  );
}

function Xequere() {
  return (
    <svg {...base}>
      <path d="M10.6 3.2h2.8v4.6h-2.8z" />
      <circle cx="12" cy="14.6" r="6.4" />
      <circle cx="9.4" cy="12.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="12.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Sax() {
  return (
    <svg {...base}>
      <path d="M8.2 3 10.6 5.6" />
      <path d="M11 5.8c4 2 5.4 6.2 3.2 9.4" />
      <path d="M13.6 15.6 11 17.4" />
      <circle cx="9.4" cy="18" r="2.3" />
    </svg>
  );
}

function Caixa() {
  return (
    <svg {...base}>
      <ellipse cx="12" cy="10" rx="7" ry="2.3" />
      <ellipse cx="12" cy="16.4" rx="7" ry="2.3" />
      <path d="M5 10v6.4M19 10v6.4" />
      <path d="M7.6 5.4 12 9.4M16.4 5.4 12 9.4" />
    </svg>
  );
}

function Trombone() {
  return (
    <svg {...base}>
      <path d="M1.5 8h5.5v3H4v3h9.5" />
      <path d="M13.5 14 21 11v7l-7.5-2.5z" />
    </svg>
  );
}

function Tambor() {
  return (
    <svg {...base}>
      <ellipse cx="12" cy="7.2" rx="6.6" ry="2" />
      <ellipse cx="12" cy="17.2" rx="6.6" ry="2" />
      <path d="M5.4 7.2v10M18.6 7.2v10" />
    </svg>
  );
}

function Tuba() {
  return (
    <svg {...base}>
      <circle cx="9" cy="15" r="5.3" />
      <path d="M9.6 10.2c2.6-4.6 3-7.2 6.4-7.2" />
      <path d="M15.4 2.4 19.8 4l-1.6 4.2-4.4-1.4z" />
    </svg>
  );
}

function Triangulo() {
  return (
    <svg {...base}>
      <path d="M11.4 3.6 5 17M12.6 3.6 19 17M7.8 17h8.4" />
      <path d="M16 8.4 19.2 5.2" />
    </svg>
  );
}

export const INSTRUMENT_ICONS = [Trompete, Xequere, Sax, Caixa, Trombone, Tambor, Tuba, Triangulo];
