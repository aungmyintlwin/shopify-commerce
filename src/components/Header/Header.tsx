import { StyleSheet } from 'react-native'
import React, { FC, memo } from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { scaleHeight, scaleWidth } from '../../utils/responsive'

type Props = {
    leftIcon?: string,
    leftIconPress?: any,
    rightIcon?: string,
    rightIconPress?: () => void,
    title?: string,
    showLeftIcon?: boolean,
    showRightIcon?: boolean,
    leftTextIcon?: boolean
}

const Header: FC<Props> = ({
    leftIcon,
    leftIconPress,
    rightIcon,
    rightIconPress,
    title="",
    showLeftIcon=true,
    showRightIcon=true,
    leftTextIcon=false

}) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    return (
        <Appbar.Header style={styles.header} elevated>
            {showLeftIcon && <Appbar.Action icon={leftIcon ? leftIcon : 'menu'} size={scaleWidth(28)} color={theme.colors.primary} onPress={leftIconPress}/>}
            {title && <Appbar.Content title={title} titleStyle={{...styles.titleStyle,marginLeft: leftTextIcon && !showLeftIcon ? scaleWidth(-250) : 0}}/>}
            {showRightIcon ? <Appbar.Action 
                icon={rightIcon ? rightIcon : "plus"} 
                size={scaleWidth(28)} color={theme.colors.primary} 
                onPress={rightIconPress} 
            /> : null}
        </Appbar.Header>
    )
}

export default memo(Header)

const useThemeStyle = (theme: any) => StyleSheet.create({
    header: {
        backgroundColor: theme.colors.background,
        paddingBottom: scaleHeight(5)
    },
    bellBox: {
        width: scaleWidth(40),
        height: scaleWidth(40),
        backgroundColor: theme.colors.onSecondary,
        borderRadius: scaleWidth(10),
        borderWidth: scaleWidth(1),
        borderColor: theme.colors.secondaryContainer,
    },
    titleStyle: {
        color: theme.colors.onBackground
    }
})