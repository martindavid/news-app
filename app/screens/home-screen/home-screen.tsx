import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import { Header, Colors } from "react-native/Libraries/NewAppScreen";
import { NewsApi } from "app/services/api";
import { NavigationScreenProps } from "react-navigation";

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

export class HomeScreen extends React.Component<HomeScreenProps, {}> {
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
      const api = new NewsApi();
      api.setup();
      const data = await api.getHeadlineNews();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ data: { kind: "server" }, loading: false });
    }
  };

  render() {
    const { loading, data } = this.state;

    console.log(data);

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <Header />
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  }
});
