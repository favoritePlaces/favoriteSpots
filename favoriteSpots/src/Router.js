import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
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

import FriendGroupDetails from './screens/Friends/FriendGroupDetails';
import FriendGroups from './screens/Friends/FriendGroups';
import CreateFriendGroup from './screens/Friends/CreateFriendGroup';
import UserDetails from './screens/Search/UserDetails';

import MyFavoriteList from './screens/Places/MyFavoriteList';
import PlaceDetails from './screens/Places/PlaceDetails';
import PlaceList from './screens/Places/PlaceList';

import Search from './screens/Search/Search';
import SearchResults from './screens/Search/SearchResults';

import Settings from './screens/Settings/Settings';

import {navigationRef} from './RootNavigation';
import {colors, fonts} from './style';

const menu = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
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
        options={{
          title: 'SignIn',
          headerStyle: {
            backgroundColor:colors.blue ,
            
          
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily:'BalsamiqSans-Bold',
            letterSpacing:1
            

           
          },
        }}
        
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'SignUp',
          headerStyle: {
            backgroundColor:colors.blue ,
        
          
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily:'BalsamiqSans-Bold',
            letterSpacing:1
           
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

const CreateFriendGroupStack = createStackNavigator();
const CreateFriendGroupStackScreen = () => {
  return (
    <CreateFriendGroupStack.Navigator>
      <CreateFriendGroupStack.Screen
        name="CreateFriendGroup"
        component={CreateFriendGroup}
      />
    </CreateFriendGroupStack.Navigator>
  );
};

const FriendGroupDetailsStack = createStackNavigator();
const FriendGroupDetailsStackScreen = () => {
  return (
    <FriendGroupDetailsStack.Navigator>
      <FriendGroupDetailsStack.Screen
        name="FriendGroupDetails"
        component={FriendGroupDetails}
      />
    </FriendGroupDetailsStack.Navigator>
  );
};

const FriendGroupsStack = createStackNavigator();
const FriendGroupsStackScreen = () => {
  return (
    <FriendGroupsStack.Navigator>
      <FriendGroupsStack.Screen name="FriendGroups" component={FriendGroups} />
    </FriendGroupsStack.Navigator>
  );
};

const UserDetailsStack = createStackNavigator();
const UserDetailsStackScreen = () => {
  return (
    <UserDetailsStack.Navigator>
      <UserDetailsStack.Screen name="UserDetails" component={UserDetails} />
    </UserDetailsStack.Navigator>
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
          headerLeft: () => {
            return (
              <Text
                onPress={() => {
                  navigation.pop();
                }}>
                Back
              </Text>
            );
          },
        })}
      />
    </ProfileStack.Navigator>
  );
};

const MyFavoriteListStack = createStackNavigator();
const MyFavoriteListStackScreen = () => {
  return (
    <MyFavoriteListStack.Navigator>
      <MyFavoriteListStack.Screen
        name="MyFavoriteList"
        component={MyFavoriteList}
      />
    </MyFavoriteListStack.Navigator>
  );
};
const PlaceDetailsStack = createStackNavigator();
const PlaceDetailsStackScreen = () => {
  return (
    <PlaceDetailsStack.Navigator>
      <PlaceDetailsStack.Screen name="PlaceDetails" component={PlaceDetails} />
    </PlaceDetailsStack.Navigator>
  );
};
const PlaceListStack = createStackNavigator();
const PlaceListStackScreen = () => {
  return (
    <PlaceListStack.Navigator>
      <PlaceListStack.Screen
        name="PlaceList"
        component={PlaceList}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />
    </PlaceListStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />
      <SearchStack.Screen name="UserDetails" component={UserDetails} />
    </SearchStack.Navigator>
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
            iconName = 'search-plus';
          } else if (route.name === 'Add Location') {
            iconName = 'globe';
          } else if (route.name === 'PlaceList') {
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
      <TabStack.Screen name="PlaceList" component={PlaceListStackScreen} />
      <TabStack.Screen name="Search" component={SearchStackScreen} />
      {/* 
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
          <>
            <RootStack.Screen
              name="Main"
              component={DrawerStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
            <RootStack.Screen
              name="Profile"
              component={ProfileStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
            <RootStack.Screen
              name="CreateFriendGroup"
              component={CreateFriendGroupStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
            <RootStack.Screen
              name="FriendGroups"
              component={FriendGroupsStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
            <RootStack.Screen
              name="FriendGroupDetails"
              component={FriendGroupDetailsStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
            <RootStack.Screen
              name="UserDetails"
              component={UserDetailsStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
            <RootStack.Screen
              name="MyFavoriteList"
              component={MyFavoriteListStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
            <RootStack.Screen
              name="PlaceDetails"
              component={PlaceDetailsStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
            <RootStack.Screen
              name="Settings"
              component={SettingsStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
          </>
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
