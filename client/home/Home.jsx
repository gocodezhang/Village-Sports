import React, { useState, useContext, useEffect } from 'react';
import { Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import axios from 'axios';
import Constants from 'expo-constants';
import { db } from '../../firebase';
import LinearView from '../sharedComponents/LinearView.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';

import LeagueCard from './LeagueCard.jsx';
import Announcements from './Announcements.jsx';
import teams from '../sharedComponents/mockTeams.jsx';

export default function Home({ navigation }) {
  const [usersLeagues, setUsersLeagues] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const { userID } = useContext(UsernameContext);
  const isFocused = useIsFocused();

  function getAnnouncements(leagues) {
    const announce = leagues.map((league) => (
      {
        teamName: league.leagueName,
        announcements: league.teamInfo.announcements,
      }
    ));
    setAnnouncements(announce);
  }

  useEffect(() => {
    const q = query(collection(db, 'users'), where('uid', '==', userID));
    getDocs(q)
      .then((querySnapshot) => {
        const user = querySnapshot.docs[0].data();
        const { currentLeagues } = user;

        const url = 'https://maps.googleapis.com/maps/api/place/details/json';
        return Promise.all(currentLeagues.map((place_id) => {
          const params = {
            place_id,
            key: Constants.expoConfig.extra.googleKey,
            fields: 'name,formatted_address,geometry,place_id,formatted_phone_number,opening_hours,website,rating,user_ratings_total',
          };
          return axios.get(url, { params });
        }));
      })
      .then((results) => {
        const leagues = results.map((result, i) => {
          const league = result.data.result;
          league.teamInfo = teams[i];
          return league;
        });
        setUsersLeagues(leagues);
        getAnnouncements(leagues);
      })
      .catch((err) => (console.log(err)));
  }, []);

  return (
    <LinearView>
      <Text style={styles.myLeagues}>My Leagues</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} style={styles.carousel}>
        {usersLeagues.length === 0 ? null : usersLeagues.map((league => <LeagueCard league={league} key={league.place_id}/>))}
      </ScrollView>
        <Text style={styles.myLeagues}>Announcements</Text>
      <ScrollView style={styles.announcementContainer}>
        {announcements.length === 0 ? null : announcements.map((announcement, i) => <Announcements teamName={announcement.teamName} announceList={announcement.announcements} key={i}/>)}
      </ScrollView>
      <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Discover')
      }>
        <Text style={styles.discover}>Discover</Text>
      </Pressable>
    </LinearView>
  )
}

const styles = StyleSheet.create({
  myLeagues: {
    color: '#CEB992',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'center'
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
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
  announcementContainer: {
    backgroundColor: '#D9D9D918',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    height: 160
  },
  discover: {
    color: 'white',
    alignSelf: 'center'
  }
})
