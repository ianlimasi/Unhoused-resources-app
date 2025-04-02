import { StyleSheet, View, Pressable, Text } from 'react-native';
import ReviewStars from '@/components/ReviewStars';
import { Image, ImageSource } from 'expo-image';
import { useFonts } from 'expo-font';
import { BorderlessButton } from 'react-native-gesture-handler';

type Props = {
    name: string;
    content: string;
    uri: string;
}
export default function ({name, content, uri} : Props){
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Italic": require("@/assets/fonts/Roboto-Italic.ttf"),
        "Roboto_Condensed-ExtraBold": require("@/assets/fonts/Roboto_Condensed-ExtraBold.ttf"),
        "Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
        "Roboto-BoldItalic": require("@/assets/fonts/Roboto-BoldItalic.ttf"),
        "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
        "Roboto_Condensed-Bold": require("@/assets/fonts/Roboto_Condensed-Bold.ttf"),
        "Roboto-MediumItalic": require("@/assets/fonts/Roboto-MediumItalic.ttf"),
      });

    return(
        <View style={[{marginTop:35}]}>
            <View style={styles.rowContainer}>
                <Image source={uri} style={styles.profile}/>
                <Text style = {styles.header}>{name}</Text>
            </View>
            <View style={[{marginLeft:24}, {marginTop:4}]}>
                <ReviewStars s={15}/>
            </View>
            <View>
                <Text style={styles.body}>{content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
      marginTop: 0,
      marginLeft: 24,
      width: 40,
      height: 40,
      borderColor : 'red',
      borderWidth: 1,
      borderRadius: 50,
    },
    rowContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'red',
    },
    colContainer: {
      flexDirection: 'column',
    },
    body: {
      marginTop: 10,
      marginLeft: 24,
      color: '444C51',
      fontSize: 14,
      fontFamily: 'Roboto-Medium',
      fontWeight: 'medium',
      opacity: 0.7,
      width: 325,
      height: 200,
      borderColor : 'red',
      borderWidth: 1,
    },
    header: {
        marginTop: 10,
        marginLeft: 20,
        color: '#7C3763',
        fontSize: 17,
        fontFamily: 'Roboto-Bold',
        width: 200,
        height: 20,
        borderColor : 'red',
        borderWidth: 1,
      },
  });