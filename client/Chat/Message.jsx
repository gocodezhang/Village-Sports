import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  messageContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'left',
    marginBottom: 20,
  },
  userName: {
    fontStyle: 'italic',
    color: 'white',
    padding: 2,
  },
  messageBubble: {
    backgroundColor: '#7e7f9a',
    borderRadius: 10,
    padding: 10,
  },
  userMessage: {
  },
  myUserMessage: {
    color: 'white',
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  myMessageBubble: {
    backgroundColor: '#2d9efe',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-end',
  },
});

function Message({ chat, userID }) {
  if (chat.uid === userID) {
    return (
      <View style={styles.myMessageContainer}>
        <View style={styles.myMessageBubble}>
          <Text style={styles.myUserMessage}>{chat.message}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.messageContainer}>
      <Text style={styles.userName}>{chat.name}</Text>
      <View style={styles.messageBubble}>
        <Text style={styles.userMessage}>{chat.message}</Text>
      </View>
    </View>
  );
}

export default Message;
