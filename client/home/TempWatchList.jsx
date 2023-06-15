import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';

import LeaguesSaved from '../wishList/LeaguesSaved.jsx';

import { mockData } from '../sharedComponents/mockData.js';

export default function TempWatchList({ navigation }) {
  // temporarily rendering with a useState. Will implement Firebase and change logic after styling is set
  const [wishList, setWishList] = useState(mockData.leagues);
  return (
    <LinearView>
      <LeaguesSaved navigation={navigation} wishList={wishList} />
    </LinearView>
  )
}