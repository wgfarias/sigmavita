import "./Footer.css";

const WHATSAPP_URL =
  "https://wa.me/5561996994099?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";

const footerLinks = [
  { label: "A Clínica", href: "#a-clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a
            href="#inicio"
            className="footer__logo"
            aria-label="Sigmavita - início"
          >
            <img
              src="/logo_branca.webp"
              alt="Sigmavita"
              className="footer__logo-img"
            />
          </a>
          <p className="footer__tagline">
            Clínica médica de alto padrão. Gastroenterologia, Cardiologia e
            Pneumologia.
          </p>
        </div>
        <nav className="footer__nav">
          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__contact">
          <a
            href={WHATSAPP_URL}
            className="footer__whatsapp btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Sigmavita. Todos os direitos reservados.
          </p>
          <p className="footer__address">
            Centro Médico Julio Adnet, Asa Sul, Brasília/DF
          </p>
        </div>
      </div>
    </footer>
  );
}
