import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  ActivityIndicator,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import { Icon } from 'native-base';
import { connect } from 'react-redux';

import Entrance from './screens/Auth/Entrance';
import SignIn from './screens/Auth/SignIn';
import SignUp from './screens/Auth/SignUp';

import HomeScreen from './screens/Home/Home';
import HomeDetails from './screens/Home/HomeDetails';

import { navigationRef } from './RootNavigation';
const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Entrance">
      <AuthStack.Screen
        name="Entrance"
        component={Entrance}
        options={({navigation, route}) => ({
          title: 'SignIn',
          headerShown: false,
        })}
      />

      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={({navigation, route}) => ({
          title: 'SignIn',
          headerShown: false,
        })}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'SignUp',
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

function Router(props) {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator headerMode="none" >
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = ({ authResponse }) => {
    const { loading } = authResponse;
    return { loading };
};

export default connect(mapStateToProps, {})(Router);