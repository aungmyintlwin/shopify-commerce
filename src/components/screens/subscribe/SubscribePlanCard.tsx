import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { FC, memo } from 'react'
import { Button, Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../../utils/responsive'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;

export type SubscribePaln = {
    name: string,
    price: number,
    discount: number,
    subtitle: string,
    includeList: string[],
    mdrRate: number
};

type Props = {
    planData: SubscribePaln
}

const SubscribePlanCard:FC<Props> = ({
    planData
}) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    return (
        <Card style={styles.priceCard}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{planData?.name}</Text>
                <View style={styles.titleSubRow}>
                    <View style={styles.disPriceRow}>
                        <Text style={styles.subTitle}>Starting at </Text>
                        <Text style={styles.disPrice}> {planData?.discount} USD</Text>
                    </View>
                    <Text style={styles.title}>${planData?.price} USD/month</Text>
                    <Text style={styles.subTitle}>for first month</Text>
                </View>
            </View>
            <Text style={styles.infoHeader}>{planData?.subtitle}</Text>
            {
                planData?.includeList?.map((item,index) => (
                    <View style={styles.infoTextRow} key={index}>
                        <MaterialCommunityIcons name="check" color={theme.colors.secondary} size={scaleWidth(15)} />
                        <Text style={styles.infoTextStyle}>{item}</Text>
                    </View>

                ))
            }
            <Text style={styles.infoHeader}>Card rates starting at</Text>
            <View style={styles.infoTextRow}>
                <MaterialCommunityIcons name="credit-card-check" color={theme.colors.secondary} size={scaleWidth(15)} />
                <Text style={styles.infoTextStyle}>{planData?.mdrRate}% 3rd-party payment providers</Text>
            </View>
            <Button style={{...styles.btnStyle,marginTop: scaleHeight(10)}} mode='contained'>
                Select {planData?.name}
            </Button>
        </Card>
    )
}

export default memo(SubscribePlanCard)

const useThemeStyle = (theme: any) => StyleSheet.create({
    priceCard: {
        width: windowWidth - scaleWidth(30),
        height: 'auto',
        paddingHorizontal: scaleWidth(20),
        paddingVertical: scaleHeight(20),
        backgroundColor: theme.colors.background
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: scaleWidth(16),
        lineHeight: scaleWidth(20),
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18),
        textAlign: 'right'
    },
    titleSubRow: {
        maxWidth: scaleWidth(152)
    },
    disPriceRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    disPrice: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18),
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    infoHeader: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18),
        fontWeight: 'bold',
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
    btnStyle: {
        borderRadius: scaleWidth(10),
        height: scaleHeight(35),
        justifyContent: 'center'
    }
})