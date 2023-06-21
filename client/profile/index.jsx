import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, TouchableOpacity, Text, View, TextInput, StyleSheet } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx'
import { useIsFocused } from '@react-navigation/native'
import { db } from '../../firebase.js';
import UsernameContext from '../sharedComponents/UsernameContext.jsx'



function Profile() {
  const { userProfile } = useContext(UsernameContext);

  return (
    <LinearView>
      <Image style={styles.image} source={{ uri: userProfile.picture }} />
      <Text>testing</Text>
    </LinearView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default Profile;
