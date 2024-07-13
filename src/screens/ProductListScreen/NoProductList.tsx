import { StyleSheet, Text, View } from 'react-native'
import React, { FC, memo } from 'react'
import { Button, Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProductStackParamList } from '../../navigation/ProductStack'

type Props = {
    addNewProdcut: () => void
}

const NoProductList:FC<Props> = ({addNewProdcut}) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<ProductStackParamList>>();
    return (
            <View style={styles.container}>
                <Card style={styles.notiCard}>
                    <MaterialCommunityIcons name="clipboard-list-outline" color={theme.colors.secondary} size={scaleWidth(85)} />
                </Card>
                <Text style={styles.title}>First up: add your products</Text>
                <Text style={styles.subTitle}>To start selling on Shopify , migrate your product or source new one</Text>
                <Button style={styles.btnStyle} mode="contained" onPress={addNewProdcut}>
                    Add new product
                </Button>
            </View>
    )
}

export default memo(NoProductList)

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