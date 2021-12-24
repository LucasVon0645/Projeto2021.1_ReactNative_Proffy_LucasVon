import React from 'react';
import {Description, GiveClassesMainContainer, ImageBackgroundGiveClasses, OkButton, OkButtonText, Title} from './style';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/core';


export default () => {

    const navigate = useNavigation();
    const handleGoBack = () => {
        navigate.goBack()
    }

    return (
                <GiveClassesMainContainer>
                    <ImageBackgroundGiveClasses resizeMode="contain" source={giveClassesBgImage}>
                    <Title>Quer ser um Proffy?</Title>
                    <Description>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Description>
                        <OkButton onPress={handleGoBack}>
                            <OkButtonText>Tudo bem</OkButtonText>
                        </OkButton>
                    </ImageBackgroundGiveClasses>
                </GiveClassesMainContainer>
    )
}