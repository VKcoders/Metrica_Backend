import React from 'react';
import AnimatedLoader from "react-native-animated-loader";

// https://www.npmjs.com/package/react-native-animated-loader
// https://lottiefiles.com/search?q=loader

function Loader() {
  return (
    <AnimatedLoader
    //   visible={visible}
        visible={true}
        overlayColor="transparent"
        source={require("./animation.json")}
        animationStyle={{
            width: 100,
            height: 100
        }}
        speed={1.5}>
    </AnimatedLoader>
  );
}

export default Loader;