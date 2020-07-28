
import React from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';
import ReactNativeBiometrics  from 'react-native-biometrics';


export default class Test extends React.Component {

  componentDidMount(){
      //ios se hace de otra forma
      //Android
        
      let usr = ['usuario1','usuario2','usuario3','usuario4'];
      let pass = ['pass1','pass2','pass3','pass4'];
      let total = usr[0]+pass[0];

      /*ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
  .then((resultObject) => {
    const { success } = resultObject
 
    if (success) {

      ReactNativeBiometrics.createSignature({
        promptMessage: 'Sign in',
        payload: total+'algo'
      })
      .then((resultObject) => {
        const { success, signature } = resultObject;
        if (success) {
          console.log(signature)
          this.verifySignatureWithServer(signature)
        }
      }).catch(err=>{
        console.log('**************',err)
      })

    } else {
      console.log('user cancelled biometric prompt')
    }
  })
  .catch(() => {
    console.log('biometrics failed')
  })*/


    /*  ReactNativeBiometrics.createKeys('Confirm fingerprint')
                      .then((resultObject) => {
                        const { publicKey } = resultObject
                        console.log(publicKey)
                        this.verifySignatureWithServer(publicKey)
                      })*/

                      ReactNativeBiometrics.createSignature({
                        promptMessage: 'Sign in',
                        payload: total+'algo'
                      })
                      .then((resultObject) => {
                        const { success, signature } = resultObject;
                        if (success) {
                          console.log(signature)
                          this.verifySignatureWithServer(signature)
                        }
                      }).catch(err=>{
                        console.log('**************',err)
                      })
        
}
verifySignatureWithServer = (signature)=>{
  switch(signature){
    case 'NMbYaY+2/VcW5zsQi+fxI71pQGoZnvZC7sD0QQzMzOwphxb7PBF8Ub36pbuheJEg1ST8utultVW7x2kLfTQsYOCTnrYW8wl1ITO33sLiV3T84vDw8MGVYeBJQ6S/HXtdjhCS9mkgXzoIWCAv96RfY8KGvemu+5J/pHLIkm5/sYRmTmBsFMtM8MuPO+aMEjTtV9oxy6B3TvSCDjZ8Qq1m1Nl5QCeog914bo+OObvJKieDUB5R/SKblxd3p52mlPPfKqK1hqRRqOQVMLGlcl6qRTJNjgGH00HuwwAlP66KB3SuPySOLu+0chDIWZXiIAJMnyD/78Q3Cwv9rpOeratv/g==':
      console.log('usuario1');
      break;
default:
  console.log('No logeado en server')
  }
}
  componentWillUnmount() {
    
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
