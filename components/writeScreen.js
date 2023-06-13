import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, MaterialIcons, Ionicons, Fontisto, Octicons } from '@expo/vector-icons'; 

export default function NewAccount({ navigation }) {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>Write</Text>
      </View>
      <View style={styles.container}></View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAD7CD",
    alignItems: "left",
    justifyContent: "left",
  },
  title: {
    backgroundColor: "#DAD7CD",
    textAlign: "left",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: "10%",
    marginTop: "20%",
    color: "#3A5A40",
  },
  loginBox: {
    fontSize: 20,
    backgroundColor: "#e8e8e8",
    fontWeight: "bold",
    width: "80%",
    alignItems: "center",
    flex: 0.15,
    flexDirection: 'row',
    borderRadius: "20%",
    marginLeft: "10%",
    marginTop: "10%",
  },
  otherLoginBox: {
    fontSize: 20,
    backgroundColor: "#e8e8e8",
    fontWeight: "bold",
    width: "80%",
    alignItems: "center",
    flex: 0.15,
    flexDirection: 'row',
    borderRadius: "20%",
    marginLeft: "10%",
    marginTop: "5%",
  },
  icon: {
    margin: 10,
    color: "#737373",
  },
  loginPrompt: {
    color: "#737373",
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#588157",
    alignSelf: "flex-end",
    marginRight: "10%",
    borderRadius: "10%",
    marginTop: "10%",
  },
  signInText: {
    color: "white",
    fontSize: 18,
    margin: "3%"
  }
});