import { FlatList, StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Header'
import useCustomers from '../../hooks/useCustomers'
import { SettingStackParamList } from '../../navigation/SettingStack'
import ListItem from './ListItem'

type Props = {}

const CustomerListScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<SettingStackParamList>>();
    const { data, isLoading, isSuccess } = useCustomers();



    return (
        <>
            <Header showLeftIcon={true} leftIcon='arrow-left' leftIconPress={() => navigation.goBack()} title={"Customer List"} showRightIcon={false}/>
            {isSuccess && <FlatList
                showsVerticalScrollIndicator={false}
                initialNumToRender={8}
                data={data}
                renderItem={({item}) => (<ListItem customer={item} />)}
                keyExtractor={(item: any,index) => `${item?.item?.id}-${index}`}
                ItemSeparatorComponent={() => <View style={{width: 'auto',height: scaleHeight(10)}}/>}
                ListFooterComponent={<View style={{width: 'auto',height: scaleHeight(45)}}/>}
            />}
        </>
    )
}

export default memo(CustomerListScreen)

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