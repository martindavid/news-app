import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { AppNavigator } from "./app-navigator"

const SwitchNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
  },
  {
    initialRouteName: "App",
  }
)

export const RootNavigator = createAppContainer(SwitchNavigator)
