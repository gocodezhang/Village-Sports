import React, { useState, useEffect, useContext } from 'react';
import { Image, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { db, auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import LinearView from '../sharedComponents/LinearView.jsx';
import Logo from '../../assets/VillageSportsLogo.png';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';

//jayz1995@gmail.com

function Login({ navigation, route }) {
  const { setUserID } = useContext(UsernameContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserID(result.user.uid);
      })
      .catch((err) => (console.log(err.message)));
  }

  return (
    <LinearView>
      <View style={styles.bigContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View>
            <Image
              style={styles.logo}
              source={Logo}
            />
          </View>
          <View
            style={styles.inputContainer}
          >
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="white"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="white"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.loginButton}
            >
              <Text
                style={styles.loginText}
              >Login</Text>
            </TouchableOpacity>
          </View>

          <View
            style={styles.signUpContainer}
          >
            <Text
              style={styles.signUpText}
            >Don't have an account? </Text>
            <TouchableOpacity
              onPress={e => {
                navigation.navigate('SignUp');
              }}
            >
              <Text
                style={styles.goToSignUp}
              >Sign Up</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={seedDB}
            >
              <Text>Seed DB</Text>
            </TouchableOpacity> */}

          </View>
        </KeyboardAvoidingView>
      </View>
    </LinearView>
  );
};
export default Login;

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   width: '80%'
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    backgroundColor: '#FFFFFF30',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
   minWidth: '100%',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#CEB992',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    minWidth: '100%',
  },
  loginText: {
    textAlign: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpText: {
    color: '#FFFFFF60',
  },
  goToSignUp: {
    color: 'white',
    textDecorationLine: 'underline'
  }
});
