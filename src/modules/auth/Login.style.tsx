import {Colors} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  loginBanner: {
    marginTop: 32,
    marginBottom: 24,
  },
  loginBannerText: {
    fontSize: 20,
    marginTop: 46,
  },
  tnc: {
    display: 'flex',
    flexDirection: 'row',
  },
  tncText: {
    marginLeft: 12,
    fontSize: 18,
  },
  tncLink: {
    color: Colors.PRIMARY,
  },
  footer: {
    flex: 1,
    marginTop: 32,
  },
  textLoginWith: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 14,
  },
  googleSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: Colors.GOOGLE_STROKE,
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  googleSignInText: {
    marginLeft: 8,
  },
  fbSignIn: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    backgroundColor: Colors.FB,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderColor: Colors.FB,
  },
  fbSignInText: {
    marginLeft: 8,
    color: Colors.WHITE,
  },
});
