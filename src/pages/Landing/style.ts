import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const  ViewLanding  = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #8257e5;
    height: 100%;
    padding: 40px;

`

export const MainImage = styled.Image`
    width: 100%;
`

export const HeaderLanding = styled.Text`
    font-size: 20px;
    color: white;
    font-family: Poppins_400Regular;
    margin-top: 40px;
    padding-left: 0;`

export const ViewButtons = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 20px;

`

export const TouchableOpacityLanding1 = styled(RectButton)`
    height: 100px;
    background-color: #9871f5;
    width: 48%;
    border-radius: 8px;
    padding-left: 24px;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    margin-right: 4%;


`

export const TouchableOpacityLanding2 = styled(RectButton)`
    height: 100px;
    background-color: #9871f5;
    width: 48%;
    border-radius: 8px;
    padding-left: 24px;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;


`

export const SubtitleLanding = styled.Text`
    font-family: Poppins_600SemiBold;
    padding-left: 1px;
    font-size: 20px;
    color: white;

`

export const ButtonText = styled.Text`
    color: white;
    font-family: Poppins_400Regular;
    margin-bottom: 20px;
`