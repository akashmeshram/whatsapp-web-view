import styles from "./style.module.css";

function Contact({ id }) {
  return (
    <div className={styles.container}>
      <div className={styles.displaypic}>pic</div>
      <div className={styles.profileinfo}>
        <p>Contact {id}</p>
        <p>Latest text</p>
      </div>
    </div>
  );
}

export default Contact;
