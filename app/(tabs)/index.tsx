import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

import colors from "../colors";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.appScreen}> 
      {/* IMAGE */}
      <View style={styles.imageContainer}>
        {/* <Image source={PlaceholderImage} style={styles.image}/> */}
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>

      {/* BUTTON */}
      <View style={styles.buttonsContainer}>
        <Button theme="primary" label="Choose a photo"/>
        <Button label="Use this photo"/>
      </View>

      {/* TODO: LEFTOFF */}
      {/* Button-images (TO-BE BUTTONS) */}
      <View
        style={[
          styles.buttonImages,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'darkorange'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
      </View>

      {/* <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonImages: {
    flex: 1,
    padding: 20,
  },
  appScreen: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },

  imageContainer: { //! imgCont is a FLEXBOX!
    flex: 1,
  },
  buttonsContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
