import React from "react";
import { ProjectsContainer, TextContent, RowImg } from "./styles";

const Projects = () => {
  return (
    <ProjectsContainer>
      <TextContent>
        <h2>Nosso Trabalho</h2>
        <p>
          Confira alguns dos projetos de identificação visual que já realizamos
          para empresas, eventos e espaços públicos. Veja como ajudamos nossos
          clientes a se destacarem e serem lembrados.
        </p>
      </TextContent>
      <div>
        <div className="images">
          <RowImg
            src="src/assets/projects/BANCO.jpg"
            alt="Imagem  de um trabalho feito para o Banco do Brasil"
          />
          <RowImg
            src="src/assets/projects/ARTLAR.jpg"
            alt="Letreiro da empresa Art Lar"
          />
          <RowImg
            src="src/assets/projects/COSS.jpg"
            alt="Letras na parede da empresa COSS"
          />
          <RowImg
            src="src/assets/projects/TOCADATRAIRA.jpg"
            alt="Totem em led para o restaurante Toca da Traíra"
          />

          <RowImg
            src="src/assets/projects/BMW.jpg"
            alt="Imagem de um trabalho para as agências de carro BMW e Mini"
          />
          <RowImg
            src="src/assets/projects/ASL.jpg"
            alt="Imagem de um trabalho para ASL Teresópolis"
          />
          <RowImg
            src="src/assets/projects/GNPW.jpg"
            alt="Letras na parede da empresa GNPW"
          />
          <RowImg
            src="src/assets/projects/UCA.jpg"
            alt="Totem da universidade UCA"
          />
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
