interface MenuListProps {
  title: string;
  menus: { title: string; url: string }[];
}

const MenuList = ({ title, menus = [] }: MenuListProps) => {
  return (
    <div className="footer-links">
      <h5 className="title">{title}</h5>
      <ul className="link-list">
        {menus?.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
