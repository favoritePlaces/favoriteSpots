import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Platform,StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'native-base';
import {Button} from '../../components';

import {colors, fonts} from '../../style';
import { isUser } from '../../actions'

const Entrance = (props) => {
  useEffect(() => {
    console.log('entrance');
    props.isUser();
  }, []);

  if(props.loading) {
    return(
        <View style={{ flex:1 , alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size='large' />
        </View>
    )
}
  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: '#bb7cd6',
      }}>
   <StatusBar backgroundColor='#bb7cd6' barStyle='light-content'/>     
      <View
        style={styles.iconView}>
        <Icon style={styles.icon} name="home" />
      </View>

      <View
        style={styles.bodyView}>
        <Text
          style={styles.blackText}>
          Find your favorite spots
        </Text>

        <Button
          text={'Challenge accepted! Create an account'}
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}
        />
      </View>

      <View style={styles.footerView}>
        <Text style={styles.whiteText}>
          Already have an account?  
        </Text>
        <Text
            style={styles.comeIn}
            onPress={() => {
              props.navigation.navigate('SignIn');
            }}>
      
              Come In
          </Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
iconView:{
  flex: 1,
  
  alignItems: 'center',

}, 
icon:{
  color: '#ffc21c',
}, 
bodyView:{
  flex: 6,

  alignItems: 'center',
  justifyContent: 'center',
},
blackText:{
  fontWeight: 'bold',
  fontSize: fonts.main,
  marginBottom: 20,
  padding: 10,
  color:'white',
fontStyle:'italic',
  marginBottom:'15%'
},
footerView:{
  flex: 1,

   alignItems:'center',
   justifyContent:'center',
   flexDirection:'row'
  },
whiteText:{
  color:'white',
  fontStyle:'italic'
},
comeIn:{
  color:'#ffc21c',
  marginLeft:8,
  fontSize: fonts.small,
  fontWeight:'bold'
}

})



const mapStateToProps = ({ authResponse }) => {
    const { loading, user } = authResponse;
    return { loading, user };
};

export default connect(mapStateToProps, {isUser})(Entrance);