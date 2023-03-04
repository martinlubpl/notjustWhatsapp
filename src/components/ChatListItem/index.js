import { Text, View, Image, StyleSheet } from 'react-native'

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            Name jakis dlugi nick jakis dlugi nick jakis dlugi nick
          </Text>
          <Text style={styles.subTitle}>21:36</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          Oh hi! Długa wiadomość musi się skrócić. Długa wiadomość musi się
          skrócić. Długa wiadomość musi się skrócić. Długa wiadomość musi się
          skrócić.
        </Text>
      </View>
    </View>
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
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
})

export default ChatListItem
