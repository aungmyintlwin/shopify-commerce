import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC, memo } from 'react'
import { Card, useTheme } from 'react-native-paper'
import { scaleWidth } from '../../utils/responsive'

export type ProductType = {
    id: number | string,
    title: string,
    category_id: number,
    price?: number,
    stock?: number,
    images: string[]
}
type Props = {
    product: ProductType,
    onPress?: () => void
}

const ProductListItem:FC<Props> = ({product, onPress}) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    return (
            <Pressable onPress={onPress}>
                <Card style={styles.productCard}>
                    <View style={styles.productRow}>
                        <Image style={styles.img} source={product?.images?.length ? {uri: product?.images[0]} : require('../../assets/images/shop.png')} />
                        <View style={styles.productInfoWrapper}>
                            <Text style={styles.title}>{product?.title}</Text>
                            <Text style={styles.subTitle}>{`CategoryId-${product?.category_id} /  $ ${product?.price} / Stock-${product?.stock}`}</Text>
                        </View>
                    </View>
                </Card>
            </Pressable>
    )
}

export default memo(ProductListItem)

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