import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import LinearView from '../sharedComponents/LinearView.jsx';
import RecommendCard from './RecommendCard.jsx';
import pictures from '../sharedComponents/mockPictures.jsx';

function Recommend({ route, navigation }) {
  const [rec, setRec] = useState([]);
  const { selected } = route.params;

  function randomNumber() {
    return Math.floor(Math.random() * (pictures.length));
  }

  useEffect(() => {
    const keywords = selected.join(' leagues or ');
    console.log(`local ${keywords} leagues in zipcode 95035`);
    const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
    const params = {
      query: `local ${keywords} leagues in zipcode 95035`,
      radius: 5000,
      key: Constants.expoConfig.extra.googleKey,
    };

    axios.get(url, { params })
      .then((response) => {
        const recommendLeagues = response.data.results.map((league) => {
          league.picture = pictures[randomNumber()];
          return league;
        });
        setRec(recommendLeagues);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <LinearView>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {rec.map((league) => (
          <RecommendCard
            league={league}
            key={league.place_id}
            navigation={navigation}
          />
        ))}
        <TouchableOpacity onPress={() => navigation.navigate('Map', { rec })} style={styles.button}>
          <Text style={styles.buttonText}>Map View</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
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
    marginRight: 100,
  },
  buttonText: {
    color: 'white',
  },
});

export default Recommend;
