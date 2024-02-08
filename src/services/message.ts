class Message {
  send(message: string) {
    console.log(message)
  }
}

export const makeMessage = () => new Message()
