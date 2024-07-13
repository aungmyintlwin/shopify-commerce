
//lib
import React, { FC, ReactNode } from 'react';
import { KeyboardTypeOptions, StyleSheet } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import { scaleHeight } from '../../../utils/responsive';


type Props = {
    placeholder: string,
    value: string,
    onValueChange: (value: any)=>void,
    onBlur?: () => void,
    editable?: boolean,
    keyboard?: KeyboardTypeOptions,
    leftIcon?: ReactNode,
    secureText?: boolean,
    rightIcon?: ReactNode,
    inputStype?: {}
}
const CommonInput: FC<Props> = ({
    placeholder,
    value,
    onValueChange,
    onBlur,
    editable=true,
    keyboard='default',
    leftIcon,
    secureText=false,
    rightIcon,
    inputStype
}) => {
    const theme = useTheme();
    const styles = useThemeStyles(theme);
    return (
        <TextInput
            style={{...styles.inputStyle,...inputStype}}
            mode='outlined'
            label={placeholder}
            editable={editable}
            value={value}
            onChangeText={onValueChange}
            onBlur={onBlur}
            keyboardType={keyboard}
            left={leftIcon}
            secureTextEntry={secureText}
            right={rightIcon}
        />
    )
}

export default CommonInput;
const useThemeStyles = (theme: any) => StyleSheet.create({
    inputStyle: {
        marginTop: scaleHeight(10)
    },
});