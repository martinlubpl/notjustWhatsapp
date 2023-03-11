import { View, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const Message = ({ msg }) => {
  const checkMyMassage = () => {
    return msg.user.id === 'u1'
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: checkMyMassage(msg) ? '#eeffdd' : 'white',
          alignSelf: checkMyMassage(msg) ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text>{msg.text}</Text>
      <Text style={styles.time}>{dayjs(msg.createdAt).fromNow(true)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 2,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
})

export default Message
