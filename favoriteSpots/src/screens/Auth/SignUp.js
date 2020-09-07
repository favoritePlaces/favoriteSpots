import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import {Icon} from 'native-base';
import {Input, Button} from '../../components';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {signUp} from '../../actions';
import {StackActions} from '@react-navigation/native';

import * as RootNavigation from '../../RootNavigation';
import {colors, fonts} from '../../style';

const SignUp = (props) => {
  const [name, setName] = useState('test');
  const [username, setUsername] = useState('test1');
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123456');

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#E7E5E3'}}>
           <ScrollView contentContainerStyle={{flex:1,padding:20,}}>
      <KeyboardAvoidingView style={{flex: 1,backgroundColor:'white',borderRadius:20}}>
           {/* Header  */}
        <View
          style={styles.headerView}>
          <Text
            style={styles.headerText}>
            Welcome
          </Text>
        </View>

        {/* Form  */}

        <View style={styles.formView}>
         
            <Input
              placeholder={'Name'}
              value={name}
              onChangeText={(name) => setName(name)}
            />

            <Input
              placeholder={'User Name'}
              value={username}
              onChangeText={(username) => setUsername(username)}
            />

            <Input
              placeholder={'Email'}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />

            <Input
              placeholder={'Password'}
              secureTextEntry
              value={password}
              onChangeText={(password) => setPassword(password)}
            />

<Button
            text={'Sign Up'}
            onPress={() => {
              const params = {email, password, name, username};
              props.signUp(params);
            }}
            style={styles.button}
          />
     

               
     
    
        </View>

                {/* Footer  */}
           
        <View style={styles.footerView}>
        <View style={styles.footerContent}>
            <View style={styles.lineView}>
              <View style={styles.line} />
              <Text style={styles.lineTex}>OR</Text>
              <View style={styles.line} />
            </View>

          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
           <View style={{backgroundColor:'red',width:75,height:75,borderRadius:50}}>
             

           </View>
           <View style={{backgroundColor:'red',width:'25%',height:'50%',borderRadius:50}}>
             

             </View>
             <View style={{backgroundColor:'red',width:75,height:75,borderRadius:50}}>
             

             </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  headerView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  
  },
  headerText:{
    fontFamily:'BalsamiqSans-Bold',
    fontSize:fonts.main,
    letterSpacing: 3,
 },
formView:{
  flex: 3,
  alignItems:'center',
  justifyContent:'center',
  paddingTop:'5%'
  },

  button:{
    width: '85%',
  backgroundColor: '#2F94FE',
},
footerView:{
  flex: 1.5, 

},
footerContent: {

  alignItems: 'center',
  justifyContent:'flex-start',

 
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
})
const mapStateToProps = ({authResponse}) => {
  const {loading, user} = authResponse;
  return {loading, user};
};

export default connect(mapStateToProps, {signUp})(SignUp);
