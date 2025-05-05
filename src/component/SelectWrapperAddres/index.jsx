import Span from "../Span";
import {
  SelectStyled,
  SelectWrapperStyled,
} from "../../styles/SelectContainer";
import { useEffect, useState } from "react";
import { gals } from "../../data/data";

const SelectWrapperAddres = ({
  local,
  text,
  datas,
  selectedValue,
  handleChange,
}) => {
  const [localGal, setLocalGal] = useState(null);
  const filtrarPorKm = () => {
    if (local === "all" || local == null) return datas;
    var gal = gals.find((loc) => loc.sede === local);
    if (!gal) {
      return [];
    }
    const dadosFiltrados = datas.filter((item) => {
      const match = item.address && item.address.match(/km (\d+)/);
      if (match) {
        const km = parseInt(match[1]);
        return km >= gal.inicio && km <= gal.fim;
      }
      return false;
    });
    return dadosFiltrados;
  };

  useEffect(() => {
    setLocalGal(filtrarPorKm());
  }, [local]);
  return (
    <SelectWrapperStyled>
      <Span fontSize="20px" text={text} />
      <SelectStyled
        value={selectedValue}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="Selecione um valor" disabled>
          Selecione um valor
        </option>
        {localGal &&
          localGal.map((data, index) => {
            if (data.address != null) {
              return (
                <option key={`${data}-${index}`} value={data.address}>
                  {data.address
                    .toLocaleString("pt-BR", { minimumFractionDigits: 0 })
                    .replace(/[^a-zA-Z0-9 ]/g, "")}
                </option>
              );
            }
          })}
      </SelectStyled>
    </SelectWrapperStyled>
  );
};

export default SelectWrapperAddres;
