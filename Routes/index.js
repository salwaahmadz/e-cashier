import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

// ROUTER
import HomeScreen from "../components/HomeScreen";
import OrderListScreen from "../components/OrderListScreen";
import HistoryScreen from "../components/HistoryScreen";
import TambahMenu from "../components/TambahMenu";

const Router = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const TabIcon = ({ name, size, color }) => {
    return <Icon name={name} size={size} color={color} />;
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={HomeScreen} />
        <Stack.Screen name="Tambah Menu" component={TambahMenu} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "MenuB") {
            iconName = "book";
          } else if (route.name === "Order") {
            iconName = "inbox";
          } else if (route.name === "History") {
            iconName = "history";
          }

          return <TabIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarStyle: [
          {
            display: "flex",
          },
        ],
      })}
      tabBarOptions={{
        activeTintColor: "red",
      }}
    >
      <Tab.Screen
        name="MenuB"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Order"
        component={OrderListScreen}
        options={{ headerTitle: "Order List" }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ headerTitle: "History" }}
      />
    </Tab.Navigator>
  );
};

export default Router;
