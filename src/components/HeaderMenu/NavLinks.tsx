const NavLink = ({ title, className = "menu-item", aClassName = "item" }) => (
  <li className={className}>
    <a href="#" className={aClassName}>
      {title}
    </a>
  </li>
);
const NavLinks = () => {
  return (
    <div className="nav-links">
      <ul className="menu-list">
        <NavLink title="Home" />
        <li className="menu-item">
          <div className="item toggle">Tools</div>
          <ul className="sub-menu-list">
            <NavLink
              title="Arab Block Explorer"
              className="sub-menu-item"
              aClassName="sub-item"
            />
            <NavLink
              title="Arab Wallet"
              className="sub-menu-item"
              aClassName="sub-item"
            />
            <NavLink
              title="Arab Dex"
              className="sub-menu-item"
              aClassName="sub-item"
            />
            <NavLink
              title="Arab Tokenomics"
              className="sub-menu-item"
              aClassName="sub-item"
            />
          </ul>
        </li>
        <NavLink title="Developers" />
        <NavLink title="Arab Academy" />
        <NavLink title="Community" />
        <NavLink title="Whitepaper" />
      </ul>
    </div>
  );
};

export default NavLinks;
