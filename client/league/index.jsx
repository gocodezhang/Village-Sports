import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import LinearView from '../sharedComponents/LinearView.jsx';
import StarRating from './StarRating.jsx';
import Details from './Details.jsx';
import Buttons from './Buttons.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';

const styles = StyleSheet.create({
  name: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 10,
  },
});

function League({ route, navigation }) {
  const { place_id } = route.params.league;
  const { userProfile, userID } = useContext(UsernameContext);

  const [leagueDetails, setLeagueDetails] = useState({});
  const [userInLeague, setUserInLeague] = useState(false);
  const [userWishLeague, setUserWishLeague] = useState(false);

  useEffect(() => {
    if (Object.keys(userProfile).length !== 0) {
      const { currentLeagues, wishList } = userProfile;
      setUserInLeague(currentLeagues.includes(place_id));
      setUserWishLeague(wishList.includes(place_id));
    }
    const url = 'https://maps.googleapis.com/maps/api/place/details/json';
    const params = {
      place_id,
      key: Constants.expoConfig.extra.googleKey,
      fields: 'name,formatted_address,geometry,place_id,formatted_phone_number,opening_hours,website,rating,user_ratings_total',
    };
    axios.get(url, { params })
      .then((result) => {
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
            hours={leagueDetails.opening_hours ? leagueDetails.opening_hours.weekday_text : null}
            phoneNumber={leagueDetails.formatted_phone_number}
            website={leagueDetails.website}
          />
          <Buttons
            userInLeague={userInLeague}
            userWishLeague={userWishLeague}
            userID={userID}
            placeID={place_id}
          />
        </>
      )}
    </LinearView>
  );
}

export default League;
