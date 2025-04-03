import axios from "axios";

const url = process.env.REACT_APP_API_URL;
export const GET_LEITURAS = async () => {
  const data = axios.get(`${url}/tu`);
  return data;
};

export const GET_LEITURAS_BY_DISTRITOS = async (distrito) => {
  const data = await axios.get(
    `${url}/leituras/distritos?distrito=${distrito}&dataInicio=2025-01-22T06:02:24`
  );
  return data;
};

export const GET_LEITURAS_BY_ADDRESS = async (address, dataInicio, datafim) => {
  const data = axios.get(
    `${url}/leituras/address?address=${address}&dataInicio=${dataInicio}&dataFim=${datafim}`
  );
  return data;
};

export const GET_ANOMALIAS = async (
  distrito,
  correntMin,
  correnteMax,
  dataInicio
) => {
  const data = await axios.get(
    `${url}/leituras/anomalias/corrente?distrito=${distrito}&correnteMin=${correntMin}&correnteMax=${correnteMax}&dataInicio=${dataInicio}`
  );
  return data;
};

export const GET_ANOMALIAS_RESISTENCIA = async (
  distrito,
  resistencia,
  dataInicio
) => {
  const data = await axios.get(
    `${url}/leituras/anomalias/resistencia?distrito=${distrito}&resistencia=${resistencia}&dataInicio=${dataInicio}`
  );
  return data;
};

export const GET_ALL_ADDRESS = async () => {
  const data = await axios.get(`${url}/leituras/get-address`);
  return data;
};
