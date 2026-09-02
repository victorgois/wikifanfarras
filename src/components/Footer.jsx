import logoMark from '../assets/logo-mark.png';
import { PROPOSAL_URL } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand-block">
            <img src={logoMark} alt="Logo do Wikifanfarras" width="56" height="56" />
            <div>
              <p>
                Proposta por Victor Góis Pacheco (VGois) · Belo Horizonte, MG · aceita em 28/08/2026 no Wiki Apoia
                2026.
              </p>
              <p>
                Site não-oficial e independente do projeto. Não é um produto ou serviço da Wikimedia Foundation.
              </p>
            </div>
          </div>
          <div className="foot-links">
            <a href={PROPOSAL_URL} target="_blank" rel="noopener">
              Proposta no Meta-Wiki ↗
            </a>
            <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">
              Wikimedia Commons ↗
            </a>
            <a href="https://pt.wikipedia.org/" target="_blank" rel="noopener">
              Wikipédia em português ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
