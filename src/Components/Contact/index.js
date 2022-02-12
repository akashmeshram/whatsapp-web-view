import styles from "./style.module.css";

function Contact({ id }) {
  return (
    <div className={styles.container}>
      <h4>Contact {id}</h4>
      <p>Latest text</p>
    </div>
  );
}

export default Contact;
