import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "./Header.css";

const WHATSAPP_URL =
  "https://wa.me/5561999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";

const navLinks = [
  { label: "A Clínica", href: "#a-clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Áreas de Atuação", href: "#areas-atuacao" },
  { label: "Exames", href: "#exames" },
  { label: "Corpo Clínico", href: "#corpo-clinico" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${isScrolled ? "header--scrolled" : ""} ${menuOpen ? "header--menu-open" : ""}`}
    >
      <div className="header__inner">
        <a
          href="#inicio"
          className="header__logo"
          aria-label="Sigmavita - início"
        >
          <img
            src="/logo_branca.webp"
            alt="Sigmavita"
            className="header__logo-img header__logo-img--white"
          />
          <img
            src="/logo.webp"
            alt="Sigmavita"
            className="header__logo-img header__logo-img--dark"
          />
        </a>

        <nav className="header__nav">
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__link">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="header__theme-toggle"
                onClick={toggleTheme}
                aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
                title={isDark ? "Tema claro" : "Tema escuro"}
              >
                {isDark ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
              </button>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                className="header__cta btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar consulta
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="header__burger"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__burger-line" />
          <span className="header__burger-line" />
          <span className="header__burger-line" />
        </button>
      </div>

      <div className="header__mobile-nav">
        <ul className="header__mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="header__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="header__theme-toggle header__theme-toggle--mobile"
              onClick={() => { toggleTheme(); setMenuOpen(false); }}
              aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
              <span>{isDark ? "Tema claro" : "Tema escuro"}</span>
            </button>
          </li>
          <li>
            <a
              href={WHATSAPP_URL}
              className="header__mobile-cta btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Agendar consulta
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
