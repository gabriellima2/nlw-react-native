import { Linking } from "react-native"

class Message {
  send(phone: string, message: string) {
    Linking.openURL(`http://api.whatsapp.com/send?phone=${phone}&text=${message}`)
  }
}

export const makeMessage = () => new Message()
