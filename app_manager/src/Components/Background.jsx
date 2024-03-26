import { StyleSheet, Dimensions, ImageBackground } from "react-native";

const { height, width } = Dimensions.get('window');

import { icons } from "../Localized";

function Background({index}) {
      const image = icons.background[index]

      return <ImageBackground source={image} resizeMode="cover" style={styles} />;
}

const styles = StyleSheet.create({
      backgroundColor: 'white',
      position: 'absolute',
      height,
      width,
})

export default Background;
