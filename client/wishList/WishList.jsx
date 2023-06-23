import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import LinearView from '../sharedComponents/LinearView.jsx';
import SavedLeagueCard from './SavedLeagueCard.jsx';
import AddLeagueCard from './AddLeagueCard.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';
import pictures from '../sharedComponents/mockPictures.jsx';

export default function WishList({ navigation }) {
  const { userProfile } = useContext(UsernameContext);
  const [saveList, setSaveList] = useState([]);

  useEffect(() => {
    const { wishList } = userProfile;
    const url = 'https://maps.googleapis.com/maps/api/place/details/json';

    if (wishList) {
      Promise.all(wishList.map((place_id) => {
        const params = {
          place_id,
          key: Constants.expoConfig.extra.googleKey,
          fields: 'name,formatted_address,geometry,place_id,formatted_phone_number,opening_hours,website,rating,user_ratings_total',
        };
        return axios.get(url, { params });
      }))
        .then((results) => {
          const savedLeagues = results.map((result) => (result.data.result));
          console.log(savedLeagues);
          setSaveList(savedLeagues);
        })
        .catch((err) => (console.log(err)));
    }
  }, [userProfile]);

  return (
    <LinearView>
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          {saveList.length === 0 ? null : saveList.map((league, i) => (
            <SavedLeagueCard
              navigation={navigation}
              league={league}
              key={league.place_id}
              picture={pictures[i]}
            />
          ))}
          <AddLeagueCard navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </LinearView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 15,
    paddingBottom: 70,
  },
});
