import React, { useState, useEffect, useRef, useContext, useLayoutEffect } from 'react';
import {
  View, TextInput, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity,
} from 'react-native';
import {
  collection, query, orderBy, getDocs, addDoc, serverTimestamp, onSnapshot,
} from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../firebase';
import LinearView from '../sharedComponents/LinearView.jsx'
import Message from './Message.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';
// import ProfileButton from '../profile/profileButton.jsx'

function ChatRoom({ navigation, route }) {
  const { userID, userProfile } = useContext(UsernameContext);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const { roomName } = route.params;
  // console.log(roomName)

  const scrollViewRef = useRef();

  // React.useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: route.params.roomName,
  //   });
  // }, [route.params.roomName]);
  useEffect(() => {
    const q = query(collection(db, 'chatRooms', roomName, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      setChatMessages(messages);
    }, (err) => (console.log(err)));
    // getDocs(q)
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       messages.push(doc.data());
    //     });
    //     return messages;
    //   })
    //   .then((results) => (setChatMessages(results)))
    //   .catch((err) => (console.log(err)));
    return () => (unsubscribe());
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }, 0);
  }, [chatMessages]);

  function onSend() {
    if (message.length > 0) {
      addDoc(collection(db, 'chatRooms', roomName, 'messages'), {
        message,
        uid: userID,
        name: userProfile.name, // Replace with the actual user name
        createdAt: serverTimestamp(),
      })
        .then(() => (setMessage('')))
        .catch((err) => (console.log(err)));
    }
  }

  return (
    <LinearView>
      <View style={styles.container}>
        <ScrollView ref={scrollViewRef} contentContainerStyle={styles.chatContainer}>
          {chatMessages.map((chat, index) => (
            <Message chat={chat} key={index} userID={userID} />
          ))}
        </ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            placeholderTextColor="white"
            multiline
            autoFocus
          />
          <TouchableOpacity onPress={onSend}>
            <Ionicons name="send" size={24} color="#CEB992" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </LinearView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
  chatContainer: {
    flexGrow: 1,
    padding: 10,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#7e7f9a',
    borderRadius: 5,
    padding: 5,
  },
});

export default ChatRoom;
