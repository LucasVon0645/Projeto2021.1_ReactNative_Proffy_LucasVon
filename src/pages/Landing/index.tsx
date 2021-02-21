import React from 'react';
import {View, Text, Image} from 'react-native';
import imageLanding from '../../assets/images/landing.png'

export default () => {
    return (
        <View>
            <Image source={imageLanding}></Image>
        </View>
    )
}