import variables, { StyleSheet } from 'style';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
  },
  textView: {
    width: 0.75 * variables.windowWidth,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  switchView: {
    flex: 0.25 * variables.windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: variables.baseFont,
    color: variables.oxfordBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontFamily: variables.baseFont,
    color: variables.oxfordBlue,
    fontSize: 14,
    marginTop: 10,
  },
});
