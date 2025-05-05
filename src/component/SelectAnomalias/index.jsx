import {
  SelectionContainer,
  DateInput,
  DateFilterContainer,
} from "../../styles/SelectContainer";
import SelectWrapperAnomalias from "../SelectWrapperAnomalias";
import ButtonSearch from "../ButtonSearch";
import Span from "../Span";
import {
  dateFormat,
  dateFormatSemSegundos,
} from "../../utils/TimeFormat/index";
import { sedes } from "../../data/data";

const SelectAnomalias = ({
  distrito,
  setDistrito,
  fetchData,
  dataInicio,
  setDataInicio,
}) => {
  return (
    <SelectionContainer>
      <div></div>
      <SelectWrapperAnomalias
        text="Local"
        datas={sedes}
        selectedValue={distrito || ""}
        handleChange={(value) => {
          setDistrito(value);
        }}
      />

      <DateFilterContainer>
        <div>
          <Span text="Data de Início " />
          <DateInput
            type="date"
            value={dateFormatSemSegundos(dataInicio)}
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
export default SelectAnomalias;
