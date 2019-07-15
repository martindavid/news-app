import * as React from "react"
import { View } from "react-native"
import { SwipeableRowProps } from "./swipeable-row.props"
import Swipeable from "react-native-gesture-handler/Swipeable"
import { ShortSlideAction } from "./short-slide-action"
import { LongSlideAction } from "./long-slide-action"
import { color } from "app/theme"

export class SwipeableRow extends React.Component<SwipeableRowProps, {}> {
  _swipeableRow: any

  renderLeftActions = (progress, dragX) => {
    return (
      <LongSlideAction
        bgColor={color.palette.lapis}
        color={color.palette.white}
        text="archive"
        dragX={dragX}
        onPress={this.close}
      />
    )
  }

  renderRightActions = progress => {
    const pressHandler = text => () => {
      this.close()
      alert(text)
    }

    return (
      <View style={{ width: 140, flexDirection: "row" }}>
        <ShortSlideAction
          text="more"
          bgColor={color.palette.stone}
          color={color.palette.black}
          iconName="ellipsis-h"
          x={140}
          progress={progress}
          onPress={pressHandler("more")}
        />
        <ShortSlideAction
          text="delete"
          bgColor={color.palette.coral}
          color={color.palette.black}
          iconName="trash"
          x={70}
          progress={progress}
          onPress={pressHandler("delete")}
        />
      </View>
    )
  }

  updateRef = ref => {
    this._swipeableRow = ref
  }

  close = () => {
    this._swipeableRow.close()
  }

  render() {
    const { children } = this.props
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}
      >
        {children}
      </Swipeable>
    )
  }
}
