import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

const Settings = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {places} = placeResponse;
  return {places};
};

export default connect(mapStateToProps, {})(Settings);
