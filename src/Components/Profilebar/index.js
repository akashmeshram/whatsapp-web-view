import { useState, useEffect } from "react";

import styles from "./style.module.css";
import tempPic from "./profile.png";

function Profilebar({ name, picture }) {
  const [profileName, setProfileName] = useState("contact");
  const [profilePic, setProfilePic] = useState(tempPic);
  useEffect(() => {
    setProfileName(name);
    setProfilePic(picture);
  }, [name, picture]);
  return (
    <div className={styles.container}>
      <div className={styles.displaypic}>
        <img src={profilePic} alt="profile-pic" />
      </div>
      <div className={styles.profileinfo}>
        <p className={styles.profileName}>{profileName} </p>
        <p className={styles.profileInfo}>About Info</p>
      </div>
    </div>
  );
}

export default Profilebar;
