import { StyleSheet } from 'react-native'
import { metrics, colors, fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    height: metrics.headerHeight,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: colors.white,
    fontSize: fonts.large,
    fontWeight: 'bold',
    marginLeft: metrics.margin,
  },

  icon: {
    color: colors.white,
    width: 56,
    textAlign: 'center',
  },

  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})

export default styles