import { SpanStyled } from "../../styles/Texts";
const Span = ({ text, color, fontSize }) => {
  return (
    <SpanStyled color={color} fontSize={fontSize}>
      {text}
    </SpanStyled>
  );
};
export default Span;
