import { createContext, useState } from "react";
import { GET_LEITURAS_BY_ADDRESS, GET_ALL_ADDRESS } from "../api/api-service";

export const CircuitoDeViaGlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const CircuitoDeViaContext = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [leituras, setLeituras] = useState(null);
  const [address, setAddress] = useState(null);
  const [loadAddress, setLoadAddres] = useState(null);

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

  return (
    <CircuitoDeViaGlobalContext.Provider
      value={{
        getLeiturasByAddres,
        getAllAddress,
        leituras,
        address,
        load,
        loadAddress,
        error,
      }}
    >
      {children}
    </CircuitoDeViaGlobalContext.Provider>
  );
};
