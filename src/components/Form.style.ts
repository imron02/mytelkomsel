import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';

export const labelThemed = (isDarkTheme: boolean) => {
  return StyleSheet.create({
    label: {
      fontSize: 14,
      color: isDarkTheme ? Colors.WHITE : Colors.BLACK,
      marginBottom: 8,
    },
  });
};

const styles = StyleSheet.create({
  containerInput: {
    borderWidth: 1,
    borderColor: '#CED6E0',
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  input: {
    fontSize: 14,
    padding: 0,
    margin: 0,
  },
  container: {
    paddingHorizontal: 0,
    marginBottom: -10,
  },
  containerCheckbox: {
    marginVertical: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 5,
  },
});

export default styles;
