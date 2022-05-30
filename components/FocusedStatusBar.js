import { View, Text, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import React from "react";

export default function FocusedStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}
