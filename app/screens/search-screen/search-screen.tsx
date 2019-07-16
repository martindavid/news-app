import * as React from "react";
import { View, ViewStyle } from "react-native";
import { Screen } from "app/components";
import { SearchBar, Icon } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { color } from "app/theme";

const EMPTY_VIEW: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white
};

export interface SearchScreenProps extends NavigationScreenProps<{}> {}

export class SearchScreen extends React.Component<SearchScreenProps, {}> {
  state = {
    search: "",
    submitted: false
  };

  handleChangeSearch = search => this.setState({ search });

  handleClearSearch = () => this.setState({ search: "", submitted: false });

  handleStartSearch = () => this.setState({ submitted: true });

  renderEmptyView = () => (
    <View style={EMPTY_VIEW}>
      <Icon
        type="font-awesome"
        name="music"
        size={150}
        color={color.palette.lightestGrey}
      />
    </View>
  );

  renderSearch = search => (
    <View style={EMPTY_VIEW}>
      <Icon
        type="font-awesome"
        name="music"
        size={150}
        color={color.palette.lightestGrey}
      />
    </View>
  );

  render() {
    const { search, submitted } = this.state;

    return (
      <Screen style={ROOT} preset="fixed">
        <SearchBar
          onChangeText={this.handleChangeSearch}
          onClear={this.handleClearSearch}
          onCancel={this.handleClearSearch}
          onSubmitEditing={this.handleStartSearch}
          value={search}
          returnKeyType={"search"}
          lightTheme={true}
          placeholder="Search for Articles/News"
        />
      </Screen>
    );
  }
}
