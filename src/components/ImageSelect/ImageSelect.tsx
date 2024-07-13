//lib
import React, { FC } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from 'react-native-paper';
//reuseable
import { scaleHeight, scaleWidth } from '../../utils/responsive';
//custom

type Props = {
    title: string,
    images?: any[],
    updateImages: (value: any) => void,
    multiple?: boolean,
    require?: boolean,
    error?: string
}
const ImageSelect:FC<Props> = ({
    title,
    images,
    updateImages,
    multiple=true,
    require=false,
    error = ''
}) => {
    const theme = useTheme();
    const styles = useThemeStyles(theme);

    const handleChoosePhoto = () => {
        //@ts-ignore
        launchImageLibrary({includeBase64: true}, response => {
          if (response) {
            if (response.assets) {
              let {assets} = response;
              if(multiple) {
                  let imgdata = {
                    "id": Date.now(),
                    "image": assets[0]
                  };
                  if(images?.length) {
                    if(images[0].image.type) {
                        updateImages([...images,imgdata])
                    }else{
                        updateImages([imgdata])
                    }
                  }else{
                    updateImages([imgdata])
                  }
              }else{
                updateImages(assets[0])
              }
            } else if (response.errorCode) {
              console.log('Image Select Error!');
            } else {
            console.log('Image Select Error!');
            }
          } else {
            console.log('Image Select Error!');
          }
        });
    };
    
      const removeImage = (img_id: string) => {
            let removeImage = images?.find(img => img.id == img_id);
            let data = images?.filter(img => img.id !== img_id);
            if(removeImage.image.type) {
                updateImages(data);
            }else{
                updateImages([])
            }
      };
      const removeImageSingle = () => {
            updateImages(null);
      };

    return (
        <>
            <View style={{...styles.labelContainerStyle,borderWidth: error ? scaleWidth(1) : 0}}>
                <View style={styles.imageChoose}>
                    <TouchableOpacity style={styles.imageChooseTextWrapper} onPress={handleChoosePhoto}>
                        <Text style={{...styles.label,color: theme.colors.onPrimary}}>{title}</Text>
                    </TouchableOpacity>
                    <View style={styles.imageChooseFileCount}>
                        {multiple && <Text style={styles.label}>{images?.length ? `${images.length} files` :  'No File Choose'}</Text>}
                        {!multiple && <Text style={styles.label}>{images ? `1 file` :  'No File Choose'}</Text>}
                    </View>
                </View>
            </View>
            <View style={styles.photoContainer}>
                {
                    multiple ? <>
                        {
                            images && images.map(img => (
                                    <View
                                        key={img.id}
                                        style={styles.imageWrapper}
                                    >
                                        <Image
                                            source={{uri: img.image.uri}}
                                            style={styles.image}
                                        />
                                        <MaterialCommunityIcons
                                            onPress={() => removeImage(img.id)}
                                            name="close-circle-outline"
                                            size={scaleWidth(30)}
                                            color={theme.colors.error}
                                            style={styles.removeIcon}
                                        />
                                    </View>
                                )
                            )
                        }
                    </> : <>
                        {
                            //@ts-ignore
                            images && images?.uri &&  (<View style={styles.imageWrapper}>
                                {
                                    //@ts-ignore
                                    images?.uri && <Image  source={{uri: images?.uri}} style={styles.image} />
                                }
                                <MaterialCommunityIcons
                                    onPress={removeImageSingle}
                                    name="close-circle-outline"
                                    size={scaleWidth(30)}
                                    color={theme.colors.error}
                                    style={styles.removeIcon}
                                />
                            </View>)
                        }
                    </>
                }
            </View>
            {error && <Text numberOfLines={1} style={styles.labelError}>{error}</Text>}
        </>
    )
}

export default ImageSelect;
const useThemeStyles = (theme: any) => StyleSheet.create({
    labelContainerStyle: {
        marginVertical: scaleHeight(5),
        borderColor: theme.colors.error
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
    labelError: {
        fontSize: scaleWidth(12),
        lineHeight: scaleWidth(18),
        color: theme.colors.error,
        padding: scaleWidth(3)
    },
    imageChoose: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: scaleHeight(40),
        marginTop: scaleHeight(3),
        borderRadius: scaleWidth(5),
        borderWidth: scaleWidth(1),
        borderColor: '#E8E1ED',
        backgroundColor: '#E8E1ED'
    },
    imageChooseTextWrapper: {
        width: '50%',
        height: '100%',
        // backgroundColor: '#E8E1ED',
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: scaleWidth(5),
        borderBottomLeftRadius: scaleWidth(5),
    },
    imageChooseFileCount: {
        width: '50%',
        height: '100%',
        backgroundColor: theme.colors.secondary_bg,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: scaleWidth(5),
        borderBottomRightRadius: scaleWidth(5),
    },
    photoContainer: {
        flexDirection: 'row', 
        columnGap: scaleWidth(5), 
        marginLeft: scaleWidth(10),
        flexWrap: "wrap",
    },
    imageWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: scaleHeight(5)
    },
    image: {
        width: scaleWidth(100),
        height: scaleWidth(100)
    },
    removeIcon: {
        marginLeft: scaleWidth(-30), 
        marginTop: scaleHeight(-4)
    },
});