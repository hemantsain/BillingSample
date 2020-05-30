import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export const homeStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.black,
  },
  outerContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  overlayContentContainer: {
    marginTop: 100,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  searchContainer: {
    marginBottom: 16,
  },
  dateContainer: {
    marginVertical: 16,
  },
});
