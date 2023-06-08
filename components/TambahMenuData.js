import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

const TambahMenuData = ({ label, placeholder, keyboardType, onChangeText, stateName, value }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(stateName, text)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 8,
    marginVertical: 16,
  },
});

export default TambahMenuData;
