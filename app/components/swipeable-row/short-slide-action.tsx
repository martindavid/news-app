import * as React from "react"
import { Animated, ViewStyle, View, Text } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { Icon } from "react-native-elements"
import * as styles from "./swipeable-row.style"

const SHORT_SLIDE_ACTION: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

interface ShortSlideActionProps {
  /**
   * Text to display in the action
   */
  text: string
  /**
   * x coordinate when the action being swiped
   */
  x: number
  /**
   * Callback that is called when the action is clicked
   */
  onPress?: () => void
  /**
   * Background color for the action button
   */
  bgColor?: string
  /**
   * Text color for the action label text
   */
  color?: string
  /**
   * Icon to display on top of action label text
   */
  iconName?: string
  /**
   * Progress animated value from react-native-gesture-handler swipeable render action function
   */
  progress: Animated.Value
}

export function ShortSlideAction(props: ShortSlideActionProps) {
  const { text, x, onPress, bgColor, color, iconName, progress } = props

  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [x, 0],
  })

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
      <RectButton
        style={[SHORT_SLIDE_ACTION, { backgroundColor: bgColor }]}
        onPress={onPress}
      >
        <View accessible>
          {iconName !== "" && <Icon name={iconName} type="font-awesome" />}
          <Text style={[styles.ACTION_TEXT, { color: color }]}>{text}</Text>
        </View>
      </RectButton>
    </Animated.View>
  )
}
