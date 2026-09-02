import useReveal from '../hooks/useReveal';

export default function About() {
  const [ref, visible] = useReveal();
  return (
    <section id="projeto">
      <div className="wrap">
        <div ref={ref} className={`section-head reveal ${visible ? 'in' : ''}`}>
          <p className="eyebrow">O projeto</p>
          <h2>Documentar quem sempre tocou, mas nunca foi escrito</h2>
          <p className="lede">
            O projeto capacita integrantes de fanfarras carnavalescas de Belo Horizonte a{' '}
            <strong>editar a Wikipédia</strong> e <strong>carregar conteúdo no Wikimedia Commons</strong>. Essas
            manifestações culturais — compostas majoritariamente por pessoas negras e de classes trabalhadoras —
            seguem praticamente invisíveis nos projetos Wikimedia. A iniciativa documenta grupos surgidos depois de
            2010 e bandas que resistiram, ou nasceram, durante a pandemia de covid-19.
          </p>
          <div className="callout">
            <b>Para quem é:</b> integrantes de fanfarras, foliões, pesquisadores de cultura popular e wikimidianos
            locais — com atenção especial a comunidades periféricas, negras e LGBTQIAPN+.
          </div>
        </div>
      </div>
    </section>
  );
}
