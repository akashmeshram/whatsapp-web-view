import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addMessageToContact } from "../../store/action";

import styles from "./style.module.css";
import Message from "../../Components/Message";

import Profilebar from "../../Components/Profilebar";
import Chatbox from "../../Components/Chatbox";

function Main({ contact, chatList, addMessage }) {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const allMessages = chatList.map(({ text, side, timestamp }, i) => (
      <Message key={i} id={i} text={text} side={side} time={timestamp} />
    ));
    setMessageList(allMessages.reverse());
  }, [contact, chatList]);

  return (
    <div className={styles.container}>
      <div>
        <Profilebar
          name={contact.name}
          picture={contact.picture}
          status={contact.status}
        />
      </div>
      <div className={styles.messages}>{messageList}</div>
      <div>
        <Chatbox sendMessage={addMessage} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contact: state.allFriends.filter(
    (person) => person.id === state.activeContactId
  )[0],
  chatList: state.friends.filter(
    (person) => person.id === state.activeContactId
  )[0].chatlog,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (text) => {
    dispatch(addMessageToContact(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
