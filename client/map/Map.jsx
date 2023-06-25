import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from './CustomMarker.jsx';
import LeagueCard from './LeagueCard.jsx';
import ContinueSearch from './ContinueSearch.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';

export default function LeagueMap({ navigation, route }) {
  const { rec } = route.params;
  const { userProfile } = useContext(UsernameContext);

  const [displayLeague, setDisplayLeague] = useState('');
  const [movingLocation, setMovingLocation] = useState({});
  const [leaguesOnMap, setLeaguesOnMap] = useState(rec);
  const [search, setSearch] = useState(false);

  let counter = 0;
  function userMoveMap(Region) {
    if (counter > 0) {
      const { latitude, longitude } = Region;
      setMovingLocation({
        latitude,
        longitude,
      });
      setSearch(true);
    }
    counter += 1;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: userProfile.location.latitude,
          longitude: userProfile.location.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        onRegionChangeComplete={userMoveMap}
      >
        {leaguesOnMap.map((league) => (
          <CustomMarker
            key={league.place_id}
            league={league}
            displayLeague={displayLeague}
            setDisplayLeague={setDisplayLeague}
          />
        ))}
      </MapView>
      {displayLeague ? <LeagueCard currentLeague={displayLeague} navigation={navigation} /> : null}
      {search
        ? (
          <ContinueSearch
            movingLocation={movingLocation}
            setLeaguesOnMap={setLeaguesOnMap}
            setSearch={setSearch}
          />
        ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
});
