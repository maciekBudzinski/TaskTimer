import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../containers/HomeScreen';
import StartScreen from '../containers/StartScreen';
import AddNewCategoryScreen from '../containers/AddNewCategoryScreen';
import RaportDateScreen from '../containers/RaportDateScreen';
import RaportScreen from '../containers/RaportScreen';
import AddNewTaskScreen from '../containers/AddNewTaskScreen';

const stackNavigator = createStackNavigator(
  {
    Raport: {
      screen: RaportScreen,
    },
    RaportDate: {
      screen: RaportDateScreen,
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Ekran domowy',
      },
    },
  },
  {
    headerMode: 'none',
  }
);

const drawerNavigator = createDrawerNavigator(
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
    AddNewTask: {
      screen: AddNewTaskScreen,
      navigationOptions: {
        title: 'Dodaj Zadanie',
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
    headerMode: 'none',
  }
);

const RootNavigator = createStackNavigator(
  {
    drawerNavigator: { screen: drawerNavigator },
    stackNavigator: { screen: stackNavigator },
  },
  {
    headerMode: 'none',
  }
);

export default RootNavigator;
