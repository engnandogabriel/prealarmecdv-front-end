import { ButtonSearchStyled } from "../../styles/Buttons";

const ButtonSearch = ({ label, onClick }) => {
  return <ButtonSearchStyled onClick={onClick}>{label}</ButtonSearchStyled>;
};

export default ButtonSearch;
