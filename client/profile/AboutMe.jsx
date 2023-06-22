import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerText: {
    color: '#CEB992',
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutMe: {
    color: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CEB992',
    padding: 5,
    margin: 10,
  },
});

function AboutMe({ aboutMe }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>About Me</Text>
      <Text style={styles.aboutMe}>{aboutMe}</Text>
    </View>
  );
}

export default AboutMe;
