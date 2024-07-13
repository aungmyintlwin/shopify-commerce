import React, { FC, ReactNode } from 'react';
import { Platform, SafeAreaView as IosSafeArea} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    children: ReactNode
}
const SafeArea = (props: Props) => {
    if(Platform.OS === 'ios') {
        return <IosSafeArea {...props}>{props.children}</IosSafeArea>
    }else{
        return <SafeAreaView {...props}>{props.children}</SafeAreaView>
    }
}

export default SafeArea;

