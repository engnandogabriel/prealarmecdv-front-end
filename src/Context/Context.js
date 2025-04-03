import { createContext, useState } from "react";
import {
  GET_LEITURAS_BY_ADDRESS,
  GET_ALL_ADDRESS,
  GET_ANOMALIAS,
  GET_ANOMALIAS_RESISTENCIA,
} from "../api/api-service";

export const CircuitoDeViaGlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const CircuitoDeViaContext = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [leituras, setLeituras] = useState(null);
  const [address, setAddress] = useState(null);
  const [loadAddress, setLoadAddres] = useState(null);
  const [anomalias, setAnomalias] = useState(null);
  const [resistencia, setResistencia] = useState(null);

  async function getLeiturasByAddres(address, dataInicio, datafim) {
    try {
      setLoad(true);
      setError(null);
      setLeituras(null);
      const { data } = await GET_LEITURAS_BY_ADDRESS(
        address,
        dataInicio,
        datafim
      );
      setLeituras(data.body);
    } catch (error) {
      setError(error);
      setLeituras(null);
    } finally {
      setLoad(false);
    }
  }

  async function getAllAddress() {
    try {
      setError(null);
      setLoadAddres(true);
      const { data } = await GET_ALL_ADDRESS();
      setAddress(data.body);
    } catch (error) {
      setError(error);
    } finally {
      setLoad(false);
    }
  }
  async function getAnomalias(distrito, correnteMin, correnteMax, dataInicio) {
    try {
      setLoad(true);
      setAnomalias(null);
      const { data } = await GET_ANOMALIAS(
        distrito,
        correnteMin,
        correnteMax,
        dataInicio
      );
      setAnomalias(data.body);
    } catch (error) {
      setError(error);
    } finally {
      setLoad(false);
    }
  }

  async function getAnomaliasResistencia(distrito, resistencia, dataInicio) {
    try {
      setLoad(true);
      setResistencia(null);
      const { data } = await GET_ANOMALIAS_RESISTENCIA(
        distrito,
        resistencia,
        dataInicio
      );
      setResistencia(data.body);
    } catch (error) {
      setError(error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <CircuitoDeViaGlobalContext.Provider
      value={{
        getLeiturasByAddres,
        getAllAddress,
        getAnomalias,
        getAnomaliasResistencia,
        leituras,
        address,
        load,
        loadAddress,
        anomalias,
        resistencia,
        error,
      }}
    >
      {children}
    </CircuitoDeViaGlobalContext.Provider>
  );
};
