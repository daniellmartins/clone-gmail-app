import React from 'react'
import { View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const ButtonNew = () => (
  <View style={styles.container}>
    <Icon name="mode-edit" size={24} style={styles.icon} />
  </View>
)

export default ButtonNew