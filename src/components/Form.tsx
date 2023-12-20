import {CheckBox, Input} from '@rneui/themed';
import React from 'react';
import styles, {labelThemed} from './Form.style';
import {useColorScheme} from 'react-native';

type InputProps = {
  placeholder: string;
  label: string;
};

const FormInput = (props: InputProps) => {
  const mode = useColorScheme() === 'dark';

  return (
    <Input
      containerStyle={styles.container}
      label={props.label}
      labelStyle={labelThemed(mode).label}
      placeholder={props.placeholder}
      style={styles.input}
      inputContainerStyle={styles.containerInput}
    />
  );
};

const FormCheckBox = () => (
  <CheckBox
    checked
    iconType="material-community"
    checkedIcon="checkbox-marked"
    uncheckedIcon="checkbox-blank-outline"
    checkedColor="red"
    containerStyle={styles.containerCheckbox}
  />
);

export const Form = {
  Input: FormInput,
  CheckBox: FormCheckBox,
};
