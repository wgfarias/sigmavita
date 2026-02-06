import "./SectionDoctors.css";

const WHATSAPP_URL =
  "https://wa.me/5561999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";

const doctors = [
  {
    id: "bruno",
    name: "Bruno Mourão Mikhael",
    specialty: "Gastroenterologista",
    crm: "CRM 27.931",
    rqe: "RQE 24.945",
    image: "/prof1.webp",
    bio: "Gastroenterologista formado pelo UniCEPLAC, com residência em Clínica Médica (HRAN) e em Gastroenterologia (HFA). Formação em Elastografia Hepática (FibroScan – Echosens), Ecografia de Abdome Total e técnicas endoscópicas avançadas. Atua na equipe de Endoscopia do Instituto do Coração do DF e no Instituto de Saúde Digestiva Sigmavita.",
    curriculum: [
      "Medicina – UniCEPLAC",
      "Residência em Clínica Médica – HRAN",
      "Residência em Gastroenterologia – HFA",
      "FibroScan e Ecografia de Abdome – Echosens / Nexus",
    ],
    align: "left",
  },
  {
    id: "gabriel",
    name: "Gabriel Xavier Ramalho",
    specialty: "Cardiologista",
    crm: "CRM 27.929",
    rqe: "RQE 24.723",
    image: "/prof2.webp",
    bio: "Cardiologista formado pelo Centro Universitário de Brasília, com experiência na Universidade do Porto. Residência em Clínica Médica (HRAN) e em Cardiologia (HBDF). Atuação em prevenção cardiovascular, cardiologia do esporte e check-up cardíaco. Integra a UTI cardiológica do Hospital do Coração do Brasil e o Hospital de Base do DF.",
    curriculum: [
      "Medicina – Centro Universitário de Brasília",
      "Residência em Clínica Médica – HRAN",
      "Residência em Cardiologia – HBDF",
      "UTI cardiológica – Hospital do Coração do Brasil",
    ],
    align: "right",
  },
];

export default function SectionDoctors() {
  return (
    <section id="corpo-clinico" className="section-doctors section">
      <div className="section__inner">
      <span className="eyebrow">Especialistas</span>
      <h2 className="section-title">
        Nosso <strong>Corpo Clínico</strong>
      </h2>
      <div className="section-doctors__list">
        {doctors.map((doctor) => (
          <article
            key={doctor.id}
            className={`doctor-card doctor-card--${doctor.align}`}
          >
            <div className="doctor-card__media">
              {doctor.image ? (
                <img
                  src={doctor.image}
                  alt={`Dr. ${doctor.name}`}
                  className="doctor-card__image"
                />
              ) : (
                <div className="doctor-card__image-placeholder">
                  <span>Foto</span>
                </div>
              )}
            </div>
            <div className="doctor-card__content">
              <p className="doctor-card__intro">Prazer,</p>
              <h3 className="doctor-card__name">Dr. {doctor.name}</h3>
              <p className="doctor-card__meta">
                {doctor.specialty} · {doctor.crm} | {doctor.rqe}
              </p>
              <p className="doctor-card__bio">{doctor.bio}</p>
              <div className="doctor-card__curriculum">
                <h4 className="doctor-card__curriculum-title">Meu currículo</h4>
                <ul className="doctor-card__curriculum-list">
                  {doctor.curriculum.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <a
                href={WHATSAPP_URL}
                className="btn btn--primary doctor-card__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar consulta
              </a>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
