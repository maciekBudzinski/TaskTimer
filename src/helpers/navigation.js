import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Header, View, Text, Left, Body, Title, Button, Icon } from 'native-base';
import HomeScreen from '../containers/HomeScreen';
import StartScreen from '../containers/StartScreen';
import AddNewCategoryScreen from '../containers/AddNewCategoryScreen';
import RaportDateScreen from '../containers/RaportDateScreen';
import RaportScreen from '../containers/RaportScreen';
import AddNewTaskScreen from '../containers/AddNewTaskScreen';
import AppHeader from '../components/common/AppHeader';

// const stackNavigator = createStackNavigator(
//   {
//     Raport: {
//       screen: RaportScreen,
//     },
//     RaportDate: {
//       screen: RaportDateScreen,
//     },
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         title: 'Ekran domowy',
//       },
//     },
//   },
//   {
//     headerMode: 'float',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#113214',
//       },
//     },
//   }
// );

const RaportNavigation = createStackNavigator(
  {
    RaportDate: {
      screen: RaportDateScreen,
    },
    Raport: {
      screen: RaportScreen,
    },
  },
  {
    initialRouteName: 'RaportDate',
    headerMode: 'none',
  }
);

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Ekran domowy',
        drawerIcon: <Icon name="md-home" />,
      },
    },
    AddNewCategory: {
      screen: AddNewCategoryScreen,
      navigationOptions: {
        title: 'Dodaj kategorię',
        drawerIcon: <Icon name="md-add" />,
      },
    },
    RaportDate: {
      screen: RaportNavigation,
      navigationOptions: {
        title: 'Zobacz raporty',
        drawerIcon: <Icon name="md-paper" />,
      },
    },
  },
  {
    headerMode: 'none',
  }
);

const AuthStack = createStackNavigator({
  Start: {
    screen: StartScreen,
  },
});

const AppStack = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
    },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  }
);

const RootNavigator = createStackNavigator(
  {
    Auth: { screen: AuthStack },
    App: { screen: AppStack },
  },
  {
    headerMode: 'none',
    initialRouteName: 'App',
  }
);

export default RootNavigator;
