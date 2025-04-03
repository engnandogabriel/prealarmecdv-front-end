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
import { Link } from "react-router-dom";
import Loading from "../Loading";

const SelectDatas = () => {
  const cdvConext = useContext(CircuitoDeViaGlobalContext);
  const [remota, setRemota] = useState(null);
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(null);

  async function fetchData(e) {
    e.preventDefault();
    e.stopPropagation();
    if (dataInicio && dataFim && remota) {
      await cdvConext.getLeiturasByAddres(remota, dataInicio, dataFim);
    }
    handleChange(remota, dataInicio, dataFim);
  }
  useEffect(() => {
    getAddress();
    const savedRemota = sessionStorage.getItem("remota");
    if (savedRemota) setRemota(savedRemota);
  }, []);

  useEffect(() => {}, []);

  const handleChange = (value, dataInico, dataFim) => {
    setRemota(value);
    setDataInicio(dataInico);
    setDataFim(dataFim);
    sessionStorage.setItem("remota", value);
  };

  async function getAddress() {
    await cdvConext.getAllAddress();
  }
  if (cdvConext.address == null) return <Loading />;
  return (
    <SelectionContainer>
      <SelectWrapper
        text="Local"
        datas={cdvConext.address}
        label={remota || "Selecione a remota"}
        value={remota}
        handleChange={setRemota}
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
