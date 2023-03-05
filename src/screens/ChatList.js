import { View, Text, FlatList } from 'react-native'
import chats from '../../assets/data/chats.json'
import ChatListItem from '../components/ChatListItem'

const ChatList = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  )
}

export default ChatList
