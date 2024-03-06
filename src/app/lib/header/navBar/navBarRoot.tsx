import { NavBarLinkProps, NavBarLink } from "./navBarLink";
import styles from "./navBarLink.module.css";

interface NavBarRootProps {
  navBarData: NavBarLinkProps[];
}

export const NavBarRoot: React.FC<NavBarRootProps> = ({ navBarData }) => {
  return (
    <div className={styles.navBarContainer}>
      {navBarData.map((data) => {
        return <NavBarLink text={data.text} route={data.route}></NavBarLink>;
      })}
    </div>
  );
};
