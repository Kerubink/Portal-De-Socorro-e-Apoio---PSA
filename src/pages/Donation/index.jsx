import Navbar from "../../components/Navbar";
import styles from "./donation.module.scss";
function Donation() {
  return (
    <>
      <Navbar />
      <section className={`${styles.donation_section} flex flex-col  bg-slate-400 h-full`}>
        <section className={`${styles.donation_home} `}></section>
      </section>
    </>
  );
}

export default Donation;
