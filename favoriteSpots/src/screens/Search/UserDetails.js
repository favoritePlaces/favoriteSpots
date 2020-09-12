import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {fonts, colors} from '../../style';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import {Button} from '../../components';
import {createFriendGroup, getFriendGroups} from '../../actions';

const UserDetails = (props) => {
  const [createHub, setCreateHub] = useState(false);
  const [addInHub, setAddInHub] = useState(false);
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    if (props.friendGroups.length === 0) {
      props.getFriendGroups(props.user);
      console.log(props.friendGroups);
    }
  }, []);

  return (
    <View>
      <View style={styles.header}></View>
      <View style={styles.info}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}
        />

        <Text style={styles.name}>{props.route.params.name}</Text>
        <Text>{props.route.params.username}</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Add in your one of the friend hubs! </Text>
        </TouchableOpacity>
        <Modal visible={addInHub}></Modal>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            setCreateHub(true);
          }}>
          <Text>Let's create a new friend hub!</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          onRequestClose={() => {
            console.warn('close model');
          }}
          visible={createHub}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => {
                setCreateHub(false);
              }}>
              <Text>Close</Text>
              <Icon type="FontAwesome" name="close"></Icon>
            </TouchableOpacity>
            <View style={styles.modalItems}>
              <TextInput
                onChangeText={(text) => setGroupName(text)}
                placeholder="Choose a name for your hub"></TextInput>
              <Button
                onPress={() => {
                  if (groupName) {
                    props.createFriendGroup({
                      name: groupName,
                      admin: props.user,
                      members: [
                        props.user.username,
                        props.route.params.username,
                      ],
                    });
                  } else {
                    Alert.alert('Warning', 'Please enter a group name!');
                  }
                }}
                style={{width: '50%', height: '25%', color: 'black'}}>
                Create!
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

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

export default connect(mapStateToProps, {createFriendGroup, getFriendGroups})(
  UserDetails,
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.somon,
    height: 200,
  },
  info: {
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: -60,
  },
  name: {
    fontSize: fonts.small,
  },
  body: {
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
  modalView: {
    marginTop: '100%',
    height: '70%',
    backgroundColor: colors.somon,
  },
  modalItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeModal: {
    marginRight: 0,
  },
  openModal: {
    padding: 20,
  },
});
