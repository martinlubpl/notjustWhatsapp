import { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
// gs: expo vector icons

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('')

  const onMessageSend = () => {
    console.warn('sending message:', newMessage)
    //clear
    setNewMessage('')
  }

  return (
    <View style={styles.container}>
      {/* gs: expo vector icons */}
      <AntDesign name="plus" size={28} color="royalblue" />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.mInput}
        placeholder="type your message"
      />
      <MaterialIcons
        onPress={onMessageSend}
        style={styles.send}
        name="send"
        size={24}
        color="white"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#eee',
    padding: 10,
    alignItems: 'center',
  },
  mInput: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    fontSize: 15,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 10,
    borderRadius: 30,
    overflow: 'hidden',
  },
})

export default InputBox
