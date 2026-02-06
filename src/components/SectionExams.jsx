import "./SectionExams.css";

const examCategories = [
  {
    id: "gastro",
    title: "Gastroenterologia",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
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
    image: "https://images.pexels.com/photos/6129040/pexels-photo-6129040.jpeg?auto=compress&w=800",
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
            <div
              className="exam-category__header"
              style={{ backgroundImage: category.image ? `url(${category.image})` : undefined }}
            >
              <h3 className="exam-category__title">{category.title}</h3>
            </div>
            <div className="exam-category__body">
            <ul className="exam-category__list">
              {category.items.map((item, index) => (
                <li key={index} className="exam-category__item">
                  {item}
                </li>
              ))}
            </ul>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
