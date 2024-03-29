import {FBLogo, GoogleLogo, LoginBanner} from '@assets/icon';
import {Form} from '@components/Form';
import {Button} from '@rneui/themed';
import {Formik} from 'formik';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {H6, Text, View} from 'tamagui';
import * as Yup from 'yup';
import {styles} from './Login.style';

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(10, 'Minimal 10 digit')
    .required('Nomor HP harus diisi'),
  tnc: Yup.boolean().oneOf([true], 'Syarat dan ketentuan harus dipilih'),
});

const Login = () => {
  return (
    <View m={20} backgroundColor="$bg" f={1}>
      <View mt={32} mb={24}>
        <LoginBanner />
        <H6 fos={18} fow="bold" mt={20}>
          Silahkan masuk dengan nomor telkomsel kamu
        </H6>
      </View>

      <Formik
        initialValues={{phoneNumber: '', tnc: false}}
        validationSchema={LoginSchema}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          isValid,
          dirty,
          errors,
        }) => (
          <>
            <Form.Input
              label="Nomor HP"
              placeholder="Cth. 08129011xxxx"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              keyboardType="number-pad"
              errorMessage={errors.phoneNumber}
            />
            <View style={styles.tnc}>
              <Form.CheckBox
                checked={values.tnc}
                onPress={() => setFieldValue('tnc', !values.tnc)}
              />
              <Text style={styles.tncText}>
                Saya menyetujui <Text style={styles.tncLink}>syarat</Text>,{' '}
                <Text style={styles.tncLink}>ketentuan</Text>, dan{' '}
                <Text style={styles.tncLink}>privasi Telkomsel</Text>
              </Text>
            </View>

            <View style={styles.footer}>
              <Button
                title="Masuk"
                color="primary"
                uppercase
                onPress={() => handleSubmit()}
                disabled={!isValid || !dirty}
              />
              <Text style={styles.textLoginWith}>Atau masuk menggunakan</Text>

              <TouchableOpacity style={styles.googleSignIn}>
                <GoogleLogo width={18} height={18} />
                <Text style={styles.googleSignInText}>Sign in with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fbSignIn}>
                <FBLogo width={24} height={24} />
                <Text style={styles.fbSignInText}>Login with Facebook</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
