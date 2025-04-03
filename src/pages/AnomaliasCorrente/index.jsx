import { useContext, useState } from "react";
import { CircuitoDeViaGlobalContext } from "../../Context/Context";
import dateFormat from "../../utils/DateFormat/index";
import Loading from "../../component/Loading/index";
import SelectCurrentAnomalies from "../../component/SelectCurrentAnomalies";
import {
  AnomaliaContainner,
  AnomaliaCard,
  AnomaliaItem,
  LeituraContainer,
} from "../../styles/AnomaliaContainer";

const AnomaliasCorrente = () => {
  const cdvConext = useContext(CircuitoDeViaGlobalContext);
  const [distrito, setDistrito] = useState(null);
  const [dataInicio, setDataInicio] = useState(null);

  async function fetchData() {
    var data = dataInicio;
    if (data == null) {
      const date = new Date();
      date.setDate(date.getDate() - 7);
      data = dateFormat(date);
    }
    if (distrito != null && data != null)
      await cdvConext.getAnomalias(distrito, 0.2, 1.4, data);
  }
  if (cdvConext.load) return <Loading />;
  return (
    <>
      <SelectCurrentAnomalies
        distrito={distrito}
        setDistrito={setDistrito}
        fetchData={fetchData}
        dataInicio={dataInicio}
        setDataInicio={setDataInicio}
      />
      {cdvConext.anomalias != null && (
        <AnomaliaContainner>
          {Object.entries(cdvConext.anomalias).map(
            ([endereco, leiturasArray]) => (
              <AnomaliaCard key={endereco}>
                <h3>{endereco}</h3>
                <LeituraContainer>
                  {leiturasArray.map((leitura) => (
                    <AnomaliaItem key={leitura.leituraId}>
                      <div className="anomalia-item-div">
                        <p>
                          <strong>Circuito:</strong> {leitura.circuito}{" "}
                        </p>
                      </div>
                      <div className="anomalia-item-div">
                        <p>
                          <strong>Track:</strong> {leitura.track}
                        </p>
                      </div>
                      <div className="anomalia-item-div">
                        <p>
                          <strong>Resistência:</strong> {leitura.resistencia} Ω{" "}
                        </p>
                      </div>
                      <div className="anomalia-item-div">
                        <p>
                          <strong>Corrente Transmitida:</strong>{" "}
                          {leitura.correnteTransmitida} A{" "}
                        </p>
                      </div>
                      <div className="anomalia-item-div">
                        <p>
                          <strong>Corrente Recebida:</strong>{" "}
                          {leitura.correnteRecebida} A
                        </p>
                      </div>
                      <div className="anomalia-item-div">
                        <p>
                          <strong>Data:</strong>{" "}
                          {new Date(leitura.dataLeitura).toLocaleString()}{" "}
                        </p>
                      </div>
                      <div className="anomalia-item-div">
                        <p>
                          <strong>Rx Ratio:</strong> {leitura.rxRatio}
                        </p>
                      </div>
                      <div className="anomalia-item-div">
                        <p>
                          <strong>Classificação:</strong>{" "}
                          {leitura.classificacao}
                        </p>
                      </div>
                    </AnomaliaItem>
                  ))}
                </LeituraContainer>
              </AnomaliaCard>
            )
          )}
        </AnomaliaContainner>
      )}
    </>
  );
};
export default AnomaliasCorrente;
