import styles from "./page.module.css";

const Home: React.FC<{}> = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>home page works!</div>
    </main>
  );
};

export default Home;
