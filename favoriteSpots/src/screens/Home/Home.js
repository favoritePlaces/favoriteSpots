import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

const Home = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {list} = placeResponse;
  return {list};
};

export default connect(mapStateToProps, {})(Home);
