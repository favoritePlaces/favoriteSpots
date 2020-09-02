import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

import {Input, Button, CheckBox} from '../../components';
import {login} from '../../actions';
import {colors, fonts} from '../../style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignIn = (props) => {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('1234');
  const [checkButton, setCheckButton] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
 
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
            onPress={()=>{
                console.log('Tıklandı')
            }} />
          </View>


                          {/* Footer  */}

          <View style={styles.footerView}>
            <View style={styles.lineView}>
              <View style={styles.line} />
              <Text style={styles.lineTex}>OR</Text>
              <View style={styles.line} />
            </View>
            <TouchableOpacity>
              <Text style={styles.createAccount}>Creat an Acount</Text>
            </TouchableOpacity>
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
    color: '#2F94FE',
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
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  lineTex: {
    color: '#2F94FE',
  },
  line: {
    width: '35%',
    height: 1,
    backgroundColor: '#bb7cd6',
    margin: 10,
  },
  createAccount: {
    marginTop: 15,
    color: '#2F94FE',
  },

});

const mapStateToProps = ({authResponse}) => {
  const {loading, user} = authResponse;
  return {loading, user};
};

export default connect(mapStateToProps, {login})(SignIn);
