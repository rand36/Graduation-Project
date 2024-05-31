import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Splash from "./screens/StackScreens/Splash";
import OnBoard from "./screens/StackScreens/OnBoard";
import SignIn from "./screens/StackScreens/SignIn";
import SignUp from "./screens/StackScreens/SignUp";
import Home from "./screens/TabScreens/Home";
import ResetPass from "./screens/StackScreens/ResetPass";
import NewPass from "./screens/StackScreens/NewPass";
import OtpPass from "./screens/StackScreens/OtpPass";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { COLORS } from "./assets/colors/colors";
import PlaceDetails from "./screens/StackScreens/PlaceDetails";
import EventDetails from "./screens/StackScreens/EventDetails";
import AddEvent from "./screens/StackScreens/AddEvent";
import Events from "./screens/TabScreens/Events";
import Profile from "./screens/TabScreens/Profile";
import PlaceMap from "./screens/StackScreens/PlaceMap";
import Community from "./screens/TabScreens/Community";
import SomeOneProfile from "./screens/StackScreens/SomeOneProfile";
import CreatePost from "./screens/StackScreens/CreatePost";

const Stack = createNativeStackNavigator();

function StackGroup() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{
          gestureEnabled: false,
          swipeEnabled: false,
        }}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="RestPass" component={ResetPass} />
      <Stack.Screen name="OtpPass" component={OtpPass} />
      <Stack.Screen name="NewPass" component={NewPass} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SomeOneProfile" component={SomeOneProfile} />
      <Stack.Screen
        name="AddEvent"
        component={AddEvent}
        options={{
          headerShown: true,

          title: "Add Event",
          size: "large",
          headerStyle: {
            backgroundColor: "#DF702F",
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerLeft: () => (
            <>
              <Ionicons
                name="arrow-back-outline"
                size={40}
                color={"#fff"}
                onPress={() => navigation.navigate("Events")}
              ></Ionicons>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetails}
        options={{
          headerShown: true,
          title: "",
          headerTransparent: true,

          headerLeft: () => (
            <>
              <Ionicons
                name="arrow-back-outline"
                size={30}
                color={"#FFDBB9"}
                onPress={() => navigation.navigate("Events")}
              ></Ionicons>
            </>
          ),

          headerRight: () => (
            <>
              <Ionicons
                name="heart-outline"
                size={30}
                color={"#FFDBB9"}
              ></Ionicons>
              <Ionicons
                name="share-social-outline"
                size={30}
                color={"#FFDBB9"}
              ></Ionicons>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="PlaceMap"
        component={PlaceMap}
        screenOptions={{ headerShown: true }}
      />
      <Stack.Screen name="Tab" component={TabGroub} />
      <Stack.Screen
        name="PlaceDetails"
        component={PlaceDetails}
        options={{
          headerShown: true,
          title: "",
          // headerStyle: {
          //   backgroundColor: "#000000",
          // },
          headerTintColor: "white",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          animationTypeForReplace: "push",
          animation: "slide_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabGroub() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.main,
        tabBarInactiveTintColor: "grey",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Events") {
            iconName = focused ? "calendar-clear" : "calendar-clear-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Community") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: { fontWeight: "800" },
        tabBarIconStyle: { marginBottom: -5 },
        tabBarItemStyle: { marginBottom: 5 },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: true,
          title: "Events",
          size: "large",
          headerStyle: {
            backgroundColor: "#DF702F",
          },
          headerRightContainerStyle: {
            paddingRight: 10,
            marginStart: 5,
          },
          headerLeftContainerStyle: { paddingRight: 5 },

          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
          headerTintColor: "white",

          headerRight: () => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  marginEnd: 10,
                }}
              >
                <Ionicons
                  name="add-circle"
                  size={26}
                  color={"#fff"}
                  onPress={() => navigation.navigate("AddEvent")}
                />
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen name="Chat" component={Home} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.main,
          },
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
            fontSize: 28,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return <StackGroup></StackGroup>;
}
