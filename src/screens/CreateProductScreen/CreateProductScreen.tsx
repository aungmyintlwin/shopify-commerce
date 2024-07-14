import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { Button, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SafeArea from '../../components/SafeArea/SafeArea'
import CommonInput from '../../components/Forms/CommonInput/CommonInput'
import { ProductStackParamList } from '../../navigation/ProductStack'
import SelectDropDown from '../../components/SelectDropDown/SelectDropDown'
import ImageSelect from '../../components/ImageSelect/ImageSelect'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setAppLoading } from '../../redux/reducers/appState'
import { RootState } from '../../redux'
import { addProduct, getAllCategories, updateProductImage } from '../../../supabaseHelper'
import { supabase } from '../../../supabase'
import { decode } from 'base64-arraybuffer'


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

type ProductFormData = {
    productTitle: string,
    price: string,
    stock: string,
    description: string,
    category: {
        _index: number, 
        id: number, 
        name: string
    }
}

type Category = {
    id: number,
    name: string
};
type Props = {}

const CreateProductScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const dispatch = useDispatch();
    const {appLoading} = useSelector((state:RootState) => state.app);
    const navigation = useNavigation<NavigationProp<ProductStackParamList>>();

    const [category,setCategory] = useState<Category[]>([]);
    const listCategories = async() => {
        const data = await getAllCategories();
        if(data && data.length) {
            setCategory(data);
        }
    }
    useEffect(() => {
        listCategories();
    },[])

    const [images, setImages] = React.useState<any>();
    const [imagesErr, setImagesErr] = React.useState<string | undefined>(undefined);
    const selectPhoto = (photo: any) => {
        setImagesErr(undefined);
        setImages(photo)
    }
    const {
        control,
        handleSubmit,
        formState: { errors }
      } = useForm<ProductFormData>();
    const onSubmit = async(data: ProductFormData) => {
        if(!images){
           setImagesErr('Select Photo')
        }else{
            dispatch(setAppLoading(true));
            let product = {
                title: data?.productTitle,
                price: data?.price,
                stock: data?.stock,
                description: data?.description,
                category: data?.category?.name
            };
            const response = await addProduct(product);
            
            if(response && response.length){
                const { data, error } = await supabase.storage.from('product_images').upload(`public/${response?.[0]?.id}.png`, decode(images?.base64), {contentType: 'image/png'});
                
                if(error){
                    console.log(error)
                    Alert.alert("photo upload fail!")
                }else{
                    const { data } = supabase.storage.from('product_images').getPublicUrl(`public/${response?.[0]?.id}.png`);
                    if(data) {
                        const update = await updateProductImage(data?.publicUrl,response?.[0]?.id);
                        if(update && update.length){
                            console.log('image update sucess')
                        }else{
                            console.log('image update fail')
                        }
                    }
                    dispatch(setAppLoading(false));
                    navigation.navigate('ProductListScreen')
                }
                dispatch(setAppLoading(false));
            }else{
                Alert.alert("Product Create Fail!")
            }

        }
    }


    return (
        <>
            <Header leftIcon='arrow-left' leftIconPress={() => navigation.goBack()} showRightIcon={false} title={"Create Product"}/>
            <SafeArea>
                <ScrollView>
                    <View style={styles.container}>

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <CommonInput
                                placeholder='Product Title'
                                value={value}
                                onValueChange={onChange}
                                onBlur={onBlur}
                                editable={!appLoading}
                                
                            />
                            )}
                            name="productTitle"
                        />
                        {errors?.productTitle && <Text style={styles.errorText}>Invalid Product Title</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <CommonInput
                                placeholder='Price'
                                value={value}
                                onValueChange={onChange}
                                onBlur={onBlur}
                                editable={!appLoading}
                                keyboard='number-pad'
                                
                            />
                            )}
                            name="price"
                        />
                        {errors?.price && <Text style={styles.errorText}>Invalid Price</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <CommonInput
                                placeholder='Stock'
                                value={value}
                                onValueChange={onChange}
                                onBlur={onBlur}
                                editable={!appLoading}
                                keyboard='number-pad'
                                
                            />
                            )}
                            name="stock"
                        />
                        {errors?.stock && <Text style={styles.errorText}>Invalid Stock</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <CommonInput
                                placeholder='Product Description'
                                value={value}
                                onValueChange={onChange}
                                onBlur={onBlur}
                                editable={!appLoading}
                                inputStype={styles.discription}
                                
                            />
                            )}
                            name="description"
                        />
                        {errors?.description && <Text style={styles.errorText}>Invalid Description</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (

                                <SelectDropDown
                                    enabled={true}
                                    placeholder={'Category'}
                                    data={category}
                                    error={''}
                                    selectedValue={value}
                                    title={'Category'}
                                    icon="select-group"
                                    labelKey={"name"}
                                    valueKey="id"
                                    onValueChange={onChange}
                                    selectedIcon='checkbox-marked'
                                />
                            )}
                            name="category"
                        />
                        {errors?.category && <Text style={styles.errorText}>Select Category</Text>}

                        
                        <ImageSelect 
                            title={'Select Photo'}
                            images={images}  
                            updateImages={selectPhoto} 
                            multiple={false} 
                            require={true}  
                            error={imagesErr}
                        />
                        <Button style={styles.btnStyle} mode="contained" loading={appLoading} onPress={handleSubmit(onSubmit)} >Submit</Button>
                    </View>
                </ScrollView>
            </SafeArea>
        </>
    )
}

export default memo(CreateProductScreen)

const useThemeStyle = (theme: any) => StyleSheet.create({
    container: {
        paddingHorizontal: scaleWidth(10),
        paddingBottom: scaleHeight(30),
        paddingTop: scaleHeight(10)
    },
    discription: {
        maxHeight: scaleHeight(145),
        minHeight: scaleHeight(70),
        justifyContent: "flex-start"
    },
    btnStyle: {
        marginHorizontal: scaleWidth(10),
        borderRadius: scaleWidth(10),
        height: scaleHeight(35),
        justifyContent: 'center',
        marginVertical: scaleHeight(20)
    },
    errorText: {
        fontSize: scaleWidth(14),
        color: theme.colors.error,
        padding: scaleWidth(5)
    }
})