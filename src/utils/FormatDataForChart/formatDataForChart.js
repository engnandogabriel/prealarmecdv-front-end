import dateFormat from "../DateFormat/index";
export default function formatDataForChart(data) {
  const chartData = [];

  for (const circuito in data) {
    const correnteRecebida = [];
    const correnteTransmitida = [];
    const resistencia = [];
    const date = [];
    const rxRatio = [];
    const track = [];
    const preAlarme = [];

    data[circuito].forEach((item) => {
      correnteRecebida.push(item.correnteRecebida);
      correnteTransmitida.push(item.correnteTransmitida);
      resistencia.push(item.resistencia);
      date.push(dateFormat(item.hist));
      rxRatio.push(item.rxRatio);
      track.push(item.track);
      preAlarme.push(item.preAlarme);
    });

    chartData.push({
      circuito,
      correnteRecebida,
      correnteTransmitida,
      resistencia,
      date,
      rxRatio,
      track,
      preAlarme,
    });
  }

  return chartData;
}
