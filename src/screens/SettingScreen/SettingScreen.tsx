import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { Button, Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SettingStackParamList } from '../../navigation/SettingStack'

type Props = {}

const SettingScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<SettingStackParamList>>();
    return (
        <>
            <Header leftIcon='arrow-left' showLeftIcon={false} showRightIcon={false} title={"Setting"}/>
            <View style={styles.container}>
                <TouchableOpacity style={styles.rowItem}>
                    <MaterialCommunityIcons name="account" color={theme.colors.secondary} size={scaleWidth(28)} />
                    <Text style={styles.title}>Coustomers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowItem}>
                    <MaterialCommunityIcons name="folder-multiple-image" color={theme.colors.secondary} size={scaleWidth(28)} />
                    <Text style={styles.title}>Content</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowItem}>
                    <MaterialCommunityIcons name="chart-box-outline" color={theme.colors.secondary} size={scaleWidth(28)} />
                    <Text style={styles.title}>Analytics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowItem}>
                    <MaterialCommunityIcons name="bullseye-arrow" color={theme.colors.secondary} size={scaleWidth(28)} />
                    <Text style={styles.title}>Marketing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowItem}>
                    <MaterialCommunityIcons name="check-decagram" color={theme.colors.secondary} size={scaleWidth(28)} />
                    <Text style={styles.title}>Discount</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default memo(SettingScreen)

const useThemeStyle = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scaleWidth(20),
        marginTop: scaleHeight(20)
    },
    rowItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: scaleHeight(10)
    },
    title: {
        fontSize: scaleWidth(16),
        lineHeight: scaleWidth(20),
        marginLeft: scaleWidth(20)
    },
})