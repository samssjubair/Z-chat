import React from 'react'
import { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { AntDesign, SimpleLineIcons} from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Z Chat",
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: {color: 'black'},
            headerTintColor: 'black',
            headerLeft: ()=> 
            (<View style={{ marginLeft: 20}}>
                <TouchableOpacity activeOpacity={0.5}>
                <Avatar rounded source={{uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}>
                </Avatar> 
                </TouchableOpacity>

            </View>),
            headerRight: ()=>
            (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20
                    
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            )
        });
    },[])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
