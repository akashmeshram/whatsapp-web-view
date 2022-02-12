import styles from "./style.module.css";

function Profilebar() {
  return (
    <div className={styles.container}>
      <div className={styles.displaypic}>pic</div>
      <div className={styles.profileinfo}>
        <p>Contact </p>
        <p>Latest text</p>
      </div>
    </div>
  );
}

export default Profilebar;
