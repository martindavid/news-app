import * as React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import { ActivityIndicator, SwipeableRow } from "app/components";
import { GetUsersResult, User } from "app/services/api";
import { ListItem } from "react-native-elements";

export interface ListProps {
  data: GetUsersResult;
  error: string;
  loading: boolean;
  onRefresh: any;
}

export class ListRenderer extends React.Component<ListProps> {
  static propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.string,
    onRefresh: PropTypes.func
  };

  renderLoading = () => <ActivityIndicator />;

  renderError = (error: string, loading: boolean, onRefresh: any) => (
    <FlatList
      data={[{ error, id: 0 }]}
      refreshing={loading}
      onRefresh={onRefresh}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        <ListItem
          title="Error loading data"
          subtitle={item.error}
          lefIcon={{ name: "error" }}
        />;
      }}
    />
  );

  renderDataItem = item => (
    <SwipeableRow>
      <ListItem
        title={item.name}
        subtitle={item.company.catchPhrase}
        leftAvatar={{
          source: { uri: "https://picsum.photos/128" },
          title: item.name.substr(0, 2)
        }}
        rightSubtitle={item.username.substr(0, 10)}
        bottomDivider={true}
      />
    </SwipeableRow>
  );

  renderData = (data: GetUsersResult, loading: boolean, onRefresh: any) => {
    const users = data.kind === "ok" ? data.users : [];

    return (
      <FlatList
        data={users}
        refreshing={loading}
        onRefresh={onRefresh}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => this.renderDataItem(item)}
      />
    );
  };

  render() {
    const { data, loading, error, onRefresh } = this.props;

    if (loading) {
      return this.renderLoading();
    } else if (error) {
      return this.renderError(error, loading, onRefresh);
    } else {
      return this.renderData(data, loading, onRefresh);
    }
  }
}
