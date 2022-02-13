import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { changeActiveContact } from "../../store/action";

import styles from "./style.module.css";
import Contact from "../../Components/Contact";

import Profilebar from "../../Components/Profilebar";

function Side({
  personalName,
  personalPic,
  personalStatus,
  chatList,
  changeContact,
}) {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const allContacts = chatList.map((person, i) => (
      <Contact
        key={i}
        id={person.id}
        person={person}
        makeActive={changeContact}
      />
    ));
    setContactList(allContacts);
  }, [chatList, changeContact]);

  return (
    <div className={styles.container}>
      <div>
        <Profilebar
          name={personalName}
          picture={personalPic}
          status={personalStatus}
        />
      </div>
      <div className={styles.contacts}>{contactList}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  personalName: state.profile.name,
  personalPic: state.profile.picture,
  personalStatus: state.profile.status,
  chatList: state.profile.friends,
});

const mapDispatchToProps = (dispatch) => ({
  changeContact: (id) => {
    dispatch(changeActiveContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Side);
