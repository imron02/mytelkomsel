import { config } from "@tamagui/config/v3";

import { radius, size, space, zIndex } from "@tamagui/themes";
import { createFont, createTamagui, createTokens } from "tamagui";

const openSansFont = createFont({
  family: "OpenSans, OpenSansBold",
  size,
  weight: {
    1: "300",
    2: "700",
  },
  face: {
    300: { normal: "OpenSans" },
    700: { normal: "OpenSansBold" },
  },
});

const tokens = createTokens({
  size,
  space,
  radius,
  zIndex,
  color: {
    primary: "#EC2028",
    white: "#fff",
    greyWhite: "#CED6E0",
  },
});

const light = {
  background: tokens.color.primary,
  primary: tokens.color.primary,
  white: tokens.color.white,
};

const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes: {
    light,
  },
  fonts: {
    heading: openSansFont,
    body: openSansFont,
  },
});

export default tamaguiConfig;
export type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
