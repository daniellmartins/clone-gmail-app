import React from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from './components/Header'
import ButtonNew from './components/ButtonNew'
import MessageList from './components/MessageList'

const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="#B3372C" />
    <Header />
    <ScrollView>
      <View style={{ padding: 25,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    flexDirection: 'row', }}>
        <Icon name="group" size={24} style={{ color: '#4986E7' }} />
        <View style={{ marginLeft: 20, flexDirection: 'column' }}>
          <Text>Social</Text>
          <Text>Google+</Text>
        </View>
      </View>
      <MessageList />
    </ScrollView>
    <ButtonNew />
  </View>
)

export default App