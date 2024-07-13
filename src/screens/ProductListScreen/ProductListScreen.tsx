import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Button, Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProductStackParamList } from '../../navigation/ProductStack'
import NoProductList from './NoProductList'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductListScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<ProductStackParamList>>();
    return (
        <>
            <Header showLeftIcon={false} title={"Product List"} rightIconPress={() => navigation.navigate('CreateProductScreen')}/>
            {/* <NoProductList addNewProdcut={() => navigation.navigate('CreateProductScreen')} /> */}


            <View style={styles.list}>
                <View style={styles.sortWrapper}>
                    <Card style={styles.sortItemCard}>
                        <Text style={styles.sortItemText}>All</Text>
                    </Card>
                    <Card style={styles.sortItemCard}>
                        <Text style={styles.sortItemText}>Title (A to Z)</Text>
                    </Card>
                    <Card style={styles.sortItemCard}>
                        <Text style={styles.sortItemText}>Title (Z to A)</Text>
                    </Card>
                    <Card style={styles.sortItemCard}>
                        <Text style={styles.sortItemText}>Price (min to max)</Text>
                    </Card>
                    <Card style={styles.sortItemCard}>
                        <Text style={styles.sortItemText}>Price (max to min)</Text>
                    </Card>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={8}
                    data={[
                        {
                            id: 1,
                            title: 'Product One',
                            price: 244,
                            stock: 12,
                            description: 'hello hello hello',
                            category_id: 2,
                            images: []
                        },
                        {
                            id: 2,
                            title: 'Product Two',
                            price: 244,
                            stock: 12,
                            description: 'hello hello hello',
                            category_id: 2,
                            images: []
                        },
                        {
                            id: 3,
                            title: 'Product Three',
                            price: 244,
                            stock: 12,
                            description: 'hello hello hello',
                            category_id: 2,
                            images: []
                        },
                        {
                            id: 4,
                            title: 'Product Four',
                            price: 244,
                            stock: 12,
                            description: 'hello hello hello',
                            category_id: 2,
                            images: []
                        },
                    ]}
                    renderItem={({item}) => (<ProductListItem product={item} />)}
                    keyExtractor={(item: any,index) => `${item?.item?.id}-${index}`}
                    ItemSeparatorComponent={() => <View style={{width: 'auto',height: scaleHeight(10)}}/>}
                    ListFooterComponent={<View style={{width: 'auto',height: scaleHeight(45)}}/>}
                />
            </View>
        </>
    )
}

export default memo(ProductListScreen)

const useThemeStyle = (theme: any) => StyleSheet.create({
    list: {
        marginTop: scaleHeight(10),
        paddingHorizontal: scaleWidth(15)
    },
    sortWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: scaleHeight(10),
        flexWrap: 'wrap',
        rowGap: scaleWidth(10),
        columnGap: scaleWidth(10)
    },
    sortItemCard: {
        padding: scaleWidth(10),
        borderRadius: scaleWidth(5)
    },
    sortItemText: {
        fontSize: scaleWidth(12),
        textAlign: 'center'
    },
})