import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Button, Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { HomeStackParamList } from '../../navigation/HomeStack'
import Header from '../../components/Header/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SafeArea from '../../components/SafeArea/SafeArea'
import SubscribePlanCard from '../../components/screens/subscribe/SubscribePlanCard'
import InfoCard from '../../components/screens/subscribe/InfoCard'

const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

const PRICE_DATA = [
    {
        name: 'Starter',
        price: 1,
        discount: 5,
        subtitle: 'For selling on social',
        includeList: [
            'Limited online store',
            '2 invetory locations',
            '24/7 chat support',
            'Localized global selling (3 markets)'
        ],
        mdrRate: 5
    },
    {
        name: 'Retail',
        price: 1,
        discount: 79,
        subtitle: 'For selling at retail storres',
        includeList: [
            'Limited online store',
            '10 invetory locations',
            '24/7 chat support',
            'Localized global selling (3 markets)',
            'Includes 1 POS Pro location',
        ],
        mdrRate: 2
    },
    {
        name: 'Basic',
        price: 1,
        discount: 19,
        subtitle: 'For solo enterpreneurs',
        includeList: [
            '10 invetory locations',
            '24/7 chat support',
            'Localized global selling (3 markets)'
        ],
        mdrRate: 2
    },
    {
        name: 'Shopify',
        price: 1,
        discount: 49,
        subtitle: 'For solo enterpreneurs',
        includeList: [
            '10 invetory locations',
            '24/7 chat support',
            'Localized global selling (3 markets)',
            '5 additional staff accounts'
        ],
        mdrRate: 1
    },
    {
        name: 'Advanced',
        price: 1,
        discount: 299,
        subtitle: 'As your business scales',
        includeList: [
            'Custom reports and analytics',
            '10 invetory locations',
            'Enhanced 24/7 chat support',
            'Localized global selling (3 markets) + add markets for $59/mo each',
            '15 additional staff accounts'
        ],
        mdrRate: 0.6
    }
];
const PLAN_INFO = [
    {
        icon: 'cart-outline',
        title: 'World\'s best converting checkout'
    },
    {
        icon: 'archive-search-outline',
        title: 'In-depth analytics'
    },
    {
        icon: 'tag-outline',
        title: 'Sell unlimited products'
    },
    {
        icon: 'chart-multiple',
        title: 'Multiple sales channels'
    },
    {
        icon: 'apps',
        title: 'Access to apps'
    },
    {
        icon: 'store-settings-outline',
        title: 'In-person selling'
    },
];
type Props = {}

const PricingScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    return (
        <>
            <Header leftIcon='arrow-left' leftIconPress={() => navigation.goBack()} showRightIcon={false} title={"Subscribe"}/>
            <SafeArea>
                <ScrollView>
                    <View style={styles.container}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={PRICE_DATA}
                            renderItem={({item}) => <SubscribePlanCard planData={item}/>}
                            keyExtractor={item => `${item?.name}`}
                            ItemSeparatorComponent={() => <View style={{width: scaleWidth(10)}}/>}
                        />
                        <View style={styles.infoWrapper}>
                            <Text style={styles.title}>All plans include</Text>
                            <View style={styles.infoCardWrapper}>
                                {
                                    PLAN_INFO.map(item => <InfoCard icon={item?.icon} title={item?.title} key={item?.icon} />)
                                }
                            </View>
                            <View style={{...styles.infoTextRow,marginTop: scaleHeight(15)}}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Shareable product pages</Text>
                            </View>
                            <View style={styles.infoTextRow}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Abandoned cart recovery</Text>
                            </View>
                            <View style={styles.infoTextRow}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Manual order creation</Text>
                            </View>
                            <View style={styles.infoTextRow}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Gift cards</Text>
                            </View>
                            <View style={styles.infoTextRow}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Marketing automation</Text>
                            </View>
                            <View style={styles.infoTextRow}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Customer segmentation</Text>
                            </View>
                            <View style={styles.infoTextRow}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Unlimited contacts</Text>
                            </View>
                            <View style={styles.infoTextRow}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Discount codes</Text>
                            </View>
                            <View style={styles.infoTextRow}>
                                <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                                <Text style={styles.infoTextStyle}>Free SSL certificate</Text>
                            </View>
                        </View>
                        
                    </View>

                </ScrollView>
            </SafeArea>
        </>
    )
}

export default memo(PricingScreen)

const useThemeStyle = (theme: any) => StyleSheet.create({
    container: {
        paddingHorizontal: scaleWidth(10),
        paddingBottom: scaleHeight(30),
        paddingTop: scaleHeight(10)
    },
    infoWrapper: {
        marginTop: scaleHeight(20),
        marginBottom: scaleHeight(70)
    },
    title: {
        fontSize: scaleWidth(16),
        lineHeight: scaleWidth(20),
        fontWeight: 'bold',
    },
    infoCardWrapper: {
        marginTop: scaleHeight(10),
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: scaleWidth(10),
        rowGap: scaleWidth(10)
    },
    infoTextRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    infoTextStyle: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18),
        marginLeft: scaleWidth(5)
    },
})