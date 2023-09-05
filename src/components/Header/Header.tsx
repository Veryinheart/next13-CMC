import React from "react";
import { GlobalContainer, GlobalWrapper } from "../Container/Container";

const Header = () => {
  return (
    <>
      <GlobalWrapper>
        <GlobalContainer>
          Cryptos: 1.8M+ Exchanges: 669Market Cap: $1.04T0.48%24h Vol:
          $24.63B9.35%{" "}
        </GlobalContainer>
        <GlobalContainer>
          logo Cryptocurrencies Exchanges Community Products Learn
        </GlobalContainer>
      </GlobalWrapper>
    </>
  );
};

export default Header;
