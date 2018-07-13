import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, DrawerItems } from 'react-navigation';
import { Icon, View } from 'native-base';
import HomeScreen from '../containers/HomeScreen';
import StartScreen from '../containers/StartScreen';
import AddNewCategoryScreen from '../containers/AddNewCategoryScreen';
import ReportDateScreen from '../containers/ReportDateScreen';
import ReportScreen from '../containers/ReportScreen';
import AddNewTaskScreen from '../containers/AddNewTaskScreen';
import styles from './styles';
import LogoutButton from '../components/common/LogoutButton';

const ReportNavigation = createStackNavigator(
  {
    ReportDate: {
      screen: ReportDateScreen,
    },
    Report: {
      screen: ReportScreen,
    },
  },
  {
    initialRouteName: 'ReportDate',
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
    ReportDate: {
      screen: ReportNavigation,
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
    initialRouteName: 'App',
  }
);

export default RootNavigator;
