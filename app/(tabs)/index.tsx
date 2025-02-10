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
    

      <Text> What are you looking for? </Text>
      
      <View
        style={[
          styles.buttonsContainer,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'row',
          },
        ]}>
        <Button label="Hygiene"/>
        <Button label="Food Banks"/>
        <Button label="Medical"/>
        <Button label="Shelter"/>
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
    height: '100%',
    width: '100%',
    flex: 1,
    padding: 20,
    // borderColor: "black",
    // borderWidth: 10,
    flexWrap: 'wrap',
  },
});
