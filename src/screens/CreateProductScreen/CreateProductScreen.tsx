import { ScrollView, StyleSheet, View } from 'react-native'
import React, { memo, useState } from 'react'
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

const CreateProductScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<ProductStackParamList>>();

    const [price,setPrice] = useState<string>('')
    const [stock,setStock] = useState<string>('')
    const [productTitle,setProductTitle] = useState<string>('')
    const [description,setDescription] = useState<string>('')
    const [selectedCategoryId,setSelectedCategoryId] = useState<number>()

    const [images, setImages] = useState<any[]>([]);
    const [imagesErr, setImagesErr] = React.useState<string | undefined>(undefined);
    const selectPhoto = (photo: any) => {
        setImagesErr(undefined);
        setImages(photo)
    }

    return (
        <>
            <Header leftIcon='arrow-left' leftIconPress={() => navigation.goBack()} showRightIcon={false} title={"Create Product"}/>
            <SafeArea>
                <ScrollView>
                    <View style={styles.container}>
                        <CommonInput
                            placeholder={'Product Title'}
                            value={productTitle}
                            onValueChange={(vale: string) => setProductTitle(vale)}
                            
                        />
                        <CommonInput
                            placeholder={'Price'}
                            value={price}
                            onValueChange={(vale: string) => setPrice(vale)}
                            
                        />
                        <CommonInput
                            placeholder={'Stock'}
                            value={stock}
                            onValueChange={(vale: string) => setStock(vale)}
                            
                        />
                        <CommonInput
                            placeholder={'Product Description'}
                            value={description}
                            onValueChange={(vale: string) => setDescription(vale)}
                            inputStype={styles.discription}
                            
                        />
                        <SelectDropDown
                            enabled={true}
                            placeholder={'Category'}
                            data={[
                                {
                                    id: 1,
                                    name: 'Cat 1'
                                },
                                {
                                    id: 2,
                                    name: 'Cat 2'
                                },
                                {
                                    id: 3,
                                    name: 'Cat 3'
                                },
                            ]}
                            error={''}
                            selectedValue={selectedCategoryId}
                            title={'Category'}
                            icon="select-group"
                            labelKey={"name"}
                            valueKey="id"
                            onValueChange={(item: any) => {
                                setSelectedCategoryId(item?.id);
                            }}
                            selectedIcon='checkbox-marked'
                        />
                        <ImageSelect 
                            title={'Select Photo'}
                            images={images}  
                            updateImages={selectPhoto} 
                            multiple={true} 
                            require={true}  
                            error={imagesErr}  
                        />
                        <Button style={styles.btnStyle} mode="contained">Submit</Button>
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
    }
})