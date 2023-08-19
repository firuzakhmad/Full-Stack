import { Link } from "react-router-dom";
import "./footerStyles/footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer__container container">
        <span className="footer__copy">&#169; All rights reserved.</span>

        <div className="form__social-media">
          <div className="form__info-social-div footer-div">
            <Link to="#">
              <AiFillFacebook className="form__info-social-icon footer-icons" />
            </Link>
            <Link to="#">
              <AiFillTwitterSquare className="form__info-social-icon footer-icons" />
            </Link>
            <Link to="https://www.instagram.com/gruzlogistic/">
              <AiFillInstagram className="form__info-social-icon footer-icons" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
