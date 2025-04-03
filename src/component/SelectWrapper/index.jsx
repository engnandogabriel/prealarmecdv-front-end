import Span from "../Span";
import {
  SelectStyled,
  SelectWrapperStyled,
} from "../../styles/SelectContainer";

const SelectWrapper = ({ text, datas, label, selectedValue, handleChange }) => {
  return (
    <SelectWrapperStyled>
      <Span fontSize="20px" text={text} />
      <SelectStyled
        value={label}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="Selecione um valor" disabled>
          {selectedValue}
        </option>
        {datas.map((data, index) => {
          if (data != null)
            return (
              <option key={`${data}-${index}`} value={data}>
                {data
                  .toLocaleString("pt-BR", { minimumFractionDigits: 0 })
                  .replace(/[^a-zA-Z0-9 ]/g, "")}
              </option>
            );
        })}
      </SelectStyled>
    </SelectWrapperStyled>
  );
};

export default SelectWrapper;
