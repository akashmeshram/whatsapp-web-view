import styles from "./style.module.css";

function Contact({ person, id, makeActive, active }) {
  console.log({ active });
  return (
    <div
      className={[styles.container, ...(active ? [styles.active] : [])].join(
        " "
      )}
      onClick={() => makeActive(id)}
    >
      <div className={styles.displaypic}>
        <img src={person.picture} alt={`contact-pic-${id}`} />
      </div>
      <div className={styles.profileinfo}>
        <div className={styles.profileHeader}>
          <p className={styles.profileName}>{person.name}</p>
          <p className={styles.profileTimestamp}>{person.latest_timestamp}</p>
        </div>
        <p className={styles.latestMessage}>{person.lastChat}</p>
      </div>
    </div>
  );
}

export default Contact;
