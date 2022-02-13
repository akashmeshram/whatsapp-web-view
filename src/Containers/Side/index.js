import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { changeActiveContact } from "../../store/action";

import styles from "./style.module.css";
import Contact from "../../Components/Contact";

import Profilebar from "../../Components/Profilebar";

function Side({ personalName, personalPic, chatList, changeContact }) {
  const [profileName, setProfileName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    setProfileName(personalName);
    setProfilePic(personalPic);
    const allContacts = chatList.map((person, i) => (
      <Contact
        key={i}
        id={person.id}
        person={person}
        makeActive={changeContact}
      />
    ));
    setContactList(allContacts);
  }, [personalName, personalPic, chatList, changeContact]);

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

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeContact: (id) => {
    dispatch(changeActiveContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Side);
