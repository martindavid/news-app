import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Screen } from "app/components";
import * as style from "../style";
import { UserApi } from "app/services/api/users";
import { ListRenderer } from "./list";

export interface ListScreenProps extends NavigationScreenProps<{}> {}

export class ListScreen extends React.Component<ListScreenProps, {}> {
  static navigationOptions = ({ navigation }) => ({
    title: "List Screen"
  });

  state = {
    loading: true,
    data: null
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({ data: null, loading: true });

    try {
      const api = new UserApi();
      api.setup();
      const data = await api.getUsers();

      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ data: { kind: "server" }, loading: false });
    }
  };

  formatError = () => {
    const { data, loading } = this.state;
    return loading || data.kind == "ok" ? "" : data.kind;
  };

  render() {
    console.log(this.state.data);

    return (
      <Screen style={style.ROOT} preset="fixed">
        <ListRenderer
          {...this.state}
          error={this.formatError()}
          onRefresh={this.loadData}
        />
      </Screen>
    );
  }
}
