import {
  SelectionContainer,
  DateFilterContainer,
  DateInput,
} from "../../styles/SelectContainer";
import ButtonSearch from "../ButtonSearch";
import Span from "../Span";
import SelectWrapper from "../SelectWrapper/index";
import SelectWrapperAddres from "../SelectWrapperAddres";
import { CircuitoDeViaGlobalContext } from "../../Context/Context";
import { useContext, useState, useEffect } from "react";
import { dateFormat, dateFormatSemSegundos } from "../../utils/TimeFormat";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { gals } from "../../data/data";
const SelectDatas = () => {
  const cdvConext = useContext(CircuitoDeViaGlobalContext);

  const [local, setLocal] = useState(null);
  const [remota, setRemota] = useState(
    sessionStorage.getItem("remota") || null
  );
  const [dataInicio, setDataInicio] = useState(
    sessionStorage.getItem("data-inicio") || null
  );
  const [dataFim, setDataFim] = useState(
    sessionStorage.getItem("data-fim") || null
  );

  async function fetchData(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (dataInicio && dataFim && remota) {
      await cdvConext.getLeiturasByAddres(
        remota,
        dateFormat(dataInicio),
        dateFormat(dataFim)
      );
    }
    handleChange(remota, dataInicio, dataFim);
  }
  useEffect(() => {
    getAddress();
    const savedRemota = sessionStorage.getItem("remota");
    const savedDataInicio = sessionStorage.getItem("data-inicio");
    const savedDataFim = sessionStorage.getItem("data-fim");
    if (savedRemota) setRemota(savedRemota);
    if (savedDataInicio) setDataInicio(savedDataInicio);
    if (savedDataFim) setDataFim(savedDataFim);
  }, []);

  const handleChange = (value, inicio, fim) => {
    sessionStorage.setItem("remota", value);
    sessionStorage.setItem("data-inicio", dateFormat(inicio));
    sessionStorage.setItem("data-fim", dateFormat(fim));
  };

  async function getAddress() {
    await cdvConext.getAllAddress();
  }

  if (cdvConext.address == null) return <Loading />;
  return (
    <SelectionContainer>
      <SelectWrapper
        text="Local"
        gal={gals}
        selectedValue={local}
        handleChange={setLocal}
      />
      <SelectWrapperAddres
        local={local}
        text="Sede"
        datas={cdvConext.address}
        selectedValue={remota}
        handleChange={setRemota}
      />

      <DateFilterContainer>
        <div>
          <Span text="Data de Início " />
          <DateInput
            type="date"
            value={dateFormatSemSegundos(dataInicio)}
            onChange={(e) => setDataInicio(e.target.value)}
          />
        </div>
        <div>
          <Span text="Data de Fim: " />
          <DateInput
            type="date"
            value={dateFormatSemSegundos(dataFim)}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </div>
      </DateFilterContainer>
      <ButtonSearch label="Pesquisar" onClick={fetchData} type="button" />
      <Link to="/anomalias/correntes">
        <ButtonSearch label="Anomalias de corrente" type="button" />
      </Link>
      <Link to="/anomalias/resistencia">
        <ButtonSearch label="Anomalias de resistência" type="button" />
      </Link>
    </SelectionContainer>
  );
};

export default SelectDatas;
