import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import SectionAbout from "./components/SectionAbout";
import SectionSpecialties from "./components/SectionSpecialties";
import SectionAreas from "./components/SectionAreas";
import SectionExams from "./components/SectionExams";
import SectionDoctors from "./components/SectionDoctors";
import SectionPromo from "./components/SectionPromo";
import SectionContact from "./components/SectionContact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <SectionAbout />
        <SectionSpecialties />
        <SectionAreas />
        <SectionExams />
        <SectionDoctors />
        <SectionPromo />
        <SectionContact />
        <Footer />
      </main>
    </>
  );
}

export default App;
