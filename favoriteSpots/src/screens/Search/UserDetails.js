import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {fonts, colors} from '../../style'

const UserDetails = (props) => {
  
useEffect(()=> {
  console.log(props.route)
})

  return (
    <View>
    <View style={styles.header}></View>
    <View style={styles.info}>
    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>

  <Text style = {styles.name}>{props.route.params.name}</Text>
  <Text>{props.route.params.username}</Text>
  </View>
    <View style={styles.body}>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Add in your one of the friend hubs! </Text>  
        </TouchableOpacity>              
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Let's create a new friend hub!</Text> 
        </TouchableOpacity>

  </View>
</View>

  );
};

const mapStateToProps = ({placeResponse}) => {
  const {list} = placeResponse;
  return {list};
};

export default connect(mapStateToProps, {})(UserDetails);


const styles = StyleSheet.create({
  header:{
    backgroundColor: colors.line,
    height:200,
  },
  info :{
alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    marginTop:-60
  },
  name:{
    fontSize:fonts.small,
    fontWeight:'600',
  },
  body:{
    padding: 30,
    alignItems: 'center'
  },


  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: colors.addition,
  },
});
