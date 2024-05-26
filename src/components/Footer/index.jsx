import React from "react";
import "./styles.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="containerr">
      <div className="content">
        <h3>Clocks Comunicação</h3>
        <ul className="lista">
          <li>
            <a
              href="https://wa.me/5521981711123?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!"
              target="_blank"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/clocks.comunicacao/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:motajwconsultor@gmail.com" target="_blank">
              Email
            </a>
          </li>
        </ul>
      </div>
      <div className="final">
        <p>&copy; {date} Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
