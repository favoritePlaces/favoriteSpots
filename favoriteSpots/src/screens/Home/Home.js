import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {signOut} from '../../actions';
//import {AuthContext} from '../../context';
import {fonts, colors} from '../../style';
const Home = (props) => {
  // const {signOutNow} = useContext(AuthContext);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.blue} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity //wanted to show on top bar but we cant use authContext method in Router as it will be undefined for now
          onPress={() => {
            props.signOut();
          }}
          style={{
            marginRight: 20,
          }}>
          <Text style={{fontSize: fonts.small}}> Sign out </Text>
        </TouchableOpacity>
        <FlatList
          style={{flex: 1, backgroundColor: 'white'}}
          data={props.myPlaces}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TweetItems data={item} index={index} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {myPlaces} = placeResponse;
  return {myPlaces};
};

export default connect(mapStateToProps, {signOut})(Home);
