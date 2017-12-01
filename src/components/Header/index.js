import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const Header = () => (
  <View style={styles.container}>
    <Icon name="menu" size={24} style={styles.icon} />
    <Text style={styles.title}>Primary</Text>
    <View style={styles.right}>
      <Icon name="search" size={24} style={[styles.icon, { alignContent: 'flex-end' }]} />
    </View>
  </View>
)

export default Header