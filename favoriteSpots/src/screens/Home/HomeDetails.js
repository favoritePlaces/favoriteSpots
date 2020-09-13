import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

const HomeDetails = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Details</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {places} = placeResponse;
  return {places};
};

export default connect(mapStateToProps, {})(HomeDetails);
