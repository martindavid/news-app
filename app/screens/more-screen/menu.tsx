import { MoreScreenDetailModes } from "./more-screen-detail"

/**
 * Menu items to display
 */
export const menuItems = [
  {
    title: "Main",
    data: [
      {
        title: "Terms (Markdown)",
        mode: MoreScreenDetailModes.Markdown,
        content: require("./content/about").content,
      },
      {
        title: "Privacy (Web View)",
        mode: MoreScreenDetailModes.WebView,
        content: "https://opensource.com/privacy-policy",
      },
    ],
  },
  {
    title: "Auth",
    data: [{ title: "Sign out" }],
  },
]
