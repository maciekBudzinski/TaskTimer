import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../containers/HomeScreen';
import StartScreen from '../containers/StartScreen';

import screenNames from '../constans/screenNames';
import AddNewCategoryScreen from '../containers/AddNewCategoryScreen';
import RaportDateScreen from '../containers/RaportDateScreen';
// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Start: {
//       screen: StartScreen,
//     },
//   },
//   // FIXME: tylko na czas dev
//   {
//     headerMode: 'none',
//     initialRouteName: 'Home',
//   }
// );
// Start: 'Start',
// TaskList: 'TaskList',
// AddNewTask: 'AddNewTask',
// AddNewCategory: 'AddNewCategory',
// RaportDate: 'RaportDate',
// Raport: 'Rap
const DrawerNavigator = createDrawerNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: {
        title: 'Ekran Startowy',
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Ekran domowy',
      },
    },
    AddNewCategory: {
      screen: AddNewCategoryScreen,
      navigationOptions: {
        title: 'Dodaj kategorię',
      },
    },
    RaportDate: {
      screen: RaportDateScreen,
      navigationOptions: {
        title: 'Zobacz raporty',
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  }
);

export default DrawerNavigator;
