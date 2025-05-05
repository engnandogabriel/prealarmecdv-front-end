import { useContext, useState } from "react";
import { CircuitoDeViaGlobalContext } from "../../Context/Context";
import dateFormat from "../../utils/DateFormat/index";
import Loading from "../../component/Loading/index";
import SelectAnomalias from "../../component/SelectAnomalias";
import {
  AnomaliaContainner,
  AnomaliaCard,
  AnomaliaItem,
  LeituraContainer,
} from "../../styles/AnomaliaContainer";

const AnomaliasResistencia = () => {
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
    await cdvConext.getAnomaliasResistencia(distrito, 2.5, data);
  }
  if (cdvConext.load) return <Loading />;
  return (
    <>
      <SelectAnomalias
        distrito={distrito}
        setDistrito={setDistrito}
        fetchData={fetchData}
        dataInicio={dataInicio}
        setDataInicio={setDataInicio}
      />
      {cdvConext.resistencia != null && (
        <>
          <h2>Análise de Resistência</h2>
          <AnomaliaContainner>
            {Object.entries(cdvConext.resistencia).map(
              ([endereco, leiturasArray]) => (
                <AnomaliaCard key={endereco}>
                  <h3>{endereco}</h3>
                  <LeituraContainer>
                    {leiturasArray.map((leitura) => (
                      <AnomaliaItem key={leitura.leituraId}>
                        <div className="anomalia-item-div">
                          <p>
                            {leitura.circuito.includes("1_DTKI1") && (
                              <strong style={{ color: "red" }}>
                                Circuito: {leitura.circuito}
                              </strong>
                            )}
                            {leitura.circuito.includes("1D1T") && (
                              <strong style={{ color: "red" }}>
                                Circuito: {leitura.circuito}
                              </strong>
                            )}

                            {leitura.circuito.includes("1_ETKI1") && (
                              <strong style={{ color: "green" }}>
                                Circuito: {leitura.circuito}
                              </strong>
                            )}
                            {leitura.circuito.includes("1E1T") && (
                              <strong style={{ color: "green" }}>
                                Circuito: {leitura.circuito}
                              </strong>
                            )}

                            {leitura.circuito.includes("2_DTKI1") && (
                              <strong style={{ color: "blue" }}>
                                Circuito: {leitura.circuito}
                              </strong>
                            )}
                            {leitura.circuito.includes("2D1T") && (
                              <strong style={{ color: "blue" }}>
                                Circuito: {leitura.circuito}
                              </strong>
                            )}
                            {leitura.circuito.includes("2_ETKI1") && (
                              <strong style={{ color: "orange" }}>
                                Circuito: {leitura.circuito}
                              </strong>
                            )}
                            {leitura.circuito.includes("2E1T") && (
                              <strong style={{ color: "orange" }}>
                                Circuito: {leitura.circuito}
                              </strong>
                            )}
                          </p>
                        </div>
                        <div className="anomalia-item-div">
                          <p>
                            <strong>Track:</strong> {leitura.track}
                          </p>
                        </div>
                        <div className="anomalia-item-div">
                          <p>
                            <strong>Resistência:</strong> {leitura.resistencia}{" "}
                            Ω{" "}
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
        </>
      )}
    </>
  );
};
export default AnomaliasResistencia;
