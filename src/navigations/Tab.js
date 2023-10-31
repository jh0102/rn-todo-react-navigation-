import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Profile, Settings } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";

const TabIcon = ({ name, size, color }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: props => {
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
            backgroundColor: '#0f56b3',
            borderTopColor: '#ffffff',
            borderTopWidth: 1,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#5096f1'
    })}
    >
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: props.focused ? 'mail' : 'mail-outline' });
          },
          tabBarLabel: "Inbox",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: "person" });
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: "settings" });
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNav;
