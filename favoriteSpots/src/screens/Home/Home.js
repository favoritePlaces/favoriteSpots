import React, {useContext, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import Place from '../Places/Place';
import {getMyPlaces} from '../../actions';
//import {AuthContext} from '../../context';
import {fonts, colors} from '../../style';
const Home = (props) => {
  useEffect(() => {
    if (props.myPlaces.length === 0) {
      //for adding new place also the user should come to home first so it is safe to check its length
      console.log('no favorite place');
      props.getMyPlaces(props.user.uid);
    }
  }, []);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.blue} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <FlatList
          style={{flex: 1, backgroundColor: 'white'}}
          data={props.myPlaces}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <Place data={item} index={index} />}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse, authResponse}) => {
  const {myPlaces} = placeResponse;
  const {user} = authResponse;
  return {myPlaces, user};
};

export default connect(mapStateToProps, {getMyPlaces})(Home);
