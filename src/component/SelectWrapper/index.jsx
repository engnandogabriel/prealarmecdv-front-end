import Span from "../Span";
import {
  SelectStyled,
  SelectWrapperStyled,
} from "../../styles/SelectContainer";

const SelectWrapper = ({ text, gal, selectedValue, handleChange }) => {
  return (
    <SelectWrapperStyled>
      <Span fontSize="20px" text={text} />
      <SelectStyled
        value={selectedValue}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="all">Todas</option>
        {gal &&
          gal.map((data, index) => {
            return (
              data && (
                <option key={`${data}-${index}`} value={data.sede}>
                  {data.sede
                    .toLocaleString("pt-BR", { minimumFractionDigits: 0 })
                    .replace(/[^a-zA-Z0-9 ]/g, "")}
                </option>
              )
            );
          })}
      </SelectStyled>
    </SelectWrapperStyled>
  );
};

export default SelectWrapper;
