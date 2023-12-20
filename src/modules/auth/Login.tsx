import {LoginBanner, GoogleLogo, FBLogo} from '@assets/icon';
import {Form} from '@components/Form';
import {Button, Text} from '@rneui/themed';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './Login.style';

const Login = () => (
  <View style={styles.container}>
    <View style={styles.loginBanner}>
      <LoginBanner />
      <Text h4 h4Style={styles.loginBannerText}>
        Silahkan masuk dengan nomor telkomsel kamu
      </Text>
    </View>

    <Form.Input label="Nomor HP" placeholder="Cth. 08129011xxxx" />
    <View style={styles.tnc}>
      <Form.CheckBox />
      <Text style={styles.tncText}>
        Saya menyetujui <Text style={styles.tncLink}>syarat</Text>,{' '}
        <Text style={styles.tncLink}>ketentuan</Text>, dan{' '}
        <Text style={styles.tncLink}>privasi Telkomsel</Text>
      </Text>
    </View>

    <View style={styles.footer}>
      <Button title="Masuk" color="primary" uppercase />
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
  </View>
);

export default Login;
