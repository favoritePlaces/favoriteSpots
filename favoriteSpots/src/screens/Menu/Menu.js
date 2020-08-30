import React from 'react';
import { Text, View, Linking, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style'

const Menu = (props) => {

    const sections = (icon, name, onPress) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '', alignItems: 'center', marginBottom: 20 }}>
                {icon != null ? <Icon name={icon} size={20} style={{ width: 30 }} /> : null}
                <Text onPress={onPress} style={{ fontSize: 14, marginLeft: 20 }}>{name}</Text>
            </View>
        )
    }

    const selectPhoto = () => {

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 2, padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Menu</Text>
            </View>

        </SafeAreaView>
    )
};

export default Menu;
