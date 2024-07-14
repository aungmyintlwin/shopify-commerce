import { StyleSheet, Text, View } from 'react-native'
import React, { FC, memo } from 'react'
import { Card, useTheme } from 'react-native-paper'
import { scaleWidth } from '../../utils/responsive'

export type CustomerType = {
    id: number | string,
    name?: string,
    email?: string,
    phone?: string,
}
type Props = {
    customer: CustomerType
}

const ListItem:FC<Props> = ({customer}) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    return (
        <Card style={styles.productCard}>
            <View style={styles.productRow}>
                <View style={styles.productInfoWrapper}>
                    <Text style={styles.title}>{customer?.name}</Text>
                    <Text style={styles.subTitle}>{`Email - ${customer?.email} / Phone - ${customer?.phone}`}</Text>
                </View>
            </View>
        </Card>
    )
}

export default memo(ListItem)

const useThemeStyle = (theme: any) => StyleSheet.create({
    productCard: {
        paddingVertical: scaleWidth(10),
        paddingHorizontal: scaleWidth(10),
        borderRadius: scaleWidth(5)
    },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    img: {
        width: scaleWidth(52),
        height: scaleWidth(52),
        borderRadius: scaleWidth(15)
    },
    productInfoWrapper: {
        marginLeft: scaleWidth(15)
    },
    title: {
        fontSize: scaleWidth(16),
        lineHeight: scaleWidth(20),
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18),
        textAlign: 'center'
    },
})