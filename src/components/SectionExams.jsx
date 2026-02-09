import "./SectionExams.css";

const examCategories = [
  {
    id: "gastro",
    title: "Gastroenterologia",
    items: [
      "Elastografia Hepática Transitória (FibroScan)",
      "Ecografia de Abdome Total",
      "Endoscopia Digestiva Alta",
      "Técnicas endoscópicas avançadas",
    ],
  },
  {
    id: "cardio",
    title: "Cardiologia",
    items: [
      "Eletrocardiograma (ECG)",
      "Ecocardiograma",
      "Avaliação de risco cardiovascular",
      "Check-up cardíaco",
    ],
  },
  {
    id: "geral",
    title: "Estrutura diagnóstica",
    items: [
      "Tecnologia de ponta para exames diagnósticos",
      "Ambiente equipado e acolhedor",
    ],
  },
];

export default function SectionExams() {
  return (
    <section id="exames" className="section-exams section">
      <div className="section__inner">
      <span className="eyebrow">Exames e procedimentos</span>
      <h2 className="section-title">
        <strong>Exames</strong> que realizamos
      </h2>
      <div className="section-exams__grid">
        {examCategories.map((category) => (
          <div key={category.id} className="exam-category">
            <h3 className="exam-category__title">{category.title}</h3>
            <ul className="exam-category__list">
              {category.items.map((item, index) => (
                <li key={index} className="exam-category__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
