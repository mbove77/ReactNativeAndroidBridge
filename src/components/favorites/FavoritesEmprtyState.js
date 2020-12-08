import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Colors from "../../res/Colors";

const FavoritesEmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You don't have any favorites yet.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    margin: 16
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center"
  }
})
export default FavoritesEmptyState;
