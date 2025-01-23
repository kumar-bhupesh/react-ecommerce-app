import React from "react";
import "./footer.css";
import { footerData, footerSocialLinks } from "../../data/footerData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-xl">
        <div className="row">
          {/* Footer Links*/}
          {footerData.map((linksSection) => (
            <div
              key={linksSection.id}
              className="col-xl-2 col-md-3 col-sm-4 col-6 mt-3"
            >
              <h5 className="footer__title">{linksSection.title}</h5>
              <ul className="footer__links">
                {linksSection.links.map((link) => (
                  <li key={link.id} className="footer__link-item">
                    <a href="#" className="footer__link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Footer Follow and Newsletter */}
          <div className="col-xl-4 col-md-6 col-sm-8 mt-3">
            {/* Footer Follow*/}
            <div className="footer__follow">
              <h5 className="footer__title">Follow Us</h5>
              <div className="footer__social-icons">
                {footerSocialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-icon"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Footer Newsletter */}
            <div className="footer__newsletter">
              <h5 className="footer__title">Subscribe to Our Newsletter</h5>
              <p className="footer__newsletter-text">
                Get the latest updates and offers.
              </p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control footer__newsletter-input"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-danger">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
