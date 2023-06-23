import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { collection, query, where, getDocs, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../firebase';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#5d536b',
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 48,
    padding: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
});

function Buttons({ userInLeague, userWishLeague, userID, placeID }) {
  function AddWishList() {
    const q = query(collection(db, 'users'), where('uid', '==', userID));
    getDocs(q)
      .then((querySnapshot) => {
        const userDocRef = querySnapshot.docs[0].ref;
        return updateDoc(userDocRef, {
          wishList: arrayUnion(placeID),
        });
      })
      .then(() => (console.log('successfully added')))
      .catch((err) => (console.log(err)));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={AddWishList}>
        <Ionicons name="add" size={24} color="#CEB992" />
        <Text style={styles.text}>Save League</Text>
      </TouchableOpacity>
      {userInLeague
        ? (
          <TouchableOpacity style={styles.button}>
            <Ionicons name="chatbox" size={24} color="#CEB992" />
            <Text style={styles.text}>Go to Chat</Text>
          </TouchableOpacity>
        ) : null}
    </View>
  );
}

export default Buttons;
