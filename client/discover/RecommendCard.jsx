import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  photo: {
    width: 50,
    height: 50,
  },
});

function RecommendCard({ league, navigation }) {
  return (
    <TouchableOpacity key={league.place_id} style={styles.container} onPress={() => (navigation.navigate('League', { league }))}>
      <Text style={styles.headerText}>
        {league.name}
      </Text>
      <Text>{league.rating}</Text>
      <Text>{league.formatted_address}</Text>
    </TouchableOpacity>
  );
}

export default RecommendCard;
// onPress={() => navigation.navigate('League', { league })}
