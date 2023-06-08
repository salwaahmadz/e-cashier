import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";

const HistoryScreen = () => (
  <View style={styles.container}>
    <Card>
      <Text>History 1</Text>
    </Card>

    <Card>
      <Text>History 2</Text>
    </Card>
    {/* Add more Card components for other products */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HistoryScreen;
