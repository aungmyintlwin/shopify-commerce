import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Button, Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { OrderStackParamList } from '../../navigation/OrderStack'

type Props = {}

const OrderListScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<OrderStackParamList>>();
    return (
        <>
            <Header leftIcon='arrow-left' showLeftIcon={false} title={"Order List"}/>
            <View style={styles.container}>
                <Card style={styles.notiCard}>
                    <MaterialCommunityIcons name="file-document-multiple-outline" color={theme.colors.secondary} size={scaleWidth(85)} />
                </Card>
                <Text style={styles.title}>Manage your orders</Text>
                <Text style={styles.subTitle}>You'll get notified when you receive your first order.</Text>
                <Button style={styles.btnStyle} mode="contained">
                    Create new order
                </Button>
            </View>
        </>
    )
}

export default memo(OrderListScreen)

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
    },
    btnStyle: {
        marginTop: scaleHeight(22),
        borderRadius: scaleWidth(10),
        height: scaleHeight(35),
        justifyContent: 'center',
        width: '85%'
    }
})