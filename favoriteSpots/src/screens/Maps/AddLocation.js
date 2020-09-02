import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {fonts} from '../../style';
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
            image = {require('../../assets/mapMarker.png')}
            description={'desc'}>
            <Callout tooltip>
              <View>
                <View style={styles.details}>
                  <Text>One Favorite Place</Text>
                    <Image
              style={{width: 35, height: 35}}
              resizeMode="contain"
              resizeMethod="resize"
              source={require('../../assets/mapMarker.png')}></Image>
                </View>
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {list} = placeResponse;
  return {list};
};

export default connect(mapStateToProps, {})(AddLocation);

const styles = StyleSheet.create({
  details: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    borderRadius: 5,
    borderWidth: 0.4,
    padding: 15,
    backgroundColor: 'black'
  },
});
