import "./footerStyles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Firuz Akhmad</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/firuz_akhmad"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://wa.me/996552786786"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-whatsapp"></i>
          </a>

          <a
            href="https://github.com/firuzakhmad"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
