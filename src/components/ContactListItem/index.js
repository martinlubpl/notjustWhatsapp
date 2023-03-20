import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import { useNavigation } from '@react-navigation/native'

// functional component
const ContactListItem = ({ chat }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Chat', { id: chat.id, name: chat.user.name })
      }}
      style={styles.container}
    >
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />

      <Text numberOfLines={1} style={styles.name}>
        {chat.user.name}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 75,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
})

export default ContactListItem
