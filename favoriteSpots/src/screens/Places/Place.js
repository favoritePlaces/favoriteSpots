import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'native-base';
import {colors, fonts} from '../../style';
import {connect} from 'react-redux';
import * as RootNavigation from '../../RootNavigation.js';
const Place = (props) => {
  //icon section will be added when friendGroup places available
  const {image, placeName, user, desc, createdDate} = props.data;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        console.log('clicked');
        RootNavigation.navigate('PlaceDetails', props.data.id); //place id will be sent
      }}
      style={{
        padding: 20,
        borderBottomWidth: 0.5,
        borderColor: colors.somon,
        flexDirection: 'row',
      }}>
      <View style={{flex: 9, marginLeft: 10}}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          {placeName}
          <Text
            style={{
              color: colors.somon,
              fontWeight: '100',
              fontSize: 10,
            }}></Text>
        </Text>

        <Text style={{fontSize: fonts.small, marginTop: 5, marginBottom: 10}}>
          {desc}
        </Text>

        {image && (
          <View>
            <Image
              source={{uri: image}}
              style={{width: '100%', height: 150}}
              resizeMode="cover"
            />
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 100,
            marginTop: 10,
          }}></View>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {myPlaces} = placeResponse;
  return {myPlaces};
};

export default connect(mapStateToProps, {})(Place);
