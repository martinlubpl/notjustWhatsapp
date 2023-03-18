import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Navigator from './src/navigation'
// import ChatListItem from './src/components/ChatListItem'
// import ChatList from './src/screens/ChatList'
import ChatScreen from './src/screens/ChatScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chat={chat} />
      <ChatListItem chat={chat} /> */}
      {/* <ChatList /> */}
      {/* <ChatScreen /> */}
      <Navigator />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',

    alignItems: 'stretch',
  },
})
