import React from "react";
import {
  AboutContainer,
  TextContent,
  AboutContent,
  Characteristcs,
} from "./styles";

const About = () => {
  return (
    <AboutContainer>
      <TextContent>
        <h2>Profissionais de Comunicação Visual e Instalação de Sinalização</h2>
        <p>
          Nossa equipe cria, produz e instala elementos visuais para empresas,
          eventos e espaços públicos, garantindo que a sua marca se destaque
          onde quer que esteja presente.
        </p>
      </TextContent>

      <AboutContent>
        <Characteristcs>
          <img src="src/assets/analytics-outline.svg" alt="" />
          <h3>Soluções Personalizadas</h3>
          <p>
            Desenvolvemos soluções únicas e personalizadas para atender às
            necessidades específicas de cada cliente.
          </p>
        </Characteristcs>
        <Characteristcs>
          <img src="src/assets/flash-outline.svg" alt="" />
          <h3>Alta Qualidade</h3>
          <p>
            Utilizamos materiais de alta qualidade e técnicas de produção
            avançadas para garantir resultados excepcionais.
          </p>
        </Characteristcs>
        <Characteristcs>
          <img src="src/assets/layers-outline.svg" alt="" />
          <h3>Serviço Excepcional</h3>
          <p>
            Nosso compromisso com o serviço excepcional garante que sua
            experiência conosco seja sempre positiva e satisfatória.
          </p>
        </Characteristcs>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
