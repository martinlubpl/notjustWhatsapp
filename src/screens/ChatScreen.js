import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native'
import bg from '../../assets/images/BG.png'
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const ChatScreen = () => {
  // const route = useRoute(useNavigation)
  const route = useRoute()
  const navigation = useNavigation()

  // console.log(route)
  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [route.params.name])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bg}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 120}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message msg={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
})
export default ChatScreen
