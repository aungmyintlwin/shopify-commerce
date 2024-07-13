//lib
import React, { memo, useContext } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//reuse
import { useTheme } from 'react-native-paper';
import { scaleHeight, scaleWidth } from '../../utils/responsive';
import { Context } from '../../context/Provider';
import { useLocal } from '../../hook/useLocal';


const MultiSelectDropDown = ({
  enabled = false,
  mode,
  placeholder,
  onValueChange,
  selectedValue,
  data,
  error,
  title,
  icon,
  selectedIcon,
  labelKey = '',
  valueKey = '',
  bgColor= '',
  required=false,
  showTitle = false,
  showDropdownBorder= true,
  dropdownColor= '',
  errorMsg = ''
}) => {
    const theme = useTheme();
    const styles = useThemeStyle(theme);
    const local = useLocal();
    const {lang,token,updateLangShow} = useContext(Context);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{labelKey ? item[labelKey] : item.label}</Text>
        { selectedValue.includes(item[valueKey]) && (
          <MaterialCommunityIcons
            name={selectedIcon || 'checkbox-marked'}
            size={scaleWidth(22)}
            style={{color: theme.colors.primary, marginRight: scaleWidth(5)}}
          />
        )}
      </View>
    );
  };
  return (
    <>
      <View 
        style={{
          ...styles.container,
          backgroundColor: bgColor ? `${bgColor}` : `${theme.colors.background}`,
          borderColor: errorMsg ? theme.colors.error : '#AAAAAA',
          borderWidth: errorMsg ? scaleWidth(1) : 0,
          borderRadius: scaleWidth(5),
          marginBottom: errorMsg ? 0 : scaleHeight(5)
        }}
      >
        {
          showTitle && <View style={{marginVertical: scaleHeight(-1)}}>
            <View style={styles.formText}>
              <View style={styles.formTextTitle}>
                <Text style={styles.placeholderTitle}>{title} :</Text>
                {required && <Text style={{...styles.placeholderTitle,color: theme.colors.error}}>*</Text>}
              </View>
              {required && error && <Text style={styles.errText}>{error}</Text>}
            </View>
          </View>
        }
        <MultiSelect
          // iconColor={theme.colors.primary}
          iconColor={'#AAAAAA'}
          mode={mode}
          // style={styles.dropdown}
          style={{
            ...styles.dropdown,
            backgroundColor: dropdownColor ? `${dropdownColor}` : `${theme.colors.background}`,
            borderWidth: showDropdownBorder ? scaleWidth(1) : scaleWidth(0),
          }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          disable={enabled ? false : true}
          maxHeight={scaleHeight(242)}
          labelField={labelKey}
          valueField={valueKey}
          placeholder={placeholder}
          searchPlaceholder={data.length ? "Search..." : lang == 'en' ? `${local.noData} ${title}` :  ` ${title} ${local.noData}`}
          value={selectedValue}
          onChange={onValueChange}
          itemTextStyle={styles.dropdownItemTextStyle}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
              <View style={styles.selectedStyle}>
                <Text style={styles.textSelectedStyle}>{labelKey ? item[labelKey] : item.label}</Text>
                <MaterialCommunityIcons
                  name={'trash-can'}
                  size={scaleWidth(18)}
                  style={{color: theme.colors.error}}
                />
              </View>
            </TouchableOpacity>
          )}
          renderItem={renderItem}
          renderLeftIcon={() => (
            <MaterialCommunityIcons
              name={icon}
              size={scaleWidth(22)}
              style={{color: theme.colors.primary, marginRight: scaleWidth(10)}}
            />
          )}
        />
      </View>
      {errorMsg && <Text numberOfLines={1} style={styles.labelError}>{errorMsg}</Text>}
    </>
  );
};

export default memo(MultiSelectDropDown);

const useThemeStyle = (theme,lang) => StyleSheet.create({
  dropdown: {
    // margin: scaleHeight(3),
    height: scaleHeight(40),
    paddingHorizontal: scaleHeight(5),
    // borderWidth: scaleWidth(1),
    borderColor: '#AAAAAA',
    borderRadius: scaleWidth(5),
    width:'100%',
    // backgroundColor: '#E8E1ED'
  },
  dropdownItemTextStyle: {
    fontSize: scaleWidth(14),
    color: theme.colors.onBackground,
  },
  icon: {
    marginRight: scaleWidth(5),
  },
  placeholderStyle: {
    fontSize: scaleWidth(12),
    color: theme.colors.onBackground,
  },
  selectedTextStyle: {
    fontSize: scaleWidth(14),
    color: theme.colors.onBackground,
  },
  iconStyle: {
    width: scaleWidth(20),
    height: scaleHeight(20),
  },
  inputSearchStyle: {
    borderRadius: scaleWidth(5),
    height: scaleHeight(32),
    fontSize: scaleWidth(14),
    color: theme.colors.onBackground,
    paddingVertical: scaleHeight(1)
  },

  container: {
    marginTop: scaleHeight(5),
  },
  formText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scaleHeight(-3)
  },
  label: {
    position: 'absolute',
    backgroundColor: theme.colors.secondary,
    left: scaleWidth(15),
    top: scaleHeight(5),
    zIndex: 1,
    paddingHorizontal: scaleWidth(5),
    fontSize: scaleWidth(14),
  },
  labelError: {
    fontSize: scaleWidth(12),
    lineHeight: scaleWidth(18),
    color: theme.colors.error,
    padding: scaleWidth(3)
  },
  item: {
    padding: scaleWidth(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundColor
  },
  textItem: {
    flex: 1,
    fontSize: scaleWidth(14),
    color: theme.colors.textColor
  },
  placeholderTitle: {
    fontSize: scaleWidth(14),
    fontFamily: 'Gilroy-Bold',
    color: theme.colors.onBackground,
    lineHeight: scaleHeight(31)
  },
  errText: {
    fontSize: scaleWidth(12), 
    color: theme.colors.secondary
  },
  formTextTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: scaleHeight(-3)
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(10),
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: scaleWidth(10),
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: scaleWidth(12),
  },

});
