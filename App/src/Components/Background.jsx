import { ImageBackground } from "react-native";

import { icons } from "../Localized";
import { screens as styles } from "../Style";

function Background({index}) {
      const css = styles["Background"];
      const image = icons.background[index]

      return <ImageBackground source={image} resizeMode="cover" style={css} />;
}

export default Background;
