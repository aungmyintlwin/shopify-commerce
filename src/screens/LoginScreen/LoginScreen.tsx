import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeArea from '../../components/SafeArea/SafeArea'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AppStackParamList } from '../../../App'
import CommonInput from '../../components/Forms/CommonInput/CommonInput'
import { Controller, useForm } from 'react-hook-form'
import { supabase } from '../../../supabase'
import { useDispatch, useSelector } from 'react-redux'
import { setAppLoading } from '../../redux/reducers/appState'
import { RootState } from '../../redux'


type LoginFormData = {
    email: string
    password: string
}
type Props = {}
const LoginScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const {appLoading} = useSelector((state:RootState) => state.app);;

    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<AppStackParamList>>();
    const [secureText,setSecureText] = useState<boolean>(true)


    const {
        control,
        handleSubmit,
        formState: { errors }
      } = useForm<LoginFormData>();
    const onSubmit = async(data: LoginFormData) => {
        dispatch(setAppLoading(true));
        const response = await supabase.auth.signInWithPassword({
            email: data?.email,
            password: data?.password,
        })
        dispatch(setAppLoading(false));
        console.log(response)
        if (response?.error) Alert.alert(response?.error.message)
        if(!response?.error) {
            navigation.navigate('App')
        }
    }


    return (
        <SafeArea>
            <Image style={styles.logo} source={require('../../assets/icons/logo.png')} />
            <View style={styles.shopIconWrapper}>
                <Image style={styles.shopIcon} source={require('../../assets/images/login.png')} />
            </View>
            <View style={styles.content}>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <CommonInput
                        placeholder='Email'
                        value={value}
                        onValueChange={onChange}
                        leftIcon={<TextInput.Icon icon="email" />}
                        onBlur={onBlur}
                        editable={!appLoading}
                        
                    />
                    )}
                    name="email"
                />
                {errors?.email && <Text style={styles.errorText}>Invalid Email</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CommonInput
                            placeholder='Password'
                            value={value}
                            onValueChange={onChange}
                            onBlur={onBlur}
                            leftIcon={<TextInput.Icon icon="lock" />}
                            secureText={secureText ? true : false}
                            rightIcon={<TextInput.Icon icon={secureText ? "eye-off" : "eye"} onPress={() => setSecureText(!secureText)}/>}
                            editable={!appLoading}
                            
                        />
                    )}
                    name="password"
                />
                {errors?.password && <Text style={styles.errorText}>Invalid Password</Text>}
                <Button 
                    style={{borderRadius: scaleWidth(10),marginTop: scaleHeight(15),height: scaleHeight(35),justifyContent: 'center'}} 
                    mode="contained" 
                    onPress={handleSubmit(onSubmit)}
                    loading={appLoading}
                >
                    Login
                </Button>
            </View>
        </SafeArea>
    )
}

export default LoginScreen

const useThemeStyle = (theme: any) => StyleSheet.create({
    logo: {
        width: scaleWidth(120),
        height: scaleWidth(50),
        alignSelf: 'center'
    },
    shopIconWrapper: {
        width: scaleWidth(170),
        height: scaleWidth(172),
        alignSelf: 'center',
        marginVertical: scaleHeight(30)
    },
    shopIcon: {
        width: '100%',
        height: '100%'
    },
    content: {
        paddingHorizontal: scaleWidth(20)
    },
    errorText: {
        fontSize: scaleWidth(14),
        color: theme.colors.error,
        padding: scaleWidth(5)
    },
})