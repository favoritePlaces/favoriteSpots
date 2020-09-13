import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {fonts} from '../../style';
import {addPlace} from '../../actions';
const AddLocation = (props) => {
  return (
    <SafeAreaView>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            title={'title'}
            // image = {require('../../assets/mapMarker.png')}
            description={'desc'}>
            <Callout tooltip>
              <View>
                <View style={styles.details}>
                  <Text>One Favorite Place</Text>
                  <Image
                    style={{width: 100, height: 60}}
                    resizeMode="contain"
                    resizeMethod="resize"
                    source={require('../../assets/mapMarker.png')}></Image>
                </View>
              </View>
            </Callout>
            <Icon size={35} color="#0857bf" name="map-marker-alt" />
          </Marker>
        </MapView>
        <Button
          onPress={(props) => {
            const params = {
              placeName: null, //original name if there is any, to keep track how many people liked it
              individuals: [
                {
                  desc: null,
                  userId: props.user.uid,
                  images: [],
                  //comment could be available when it is open to friendList/friendGroup friend degilken sadece kac tane favori place I var  onu gorebiliyosun.
                },
              ], //people who add this to on their favorite list
              // friendGroups: [
              //   {
              //     id: friendGroupId,
              //     sharer: userId,
              //     desc: null,
              //     images: [],
              //     comments: {
              //       commentMaker: userId,
              //       content: content,
              //     },
              //   },
              // ], // friend groups who has that
            };
            //props.addPlace(params)
          }}></Button>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse, authResponse}) => {
  const {places} = placeResponse;
  const {user} = authResponse;
  return {places, user};
};

export default connect(mapStateToProps, {addPlace})(AddLocation);

const styles = StyleSheet.create({
  details: {
    flexDirection: 'column',
    borderRadius: 5,
    width: '100%',
    borderWidth: 0.4,
    padding: 15,
    backgroundColor: 'white',
  },
});
