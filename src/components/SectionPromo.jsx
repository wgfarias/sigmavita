import { useRef, useEffect } from "react";
import { animate, splitText, stagger, set } from "animejs";
import "./SectionPromo.css";

const TITLE_DURATION = 450;
const CHAR_STAGGER = 50;
const SUBTITLE_FADE_DURATION = 900;
const SUBTITLE_FADE_DELAY = 400;
const LOGO_FADE_DURATION = 600;

const FIREFLIES = [
  { left: "12%", top: "18%", delay: 0, duration: 18 },
  { left: "88%", top: "22%", delay: 2, duration: 22 },
  { left: "25%", top: "75%", delay: 4, duration: 20 },
  { left: "75%", top: "70%", delay: 1, duration: 24 },
  { left: "50%", top: "35%", delay: 3, duration: 16 },
  { left: "8%", top: "55%", delay: 5, duration: 19 },
  { left: "92%", top: "48%", delay: 2.5, duration: 21 },
  { left: "35%", top: "12%", delay: 1.5, duration: 23 },
  { left: "65%", top: "85%", delay: 3.5, duration: 17 },
  { left: "18%", top: "42%", delay: 0.5, duration: 25 },
  { left: "82%", top: "38%", delay: 4.5, duration: 19 },
];

function runPromoAnimation(containerEl) {
  if (!containerEl) return;
  const titleEl = containerEl.querySelector(".section-promo__title");
  const subtitleEl = containerEl.querySelector(".section-promo__subtitle");
  const logoEl = containerEl.querySelector(".section-promo__logo");
  if (!titleEl || !subtitleEl) return;

  // Logo: fade in
  if (logoEl) {
    set(logoEl, { opacity: 0, translateY: 10 });
    animate(logoEl, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: LOGO_FADE_DURATION,
      easing: "easeOutCubic",
    });
  }

  // Título: letra a letra (mesmo efeito dos slides)
  const titleAlreadySplit = titleEl.querySelector("[data-char]");
  if (!titleAlreadySplit) {
    const titleSplit = splitText(titleEl, { chars: true });
    titleSplit.addEffect(({ chars }) => {
      if (!chars?.length) return;
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

  // Subtítulo: fade suave
  set(subtitleEl, { opacity: 0 });
  animate(subtitleEl, {
    opacity: [0, 1],
    duration: SUBTITLE_FADE_DURATION,
    delay: SUBTITLE_FADE_DELAY,
    easing: "easeOutCubic",
  });
}

export default function SectionPromo() {
  const contentRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!contentRef.current || hasAnimated.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          runPromoAnimation(contentRef.current);
        }
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const bgImgRef = useRef(null);
  useEffect(() => {
    const el = bgImgRef.current;
    if (!el) return;
    const anim = el.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.12)" }],
      { duration: 22000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" }
    );
    return () => anim.cancel();
  }, []);

  return (
    <section className="section-promo" aria-labelledby="section-promo-title">
      <div className="section-promo__sticky">
        <div className="section-promo__bg" aria-hidden>
          <img ref={bgImgRef} src="/recepcao.webp" alt="" className="section-promo__bg-img" />
        </div>
        <div className="section-promo__overlay" aria-hidden />
        <div className="section-promo__fireflies" aria-hidden>
          {FIREFLIES.map((f, i) => (
            <span
              key={i}
              className="section-promo__firefly"
              style={{
                left: f.left,
                top: f.top,
                animationDelay: `${f.delay}s`,
                animationDuration: `${f.duration}s`,
              }}
            />
          ))}
        </div>
        <div className="section-promo__content" ref={contentRef}>
        <img
          src="/logo_branca.webp"
          alt="Sigmavita"
          className="section-promo__logo"
          width="160"
          height="auto"
        />
        <h2 id="section-promo-title" className="section-promo__title">
          Onde o cuidado encontra o conforto
        </h2>
        <p className="section-promo__subtitle">
          Estrutura moderna e atendimento de excelência no Centro Médico Julio Adnet, na Asa Sul.
        </p>
        </div>
      </div>
    </section>
  );
}
