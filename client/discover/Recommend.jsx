import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';
import RecommendCard from './RecommendCard.jsx';
import axios from 'axios';


function Recommend({ route, navigation }) {
  const [rec, setRec] = useState([]);
  const { selected } = route.params;

  useEffect(() => {
    const keywords = selected.join(' leagues or ');
    console.log(`local ${keywords} leagues in zipcode 95035`);
    const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
    const params = {
      query: `local ${keywords} leagues in zipcode 95035`,
      radius: 5000,
      key: 'AIzaSyCNTRLS8gSab94YId9HJwKG7EE46Bs1-vc',
    };

    axios.get(url, { params })
      .then((response) => {
        console.log(response.data.results);
        setRec(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <LinearView>
      <ScrollView>
        {rec.map((league) => (
          <RecommendCard league={league} key={league.place_id} navigation={navigation} />
        ))}
        <TouchableOpacity onPress={() => navigation.navigate('map', { rec })} style={styles.button}>
          <Text>Map View</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearView>
  );
}

const styles = StyleSheet.create({
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
});

export default Recommend;
