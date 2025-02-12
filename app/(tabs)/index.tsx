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
    
      <View style={styles.searchSelection}>
        <Text style={styles.header}> What are you looking for? </Text>
        
        <View
          style={[
            styles.buttonsContainer,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>
          <Button label="Hygiene" theme="primary"/>
          <Button label="Food Banks" theme="primary"/>
          <Button label="Medical" theme="primary"/>
          <Button label="Shelter" theme="primary"/>
        </View>
        <Button label="Submit"/>
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
  searchSelection: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  text: {
    color: "#fff",
  },
  header: {
    fontWeight: 'bold',
    fontSize: 35,
    color: colors.navyBlue
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
    width: '100%',
    // borderColor: "black",
    // borderWidth: 10,
    flexWrap: 'wrap',
  },
});
