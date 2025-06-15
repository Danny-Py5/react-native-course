import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { COLORS } from "../styles/constants";
import { styles } from "../styles/globals";

type TabIconProps = {
  focused: boolean;
  name: string;
};

const TabIcon = (param: TabIconProps) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: param.focused ? COLORS.purple : COLORS.purpleLight,
        minWidth: 112,
        minHeight: 40,
        marginTop: 10,
        borderRadius: 100,
      }}
    >
      <Text
        style={{
          ...styles.text,
          fontWeight: "bold",
          color: param.focused ? "#fff" : "#555",
        }}
      >
        {param.name}
      </Text>
    </View>
  );
};

export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: (param: { focused: boolean }) => {
            return <TabIcon name="Home" focused={param.focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: (param: { focused: boolean }) => {
            return <TabIcon name="Profile" focused={param.focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: (param: { focused: boolean }) => {
            return <TabIcon name="Saved" focused={param.focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: (param: { focused: boolean }) => {
            return <TabIcon name="Search" focused={param.focused} />;
          },
        }}
      />
    </Tabs>
  );
}

const _styles = {
  tabBackgroundImage: {
    display: "flex",
    minWidth: 112,
    minHeight: 40,
    marginTop: 10,
    justifyContent: "center",
    borderRadius: 100,
    overflow: "hidden",
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
  },
};
