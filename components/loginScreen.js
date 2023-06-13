import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, MaterialIcons, Ionicons, Fontisto, Octicons } from '@expo/vector-icons'; 

function LoginScreen({ navigation, route }) {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')

  return (
    <>
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
        <Text style={styles.newAccountText}>No Account? Sign up <Text
          style={{color: "#3A5A40"}}
          onPress={() => {navigation.navigate("New Account");}}
        >
          here
        </Text></Text>
        <Pressable onPress={() => {navigation.navigate("Home");}} style={styles.signInButton}>
          <Text style={styles.signInText}>Sign in</Text>
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
            <Text style={styles.loginPrompt}>Sign in with Google</Text>
          </View>
        </View>
        <View style={styles.otherLoginBox}>
          <Octicons name="mark-github" size={24} color="black" style={styles.icon}/>
          <View style={styles.loginTexts}>
            <Text style={styles.loginPrompt}>Sign in with GitHub</Text>
          </View>
        </View>
        <View style={styles.otherLoginBox}>
          <Ionicons name="md-logo-twitter" size={24} color="black" style={styles.icon}/>
          <View style={styles.loginTexts}>
            <Text style={styles.loginPrompt}>Sign in with Twitter</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const Stack = createStackNavigator();

export default function Login() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#DAD7CD",
          height: 200, // Adjust the height as per your requirement
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 35,
          margin: 20,
          color: "#3A5A40",
        },
        headerTitleAlign: 'left'
      }}>
      <Stack.Screen name="Log in" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAD7CD",
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
  newAccountText: {
    marginTop: "5%",
    marginLeft: "10%",
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#588157",
    alignSelf: "flex-end",
    marginRight: "10%",
    borderRadius: "10%",
    marginBottom: "10%",
  },
  signInText: {
    color: "white",
    fontSize: 18,
    margin: "3%"
  }
});