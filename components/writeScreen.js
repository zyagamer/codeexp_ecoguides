import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, MaterialIcons, Ionicons, Fontisto, Octicons } from '@expo/vector-icons'; 

export default function NewAccount({ navigation }) {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>Write</Text>
        <Pressable onPress={() => {navigation.navigate("Explore");}} style={styles.submitButton}>
          <Text style={styles.submitText}>Post</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <View style={styles.inputTitleText}>
            <TextInput
              value={text}
              style={{ fontSize: 20, color: 'black' }}
              placeholder="Title"
              onChangeText={(text) => {
                setText([text])
              }}
            />
          </View>
        </View>
        <View style={styles.contentBox}>
          <View style={styles.contentText}>
            <TextInput
              value={text1}
              style={{ fontSize: 20, color: 'black'}}
              placeholder="body text"
              onChangeText={(text1) => {
                setText1([text1])
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: "#EDEDED",
    alignItems: "left",
    justifyContent: "left",
  },
  title: {
    backgroundColor: "#EDEDED",
    textAlign: "left",
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: "10%",
    marginTop: "20%",
    color: "#3A5A40",
  },
  titleBox: {
    fontSize: 20,
    backgroundColor: "#D9D9D9",
    fontWeight: "bold",
    width: "80%",
    alignItems: "center",
    flex: 0.15,
    flexDirection: 'row',
    borderRadius: "10%",
    marginLeft: "10%",
    marginTop: "10%",
  },
  inputTitleText: {
    alignContent: "flex-start",
    margin: "5%",
  },
  contentBox: {
    fontSize: 20,
    backgroundColor: "#D9D9D9",
    fontWeight: "bold",
    width: "80%",
    alignItems: "left",
    flex: 0.6,
    borderRadius: "10%",
    marginLeft: "10%",
    marginTop: "10%",
  },
  contentText: {
    alignContent: "flex-start",
    margin: "5%",
  },
  loginPrompt: {
    color: "#737373",
  },
  submitButton: {
    backgroundColor: "#588157",
    alignSelf: "center",
    marginRight: "10%",
    borderRadius: "5%",
    marginTop: "10%",
  },
  submitText: {
    color: "white",
    fontSize: 18,
    margin: "5%",
    alignSelf: "center",
  },
});