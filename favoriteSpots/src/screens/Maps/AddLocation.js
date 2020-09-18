import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
} from 'react-native-maps';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
//import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {colors, fonts} from '../../style';
import {addPersonalPlace} from '../../actions';
import {Button} from '../../components';
import {TextInput} from 'react-native-gesture-handler';

class AddLocation extends Component {
  static navigationOptions = {
    title: 'San Francisco',
  };

  state = {
    image: null,
    desc: null,
    markers: [],
    coordinates: [
      {
        name: 'Burger',
        latitude: 37.8025259,
        longitude: -122.4351431,
        image: require('../../assets/hubspots.png'),
      },
      {
        name: 'Pizza',
        latitude: 37.7946386,
        longitude: -122.421646,
        image: require('../../assets/hubspots.png'),
      },
      {
        name: 'Soup',
        latitude: 37.7665248,
        longitude: -122.4165628,
        image: require('../../assets/hubspots.png'),
      },
      {
        name: 'Sushi',
        latitude: 37.7834153,
        longitude: -122.4527787,
        image: require('../../assets/hubspots.png'),
      },
      {
        name: 'Curry',
        latitude: 37.7948105,
        longitude: -122.4596065,
        image: require('../../assets/hubspots.png'),
      },
    ],
  };

  componentDidMount() {
    this.requestLocationPermission();
  }

  selectImage() {
    const options = {
      title: 'Profil Fotoğrafı Seçiniz',
      quality: 0.2,
      takePhotoButtonTitle: 'Resim Çek',
      chooseFromLibraryButtonTitle: 'Galeriden Seç',
      cancelButtonTitle: 'Kapat',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, async (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.uri;
        this.setState({image: uri});
      }
    });
  }

  showWelcomeMessage = () =>
    Alert.alert('Welcome to San Francisco', 'The food is amazing', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
      },
    ]);

  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    }
  };

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(JSON.stringify(position));

        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        };

        this.setState({initialPosition});
      },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000},
    );
  };

  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    this.state.markers[index].showCallout();
  };
  // Fetch location details as a JOSN from google map API
  fetchAddress = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        this.state.region.latitude +
        ',' +
        this.state.region.longitude +
        '&key=' +
        'AIzaSyAXW-WDp0MF5si6oFXaukDQuThTr1wqmDE',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const userLocation = responseJson.results[0].formatted_address;
        this.setState({
          userLocation: userLocation,
          regionChangeProgress: false,
        });
      });
  };

  // Update state on region change
  onRegionChange = (region) => {
    // this.setState(
    //   {
    //     region,
    //     regionChangeProgress: true,
    //   },
    //   () => this.fetchAddress(),
    // );
  };
  onLocationSelect = () => alert(this.state.userLocation);
  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    this._carousel.snapToItem(index);
  };

  renderCarouselItem = ({item}) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>
  );

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.spinnerView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 8}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={(map) => (this._map = map)}
            showsUserLocation={true}
            style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}
            initialRegion={this.state.initialPosition}
            onMapReady={this.onMapReady}
            onRegionChangeComplete={this.onRegionChange}>
            <Polygon
              coordinates={this.state.coordinates}
              fillColor={'rgba(100, 100, 200, 0.3)'}
            />
            <Circle
              center={{latitude: 37.8025259, longitude: -122.4351431}}
              radius={1000}
              fillColor={'rgba(200, 300, 200, 0.5)'}
            />
            <Marker
              draggable
              coordinate={{latitude: 37.7825259, longitude: -122.4351431}}>
              <Callout onPress={this.showWelcomeMessage}>
                <Text>An Interesting city</Text>
              </Callout>
            </Marker>
            {this.state.coordinates.map((marker, index) => (
              <Marker
                key={marker.name}
                ref={(ref) => (this.state.markers[index] = ref)}
                onPress={() => this.onMarkerPressed(marker, index)}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}>
                <Callout>
                  <Text>{marker.name}</Text>
                </Callout>
              </Marker>
            ))}
            <View
              style={{
                height: '50%',
                justifyContent: 'flex-end',
              }}>
              {!this.state.image ? (
                <Button
                  style={styles.customButton}
                  text={'Select Image'}
                  onPress={() => {
                    this.selectImage();
                  }}></Button>
              ) : (
                <View>
                  <Image
                    source={{uri: this.state.image}}
                    style={{
                      width: '100%',
                      height: '70%',
                    }}
                    resizeMode="contain"
                  />

                  <TextInput
                    multiline
                    autoCompleteType="off"
                    placeholder="Now, enter a description"
                    style={{
                      width: '60%',
                      height: '15%',
                      alignSelf: 'center',
                      fontSize: fonts.medium,
                    }}
                    placeholderTextColor="black"
                    onChangeText={(value) => {
                      this.setState({desc: value});
                    }}></TextInput>
                  <Button
                    style={styles.customButton}
                    text={'Add'}
                    onPress={() => {
                      const params = {
                        placeName: null, //original name if there is any, to keep track how many people liked it
                        user: this.props.user.uid,
                        desc: this.state.desc,
                        image: this.state.image,
                        createdDate: new Date(),
                      };
                      //comment could be available when it is open to friendList/friendGroup friend degilken sadece kac tane favori place I var  onu gorebiliyosun.
                      if (this.state.desc) {
                        this.props.addPersonalPlace(params);
                        this.setState({image: null});
                        console.log('after post', this.state.image);
                      } else {
                        Alert.alert(
                          'Hey',
                          'please enter how you want to remember this place',
                        );
                      }
                    }}></Button>
                </View>
              )}
            </View>
          </MapView>

          {/* <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
        /> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  // imageAdder: {
  //   marginBottom: '20%',
  // },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24,
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
  customButton: {
    alignSelf: 'center',
    width: '60%',
    height: '15%',
  },
});

const mapStateToProps = ({placeResponse, authResponse}) => {
  const {myPlaces} = placeResponse;
  const {user} = authResponse;
  return {myPlaces, user};
};

export default connect(mapStateToProps, {addPersonalPlace})(AddLocation);
