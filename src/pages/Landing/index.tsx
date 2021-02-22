import React from 'react';
import imageLanding from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import  giveClassesIcon from '../../assets/images/icons/give-classes.png';
import {Image} from 'react-native';
import {ViewLanding, MainImage, HeaderLanding, ViewButtons, SubtitleLanding, TouchableOpacityLanding, ButtonText} from './style';

export default () => {
    return (
        <ViewLanding>
            <MainImage source={imageLanding}></MainImage>
                <HeaderLanding> Seja bem vindo,
                </HeaderLanding>
                <SubtitleLanding>
                        O que deseja fazer?
                </SubtitleLanding>
                <ViewButtons>
                    <TouchableOpacityLanding color={'#9871f5'} estudar={true}>
                        <Image source={studyIcon} />
                        <ButtonText>Estudar</ButtonText>  
                    </TouchableOpacityLanding>
                    <TouchableOpacityLanding color={'#04d361'}>
                    <Image source={giveClassesIcon} />
                        <ButtonText>Dar aulas</ButtonText>  
                    </TouchableOpacityLanding>
                </ViewButtons>
        </ViewLanding>
    )
}