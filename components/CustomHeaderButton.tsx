import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const CustomHeaderButton: React.FC = (props) => {
    return (
        <HeaderButton title='Icon' {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS === 'android' ? 'white': Colors.primaryColor} />
    )
}

export default CustomHeaderButton
