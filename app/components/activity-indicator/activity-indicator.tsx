import * as React from "react";
import {
  ActivityIndicator as RNActivityIndicator,
  ViewStyle
} from "react-native";

const ACTIVITY: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

export interface ActivityIndicatorProps {
  /**
   * Activity size
   */
  size?: "small" | "large";
  /**
   * Color!
   */
  color?: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function ActivityIndicator(props: ActivityIndicatorProps) {
  // grab the props
  const { style, ...rest } = props;

  return <RNActivityIndicator style={ACTIVITY} {...rest} />;
}
