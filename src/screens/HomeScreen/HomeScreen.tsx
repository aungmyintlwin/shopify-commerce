import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import SafeArea from '../../components/SafeArea/SafeArea'
import { Button, Card, Divider, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { HomeStackParamList } from '../../navigation/HomeStack'
import Header from '../../components/Header/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {}

const HomeScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    return (
        <>
            <Header leftIcon='storefront-outline' rightIcon='bell-outline' title={"My Store"} rightIconPress={() => navigation.navigate('NotificationScreen')}/>
            <SafeArea>
                <ScrollView >
                    <View style={styles.container}>
                        <Text style={styles.title}>Get ready to sell</Text>
                        <Text style={styles.subTitle}>Use this guide to get your store up and running.</Text>
                        <View style={styles.taskComplateWrapper}>
                            <Card style={styles.completeCard}>
                                <Text style={styles.subTitle}>0 / 6 completed</Text>
                            </Card>
                        </View>
                        <Card style={styles.checkItemCard}>
                            <Pressable style={styles.checkItemRow}>
                                <MaterialCommunityIcons name="dots-circle" color={theme.colors.primary} size={scaleWidth(20)} />
                                <Text style={styles.checkItemText}>Add your first product</Text>
                            </Pressable>
                            <Divider bold={true} style={styles.divider} />
                            <Pressable style={styles.checkItemRow}>
                                <MaterialCommunityIcons name="dots-circle" color={theme.colors.primary} size={scaleWidth(20)} />
                                <Text style={styles.checkItemText}>Customize your online store</Text>
                            </Pressable>
                            <Divider bold={true} style={styles.divider} />
                            <Pressable style={styles.checkItemRow}>
                                <MaterialCommunityIcons name="dots-circle" color={theme.colors.primary} size={scaleWidth(20)} />
                                <Text style={styles.checkItemText}>Name your store</Text>
                            </Pressable>
                            <Divider bold={true} style={styles.divider} />
                            <Pressable style={styles.checkItemRow}>
                                <MaterialCommunityIcons name="dots-circle" color={theme.colors.primary} size={scaleWidth(20)} />
                                <Text style={styles.checkItemText}>Set your shipping rates</Text>
                            </Pressable>
                            <Divider bold={true} style={styles.divider} />
                            <Pressable style={styles.checkItemRow}>
                                <MaterialCommunityIcons name="dots-circle" color={theme.colors.primary} size={scaleWidth(20)} />
                                <Text style={styles.checkItemText}>Remove your store password</Text>
                            </Pressable>
                            <Divider bold={true} style={styles.divider} />
                            <Pressable style={styles.checkItemRow}>
                                <MaterialCommunityIcons name="dots-circle" color={theme.colors.primary} size={scaleWidth(20)} />
                                <Text style={styles.checkItemText}>share your products</Text>
                            </Pressable>
                        </Card>
                        <Card style={styles.priceCard}>
                            <View style={styles.priceItemRow}>
                                <MaterialCommunityIcons name="star-shooting-outline" color={theme.colors.primary} size={scaleWidth(45)} />
                                <View style={styles.priceInfoWrapper}>
                                    <Text style={styles.title}>Build your dream business for $1 / month</Text>
                                    <Text style={styles.subTitle}>Subscribe to get your first month for $1.</Text>
                                </View>
                            </View>
                            <Button style={{...styles.btnStyle,marginTop: scaleHeight(10)}} mode="outlined" onPress={() => navigation.navigate('PricingScreen')}>
                                Select a plan
                            </Button>
                        </Card>
                    </View>
                </ScrollView>
            </SafeArea>
        </>
    )
}

export default memo(HomeScreen)

const useThemeStyle = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scaleWidth(10),
        paddingBottom: scaleHeight(30),
        paddingTop: scaleHeight(10)
    },
    title: {
        fontSize: scaleWidth(14),
        lineHeight: scaleWidth(20),
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18)
    },
    
    taskComplateWrapper: {
        width: scaleWidth(125),
        alignItems: 'flex-start',
        marginVertical: scaleHeight(5)
    },
    completeCard: {
        paddingVertical: scaleWidth(5),
        paddingHorizontal: scaleWidth(10),
        borderRadius: scaleWidth(10)
    },
    checkItemCard: {
        marginTop: scaleHeight(10),
        paddingBottom: scaleWidth(15),
        paddingHorizontal: scaleWidth(15),
        borderRadius: scaleWidth(10)
    },
    checkItemRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: scaleHeight(10)
    },
    checkItemText: {
        fontSize: scaleWidth(14),
        lineHeight: scaleWidth(18),
        marginLeft: scaleWidth(10)
    },
    divider: {
        marginTop: scaleHeight(10)
    },
    priceCard: {
        marginTop: scaleHeight(10),
        paddingVertical: scaleWidth(15),
        paddingHorizontal: scaleWidth(15),
        borderRadius: scaleWidth(10)
    },
    priceItemRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    priceInfoWrapper: {
        marginLeft: scaleWidth(10),
        maxWidth: '75%'
    },
    btnStyle: {
        borderRadius: scaleWidth(10),
        height: scaleHeight(35),
        justifyContent: 'center'
    }
})