import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starContainer: {
    alignSelf: 'flex-start',
    width: 122,
  },
  emptyStars: {
    flexDirection: 'row',
    position: 'absolute',
  },
  numberReview: {
    color: 'white',
  },
});

/* eslint "react/no-array-index-key":0 */
function StarRating({ maxStar, rating, numberOfRating }) {
  const arr = new Array(maxStar).fill(1);
  return !rating ? null : (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <View style={{
          flexDirection: 'row', zIndex: 2, overflow: 'hidden', width: `${(rating / maxStar) * 100}%`,
        }}
        >
          {arr.map((element, index) => (
            <AntDesign key={index} name="star" size={24} color="#CEB992" />
          ))}
        </View>
        <View style={styles.emptyStars}>
          {arr.map((element, index) => (
            <AntDesign key={index} name="star" size={24} color="#7e7f9a" />
          ))}
        </View>
      </View>
      <Text style={styles.numberReview}>{`(${numberOfRating})`}</Text>
    </View>
  );
}

export default StarRating;
