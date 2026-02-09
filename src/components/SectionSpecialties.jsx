import "./SectionSpecialties.css";
const specialties = [
  {
    id: "gastro",
    title: "Gastroenterologia",
    image: "/serv1.webp",
    description:
      "Atendimento especializado em doenças do aparelho digestivo, com destaque para avaliação hepática não invasiva (FibroScan), ecografia de abdome e endoscopia digestiva.",
  },
  {
    id: "cardio",
    title: "Cardiologia",
    image: "/serv2.webp",
    description:
      "Prevenção cardiovascular, cardiologia do esporte, avaliação de risco e check-up cardíaco, com orientação clara e acompanhamento individualizado.",
  },
  {
    id: "pneumo",
    title: "Pneumologia",
    image: "/serv3.webp",
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
            <div className="specialty-card__icon-wrap">
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  className="specialty-card__icon specialty-card__icon--img"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              )}
            </div>
            <h3 className="specialty-card__title">{item.title}</h3>
            <p className="specialty-card__text">{item.description}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
