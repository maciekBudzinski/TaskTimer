import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  zeroPadding: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  zeroMargin: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },

  listSeparator: {
    paddingLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  listSeparatorText: {
    fontSize: 20,
    color: 'black',
  },
  drawerImage: {
    maxHeight: `20%`,
    maxWidth: `100%`,
  },
});
