import { BaseButton } from "components/button/styled";
import NavLinks from "./NavLinks";
import { HeaderMenuContainer } from "./styles";

const BuyButton = () => (
  <div className="nav-buycoin">
    <BaseButton className="btn-primary">
      <a href="/">Buy ARAB Coin</a>
    </BaseButton>
  </div>
);

const Header = () => {
  return (
    <HeaderMenuContainer>
      <header className="header">
        <div className="container">
          <div className="navbar-content">
            <nav className="navbar-inner">
              <div className="drawer-overlay"></div>
              <div className="nav-logo">
                <a href="/">
                  <img src={"assets/images/logo-front.svg"} alt="logo" />
                </a>
              </div>

              <NavLinks />
              <BuyButton />
            </nav>
          </div>
        </div>
      </header>
    </HeaderMenuContainer>
  );
};

export default Header;
