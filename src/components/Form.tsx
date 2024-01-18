import {CheckBox, Input, InputProps as RNEInputProps} from '@rneui/themed';
import React, {PropsWithChildren, RefObject} from 'react';
import {GestureResponderEvent, useColorScheme} from 'react-native';
import styles, {labelThemed} from './Form.style';

interface InputProps extends RNEInputProps {
  ref?: RefObject<typeof Input> & RefObject<PropsWithChildren<any>>;
}

const FormInput = (props: InputProps) => {
  const mode = useColorScheme() === 'dark';
  return (
    <Input
      {...props}
      ref={props.ref}
      containerStyle={styles.container}
      labelStyle={labelThemed(mode).label}
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
