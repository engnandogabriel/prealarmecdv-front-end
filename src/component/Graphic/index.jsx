import React from "react";
import ReactApexChart from "react-apexcharts";
import formatDataForChart from "../../utils/FormatDataForChart/formatDataForChart";

const ChartComponent = ({ data }) => {
  const chartData = formatDataForChart(data);
  const title = sessionStorage.getItem("remota");
  const correnteRecebidaSerie = chartData.map((item) => ({
    name: `${item.circuito} - corrente recebida`,
    data: item.correnteRecebida,
    extraData: {
      track: item.track,
      circuito: item.circuito,
      correnteRecebida: item.correnteRecebida,
      correnteTransmitida: item.correnteTransmitida,
      resistencia: item.resistencia,
      date: item.date,
      rxRatio: item.rxRatio,
      preAlarme: item.preAlarme,
    },
  }));

  const resistenciaSerie = chartData.map((item) => ({
    name: `${item.circuito} - resistencia`,
    data: item.resistencia,
    extraData: {
      track: item.track,
      circuito: item.circuito,
      correnteRecebida: item.correnteRecebida,
      correnteTransmitida: item.correnteTransmitida,
      resistencia: item.resistencia,
      date: item.date,
      rxRatio: item.rxRatio,
      preAlarme: item.preAlarme,
    },
  }));

  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    xaxis: {
      categories: chartData[0]?.date || [],
    },
    yaxis: {
      min: 0,
      max: 4,
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    markers: {
      size: 4,
      hover: {
        size: 4,
      },
    },
    tooltip: {
      shared: false,
      intersect: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const resistencia =
          w.config.series[seriesIndex].extraData.resistencia[dataPointIndex];
        const rxRatio =
          w.config.series[seriesIndex].extraData.rxRatio[dataPointIndex];
        const date =
          w.config.series[seriesIndex].extraData.date[dataPointIndex];
        const track =
          w.config.series[seriesIndex].extraData.track[dataPointIndex];
        const circuito = w.config.series[seriesIndex].extraData.circuito;
        const correnteRecebida =
          w.config.series[seriesIndex].extraData.correnteRecebida[
            dataPointIndex
          ];
        const correnteTransmitida =
          w.config.series[seriesIndex].extraData.correnteTransmitida[
            dataPointIndex
          ];
        const preAlarme = w.config.series[seriesIndex].extraData.preAlarme[
          dataPointIndex
        ]
          ? "Sim"
          : "Não";
        if (
          !series ||
          seriesIndex === undefined ||
          dataPointIndex === undefined ||
          seriesIndex >= w.globals.series.length ||
          dataPointIndex >= w.globals.series[seriesIndex].length
        ) {
          return '<div class="custom-tooltip">No data</div>';
        }
        return `
        <div class="custom-tooltip">
          <p><strong>Circuito:</strong> ${circuito}</p>
          <p><strong>Data:</strong> ${date}</p>
          <p><strong>Corrente Recebida:</strong> ${correnteRecebida} A</p>
          <p><strong>Corrente Trasmitida:</strong> ${correnteTransmitida} A</p>
          <p><strong>Resistência:</strong> ${resistencia} Ω</p>
          <p><strong>Pre Alarme:</strong> ${preAlarme}</p>
          <p><strong>RX Ratio:</strong> ${rxRatio}</p>
          <p><strong>Track:</strong> ${track}</p>
        </div>`;
      },
    },
  };

  return (
    <div style={{ marginTop: "100px", width: "1280px", margin: "0 auto" }}>
      <ReactApexChart
        options={{
          ...options,
          title: {
            text: `${title} - Corrente Recebida`,
            align: "center",
          },
        }}
        series={correnteRecebidaSerie}
        type="line"
        height={350}
      />
      <ReactApexChart
        options={{
          ...options,
          title: {
            text: `${title} - Resistência`,
            align: "center",
          },
        }}
        series={resistenciaSerie}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ChartComponent;
