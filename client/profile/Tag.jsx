import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#f3de8a',
    width: 80,
    marginRight: 8,
    alignItems: 'center',
  },
});

function Tag({ interest }) {
  return (
    <View style={styles.container}>
      <Text>{interest}</Text>
    </View>
  );
}

export default Tag;
