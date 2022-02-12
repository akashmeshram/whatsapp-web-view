import styles from "./style.module.css";
import Contact from "../../Components/Contact";

function Side() {
  const allContacts = [...new Array(10)].map((_, i) => (
    <Contact key={i} id={i} />
  ));
  return <div className={styles.container}>{allContacts}</div>;
}

export default Side;
