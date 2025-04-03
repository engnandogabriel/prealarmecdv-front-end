import {
  SelectionContainer,
  DateInput,
  DateFilterContainer,
} from "../../styles/SelectContainer";
import SelectWrapper from "../SelectWrapper";
import ButtonSearch from "../ButtonSearch";
import Span from "../Span";
import dateFormat from "../../utils/DateFormat";
const SelectCurrentAnomalies = ({
  distrito,
  setDistrito,
  fetchData,
  setDataInicio,
}) => {
  const distritos = ["VTM", "SIS", "AAL", "NVA"];

  return (
    <SelectionContainer>
      <div></div>
      <SelectWrapper
        text="Local"
        datas={distritos}
        label="Selecione o Distrito"
        selectedValue={distrito || "Selecione um valor"}
        handleChange={(value) => {
          setDistrito(value);
        }}
      />

      <DateFilterContainer>
        <div>
          <Span text="Data de Início " />
          <DateInput
            type="date"
            onChange={(e) => setDataInicio(dateFormat(e.target.value))}
          />
        </div>
      </DateFilterContainer>
      <ButtonSearch
        label="Pesquisar"
        onClick={(e) => fetchData(e)}
        type="button"
      />
    </SelectionContainer>
  );
};
export default SelectCurrentAnomalies;
