import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import Colors from '../constants/Colors';


const Filter: React.FC<{
    label: string,
    value: boolean,
    onChange: () => void
}> = ({label, value, onChange}) => {
    return (
        <View style={styles.switchContainer}>
            <Text>{label}</Text>
        
            <Switch value={value}
                onValueChange={onChange} 
                trackColor={{ true: Colors.primaryColor, false: '' }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''} />
        </View>
        
    )
}

const FiltersScreen: React.FC = () => {
    
    const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
    const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);
    const [isVegan, setIsVegan] = useState<boolean>(false);
    const [isVegetarian, setIsVegetarian] = useState<boolean>(false);
    
    
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/ Restrictions</Text>
            <View style={styles.filterContainer}>
                <Filter label='Gluten-Free' value={isGlutenFree} onChange={() => {
                    setIsGlutenFree(prevState => !prevState)
                }} />
                <Filter label='Lactose-Free' value={isLactoseFree} onChange={() => {
                    setIsLactoseFree(prevState => !prevState)
                }} />
                <Filter label='Vegan' value={isVegan} onChange={() => {
                    setIsVegan(prevState => !prevState)
                }} />
                <Filter label='Vegetarian' value={isVegetarian} onChange={() => {
                    setIsVegetarian(prevState => !prevState)
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    filterContainer: {
        flex: 1,
        width: 250,
        marginTop: 20
    },
    switchContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    }
})

export default FiltersScreen;