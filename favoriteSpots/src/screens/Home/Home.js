import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import {connect} from 'react-redux';
import {signOut} from '../../actions';
//import {AuthContext} from '../../context';
import {fonts,colors} from '../../style';
const Home = (props) => {
 // const {signOutNow} = useContext(AuthContext);
  return (
    <SafeAreaView>
       <StatusBar
     backgroundColor={colors.blue}
     />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text onPress={() => props.navigation.navigate('HomeDetails')}>
          Home
        </Text>
        <TouchableOpacity //wanted to show on top bar but we cant use authContext method in Router as it will be undefined for now
          onPress={() => {
            props.signOut();
          }}
          style={{
            marginRight: 20,
          }}>
          <Text style={{fontSize: fonts.small}}> Sign out </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({placeResponse}) => {
  const {list} = placeResponse;
  return {list};
};

export default connect(mapStateToProps, {signOut})(Home);
