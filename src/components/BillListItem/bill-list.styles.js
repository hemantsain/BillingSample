import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export const billListStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    borderColor: Colors.grey,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 24,
    color: Colors.black,
  },
  outerContainer: {
    flex: 1,
    margin: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  subTitleStyle: {
    fontSize: 20,
    color: Colors.gray,
  },
});
