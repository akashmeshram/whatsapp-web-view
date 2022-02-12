import styles from "./style.module.css";
import profilePic from "./profile.png";

function Contact({ id }) {
  return (
    <div className={styles.container}>
      <div className={styles.displaypic}>
        <img src={profilePic} alt={`contact-pic-${id}`} />
      </div>
      <div className={styles.profileinfo}>
        <p className={styles.profileName}>Contact {id}</p>
        <p className={styles.latestMessage}>Latest text</p>
      </div>
    </div>
  );
}

export default Contact;
