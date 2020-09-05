import React from 'react';
import {Text, View, Linking, SafeAreaView, ScrollView} from 'react-native';
import {colors, fonts} from '../../style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = (props) => {
  //why can't we manage the global state

  const sections = (icon, name, onPress) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        {icon != null ? (
          <Icon name={icon} size={20} style={{width: 30}} />
        ) : null}
        <Text onPress={onPress} style={{fontSize:  fonts.main, marginLeft: 30}}>
          {name}
        </Text>
      </View>
    );
  };

  const selectPhoto = () => {};

  return (
    <SafeAreaView style={{marginLeft: 20}}>
      <View style={{margin: 10}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
      <View>
        {props.profile_image ? (
          <TouchableOpacity onPress={() => selectPhoto()}>
            <Image
              source={{uri: ''}}
              style={{width: 60, height: 60, borderRadius: 30}}
            />
          </TouchableOpacity>
        ) : (
          <Icon name={'user-circle'} size={40} onPress={() => selectPhoto()} />
        )}
        <Text style={{fontWeight: 'bold', fontSize: fonts.main, marginTop: 10}}>
          Merve
        </Text>
          <Text style={{fontSize: fonts.small, marginTop: 10}}>15 Friend Groups</Text>

      </View>
      <View style={{justifyContent: 'space-between'}}>
        <ScrollView style={{ backgroundColor: ''}}>
          <View style={{backgroundColor: '', padding: 20}}>
            {sections('user', 'Profil', () => {})}
            {sections('map-pin', 'My favorite places')}
            {sections('smile-o', 'Friend Hubs')}
            {sections('user-plus', 'Friend Requests')}
          </View>

          <View>
            <View
              style={{
                backgroundColor: 'black',
                height: 0.5,
                width: '100%',
                marginBottom: 20,
              }}
            />
            {sections(null, 'Settings')}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
