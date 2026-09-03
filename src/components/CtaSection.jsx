import useReveal from '../hooks/useReveal';
import { PROPOSAL_URL, TALK_URL, FORM_URL } from '../data/content';
import './CtaSection.css';

export default function CtaSection() {
  const [ref, visible] = useReveal();
  return (
    <section id="participar">
      <div className="wrap">
        <div ref={ref} className={`cta-card reveal ${visible ? 'in' : ''}`}>
          <div>
            <p className="eyebrow">Participe</p>
            <h2>Toca numa fanfarra de BH? Edita Wikipédia? Tem os dois?</h2>
            <p className="lede">
              A proposta completa no Meta-Wiki tem todos os detalhes de execução, orçamento e como apoiar. Dúvidas e
              ofertas de parceria podem ser deixadas diretamente na página de discussão da proposta.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={FORM_URL} target="_blank" rel="noopener">
              Preencher formulário de participação ↗
            </a>
            <a className="btn btn-ghost" href={PROPOSAL_URL} target="_blank" rel="noopener">
              Ver proposta no Meta-Wiki ↗
            </a>
            <a className="btn btn-ghost" href={TALK_URL} target="_blank" rel="noopener">
              Falar com a proponente ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
