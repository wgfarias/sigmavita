import "./SectionContact.css";

const WHATSAPP_URL =
  "https://wa.me/5561996994099?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";
const PHONE = "(61) 99699-4099";
const ADDRESS = "Centro Médico Julio Adnet, Asa Sul, Brasília/DF";
const MAPS_URL =
  "https://maps.google.com/?q=Centro+Médico+Julio+Adnet+Asa+Sul+Brasília";
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Centro+Médico+Julio+Adnet+Asa+Sul+Brasília&output=embed";

export default function SectionContact() {
  return (
    <section id="contato" className="section-contact section">
      <div className="section__inner">
      <span className="eyebrow">Fale conosco</span>
      <h2 className="section-title">
        <strong>Contato</strong>
      </h2>
      <div className="section-contact__grid">
        <div className="section-contact__info">
          <div className="contact-block">
            <h3 className="contact-block__label">Onde estamos</h3>
            <p className="contact-block__value">{ADDRESS}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-block__link"
            >
              Como chegar
            </a>
          </div>
          <div className="contact-block">
            <h3 className="contact-block__label">Telefone / WhatsApp</h3>
            <p className="contact-block__value">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {PHONE}
              </a>
            </p>
            <p className="contact-block__hint">
              Agende sua consulta pelo WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            className="btn btn--primary section-contact__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
        <div className="section-contact__map">
          <iframe
            src={MAPS_EMBED_URL}
            title="Localização da Sigmavita - Centro Médico Julio Adnet, Asa Sul, Brasília"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
