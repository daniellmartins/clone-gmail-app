import React, { Component } from 'react'
import { View } from 'react-native'

import Message from './Message'

class MessageList extends Component {
  state = {
    messages: [
      {
        id: 1,
        fisrt: 'A',
        name: 'Andy Brown',
        message: 'Bring Your Parents to Work Day! Hey! What do you think about a...',
        date: '1:45 PM',
        color: '#7F2EE9',
        type: 'Work'
      },
      {
        id: 2,
        fisrt: 'K',
        name: 'Keri Anderson',
        message: 'Check out the new friend we made, Me...',
        date: '1:39 PM',
        color: '#2E7FE9',
        type: false
      },
      {
        id: 3,
        fisrt: 'R',
        name: 'Regis, Peter, Rachel',
        message: 'Board game night? Sunday works! If you can get Dex...',
        date: 'Sep 29',
        color: '#C02EE9',
        type: 'Fun'
      },
      {
        id: 4,
        fisrt: 'A',
        name: 'Aruna Knight',
        message: 'Book you recommended',
        date: 'Sep 29',
        color: '#7F2EE9',
        type: 'Family'
      }
    ]
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.state.messages.map(message => <Message key={message.id} message={message} />) }
      </View>
    )
  }
}

export default MessageList