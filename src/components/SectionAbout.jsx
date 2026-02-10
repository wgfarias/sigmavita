import "./SectionAbout.css";

const WHATSAPP_URL =
  "https://wa.me/5561996994099?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";

export default function SectionAbout() {
  return (
    <section id="a-clinica" className="section-about section">
      <span className="eyebrow">A clínica</span>
      <h2 className="section-title">
        <strong>Sigmavita</strong>
      </h2>
      <div className="section-about__layout">
        <div className="section-about__content">
        <p className="section-about__lead">
          A <strong>Sigmavita</strong> é uma clínica médica de alto padrão
          localizada na Asa Sul, em Brasília/DF, no{" "}
          <strong>Centro Médico Julio Adnet</strong>. Oferecemos consultas
          particulares em{" "}
          <strong>Gastroenterologia, Cardiologia e Pneumologia</strong>, com
          foco em atendimento humanizado, tempo dedicado ao paciente e
          excelência médica.
        </p>
        <p className="section-about__text">
          Nossa estrutura é sofisticada e equipada com tecnologia de ponta para
          exames diagnósticos. Na Sigmavita, unimos{" "}
          <strong>medicina moderna</strong>,{" "}
          <strong>cuidado personalizado</strong> e{" "}
          <strong>ambiente premium</strong> para pacientes que buscam qualidade
          superior em saúde.
        </p>
        <a
          href={WHATSAPP_URL}
          className="btn btn--primary section-about__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar consulta
        </a>
        </div>
        <div className="section-about__image-wrap">
          <div
            className="section-about__image-box"
            style={{ backgroundImage: "url(/Consultorio.JPG.jpeg)" }}
            role="img"
            aria-label="Consultório Sigmavita"
          />
          <a href="#inicio" className="section-about__logo" aria-label="Sigmavita">
            <img src="/logo_branca.webp" alt="Sigmavita" />
          </a>
        </div>
      </div>
    </section>
  );
}
