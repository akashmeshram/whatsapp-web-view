import { connect } from "react-redux";
import { useState, useEffect } from "react";

import styles from "./style.module.css";
import Contact from "../../Components/Contact";

import Profilebar from "../../Components/Profilebar";

function Side({ personalName, personalPic, chatList }) {
  const [profileName, setProfileName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    setProfileName(personalName);
    setProfilePic(personalPic);
    const allContacts = chatList.map((person, i) => (
      <Contact key={i} id={i} person={person} />
    ));
    setContactList(allContacts);
  }, [personalName, personalPic, chatList]);

  return (
    <div className={styles.container}>
      <div>
        <Profilebar name={profileName} picture={profilePic} />
      </div>
      <div className={styles.contacts}>{contactList}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  personalName: state.profile.name,
  personalPic: state.profile.picture,
  chatList: state.profile.friends,
});

export default connect(mapStateToProps)(Side);
