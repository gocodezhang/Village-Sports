import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, SafeAreaView } from 'react-native';
import * as Location from 'expo-location';
import tw from 'tailwind-react-native-classnames';
import { LinearGradient } from 'expo-linear-gradient';
import { collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import RenderInterest from './RenderInterest.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';

const interests = [
  {
    id: 1,
    category: 'Sports',
    items: ['Football', 'American Football', 'Basketball', 'Hockey', 'Tennis', 'Baseball', 'Softball', 'Swimming'],
  },
  {
    id: 2,
    category: 'Games',
    items: ['Video Games', 'Board Games', 'Chess', 'Puzzles'],
  },
];

function Discover({ navigation }) {
  const {
    userID, userProfile, selected, setSelected,
  } = useContext(UsernameContext);
  // const [location, setLocation] = useState({
  //   // latitude: 37.6052256618502,
  //   // longitude: -122.19287374222353,
  //   latitude: 37.91789984098183,
  //   longitude: -109.695925503991,
  // });

  useEffect(() => {
    if (Object.keys(userProfile.location).length === 0) {
      Location.requestForegroundPermissionsAsync()
        .then(({ status }) => {
          if (status === 'granted') {
            return Location.getCurrentPositionAsync();
          }
        })
        .then((result) => {
          if (result) {
            const { coords } = result;
            const q = query(collection(db, 'users'), where('uid', '==', userID));
            return getDocs(q)
              .then((querySnapshot) => {
                const userDocRef = querySnapshot.docs[0].ref;
                return updateDoc(userDocRef, {
                  location: {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                  },
                });
              });
          }
        })
        .then(() => (console.log('Saved user location')))
        .catch((err) => (console.log(err)));
    }
  }, []);

  return (
    <LinearGradient style={[styles.gradient]} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>
        <View style={[tw`flex flex-col flex-1 justify-between`]}>
          <View style={[tw`m-2`]}>
            {interests.map((interest) => (
              <RenderInterest key={interest.id} interest={interest} selected={selected} setSelected={setSelected}/>
              ))}
          </View>
            <TouchableOpacity style={[styles.button]} onPress={() =>navigation.navigate('Recommend', {selected: selected})}>
              <Text style={[tw`text-white self-center`]}>Go!</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: '#272838'
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  goldBackground: {
    backgroundColor: '#CEB992',
  },
  button: {
    backgroundColor: '#73937E',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 100,
    marginRight: 100
 },
})

export default Discover;