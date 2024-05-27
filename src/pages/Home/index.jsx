import styles from "./home.module.scss";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen">
      <div className={`${styles.background_slideshow} grayscale overflow-hidden`}></div>
      <section className={`${styles.section} flex flex-col`}>
        <div className={`${styles.container}`}>
          <div className={styles.about_text}>
            <h1>Sobre nós</h1>
            <p>Aqui vai o texto sobre nós...</p>
          </div>
        </div>
      </section>
      </div>
      <section className={`${styles.section2} flex w-full h-50`}>
        das
      </section>
    </>
  );
}

export default Home;
