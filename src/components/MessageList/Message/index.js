import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const Message = ({ message: { fisrt, name, message, color, type, date } }) => (
  <View style={styles.container}>
    <View style={[styles.image, { backgroundColor: color }]}>
      <Text style={styles.imageText}>{fisrt}</Text>
    </View>
    <View style={styles.message}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.messageText}>{message}</Text>
    </View>
    <View style={styles.info}>
      <Text style={styles.hour}>{date}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, }}>
        {type && <Text style={{ marginRight: 10, backgroundColor: type === 'Work' ? '#FB4C2F' : type === 'Family' ? '#98D7E4' : '#B6CFF5', color: '#FFFFFF', fontSize: 12, height: 20, paddingHorizontal: 5, }}>{type}</Text>}
        <Icon name='star-border' size={22} />
      </View>
    </View>
  </View>
)

export default Message