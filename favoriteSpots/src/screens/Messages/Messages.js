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

const Messages = (props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBackground: {
    backgroundColor: colors.somon,
    height: 200,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.somon,
    padding: 10,
  },
  wrapper: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',
  },
  text: {
    fontSize: fonts.medium,
    fontWeight: '600',
  },
  info: {
    padding: 10,
    alignItems: 'center',
  },
  body: {
    marginTop: 40,
    padding: 30,
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: colors.somon,
  },
});

const mapStateToProps = ({
  placeResponse,
  authResponse,
  friendGroupResponse,
  messageResponse,
}) => {
  const {messages} = messageResponse;
  const {list} = placeResponse;
  const {user} = authResponse;
  const {friendGroups} = friendGroupResponse;
  return {list, user, friendGroups, messages};
};

export default connect(mapStateToProps, {getFriendGroups})(Messages);
