import { FC, useState } from "react";
import BuyButton from "./BuyButton";

interface NavLinkProps {
  aClassName?: string;
  className?: string;
  title?: string;
}
const NavLink: FC<NavLinkProps> = ({
  title,
  className = "collapse-item",
  aClassName = "item",
}) => (
  <li className={className}>
    <a href="#" className={aClassName}>
      {title}
    </a>
  </li>
);

interface CollapseMenu {
  title: string;
  menus: string[];
}

const CollapseMenu = ({ title, menus = [] }) => {
  return (
    <>
      <button
        className="btn-link"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse-1"
        aria-expanded="false"
      >
        <span className="text">{title}</span>
        <span className="icon">
          <i className="mdi mdi-chevron-down"></i>
        </span>
      </button>
      <div className="collapse" id="collapse-1">
        <ul className="sub-menu-list">
          {menus?.map((item) => (
            <NavLink title={item} className="menu-item" />
          ))}
        </ul>
      </div>
    </>
  );
};

const ToolsMenus = [
  "Arab Block Explorer",
  "Arab Wallet",
  "Arab Dex",
  "Arab Tokenomics",
];

const DrawerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="mobile-drawer-navbar">
      <button
        type="button"
        className="btn-menu-navbar"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <i className="mdi mdi-menu"></i>
      </button>
      <div className={`drawer-menu ${openMenu ? "active" : ""}`}>
        <div className="drawer-header">
          <div className="h-inner">
            <h2>arab network</h2>
            <div className="close-drawer">
              <button type="button" className="btn-close-drawer">
                <i className="mdi mdi-close"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="drawer-body">
          <div className="b-inner">
            <BuyButton className="buy-coin" />
            <ul className="menu-list">
              <NavLink title="Home" />
              <li className="collapse-item">
                <CollapseMenu title="Tools" menus={ToolsMenus} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
