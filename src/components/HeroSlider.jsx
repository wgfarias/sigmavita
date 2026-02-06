import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { animate, splitText, stagger, set } from "animejs";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSlider.css";

const WHATSAPP_URL =
  "https://wa.me/5561999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";

/* Imagens: clínicas e consultórios (não hospital). Troque por /hero-1.jpg etc. quando tiver as fotos locais. */
const slides = [
  {
    id: 1,
    title: "Medicina de alto padrão na Asa Sul",
    subtitle:
      "Consultas particulares em Gastroenterologia, Cardiologia e Pneumologia, com atendimento humanizado, tempo dedicado ao paciente e excelência médica.",
    color: "#007c7c",
    backgroundImage:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Gastroenterologia, Cardiologia e Pneumologia",
    subtitle:
      "Cuidado personalizado e tempo dedicado para quem busca qualidade superior em saúde.",
    color: "#006666",
    backgroundImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Estrutura sofisticada e tecnologia de ponta",
    subtitle:
      "Exames diagnósticos de excelência e ambiente premium no Centro Médico Julio Adnet.",
    color: "#007c7c",
    backgroundImage:
      "https://images.pexels.com/photos/6129040/pexels-photo-6129040.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

const CHAR_STAGGER = 45;
const TITLE_DURATION = 400;
const SUBTITLE_FADE_DURATION = 1000;
const SUBTITLE_FADE_DELAY = 350;
const BUTTONS_DELAY = 650;
const BUTTONS_STAGGER = 100;
const BUTTONS_DURATION = 500;

function runTextAnimation(titleEl, subtitleEl, ctasEl) {
  if (!titleEl || !subtitleEl || !ctasEl) return;

  const titleAlreadySplit = titleEl.querySelector("[data-char]");

  // --- Título: animação letra a letra ---
  if (!titleAlreadySplit) {
    const titleSplit = splitText(titleEl, { chars: true });
    titleSplit.addEffect(({ chars }) => {
      if (!chars || !chars.length) return;
      set(chars, { opacity: 0, translateY: "8px" });
      return animate(chars, {
        opacity: [0, 1],
        translateY: ["8px", "0px"],
        duration: TITLE_DURATION,
        delay: stagger(CHAR_STAGGER),
        easing: "easeOutCubic",
      });
    });
  } else {
    const titleChars = titleEl.querySelectorAll("[data-char]");
    if (titleChars.length) {
      set(titleChars, { opacity: 0, translateY: "8px" });
      animate(titleChars, {
        opacity: [0, 1],
        translateY: ["8px", "0px"],
        duration: TITLE_DURATION,
        delay: stagger(CHAR_STAGGER),
        easing: "easeOutCubic",
      });
    }
  }

  // --- Subtítulo: apenas fade suave ---
  set(subtitleEl, { opacity: 0 });
  animate(subtitleEl, {
    opacity: [0, 1],
    duration: SUBTITLE_FADE_DURATION,
    delay: SUBTITLE_FADE_DELAY,
    easing: "easeOutCubic",
  });

  // --- Botões ---
  const buttons = ctasEl.querySelectorAll(".hero-slider__cta");
  if (buttons.length) {
    set(buttons, { opacity: 0, translateY: "12px" });
    animate(buttons, {
      opacity: [0, 1],
      translateY: ["12px", "0px"],
      duration: BUTTONS_DURATION,
      delay: stagger(BUTTONS_STAGGER, { start: BUTTONS_DELAY }),
      easing: "easeOutCubic",
    });
  }
}

function animateSlideContent(swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const content = activeSlide?.querySelector(".hero-slider__slide-content");
  if (!content) return;

  const titleEl = content.querySelector(".hero-slider__title");
  const subtitleEl = content.querySelector(".hero-slider__subtitle");
  const ctasEl = content.querySelector(".hero-slider__ctas");

  runTextAnimation(titleEl, subtitleEl, ctasEl);
}

export default function HeroSlider() {
  const onSwiper = (swiper) => animateSlideContent(swiper);
  const onSlideChange = (swiper) => animateSlideContent(swiper);

  return (
    <section id="inicio" className="hero">
      <Swiper
        className="hero-slider"
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          type: "progressbar",
          clickable: false,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={600}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-slider__slide"
              style={{ backgroundColor: slide.color }}
            >
              {slide.backgroundImage && (
                <div className="hero-slider__slide-bg" aria-hidden>
                  <img
                    src={slide.backgroundImage}
                    alt=""
                    className="hero-slider__slide-bg-img"
                  />
                </div>
              )}
              <div className="hero-slider__slide-overlay" aria-hidden />
              <div className="hero-slider__slide-inner">
                <div className="hero-slider__slide-content">
                  <h2 className="hero-slider__title">{slide.title}</h2>
                  <p className="hero-slider__subtitle">{slide.subtitle}</p>
                  <div className="hero-slider__ctas">
                    <a
                      href={WHATSAPP_URL}
                      className="hero-slider__cta btn btn--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agende sua consulta
                    </a>
                    <a
                      href="#a-clinica"
                      className="hero-slider__cta btn btn--secondary"
                    >
                      Conheça a clínica
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
