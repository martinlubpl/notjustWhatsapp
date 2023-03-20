import { FlatList } from 'react-native'
import chats from '../../assets/data/chats.json'
import ContactListItem from '../components/ContactListItem'

const Contacts = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ContactListItem chat={item} />}
    />
  )
}

export default Contacts
