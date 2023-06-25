import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import pictures from '../sharedComponents/mockPictures.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#347fc4',
    margin: 8,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 36,
    zIndex: 10,
  },
  text: {
    color: 'white',
  },
});

function ContinueSearch({ movingLocation, setLeaguesOnMap, setSearch }) {
  const { selected } = useContext(UsernameContext);
  function randomNumber() {
    return Math.floor(Math.random() * (pictures.length));
  }

  function searchHandler() {
    console.log(movingLocation);
    const keywords = selected.join(' leagues or ');
    const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
    const params = {
      query: `local ${keywords} leagues`,
      radius: 5000,
      key: Constants.expoConfig.extra.googleKey,
      location: `${movingLocation.latitude},${movingLocation.longitude}`,
    };

    axios.get(url, { params })
      .then((response) => {
        const leaguesBaseOnLoc = response.data.results.map((league) => {
          league.picture = pictures[randomNumber()];
          return league;
        });
        setLeaguesOnMap(leaguesBaseOnLoc);
      })
      .catch((error) => {
        console.log(error);
      });

    setSearch(false);
  }

  return (
    <TouchableOpacity style={styles.button} onPress={searchHandler}>
      <Text style={styles.text}>Search Nearby</Text>
    </TouchableOpacity>
  );
}

export default ContinueSearch;
