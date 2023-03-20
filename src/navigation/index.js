import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ChatScreen from '../screens/ChatScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contacts from '../screens/Contacts'
import MainTabNavigator from './MainTabNavigator'
const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Chats"> */}
      <Stack.Navigator>
        {/* hide double header */}
        <Stack.Screen
          name="TabNav"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        {/* remove ChatList, now in MainTabNavigator */}
        {/* <Stack.Screen name="Chats" component={ChatList} /> */}
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>aaa</Text>
    // </View>
  )
}

export default Navigator
