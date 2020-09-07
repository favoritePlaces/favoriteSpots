import React, { useState, useEffect, useRef, useContext } from 'react';
import {
    Text,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {AuthContext} from '../../context';
import { Icon } from 'native-base'
import { Input, Button,CheckBox } from '../../components';
import { login } from '../../actions';
import { colors, fonts } from '../../style';

const SignIn = (props) => {

  //  const {signIn} = useContext(AuthContext);

    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('123456');
    const [checkButton, setCheckButton] = useState(true);



   

return(
    <SafeAreaView style={{flex: 1,backgroundColor:'#E7E5E3'}}>
    <KeyboardAvoidingView style={{flex: 1,padding:20}}>
      <ScrollView contentContainerStyle={{flex: 1,backgroundColor:'white',borderRadius:20}}>

                      {/* Logo  */}

          
        <View style={styles.headerView}>
          <Text style={styles.headerText}>LOGIN</Text>
        </View>

                       {/* Form Kısmı (Buttona kadar)  */}

        <View style={styles.formView}>
          <Input
            placeholder={'Email'}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />

          <Input
            placeholder={'Password'}
            secureTextEntry={checkButton}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <View style={styles.optionForPassView}>
            <CheckBox
              text="Hide Password"
              status={checkButton}
              onPress={() => setCheckButton(!checkButton)}
            />
            <TouchableOpacity>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <Button text={'Login'} 
          style={styles.button} 
          textStyle={styles.textStyle}
          onPress={() => {
            //  signIn()//comes from context provider
               const params = { email, password }
               props.login(params)

           }} />
        </View>


                        {/* Footer  */}

        <View style={styles.footerView}>
          
       
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
headerView: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
headerText: {
  fontSize: fonts.big,
  fontFamily: 'BalsamiqSans-Bold',
  letterSpacing: 3,
  color:colors.blue,
},
formView: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
optionForPassView: {
  width: '80%',
  marginBottom: '5%',
  flexDirection: 'row',
  justifyContent: 'space-around',
},
button: {
  width: '85%',
  backgroundColor: '#2F94FE',
},
textStyle:{
   //Button Text
   fontFamily: 'BalsamiqSans-Bold',
   letterSpacing:2

},
footerView: {
  flex: 0.5,
  alignItems: 'center',
},

});

const mapStateToProps = ({ authResponse }) => {
    const { loading, user } = authResponse;
    return { loading, user };
};

export default connect(mapStateToProps, {login})(SignIn);