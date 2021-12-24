import React from 'react';
import imageLanding from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import  giveClassesIcon from '../../assets/images/icons/give-classes.png';
import {Image} from 'react-native';
import {ViewLanding, MainImage, HeaderLanding, ViewButtons, SubtitleLanding, TouchableOpacityLanding1, ButtonText, TouchableOpacityLanding2} from './style';
import {useNavigation} from '@react-navigation/native';

export default () => {

    const { navigate } = useNavigation();

    function navegateToOtherPage() {
        navigate('GiveClasses');
    }

    function navegateToTeacherList() {
        navigate('Study');
    }



    return (
        <ViewLanding>
            <MainImage source={imageLanding}></MainImage>
                <HeaderLanding> Seja bem vindo,
                </HeaderLanding>
                <SubtitleLanding>
                        O que deseja fazer?
                </SubtitleLanding>
                <ViewButtons>
                    <TouchableOpacityLanding1 onPress={navegateToTeacherList}>
                        <Image source={studyIcon} />
                        <ButtonText>Estudar</ButtonText>  
                    </TouchableOpacityLanding1>
                    <TouchableOpacityLanding2 onPress={navegateToOtherPage}>
                    <Image source={giveClassesIcon} />
                        <ButtonText>Dar aulas</ButtonText>  
                    </TouchableOpacityLanding2>
                </ViewButtons>
        </ViewLanding>
    )
}