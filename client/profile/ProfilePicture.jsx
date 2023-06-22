import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
  },
  username: {
    color: '#f9f8f8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: '#f9f8f8',
    borderWidth: 1,
    margin: 10,
  },
});

function ProfilePicture({ picture, name }) {
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.image} source={{ uri: picture }} />
      <Text style={styles.username}>{name}</Text>
    </View>
  );
}

export default ProfilePicture;
