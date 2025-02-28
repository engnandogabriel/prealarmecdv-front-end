import { useContext } from "react";
import { CircuitoDeViaGlobalContext } from "../../Context/Context";
import CDVChart from "../../component/Graphic/index";
import Header from "../../component/Header/index";
import SelectDatas from "../../component/SelectDatas/index";
import Loading from "../../component/Loading/index";
const Home = () => {
  const cdvConext = useContext(CircuitoDeViaGlobalContext);

  if (cdvConext.load) return <Loading />;

  return (
    <>
      <Header />
      <SelectDatas />
      {cdvConext.leituras && (
        <CDVChart
          title={`Grafico do CV km 165`}
          data={cdvConext.leituras}
          circuitos={""}
        />
      )}
    </>
  );
};

export default Home;
