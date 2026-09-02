import useReveal from '../hooks/useReveal';
import { GALLERY, GALLERY_LICENSE_URL } from '../data/content';
import './Gallery.css';

export default function Gallery() {
  const [ref, visible] = useReveal();
  return (
    <section id="acervo">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Acervo livre</p>
          <h2>O tipo de registro que a oficina quer multiplicar</h2>
          <p className="lede">
            Fotos de fanfarras já publicadas no Wikimedia Commons sob licença livre — feitas no Festival HONK! SP
            2025, um encontro de bandas ativistas em São Paulo. É esse tipo de acervo, aberto e reutilizável, que a
            oficina pretende produzir para as fanfarras de Belo Horizonte.
          </p>
        </div>
        <div ref={ref} className={`gallery-grid reveal ${visible ? 'in' : ''}`}>
          {GALLERY.map((photo) => (
            <figure className="gallery-item" key={photo.commonsUrl}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>
                Foto:{' '}
                <a href={photo.commonsUrl} target="_blank" rel="noopener">
                  {photo.author}
                </a>{' '}
                / Wikimedia Commons,{' '}
                <a href={GALLERY_LICENSE_URL} target="_blank" rel="noopener license">
                  CC BY-SA 4.0
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
