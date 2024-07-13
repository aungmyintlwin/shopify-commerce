import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { HomeStackParamList } from '../../navigation/HomeStack'
import Header from '../../components/Header/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {}

const NotificationScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    return (
        <>
            <Header leftIcon='arrow-left' leftIconPress={() => navigation.goBack()} showRightIcon={false} title={"Alerts"}/>
            <View style={styles.container}>
                <Card style={styles.notiCard}>
                    <MaterialCommunityIcons name="bell-ring" color={theme.colors.secondary} size={scaleWidth(85)} />
                </Card>
                <Text style={styles.title}>Your alerts will show here</Text>
                <Text style={styles.subTitle}>You'll get important alerts about your store and account here and through your email</Text>
            </View>
        </>
    )
}

export default memo(NotificationScreen)

const useThemeStyle = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scaleWidth(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: scaleWidth(16),
        lineHeight: scaleWidth(20),
        fontWeight: 'bold',
        marginTop: scaleHeight(15)
    },
    subTitle: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18),
        textAlign: 'center',
        marginTop: scaleHeight(5)
    },
    notiCard: {
        paddingVertical: scaleWidth(5),
        paddingHorizontal: scaleWidth(10),
        borderRadius: scaleWidth(60),
        width: scaleWidth(120),
        height: scaleWidth(120),
        justifyContent: 'center',
        alignItems: 'center'
    }
})