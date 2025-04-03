import { useContext } from "react";
import { CircuitoDeViaGlobalContext } from "../../Context/Context";
import CDVChart from "../../component/Graphic/index";
import SelectDatas from "../../component/SelectDatas/index";
import Loading from "../../component/Loading/index";
const Home = () => {
  const cdvConext = useContext(CircuitoDeViaGlobalContext);

  if (cdvConext.load) return <Loading />;

  return (
    <>
      <SelectDatas />
      {cdvConext.leituras && (
        <CDVChart data={cdvConext.leituras} circuitos={""} />
      )}
    </>
  );
};

export default Home;
