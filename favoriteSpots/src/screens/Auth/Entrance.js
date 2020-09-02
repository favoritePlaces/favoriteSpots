import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'native-base';
import {Button} from '../../components';

import {colors, fonts} from '../../style';

const Entrance = (props) => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: '#bb7cd6',
      }}>
      <StatusBar backgroundColor="#348BFF" barStyle="light-content" />
      <View style={styles.iconView}>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.bodyView}>
        <Text style={styles.mainText}>Find your favorite spots</Text>

        <Button
          text={'Challenge accepted! Create an account'}
          textStyle={{fontWeight: 'bold',}}
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}
        />
      </View>

      <View style={styles.footerView}>
        <Text style={styles.whiteText}>Already have an account?</Text>
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
  iconView: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: '#2F94FE',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor:'#2F94FE'
  },
  logo: {
    width: '52%',
    height: '70%',
  },
  bodyView: {
    flex: 3,
    alignItems: 'center',
    
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: fonts.main,
    marginBottom: 20,
    padding: 10,
    color: 'white',
    fontStyle: 'italic',
    marginBottom: '15%',
    marginTop:'20%'
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  whiteText: {
    color: 'white',
    fontStyle: 'italic',
  },
  comeIn: {
    color: '#2F94FE',
    marginLeft: 8,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },
});

const mapStateToProps = ({authResponse}) => {
  const {loading} = authResponse;
  return {loading};
};

export default connect(mapStateToProps, {})(Entrance);
