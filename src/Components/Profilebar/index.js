import styles from "./style.module.css";

function Profilebar({ name, picture }) {
  return (
    <div className={styles.container}>
      <div className={styles.displaypic}>
        <img src={picture} alt="profile-pic" />
      </div>
      <div className={styles.profileinfo}>
        <p className={styles.profileName}>{name} </p>
        <p className={styles.profileInfo}>About Info</p>
      </div>
    </div>
  );
}

export default Profilebar;
