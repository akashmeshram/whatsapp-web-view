import { useState, useEffect } from "react";

import styles from "./style.module.css";
import tempPic from "./profile.png";

function Contact({ person, id }) {
  const [profileName, setProfileName] = useState(`contact-${id}`);
  const [profilePic, setProfilePic] = useState(tempPic);
  useEffect(() => {
    setProfileName(person.name);
    setProfilePic(person.picture);
  }, [person]);
  return (
    <div className={styles.container}>
      <div className={styles.displaypic}>
        <img src={profilePic} alt={`contact-pic-${id}`} />
      </div>
      <div className={styles.profileinfo}>
        <div className={styles.profileHeader}>
          <p className={styles.profileName}>{profileName}</p>
          <p className={styles.profileTimestamp}>12/12/2002</p>
        </div>
        <p className={styles.latestMessage}>{person.lastChat}</p>
      </div>
    </div>
  );
}

export default Contact;
