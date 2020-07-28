
import React from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

export default class Test extends React.Component {

  componentDidMount(){
      //ios se hace de otra forma
      //Android
      FingerprintScanner.isSensorAvailable().then(sensor=>{
            console.log('sensor',sensor);
            FingerprintScanner.authenticate({Title:'Autenticar',
            subTitle:'Autenticar subtitulo',
            description:'Autenticar',
            cancelButton:'Cancelar',
            onAttempt:()=>{Alert.alert('Intentar de nuevo')}
        }).then(()=>{
          //hacer login
            console.log('Login exitoso')
        }).catch(err=>{
            Alert.alert('Fallido',err.message)
        })
      }).catch(err=>{
            console.log(err);
      })
  }
  componentWillUnmount() {
    FingerprintScanner.release();
  }

  render(){
          return (
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
          );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
