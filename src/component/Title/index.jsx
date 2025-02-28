import { TitleStyled } from "../../styles/Texts";

const Title = ({ text, color, fontSize }) => {
  return (
    <TitleStyled color={color} fontSize={fontSize}>
      {text}
    </TitleStyled>
  );
};
export default Title;
