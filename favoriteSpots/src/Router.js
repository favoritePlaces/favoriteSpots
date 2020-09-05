import * as React from 'react';
import {
  Text,
  TouchableOpacity,

} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Icon} from 'native-base';
import {connect} from 'react-redux';

import Entrance from './screens/Auth/Entrance';
import SignIn from './screens/Auth/SignIn';
import SignUp from './screens/Auth/SignUp';

import Menu from './screens/Menu/Menu';
import AddLocation from './screens/Maps/AddLocation';
import Home from './screens/Home/Home';
import HomeDetails from './screens/Home/HomeDetails';

import Profile from './screens/Profile/Profile';

import {navigationRef} from './RootNavigation';
import {colors, fonts} from './style';

const menu = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(navigation);
        navigation.openDrawer();
      }}
      style={{
        marginLeft: 20,
      }}>
      <Text style={{color: 'black'}}>Menu</Text>
    </TouchableOpacity>
  );
};

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Entrance">
      <AuthStack.Screen
        name="Entrance"
        component={Entrance}
        options={({navigation, route}) => ({
          title: 'Entrance',
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

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />

      <HomeStack.Screen name="HomeDetails" component={HomeDetails} />
    </HomeStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />
    </ProfileStack.Navigator>
  );
};
const AddLocationStack = createStackNavigator();
const AddLocationStackScreen = () => {
  return (
    <AddLocationStack.Navigator>
      <AddLocationStack.Screen
        name="AddLocation"
        component={AddLocation}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />
    </AddLocationStack.Navigator>
  );
};

const TabStack = createBottomTabNavigator();

const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search-location';
          } else if (route.name === 'Add Location') {
            iconName = 'globe';
          } else if (route.name === 'Profile') {
            iconName = 'user-circle';
          }

          return (
            <Icon
              type="FontAwesome"
              name={iconName}
              style={{color: focused ? colors.addition : color, fontSize: size}}
            />
          );
        },
      })}
      tabBarOptions={{
        inactiveTintColor: colors.line,
        activeTintColor: colors.addition,
        //  showLabel: false,
      }}>
      <TabStack.Screen
        // unmountOnBlur={true}
        name="Home"
        component={HomeStackScreen}
      />
      <TabStack.Screen name="Add Location" component={AddLocationStackScreen} />
      <TabStack.Screen name="Profile" component={ProfileStackScreen} />

      {/* <TabStack.Screen name="Search" component={SearchStackScreen} />
            <TabStack.Screen name="Notifications" component={NotificationsStackScreen} />
            <TabStack.Screen name="Messages" component={MessagesStackScreen} /> */}
    </TabStack.Navigator>
  );
};

const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={Menu}
      drawerType="back"
      drawerStyle={{
        width: '85%',
      }}>
      <DrawerStack.Screen name="Drawer" component={TabStackScreen} />
    </DrawerStack.Navigator>
  );
};

const RootStack = createStackNavigator();
function Router(props) {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator headerMode="none" mode="modal">
        {!props.user ? (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              animationEnabled: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name="Main"
            component={DrawerStackScreen}
            options={{
              animationEnabled: false,
            }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = ({authResponse}) => {
  const {loading, user} = authResponse;
  return {loading, user};
};

export default connect(mapStateToProps, {})(Router);
