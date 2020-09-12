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
import ImagePicker from 'react-native-image-picker';
import {getFriendGroups} from '../../actions';

const Profile = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log('status changed');
    if (props.friendGroups.length === 0) {
      props.getFriendGroups(props.user);
      console.log('profile', props.friendGroups);
    } else {
      console.log(props.friendGroups);
      console.log('profile else', props.user);
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topBackground}>
          <Header />
        </View>
        <View style={styles.wrapper}>
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
                  console.log(
                    'User tapped custom button: ',
                    response.customButton,
                  );
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
          <View style={styles.info}>
            <Text style={styles.text}>{props.user.username} </Text>
            <Text
              onPress={() => {
                props.navigation.navigate('FriendGroups');
              }}
              style={[styles.text, {color: colors.blue}]}>
              {props.friendGroups.length}
              {props.friendGroups.length === 0 ||
              props.friendGroups.length === 1 ? (
                <Text> Friend Hub! </Text>
              ) : (
                <Text> Friend Hubs! </Text>
              )}
            </Text>
          </View>

          <View style={styles.body}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Search');
              }}
              style={styles.buttonContainer}>
              <Text style={{color: 'white'}}>
                Find your friends to create your hub!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
}) => {
  const {list} = placeResponse;
  const {user} = authResponse;
  const {friendGroups} = friendGroupResponse;
  return {list, user, friendGroups};
};

export default connect(mapStateToProps, {getFriendGroups})(Profile);
