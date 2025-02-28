import {
  SelectionContainer,
  DateFilterContainer,
  DateInput,
} from "../../styles/SelectContainer";
import ButtonSearch from "../ButtonSearch";
import Span from "../Span";
import SelectWrapper from "../SelectWrapper/index";
import { CircuitoDeViaGlobalContext } from "../../Context/Context";
import { useContext, useState, useEffect } from "react";
import dateFormat from "../../utils/TimeFormat";

const SelectDatas = () => {
  const cdvConext = useContext(CircuitoDeViaGlobalContext);
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(null);
  const [remota, setRemota] = useState(null);

  async function fetchData(event) {
    event.preventDefault();
    if (dataInicio && dataFim && remota) {
      await cdvConext.getLeiturasByAddres(remota, dataInicio, dataFim);
    }
  }

  useEffect(() => {
    getAddress();
  }, []);

  async function getAddress() {
    await cdvConext.getAllAddress();
  }

  if (cdvConext.address == null) return;
  return (
    <SelectionContainer>
      <SelectWrapper
        text="Local"
        datas={cdvConext.address}
        label="Selecione a remota"
        selectedValue={remota}
        handleChange={(value) => setRemota(value)}
      />

      <DateFilterContainer>
        <div>
          <Span text="Data de Início " />
          <DateInput
            type="date"
            onChange={(e) => setDataInicio(dateFormat(e.target.value))}
          />
        </div>
        <div>
          <Span text="Data de Fim: " />
          <DateInput
            type="date"
            onChange={(e) => setDataFim(dateFormat(e.target.value))}
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

export default SelectDatas;
