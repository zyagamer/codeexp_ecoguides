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
        <Text style={styles.titleText}>Create Account</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Feather name="user" size={24} color="black" style={styles.icon}/>
          <View style={styles.loginTexts}>
            <Text style={styles.loginPrompt}>Username</Text>
            <TextInput
              value={text}
              style={{ fontSize: 20, color: 'black' }}
              placeholder="username"
              onChangeText={(text) => {
                setText([text])
              }}
            />
          </View>
        </View>
        <View style={styles.loginBox}>
          <MaterialIcons name="lock-outline" size={24} color="black" style={styles.icon}/>
          <View style={styles.loginTexts}>
            <Text style={styles.loginPrompt}>Password</Text>
            <TextInput
              value={text1}
              style={{ fontSize: 20, color: 'black' }}
              placeholder="********"
              onChangeText={(text1) => {
                setText1(text1)
              }}
            />
          </View>
        </View>
        <Pressable onPress={() => {navigation.navigate("Home");}} style={styles.signInButton}>
          <Text style={styles.signInText}>Sign up</Text>
        </Pressable>
        <View
          style={{
            borderBottomColor: '#3A5A40',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}/>
        <Text style={{alignSelf: "center", color: "#3A5A40", "fontWeight": "bold"}}>OR</Text>
        <View style={styles.otherLoginBox}>
          <Fontisto name="google" size={24} color="black" style={styles.icon}/>
          <View style={styles.loginTexts}>
            <Text style={styles.loginPrompt}>Continue with Google</Text>
          </View>
        </View>
        <View style={styles.otherLoginBox}>
          <Octicons name="mark-github" size={24} color="black" style={styles.icon}/>
          <View style={styles.loginTexts}>
            <Text style={styles.loginPrompt}>Continue with GitHub</Text>
          </View>
        </View>
        <View style={styles.otherLoginBox}>
          <Ionicons name="md-logo-twitter" size={24} color="black" style={styles.icon}/>
          <View style={styles.loginTexts}>
            <Text style={styles.loginPrompt}>Continue with Twitter</Text>
          </View>
        </View>
      </View>
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