import RNToast from "react-native-root-toast"
import { color } from "app/theme"

export enum ToastType {
  INFO,
  SUCCESS,
  ERROR,
}

export const Toast = (message: string, type = ToastType.INFO) => {
  let backgroundColor = color.text
  if (type != ToastType.INFO) {
    backgroundColor = type === ToastType.SUCCESS ? color.success : color.error
  }

  RNToast.show(message, {
    duration: RNToast.durations.SHORT,
    position: RNToast.positions.TOP + 20,
    opacity: 1,
    backgroundColor,
  })
}
