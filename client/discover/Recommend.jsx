import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { mockData } from '../sharedComponents/mockData.js';
import axios from 'axios';

import tw from 'tailwind-react-native-classnames'

const Recommend = ({route, navigation}) => {
  const { leagues } = mockData;
  const [rec, setRec] = useState(leagues);
  const { selected } = route.params

  var config = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyCNTRLS8gSab94YId9HJwKG7EE46Bs1-vc',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <LinearGradient style={[styles.gradient]} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>
        <View style={[tw`flex flex-col flex-1 justify-between h-1/4`]}>
          <View style={[tw`h-1/4`]}>
            {rec.slice(0,3).map(league => (
              <TouchableOpacity key={league.id} onPress={() => navigation.navigate('League', {league: league})} style={[styles.round, tw`self-center border border-gray-500 p-2 w-5/6 my-1`]}>
                <Text style={[tw`text-xl text-white`]}>
                  {league.name}
                </Text>
                <Text style={[styles.goldBackground, styles.round, tw`self-start my-1 p-1`, {width: 'auto'}]}>
                  {league.sport}
                </Text>
                <Image style={[tw`self-center h-2/3 w-5/6 mb-5`]} source={{uri: league.picture}}/>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('map', {rec: rec})} style={[styles.button]}>
            <Text style={[tw`self-center text-white`]}>Map View</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: '#272838'
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
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
    marginRight: 100
 },
 round: {
  borderRadius: 10
 }
})

export default Recommend