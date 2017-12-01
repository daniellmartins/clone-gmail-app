import { StyleSheet } from 'react-native'

import { metrics, colors, fonts } from '../../../styles'

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.light,
    flexDirection: 'row',
  },

  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    marginRight: metrics.padding,
  },

  message: {
    flex: 4,
  },

  info: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  imageText: {
    color: colors.white,
    fontSize: fonts.large,
  },

  name: {
    color: colors.dark,
    fontSize: fonts.medium,
  },

  messageText: {
    color: colors.lighter,
    fontSize: fonts.small,
  },

  hour: {
    color: colors.lighter,
    fontSize: fonts.xsmall,
    textAlign: 'right',
  },
})

export default styles