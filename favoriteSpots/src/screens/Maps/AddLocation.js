import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {fonts} from '../../style';
import {addPersonalPlace} from '../../actions';
import {Button} from '../../components';
const AddLocation = (props) => {
  const [place, setPlace] = useState(null);
  const [image, setImage] = useState(null);

  const selectImage = () => {
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
        setImage(uri);
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 7}}>
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
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          {image ? (
            <View style={{alignItems: 'center'}}>
              <Image
                source={{uri: image}}
                style={{width: '90%', height: '50%'}}
                resizeMode="cover"
              />
            </View>
          ) : (
            []
          )}
          <Button
            style={styles.customButton}
            text={'Select Image'}
            onPress={() => {
              selectImage();
            }}></Button>
          <Button
            style={styles.customButton}
            text={'Add'}
            onPress={() => {
              const params = {
                placeName: null, //original name if there is any, to keep track how many people liked it
                user: props.user.uid,
                desc: 'mesela',
                image,
              };
              //comment could be available when it is open to friendList/friendGroup friend degilken sadece kac tane favori place I var  onu gorebiliyosun.

              //people who add this to on their favorite list
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

              props.addPersonalPlace(params);
            }}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse, authResponse}) => {
  const {places} = placeResponse;
  const {user} = authResponse;
  return {places, user};
};

export default connect(mapStateToProps, {addPersonalPlace})(AddLocation);

const styles = StyleSheet.create({
  details: {
    flexDirection: 'column',
    borderRadius: 5,
    width: '100%',
    borderWidth: 0.4,
    padding: 15,
    backgroundColor: 'white',
  },
  customButton: {
    alignSelf: 'center',
    width: '60%',
    height: '50%',
  },
});
