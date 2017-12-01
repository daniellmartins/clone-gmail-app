import { StyleSheet } from 'react-native'
import { metrics, colors, fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 56,
    width: 56,
    borderRadius: 28,
    position: 'absolute',
    right: metrics.padding,
    bottom: metrics.padding,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  icon: {
    color: colors.white,
  },
})

export default styles