import * as React from "react";
import { AppRegistry } from "react-native";
import { elementsTheme } from "app/theme/element-theme";
import { ThemeProvider } from "react-native-elements";
import { RootNavigator } from "app/navigation";
import { registerGlobalExceptionHandlers } from "app/global-exception-handler";

registerGlobalExceptionHandlers();

export class App extends React.Component<{}> {
  render() {
    return (
      <ThemeProvider theme={elementsTheme}>
        <RootNavigator />
      </ThemeProvider>
    );
  }
}

const APP_NAME = "NewsApp";

AppRegistry.registerComponent(APP_NAME, () => App);
