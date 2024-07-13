import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeArea from '../../components/SafeArea/SafeArea'
import { Button, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AppStackParamList } from '../../../App'

type Props = {}

const MainScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<AppStackParamList>>();
    return (
        <SafeArea>
            <Image style={styles.logo} source={require('../../assets/icons/logo.png')} />
            <View style={styles.shopIconWrapper}>
                <Image style={styles.shopIcon} source={require('../../assets/images/shop.png')} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Try Shopify for free</Text>
                <Text style={styles.subTitle}>The commerce palform trusted by millions of business worldwide</Text>
            </View>
            <View style={styles.promo}>
                <View style={styles.promoItemWarpper}>
                    <MaterialCommunityIcons name="shopping" color={theme.colors.primary} size={scaleWidth(24)} />
                    <Text style={styles.promoText}>Online and in-person sales</Text>
                </View>
                <View style={styles.promoItemWarpper}>
                    <MaterialCommunityIcons name="bullseye-arrow" color={theme.colors.primary} size={scaleWidth(24)} />
                    <Text style={styles.promoText}>Fast , reliable and checkout</Text>
                </View>
                <View style={styles.promoItemWarpper}>
                    <MaterialCommunityIcons name="text-box-check" color={theme.colors.primary} size={scaleWidth(24)} />
                    <Text style={styles.promoText}>Powerfull order management</Text>
                </View>
            </View>
            <Button style={styles.btnStyle} mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
                Get Started
            </Button>
            <Button style={{...styles.btnStyle,marginTop: scaleHeight(10)}} mode="outlined" onPress={() => console.log('Pressed')}>
                Register
            </Button>
        </SafeArea>
    )
}

export default MainScreen

const useThemeStyle = (theme: any) => StyleSheet.create({
    logo: {
        width: scaleWidth(120),
        height: scaleWidth(50),
        alignSelf: 'center'
    },
    shopIconWrapper: {
        width: scaleWidth(170),
        height: scaleWidth(172),
        alignSelf: 'center',
        marginVertical: scaleHeight(30)
    },
    shopIcon: {
        width: '100%',
        height: '100%'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: scaleWidth(20),
        fontWeight: 'bold'
    },
    
    subTitle: {
        fontSize: scaleWidth(14),
        marginVertical: scaleHeight(10),
        maxWidth: scaleWidth(180),
        textAlign: 'center',
        lineHeight: scaleWidth(20)
    },
    promo: {
        marginVertical: scaleHeight(5),
        alignSelf: 'center'
    },
    promoItemWarpper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    promoText: {
        fontSize: scaleWidth(14),
        marginVertical: scaleHeight(10),
        lineHeight: scaleWidth(20),
        marginLeft: scaleWidth(10)
    },
    btnStyle: {
        marginHorizontal: scaleWidth(22),
        borderRadius: scaleWidth(10),
        height: scaleHeight(35),
        justifyContent: 'center'
    }
})