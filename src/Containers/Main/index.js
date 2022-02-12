import styles from "./style.module.css";
import Message from "../../Components/Message";

function Main() {
  const allMessages = [...new Array(20)].map((_, i) => (
    <Message key={i} id={i} />
  ));
  return <div className={styles.container}>{allMessages}</div>;
}

export default Main;
