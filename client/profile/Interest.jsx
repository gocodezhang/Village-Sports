import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tag from './Tag.jsx';

/* eslint-disable react/no-array-index-key */
const styles = StyleSheet.create({
  interestContainer: {
    margin: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    color: '#CEB992',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

function Interest({ interests }) {
  return (
    <View style={styles.interestContainer}>
      <Text style={styles.headerText}>Interests</Text>
      <View style={styles.tagContainer}>
        {interests.map((interest, i) => (
          <Tag interest={interest} key={i} />
        ))}
      </View>
    </View>
  );
}

export default Interest;
