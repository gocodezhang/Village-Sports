import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

function CustomMarker({ league, displayLeague, setDisplayLeague }) {
  const [markerColor, setMarkerColor] = useState('black');
  function pressHandler() {
    setDisplayLeague(displayLeague.place_id === league.place_id ? '' : league);
  }

  return (
    <Marker
      coordinate={{
        latitude: league.geometry.location.lat,
        longitude: league.geometry.location.lng,
      }}
      opacity={1}
      onPress={pressHandler}
    >
      <Ionicons name="ios-location-sharp" size={28} color={displayLeague.place_id === league.place_id ? 'red' : 'black'} />
    </Marker>
  );
}

export default CustomMarker;
