import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import LinearView from '../sharedComponents/LinearView.jsx';
import SelectButton from './SelectButton.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

  },
});

function ChatSelection({ navigation }) {
  const { usersLeagues } = useContext(UsernameContext);
  return (
    <LinearView>
      <View style={styles.container}>
        {usersLeagues.length === 0 ? null : (
          usersLeagues.map((league) => (
            <SelectButton league={league} navigation={navigation} key={league.place_id} />
          ))
        )}
      </View>
    </LinearView>
  );
}

export default ChatSelection;
