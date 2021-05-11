import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.imageLogo} source={require('./android/app/src/main/assets/images/mytvchain.jpg')} />
      <Text style={styles.logoText}>MyTVchain</Text>
      <Text style={styles.text}>Sequre and  high quality meetings</Text>
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>Chat with your team and you will</Text>
        <Text style={styles.wrapperText}>find all your recent meetings here.</Text>
        <Icon name="tachometer-alt" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 60,
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  wrapper: {
    width: 300,
    height: 200,
    marginTop: 100,
    backgroundColor: "#D5E5FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

  },
  imageLogo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 25,
    fontFamily: "Anton-Regular"
  },
  text: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: "PaytoneOne-Regular"
  },
  wrapperText: {
    fontSize: 18,
    fontFamily: "Anton-Regular"

  }
})

export default App;
