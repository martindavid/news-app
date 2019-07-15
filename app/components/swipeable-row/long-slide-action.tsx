import * as React from "react"
import { Animated, ViewStyle, View } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import * as styles from "./swipeable-row.style"
import { color as themeColor } from "app/theme"

const LONG_SLIDE_ACTION: ViewStyle = {
  flex: 1,
  justifyContent: "center",
}

interface LongSlideActionProps {
  /**
   * Text to display in the action
   */
  text: string
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
   * Progress animated value from react-native-gesture-handler swipeable render action function
   */
  progress?: Animated.Value
  /**
   * Drag animated value from react-native-gesture-handler swipeable render action function
   */
  dragX?: Animated.Value
}

export function LongSlideAction(props: LongSlideActionProps) {
  const { text, onPress, color, bgColor, progress, dragX } = props

  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
  })

  return (
    <RectButton
      style={[
        LONG_SLIDE_ACTION,
        { backgroundColor: bgColor || themeColor.palette.paper },
      ]}
      onPress={onPress}
    >
      <View accessible>
        <Animated.Text
          style={[
            styles.ACTION_TEXT,
            {
              transform: [{ translateX: trans }],
              color: color || themeColor.text,
            },
          ]}
        >
          {text}
        </Animated.Text>
      </View>
    </RectButton>
  )
}
