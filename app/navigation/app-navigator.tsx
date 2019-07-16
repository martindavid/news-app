import * as React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { HomeScreen } from "app/screens/home-screen";
import { MoreScreen, MoreScreenDetail } from "app/screens/more-screen";
import { ListScreen } from "app/screens/list-screen";
import { SearchScreen } from "app/screens/search-screen";
import { Icon } from "react-native-elements";

const MoreScreenStack = createStackNavigator({
  MoreScreen,
  MoreScreenDetail
});

export const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="newspaper-o" color={tintColor} type="font-awesome" />
        )
      })
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" color={tintColor} type="font-awesome" />
        )
      })
    },
    List: {
      screen: ListScreen,
      navigationOptions: ({ navigation }) => ({
        title: "List",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bookmark" type="font-awesome" color={tintColor} />
        )
      })
    },
    Settings: {
      screen: MoreScreenStack,
      navigationOptions: ({ navigation }) => ({
        title: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cogs" type="font-awesome" color={tintColor} />
        )
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);
