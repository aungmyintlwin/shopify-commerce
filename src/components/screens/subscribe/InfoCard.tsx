import { Dimensions, StyleSheet, Text } from 'react-native'
import React, { FC, memo } from 'react'
import { Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../../utils/responsive'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;



type Props = {
    icon: string,
    title: string
}

const InfoCard:FC<Props> = ({
    icon,
    title
}) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    return (
        <Card style={styles.priceCard}>
            <MaterialCommunityIcons name={icon} color={theme.colors.secondary} size={scaleWidth(15)} />
            <Text style={styles.infoTextStyle}>{title}</Text>
        </Card>
    )
}

export default memo(InfoCard)

const useThemeStyle = (theme: any) => StyleSheet.create({
    priceCard: {
        width: windowWidth / 2.2,
        height: 'auto',
        paddingHorizontal: scaleWidth(15),
        paddingVertical: scaleHeight(15),
        backgroundColor: theme.colors.background
    },
    infoTextStyle: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18),
        textAlign: 'left'
    }
})