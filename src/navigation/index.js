import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ChatScreen from '../screens/ChatScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatList from '../screens/ChatList'
const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chats">
        <Stack.Screen name="Chats" component={ChatList} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>aaa</Text>
    // </View>
  )
}

export default Navigator
