import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CEB992',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 200,
  },
  headerText: {
    color: '#f3de8a',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo: {
    width: '50%',
    height: '50%',
    borderRadius: 10,
    margin: 8,
  },
  address: {
    color: 'white',
    paddingHorizontal: 8,
    fontSize: 12,
  },
});

function RecommendCard({ league, navigation }) {
  return (
    <TouchableOpacity key={league.place_id} style={styles.container} onPress={() => (navigation.navigate('League', { league }))}>
      <Text style={styles.headerText}>
        {league.name}
      </Text>
      <Image style={styles.photo} source={{ uri: league.picture }} />
      <Text style={styles.address}>{league.formatted_address}</Text>
    </TouchableOpacity>
  );
}

export default RecommendCard;
// onPress={() => navigation.navigate('League', { league })}
