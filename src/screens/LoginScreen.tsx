import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, StyleSheet} from 'react-native';
import {CustomButton, CustomInput} from '../components';
import {isEmptyOrNull, isValidEmail} from '../utils/commonFunctions';
import {NavigationService} from '../navigations/NavigationService';
import ScreenNames from '../navigations/ScreenNames';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');

  const onPressLogin = () => {
    console.log('onPressLogin', email, password);
    let isValid = true;
    if (isEmptyOrNull(email)) {
      setEmailErrorMessage('Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailErrorMessage('Please enter valid email');
      isValid = false;
    }

    if (isEmptyOrNull(password)) {
      setPasswordErrorMessage('Please enter your password');
      isValid = false;
    }
    if (isValid) {
      setEmailErrorMessage('');
      setPasswordErrorMessage('');
      //navigation
      NavigationService.navigate(ScreenNames.PokemonScreen);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://pokeapi.co/static/pokeapi_256.3fa72200.png',
        }}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <CustomInput
        placeholder={'Email'}
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        isError={emailErrorMessage !== ''}
        errorMessage={emailErrorMessage}
      />
      <CustomInput
        placeholder={'Password'}
        value={password}
        onChangeText={setPassword}
        keyboardType="visible-password"
        secureTextEntry={true}
        isError={passwordErrorMessage !== ''}
        errorMessage={passwordErrorMessage}
      />
      <CustomButton title="Login" onPress={onPressLogin} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginRight: 8,
    alignSelf: 'center',
  },
});

export default LoginScreen;
