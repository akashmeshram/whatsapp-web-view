import styles from "./style.module.css";
import profilePic from "./profile.png";

function Profilebar() {
  return (
    <div className={styles.container}>
      <div className={styles.displaypic}>
        <img src={profilePic} alt="profile-pic" />
      </div>
      <div className={styles.profileinfo}>
        <p>Contact </p>
        <p>Latest text</p>
      </div>
    </div>
  );
}

export default Profilebar;
