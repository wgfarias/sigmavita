import "./SectionSpecialties.css";

const iconGastro = (
  <svg className="specialty-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <ellipse cx="12" cy="12" rx="6" ry="8" />
    <path d="M6 12h12M12 4v16" />
  </svg>
);

const iconCardio = (
  <svg className="specialty-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const iconPneumo = (
  <svg className="specialty-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 4v4M8 8c-1.5 2-2 4-2 6s.5 4 2 6M16 8c1.5 2 2 4 2 6s-.5 4-2 6" />
    <path d="M4 14h4l2-4 2 4h4M12 10v8" />
  </svg>
);

const specialties = [
  {
    id: "gastro",
    title: "Gastroenterologia",
    icon: iconGastro,
    description:
      "Atendimento especializado em doenças do aparelho digestivo, com destaque para avaliação hepática não invasiva (FibroScan), ecografia de abdome e endoscopia digestiva.",
  },
  {
    id: "cardio",
    title: "Cardiologia",
    icon: iconCardio,
    description:
      "Prevenção cardiovascular, cardiologia do esporte, avaliação de risco e check-up cardíaco, com orientação clara e acompanhamento individualizado.",
  },
  {
    id: "pneumo",
    title: "Pneumologia",
    icon: iconPneumo,
    description:
      "Atendimento em Pneumologia com a mesma excelência e estrutura da Sigmavita, para avaliação e acompanhamento das doenças respiratórias.",
  },
];

export default function SectionSpecialties() {
  return (
    <section id="especialidades" className="section-specialties section">
      <div className="section__inner">
      <span className="eyebrow">O que oferecemos</span>
      <h2 className="section-title">
        Nossas <strong>Especialidades</strong>
      </h2>
      <div className="section-specialties__grid">
        {specialties.map((item) => (
          <article key={item.id} className="specialty-card">
            <div className="specialty-card__icon-wrap">{item.icon}</div>
            <h3 className="specialty-card__title">{item.title}</h3>
            <p className="specialty-card__text">{item.description}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
