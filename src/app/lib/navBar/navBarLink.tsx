import styles from "./navBarLink.module.css";
export interface NavBarLinkProps {
  text: string;
  route: string;
}

export const NavBarLink: React.FC<NavBarLinkProps> = ({
  text,
  route,
}: NavBarLinkProps) => {
  return (
    <div className={styles.navBarLinkContainer}>
      <a href={route} className={styles.navBarLink}>
        {text}
      </a>
    </div>
  );
};
