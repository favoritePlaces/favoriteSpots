import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {fonts, colors} from '../../style';
import * as RootNavigation from '../../RootNavigation';

const FriendGroups = (props) => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderColor: colors.somon,
        }}
        onPress={() => {
          RootNavigation.navigate('FriendGroupDetails', item);
        }}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={props.friendGroups}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginHorizontal: 16,
  },
  text: {
    padding: 20,
    fontSize: fonts.small,
  },
});

const mapStateToProps = ({placeResponse, friendGroupResponse}) => {
  const {places} = placeResponse;
  const {friendGroups} = friendGroupResponse;
  return {places, friendGroups};
};

export default connect(mapStateToProps, {})(FriendGroups);
