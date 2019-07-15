import React from "react"
import { View, Alert, ViewStyle, SectionList } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { ListItem } from "react-native-elements"
import { color } from "app/theme"
import { Toast, Screen } from "app/components"
import { menuItems } from "./menu"

export interface MoreScreenProps extends NavigationScreenProps<{}> {}

const SCREEN_STYLE: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const TOP_VIEW: ViewStyle = {
  flex: 1,
}

export class MoreScreen extends React.Component<MoreScreenProps, {}> {
  static navigationOptions = ({ navigation }) => ({
    title: "More",
  })

  renderHeader = section => (
    <ListItem
      title={section.title}
      titleStyle={{ fontWeight: "bold" }}
      containerStyle={{ backgroundColor: color.palette.lightestGrey }}
    />
  )

  handlePressSignOut = async () => {
    Toast("Signed Out")

    Alert.alert("Sign Out")
  }

  handlePress = item => () =>
    this.props.navigation.navigate("MoreScreenDetail", { ...item })

  renderItem = (item, index) => (
    <ListItem
      key={index}
      onPress={this.handlePress(item)}
      title={item.title}
      rightIcon={{ name: "keyboard-arrow-right", color: color.textLink }}
      bottomDivider={true}
    />
  )

  renderSignOut = () => (
    <ListItem
      onPress={this.handlePressSignOut}
      title="Sign Out"
      titleStyle={{ color: color.textLink }}
    />
  )

  render() {
    return (
      <Screen style={SCREEN_STYLE} preset="scroll">
        <View style={TOP_VIEW}>
          <SectionList
            renderItem={({ item, index, section }) =>
              section.title === "Auth"
                ? this.renderSignOut()
                : this.renderItem(item, index)
            }
            renderSectionHeader={({ section }) => this.renderHeader(section)}
            sections={menuItems}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </Screen>
    )
  }
}
