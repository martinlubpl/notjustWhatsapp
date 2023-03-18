import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NotImplementedScreen from '../screens/NotImplementedScreen'
import ChatList from '../screens/ChatList'

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Chats">
      <Tab.Screen name="Status" component={NotImplementedScreen} />
      <Tab.Screen name="Calls" component={NotImplementedScreen} />
      <Tab.Screen name="Camera" component={NotImplementedScreen} />
      <Tab.Screen name="Chats" component={ChatList} />
      <Tab.Screen name="Settings" component={NotImplementedScreen} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
