import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import Constant from 'expo-constants'

export default function Header() {
    const navigation = useNavigation()
  return (
    <View style={{
        marginTop:Constant.statusBarHeight,
        height:45,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:5
    }}>
        <View style={{
            flexDirection:"row",
            margin:5
        }}>
            <Entypo style={{
                marginLeft:15
            }} name="folder-video" size={33} color="blue" />
            <Text style={{
                fontSize:22,
                marginLeft:5
            }}>Video-Logs</Text>
        </View>
        <View style={{
            flexDirection:"row",
            justifyContent:"space-around",
            width:150,
            margin:5
        }}>
            <Ionicons name="md-videocam" size={32} color="#212121"/>
            <Ionicons name="md-search" size={32} color="#212121" 
            onPress={()=>navigation.navigate("search")}
            />
            <MaterialIcons name="account-circle" size={32} color="#212121" />
        </View>
      
    </View>
  );
}
