import React, { useState, useCallback, useEffect } from 'react'
import SocketIOClient from 'socket.io-client'
import { GiftedChat } from 'react-native-gifted-chat'

export default ChatComponent = (props) => {
  const [messages, setMessages] = useState([]);
    const socket = SocketIOClient('http://localhost:3000');
    socket.on('message', this.onReceivedMessage);
    console.log('This happen once');
    useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    socket.emit('message', messages[0]);
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

    // Event listeners
  /**
   * When the server sends a message to this.
   */
  onReceivedMessage = (messages) => {}

  return (
          <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                />
  )
}