//lib
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useTheme } from '@rneui/themed';
//reuseable
import { scaleHeight, scaleWidth } from '../../../../utils/responsive';
//custom


const TextArea = ({title,placeholder,text,updateText,require=false,error}) => {
    const { theme } = useTheme();
    const styles = useThemeStyles(theme);

    return (
        <>
            <View style={styles.labelContainerStyle}>
                <View style={styles.labelWrapper}>
                    <Text style={styles.label}>{title}:</Text>
                    {require && <Text style={{...styles.label,color: theme.colors.error}}>*</Text>}
                    {require && error && <Text style={{...styles.label,color: theme.colors.error,marginLeft: scaleWidth(20)}}>{error}</Text>}
                </View>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        placeholder={placeholder}
                        placeholderTextColor={theme.colors.secondary_text}
                        multiline={true}
                        onChangeText={(text) => updateText(text)}
                        value={text}
                    />
                </View>
            </View>
        </>
    )
}

export default TextArea;
const useThemeStyles = theme => StyleSheet.create({
    labelContainerStyle: {
        paddingHorizontal: scaleWidth(15),
        marginVertical: scaleHeight(5)
    },
    labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    label: {
        fontSize: scaleWidth(14),
        color: theme.colors.textColor,
    },
    textAreaContainer: {
        marginTop: scaleHeight(5),
        borderColor: theme.colors.secondary_text,
        borderRadius: scaleWidth(10),
        borderWidth: scaleWidth(1),
        padding: scaleWidth(5)
    },
    textArea: {
        maxHeight: scaleHeight(120),
        minHeight: scaleHeight(52),
        justifyContent: "flex-start",
        color: theme.colors.textColor,
    },
});