import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import LinearView from '../sharedComponents/LinearView.jsx';
import StarRating from './StarRating.jsx';
import Details from './Details.jsx';
import { db } from '../../firebase';

const styles = StyleSheet.create({
  name: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
});

function League({ route, navigation }) {
  const { place_id } = route.params.league;
  const [leagueDetails, setLeagueDetails] = useState({});

  useEffect(() => {
    const url = 'https://maps.googleapis.com/maps/api/place/details/json';
    const params = {
      place_id,
      key: Constants.expoConfig.extra.googleKey,
      fields: 'name,formatted_address,geometry,place_id,formatted_phone_number,opening_hours,website,rating,user_ratings_total',
    };
    axios.get(url, { params })
      .then((result) => {
        console.log(result.data.result);
        setLeagueDetails(result.data.result);
      })
      .catch((err) => (console.log(err)));
  }, []);

  return (
    <LinearView>
      {Object.keys(leagueDetails).length === 0 ? null : (
        <>
          <Text style={styles.name}>{leagueDetails.name}</Text>
          <StarRating
            maxStar={5}
            rating={leagueDetails.rating}
            numberOfRating={leagueDetails.user_ratings_total}
          />
          <Details
            address={leagueDetails.formatted_address}
            hours={leagueDetails.opening_hours.weekday_text}
            phoneNumber={leagueDetails.formatted_phone_number}
          />
        </>
      )}
    </LinearView>
  );
}

export default League;
