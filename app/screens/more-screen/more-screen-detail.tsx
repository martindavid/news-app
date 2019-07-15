import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "react-native-elements"
import { NavigationScreenProps } from "react-navigation"
import { WebView } from "react-native-webview"
import Markdown from "react-native-simple-markdown"
import { Screen, ActivityIndicator } from "app/components"
import * as layoutStyle from "app/screens/style"
import { spacing } from "app/theme"

export enum MoreScreenDetailModes {
  Markdown,
  WebView,
  Children,
}

export interface MoreScreenDetailProps
  extends NavigationScreenProps<{
    title: string
    mode: MoreScreenDetailModes
    content: string
  }> {}

const MAIN_VIEW: ViewStyle = {
  flex: 1,
  marginHorizontal: spacing[3],
  paddingRight: 20,
  paddingLeft: 20,
}

const MARKDOWN_STYLE = {
  heading: {
    marginTop: spacing[2],
  },
  paragraph: {
    marginVertical: spacing[2],
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
}

/**
 * More Detail Screen supports displaying markdown, html or react children
 * - Screen Title is passed in as a Navigation prop
 * - WebView displays our basic loading indicator while loading the url
 * - Markdown has the default styles adjusted slightly (mostly to add more spacing)
 */
export class MoreScreenDetail extends React.Component<
  MoreScreenDetailProps,
  {}
> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "More Detail"),
    }
  }

  renderMarkdown = content => (
    <View style={MAIN_VIEW}>
      <Markdown styles={MARKDOWN_STYLE}>{content}</Markdown>
    </View>
  )

  renderWebView = content => (
    <WebView
      source={{ uri: content }}
      renderLoading={() => <ActivityIndicator />}
      startInLoadingState={true}
    />
  )

  renderChildren = (content, title) => (
    <View style={MAIN_VIEW}>
      {content && content}
      {!content && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>About Details screen</Text>
          <Text preset="bold">{title}</Text>
        </View>
      )}
    </View>
  )

  render() {
    const { title, mode, content } = this.props.navigation.state.params

    return (
      <Screen style={layoutStyle.ROOT} preset="scroll">
        {mode === MoreScreenDetailModes.Markdown &&
          this.renderMarkdown(content)}
        {mode === MoreScreenDetailModes.WebView && this.renderWebView(content)}
        {mode === MoreScreenDetailModes.Children &&
          this.renderChildren(content, title)}
      </Screen>
    )
  }
}
