import React, {useState}from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image, Modal, Pressable, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LeagueView({ league, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [members, setMembers] = useState([]);
  const [event, setEvents] = useState([]);

  return (
    <LinearGradient style={[styles.gradient]} colors={["#272838", "rgba(206, 185, 146, 0.35)"]}>
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={tw`text-center text-white text-2xl`}>{league.name}</Text>
        {/* <Image
          style={{ width: '75%', height: '15%', margin: '5%' }}
          source={{ uri: `${league.picture}` }}
        /> */}
        <View>
          <TouchableOpacity style={styles.appButtonContainer} onPress={() =>
          navigation.navigate('chat')}>
            <Text style={tw`border-b border-gray-300 py-2 text-center text-white`}>Chat/Join League</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={tw`border-b border-gray-300 py-2 text-center text-white`}>Add to Saved league</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#FFFFFF50', borderRadius: '10', padding: '5%' }} >
            <Text style={tw`text-center text-white text-lg`}>League Details</Text>
            <Text style={{ color: 'white', fontSize: 18 }} >Name: {league.name}</Text>
            <Text style={{ color: 'white', fontSize: 18 }} >Teams:</Text>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
   </LinearGradient >
  )

}

export default LeagueView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: -350,
    padding: 16

  },
  gradient: {
    flex: 1,
    backgroundColor: '#272838'
  },
  appButtonContainer: {
    elevation: 10,
    backgroundColor: "#FFFFFF50",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    width: 300
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingVertical: 10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#CEB992',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});