import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addMessageToContact } from "../../store/action";

import styles from "./style.module.css";
import Message from "../../Components/Message";

import Profilebar from "../../Components/Profilebar";
import Chatbox from "../../Components/Chatbox";

function Main({ contact, addMessage }) {
  const [profileName, setProfileName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    setProfileName(contact.name);
    setProfilePic(contact.picture);
    const allMessages = contact.chatlog.map(({ text, side, timestamp }, i) => (
      <Message key={i} id={i} text={text} side={side} time={timestamp} />
    ));
    setMessageList(allMessages);
  }, [contact]);

  return (
    <div className={styles.container}>
      <div>
        <Profilebar name={profileName} picture={profilePic} />
      </div>
      <div className={styles.messages}>{messageList}</div>
      <div>
        <Chatbox sendMessage={addMessage} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contact: state.friends.filter(
    (person) => person.id === state.activeContactId
  )[0],
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (text) => {
    dispatch(addMessageToContact(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
