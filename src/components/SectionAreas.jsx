import "./SectionAreas.css";

const areas = [
  {
    id: "hepatica",
    title: "Avaliação hepática",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    description:
      "Elastografia Hepática Transitória (FibroScan) e ecografia de abdome para avaliação não invasiva de doenças hepáticas e do aparelho digestivo.",
    href: "#exames",
  },
  {
    id: "endoscopia",
    title: "Endoscopia digestiva",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    description:
      "Procedimentos endoscópicos e técnicas avançadas para diagnóstico e acompanhamento, em estrutura de referência.",
    href: "#exames",
  },
  {
    id: "prevencao-cardiovascular",
    title: "Prevenção cardiovascular",
    image: "https://images.pexels.com/photos/6129040/pexels-photo-6129040.jpeg?auto=compress&w=800",
    description:
      "Avaliação de risco, check-up cardíaco e orientação para saúde do coração a longo prazo.",
    href: "#exames",
  },
  {
    id: "cardiologia-esporte",
    title: "Cardiologia do esporte",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    description:
      "Avaliação e acompanhamento do atleta e de praticantes de atividade física, com foco em performance e segurança.",
    href: "#corpo-clinico",
  },
  {
    id: "pneumologia",
    title: "Pneumologia",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    description:
      "Avaliação e acompanhamento das doenças respiratórias com a mesma excelência e acolhimento da clínica.",
    href: "#especialidades",
  },
];

export default function SectionAreas() {
  return (
    <section id="areas-atuacao" className="section-areas section">
      <div className="section__inner">
      <span className="eyebrow">O que fazemos</span>
      <h2 className="section-title">
        Nossas <strong>Áreas de Atuação</strong>
      </h2>
      <div className="section-areas__grid">
        {areas.map((item) => (
          <article key={item.id} className="area-card">
            <div
              className="area-card__header"
              style={{ backgroundImage: item.image ? `url(${item.image})` : undefined }}
            >
              <h3 className="area-card__title">{item.title}</h3>
            </div>
            <div className="area-card__body">
              <p className="area-card__text">{item.description}</p>
              <a href={item.href} className="area-card__link">
                Saiba mais
              </a>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
