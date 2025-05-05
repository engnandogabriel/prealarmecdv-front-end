import LogoGAL2 from "../../assets/gal-2.png";
import LogoRaio from "../../assets/Raio.png";
import Logo from "../Logo/index";
import { HeaderContainer, FlexContainer } from "../../styles/HeaderContainer";
import { LogoWrapper } from "../../styles/Logo";
import Title from "../Title";
function Header() {
  return (
    <>
      <HeaderContainer expand="lg">
        <FlexContainer>
          <a href="/cma/prealarmecdv/">
            <LogoWrapper>
              <Logo src={LogoGAL2} alt="Logo 1" />
            </LogoWrapper>
          </a>
          <Title
            text="SAADE - Sistema Automático de Análise De Eletrocode"
            color="#007bff"
          />
          <LogoWrapper>
            <Logo src={LogoRaio} alt="Logo 1" />
          </LogoWrapper>
        </FlexContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
