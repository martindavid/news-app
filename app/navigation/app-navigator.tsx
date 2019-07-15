import * as React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { HomeScreen } from "app/screens/home-screen";
import { MoreScreen, MoreScreenDetail } from "app/screens/more-screen";
import { ListScreen } from "app/screens/list-screen";
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
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
      })
    },
    List: {
      screen: ListScreen,
      navigationOptions: ({ navigation }) => ({
        title: "List",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list-alt" type="font-awesome" color={tintColor} />
        )
      })
    },
    More: {
      screen: MoreScreenStack,
      navigationOptions: ({ navigation }) => ({
        title: "More",
        tabBarIcon: ({ tintColor }) => <Icon name="menu" color={tintColor} />
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);
