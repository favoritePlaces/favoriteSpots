import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

const PlaceDetails = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Place Details/photos, comments, which fiend groups has made this place
          their favorite, tags. there should be offer option to your other
          friend groups
        </Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {myPlaces} = placeResponse;
  return {myPlaces};
};

export default connect(mapStateToProps, {})(PlaceDetails);
