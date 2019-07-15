import { color } from "app/theme"
import { Theme } from "react-native-elements"

export const elementsTheme: Theme = {
  Button: {
    buttonStyle: {
      backgroundColor: color.palette.button,
    },
  },
  ListItem: {
    titleStyle: { fontWeight: "bold" },
    subtitleStyle: { fontSize: 13, color: color.dim },
    rightSubtitleStyle: { fontSize: 13, color: color.dim },
  },
  SearchBar: {
    round: true,
    containerStyle: {
      backgroundColor: color.palette.offWhite,
      borderWidth: 0,
    },
    inputContainerStyle: {
      backgroundColor: "#F1F3F5",
    },
    inputStyle: {
      fontSize: 17,
    },
  },
}
