import React from "react";
import { ExperienceContainer, TextContent, Numbers } from "./styles";
import WhiteRow from "../../components/WhiteRow";

const Experience = () => {
  return (
    <div>
      <ExperienceContainer>
        <TextContent>
          <h2>Nossa Experiência</h2>
          <p>
            Confie em uma equipe com mais de 10 anos de experiência em
            comunicação visual e instalação de sinalização. Já ajudamos inúmeras
            empresas e eventos a se destacarem com soluções visuais impactantes.
          </p>
        </TextContent>
        <Numbers>
          <div>
            <h2>400+</h2>
            <p>Trabalhos Concluídos</p>
          </div>
          <div>
            <h2>500+</h2>
            <p>Clientes Satisfeitos</p>
          </div>
          <div>
            <h2>500+</h2>
            <p>Eventos Atendidos</p>
          </div>
        </Numbers>
      </ExperienceContainer>

      <WhiteRow />
    </div>
  );
};

export default Experience;
