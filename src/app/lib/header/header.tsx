import styles from "./header.module.css";
import { NavBarLinkProps } from "../navBar/navBarLink";
import { NavBarRoot } from "../navBar/navBarRoot";

const NAVBAR_DATA: NavBarLinkProps[] = [
  {
    text: "Home",
    route: "/",
  },
  {
    text: "About",
    route: "/about",
  },
  {
    text: "Projects",
    route: "/projects",
  },
  {
    text: "Contact",
    route: "/contact",
  },
];

const name = "Clifford Richardson";

export const Header: React.FC<{}> = ({}) => {
  return (
    <div className={styles.root}>
      <a href="/" className={styles.name}>
        {name}
      </a>

      <NavBarRoot navBarData={NAVBAR_DATA}></NavBarRoot>
    </div>
  );
};
