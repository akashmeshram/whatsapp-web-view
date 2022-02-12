import styles from "./style.module.css";
import Contact from "../../Components/Contact";

import Profilebar from "../../Components/Profilebar";

function Side() {
  const allContacts = [...new Array(20)].map((_, i) => (
    <Contact key={i} id={i} />
  ));
  return (
    <div className={styles.container}>
      <div>
        <Profilebar />
      </div>
      <div className={styles.contacts}>{allContacts}</div>
    </div>
  );
}

export default Side;
