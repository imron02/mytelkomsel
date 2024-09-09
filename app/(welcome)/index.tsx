import { CForm } from "@/app/components/form";
import { Check } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Checkbox, Form, Text, View } from "tamagui";

const WelcomeImage = require("../../assets/images/welcome-image.png");

export default function Index() {
  return (
    <View backgroundColor="$white" h="100%" p="$4">
      <Image source={WelcomeImage} style={styles.welcomeImage} />
      <Text mt="$8" mb="$5">
        Silahkan masuk dengan nomor telkomsel kamu
      </Text>
      <Form>
        <CForm.Input label="No HP" placeholder="Cth. 08129011xxxx" />
        <CForm.Button label="LANJUT" mt="$6" />
        <Checkbox size="$4">
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 147,
    height: 133,
  },
});
