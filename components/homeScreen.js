import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Feather, MaterialIcons, Ionicons, Fontisto, Octicons } from '@expo/vector-icons'; 
import writeScreen from "./writeScreen";
import settingsScreen from "./settingsScreen";
import shopScreen from "./shopScreen";
import progressScreen from "./progressScreen";

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation, route }) {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const data = [
      { id: '1', text: 'Gardening' },
      { id: '2', text: 'Healthy Diets' },
      { id: '3', text: 'Sustainable Practices' },
      { id: '4', text: 'Healthy Diets' },
      { id: '5', text: 'Healthy Diets' },
      // Add more items as needed
    ];

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>Explore</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Text style={{color: "#344E41"}}>Filter By:</Text>
          <FlatList
                data={data}
                vertical
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                <View style={{ margin: 5 }}>
                    <Pressable onPress={() => {}} style={styles.filterButton}>
                      <Text style={styles.filterText}>{item.text}</Text>
                    </Pressable>
                </View>
                )}
            />
        </View>
        <View style={styles.postContainer}>
          <Text style={{color: "#344E41"}}>Filter By:</Text>
          <View style={styles.title}></View>
        </View>
        <View style={styles.postContainer}>
          <Text style={{color: "#344E41"}}>Filter By:</Text>
          <View style={styles.title}></View>
        </View>
      </View>
    </>
  );
}

export default function App() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              //Set the icon based on which route it is (name of the tab)
              if (route.name === "Explore") {
                iconName = "compass";
              } else if (route.name === "Shop") {
                iconName = "shopping-bag";
              } else if (route.name === "Add") {
                iconName = "plus";
              } else if (route.name === "Progress") {
                iconName = "line-chart";
              } else if (route.name === "Settings") {
                iconName = focused ? "user" : "user-o";
              }
  
              // You can return any component that you like here!
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#3A5A40",
            tabBarInactiveTintColor: "#A3B18A"
          })}>
          <Tab.Screen name="Explore" options={{ headerShown: false }} component={HomeScreen} />
          <Tab.Screen name="Shop" options={{ headerShown: false }} component={shopScreen} />
          <Tab.Screen name="Add" options={{ headerShown: false }} component={writeScreen} />
          <Tab.Screen name="Progress" options={{ headerShown: false }} component={progressScreen} />
          <Tab.Screen name="Settings" options={{ headerShown: false }} component={settingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAD7CD",
    alignItems: "left",
    justifyContent: "left",
  },
  filterContainer: {
    margin: "10%",
  },
  postContainer: {

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
  filterButton: {
    justifyContent: 'space-between',
    backgroundColor: "#588157",
    borderRadius: "4%",
    alignItems: "center"
  },
  filterText: {
    color: "white",
    fontSize: 14,
    margin: "2%"
  }
});