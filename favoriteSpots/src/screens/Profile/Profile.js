import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {fonts, colors} from '../../style';
import ImagePicker from 'react-native-image-picker';
const Profile = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log('status changed');
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <TouchableOpacity
        onPress={() => {
          const options = {
            title: 'Resim Seç',
            quality: 0.2,
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };

          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = {uri: response.uri};
              setImage(source);
            }
          });
        }}>
        <Image
          style={styles.avatar}
          defaultSource={require('../../assets/dummy.png')}
          source={image}
        />
      </TouchableOpacity>

      <View style={styles.body}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Your </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Opcion 2</Text>
        </TouchableOpacity>
        <Text
          onPress={() => {
            props.navigation.navigate('Search');
          }}>
          Find your friends to create your hub!
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {list} = placeResponse;
  return {list};
};

export default connect(mapStateToProps, {})(Profile);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.line,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: fonts.main,
    fontWeight: '600',
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
    backgroundColor: colors.addition,
  },
});
