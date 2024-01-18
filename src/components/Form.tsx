import {CheckBox, Input, InputProps as RNEInputProps} from '@rneui/themed';
import React from 'react';
import {GestureResponderEvent, useColorScheme} from 'react-native';
import styles, {labelThemed} from './Form.style';

interface InputProps extends RNEInputProps {
  placeholder: string;
  label: string;
}

const FormInput = (props: InputProps) => {
  const mode = useColorScheme() === 'dark';
  const {placeholder, label, ...restProps} = props;

  return (
    <Input
      {...restProps}
      containerStyle={styles.container}
      label={label}
      labelStyle={labelThemed(mode).label}
      placeholder={placeholder}
      style={styles.input}
      inputContainerStyle={styles.containerInput}
    />
  );
};

type CheckboxProps = {
  checked: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

const FormCheckBox = (props: CheckboxProps) => (
  <CheckBox
    checked={props.checked}
    iconType="material-community"
    checkedIcon="checkbox-marked"
    uncheckedIcon="checkbox-blank-outline"
    checkedColor="red"
    containerStyle={styles.containerCheckbox}
    onPress={props.onPress}
  />
);

export const Form = {
  Input: FormInput,
  CheckBox: FormCheckBox,
};
