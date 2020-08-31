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
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Icon } from 'native-base';
import { connect } from 'react-redux';

import { signOut } from './actions';

import Entrance from './screens/Auth/Entrance';
import SignIn from './screens/Auth/SignIn';
import SignUp from './screens/Auth/SignUp';

import Menu from './screens/Menu/Menu';

import Home from './screens/Home/Home';
import HomeDetails from './screens/Home/HomeDetails';

import { navigationRef } from './RootNavigation';
import { colors } from './style';
const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();


const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={Menu}
      drawerType='back'
      drawerStyle={{
        width: '85%',
      }}
    >
      <DrawerStack.Screen name="Drawer" component={'Home'} />
    </DrawerStack.Navigator>
  )
}

const menu = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer()
      }}
      style={{
        marginLeft: 10
      }}
    >

      <Text>Menu</Text>
    </TouchableOpacity>
  )
}


const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
          headerRight: ()=> (
            <TouchableOpacity
            onPress={() => {
            
             props.signOut();
            }}
            style={{
              marginRight: 20,
            }}>
           <Text style ={{fontSize: 30, marginLeft: 10}}> Sign out </Text>
          </TouchableOpacity>
          )
        })}
      />

      <HomeStack.Screen name="HomeDetails" component={HomeDetails} />
    </HomeStack.Navigator>
  )
}


const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Entrance">
      <AuthStack.Screen
        name="Entrance"
        component={Entrance}
        options={({ navigation, route }) => ({
          title: 'SignIn',
          headerShown: false,
        })}
      />

      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={({ navigation, route }) => ({
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

const TabStack = createBottomTabNavigator();

const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      tabBarOptions={{
        inactiveTintColor: colors.main,
        showLabel: false,
      }}
    >

      <TabStack.Screen name="Home" component={HomeStackScreen} />
      {/* <TabStack.Screen name="Search" component={SearchStackScreen} />
            <TabStack.Screen name="Notifications" component={NotificationsStackScreen} />
            <TabStack.Screen name="Messages" component={MessagesStackScreen} /> */}


    </TabStack.Navigator>
  )
}


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
        <RootStack.Screen
          name='Home'
          component={Home}
          options={{
            animationEnabled: false,
   
          }}
        />
        <RootStack.Screen
          name="Main"
          component={DrawerStackScreen}
          options={{
            animationEnabled: false
          }}
        />
          <RootStack.Screen name="Tab" component={TabStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = ({ authResponse }) => {
  const { loading } = authResponse;
  return { loading };
};

export default connect(mapStateToProps, {signOut})(Router);