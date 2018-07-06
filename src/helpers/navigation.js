import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  DrawerItems,
} from 'react-navigation';
import { Icon, View, Text, Footer, label } from 'native-base';
import HomeScreen from '../containers/HomeScreen';
import StartScreen from '../containers/StartScreen';
import AddNewCategoryScreen from '../containers/AddNewCategoryScreen';
import RaportDateScreen from '../containers/RaportDateScreen';
import RaportScreen from '../containers/RaportScreen';
import AddNewTaskScreen from '../containers/AddNewTaskScreen';
import styles from './styles';
import LogoutButton from '../components/common/LogoutButton';

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
    // Logout: {
    //   screen: StartScreen,
    //   navigationOptions: {
    //     title: 'Wyloguj',
    //     drawerIcon: <Icon name="log-out" />,
    //     drawerLockMode: 'locked-closed',
    //   },
    // },
  },
  {
    headerMode: 'none',
    // eslint-disable-next-line
    contentComponent: props => (
      <View>
        {/* eslint-disable-next-line */}
        <Image style={styles.drawerImage} source={require('../../img/stopwatch.jpg')} />
        <DrawerItems {...props} />
        <LogoutButton />
      </View>
    ),
  }
);

const AppStack = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
    },
    AddNewTask: {
      screen: AddNewTaskScreen,
    },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  }
);

const AuthStack = createSwitchNavigator({
  Start: {
    screen: StartScreen,
  },
  AppStack: {
    screen: AppStack,
    navigationOptions: {
      headerMode: 'none',
    },
  },
});

const RootNavigator = createStackNavigator(
  {
    Auth: { screen: AuthStack },
    App: { screen: AppStack },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Auth',
  }
);

export default RootNavigator;
