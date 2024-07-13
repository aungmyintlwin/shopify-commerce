import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeArea from '../../components/SafeArea/SafeArea'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AppStackParamList } from '../../../App'
import CommonInput from '../../components/Forms/CommonInput/CommonInput'

type Props = {}

const LoginScreen = (props: Props) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const navigation = useNavigation<NavigationProp<AppStackParamList>>();
    const [email,setEmail] = useState<string>('')
    const [secureText,setSecureText] = useState<boolean>(true)
    const [password,setPassword] = useState<string>('')
    return (
        <SafeArea>
            <Image style={styles.logo} source={require('../../assets/icons/logo.png')} />
            <View style={styles.shopIconWrapper}>
                <Image style={styles.shopIcon} source={require('../../assets/images/login.png')} />
            </View>
            <View style={styles.content}>
                    <CommonInput
                        placeholder={`Email`}
                        value={email}
                        onValueChange={(vale: string) => setEmail(vale)}
                        leftIcon={<TextInput.Icon icon="email" />}
                        
                    />
                    <CommonInput
                        placeholder={'Password'}
                        value={password}
                        onValueChange={(vale: string) => setPassword(vale)}
                        leftIcon={<TextInput.Icon icon="lock" />}
                        secureText={secureText ? true : false}
                        rightIcon={<TextInput.Icon icon={secureText ? "eye-off" : "eye"} onPress={() => setSecureText(!secureText)}/>}
                        
                    />
                    <Button style={{borderRadius: scaleWidth(10),marginTop: scaleHeight(15),height: scaleHeight(35),justifyContent: 'center'}} mode="contained" onPress={() => navigation.navigate('App')}>
                        Get Started
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
    }
})