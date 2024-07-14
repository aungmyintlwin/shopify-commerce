import { FlatList, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { Card, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Header'
import { ProductStackParamList } from '../../navigation/ProductStack'
import NoProductList from './NoProductList'
import ProductListItem from './ProductListItem'
import { getProductByUserId, Product } from '../../../supabaseHelper'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

type Props = {}

const ProductListScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const {authUser} = useSelector((state:RootState) => state.user);
    const navigation = useNavigation<NavigationProp<ProductStackParamList>>();

    const [refreshing, setRefreshing] = useState<boolean>(false);

    const[activeSelect,setActiveSelect] = useState<string>('all');

    const [products,setProducts] = useState<Product[]>([]);
    const listProducts = async(userId: string,sort?: {
        key: string,
        ascending: boolean
    }) => {
        setProducts([]);
        const data = await getProductByUserId(userId,sort);
        if(data && data.length) {
            setProducts(data);
        }
    }
    const filterPress = (sort?: {
        key: string,
        ascending: boolean
    }) => {
        //@ts-ignore
        if(authUser && authUser?.id) listProducts(authUser?.id,sort);
    }
    useEffect(() => {
        //@ts-ignore
        if(authUser && authUser?.id) listProducts(authUser?.id);
    },[navigation])
    const onRefresh = async() => {
        setRefreshing(true)
        filterPress();
        setRefreshing(false)
    }

    return (
        <>
            <Header showLeftIcon={false} title={"Product List"} rightIconPress={() => navigation.navigate('CreateProductScreen')}/>
            {products.length === 0 && <NoProductList addNewProdcut={() => navigation.navigate('CreateProductScreen')} />}


            {
                products && products.length > 0 && <View style={styles.list}>
                    <View style={styles.sortWrapper}>
                        <Pressable onPress={() => {
                            setActiveSelect('all')
                            filterPress()
                        }}>
                            <Card style={{...styles.sortItemCard,backgroundColor: activeSelect === 'all' ? theme.colors.primary : ''}}>
                                <Text style={{...styles.sortItemText,color: activeSelect === 'all' ? theme.colors.onPrimary : theme.colors.onBackground}}>All</Text>
                            </Card>
                        </Pressable>
                        <Pressable onPress={() => {
                            setActiveSelect('title_az')
                            filterPress({key: 'title',ascending: true})
                        }}>
                            <Card style={{...styles.sortItemCard,backgroundColor: activeSelect === 'title_az' ? theme.colors.primary : ''}}>
                                <Text style={{...styles.sortItemText,color: activeSelect === 'title_az' ? theme.colors.onPrimary : theme.colors.onBackground}}>Title (A to Z)</Text>
                            </Card>
                        </Pressable>
                        <Pressable onPress={() => {
                            setActiveSelect('title_za')
                            filterPress({key: 'title',ascending: false})
                        }}>
                            <Card style={{...styles.sortItemCard,backgroundColor: activeSelect === 'title_za' ? theme.colors.primary : ''}}>
                                <Text style={{...styles.sortItemText,color: activeSelect === 'title_za' ? theme.colors.onPrimary : theme.colors.onBackground}}>Title (Z to A)</Text>
                            </Card>
                        </Pressable>
                        <Pressable onPress={() => {
                            setActiveSelect('price_az')
                            filterPress({key: 'price',ascending: false})
                        }}>
                            <Card style={{...styles.sortItemCard,backgroundColor: activeSelect === 'price_az' ? theme.colors.primary : ''}}>
                                <Text style={{...styles.sortItemText,color: activeSelect === 'price_az' ? theme.colors.onPrimary : theme.colors.onBackground}}>Price (min to max)</Text>
                            </Card>
                        </Pressable>
                        <Pressable onPress={() => {
                            setActiveSelect('price_za')
                            filterPress({key: 'price',ascending: true})
                        }}>
                            <Card style={{...styles.sortItemCard,backgroundColor: activeSelect === 'price_za' ? theme.colors.primary : ''}}>
                                <Text style={{...styles.sortItemText,color: activeSelect === 'price_za' ? theme.colors.onPrimary : theme.colors.onBackground}}>Price (max to min)</Text>
                            </Card>
                        </Pressable>
                    </View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        initialNumToRender={8}
                        data={products}
                        renderItem={({item}) => (<ProductListItem product={item} />)}
                        keyExtractor={(item: any,index) => `${item?.item?.id}-${index}`}
                        ItemSeparatorComponent={() => <View style={{width: 'auto',height: scaleHeight(10)}}/>}
                        ListFooterComponent={<View style={{width: 'auto',height: scaleHeight(45)}}/>}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    />
                </View>
            }
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
        borderRadius: scaleWidth(5),
    },
    sortItemText: {
        fontSize: scaleWidth(12),
        textAlign: 'center'
    },
})