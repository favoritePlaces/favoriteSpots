import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

const MyFavoriteList = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Your myPlaces. there will be personal records and the ones you chose
          from your friend groups' myPlacess
        </Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {myPlaces} = placeResponse;
  return {myPlaces};
};

export default connect(mapStateToProps, {})(MyFavoriteList);
