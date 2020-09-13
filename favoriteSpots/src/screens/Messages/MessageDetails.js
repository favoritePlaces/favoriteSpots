import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Header} from '../../components';
import {connect} from 'react-redux';
import {fonts, colors, appName} from '../../style';
import {getFriendGroups} from '../../actions';

const MessageDetails = (props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = ({
  placeResponse,
  authResponse,
  friendGroupResponse,
  messageResponse,
}) => {
  const {messages} = messageResponse;
  const {myPlaces} = placeResponse;
  const {user} = authResponse;
  const {friendGroups} = friendGroupResponse;
  return {myPlaces, user, friendGroups, messages};
};

export default connect(mapStateToProps, {getFriendGroups})(MessageDetails);
