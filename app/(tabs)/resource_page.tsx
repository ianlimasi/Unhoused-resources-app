import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import MapButton from '@/components/MapButton';
import Ionicons from '@expo/vector-icons/Ionicons' // Popular icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

import Carousel from 'react-native-snap-carousel';
import ResImage from '@/components/ResImage';

export default function resource_page() {
  return (
    <View>
      <Text style = {styles.header}>Capitol Hill Community Lunch</Text>
      <View style = {styles.rowContainer}>
        <Text style = {[styles.body, {width:30}]}>4,4</Text>
        <AntDesign name="star" size={18} color="#EFBC06" marginTop={3} marginRight={1.5}/>
        <AntDesign name="star" size={18} color="#EFBC06" marginTop={3} marginRight={1.5}/>
        <AntDesign name="star" size={18} color="#EFBC06" marginTop={3} marginRight={1.5}/>
        <AntDesign name="star" size={18} color="#EFBC06" marginTop={3} marginRight={1.5}/>
        <AntDesign name="star" size={18} color="#C2C1BA" marginTop={3} marginRight={1.5}/>
      </View>
      <Text style = {[styles.body, {fontStyle:'italic'}]}>10:00 AM - 3:00 PM</Text>

      <View style = {[styles.rowContainer, {marginLeft: 14}]}>
        <MapButton texts="Directions" icon="directions"/>
        <MapButton texts="Call  " icon="directions"/>
        <MapButton texts="Save  " icon="directions"/>
        <MapButton texts="Website" icon="directions"/>
      </View>

      <ResImage uri={require('@/assets/images/FoodBank1.jpeg')}></ResImage>

      <View style={[{marginTop:15}]}>
        <Text style = {[styles.body, {width:300}, {marginBottom:10}]}>509 10th Ave E, Seattle, WA 98102</Text>
        <Text style = {[styles.body, {width:300}, {marginBottom:10}]}>Seniors (65+)</Text>
        <Text style = {[styles.body, {width:300}, {marginBottom:10}]}>5 miles away</Text>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    marginLeft: 24,
    color: '#37637C',
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    width: 292,
    borderColor : 'red',
    borderWidth: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  body: {
    marginTop: 2,
    marginLeft: 24,
    color: '#7C3763',
    fontSize: 17,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    width: 350,
    borderColor : 'red',
    borderWidth: 1,
  },
});
