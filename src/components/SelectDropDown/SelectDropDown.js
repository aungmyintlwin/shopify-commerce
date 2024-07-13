//lib
import React, { useContext } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//reuse
import { useTheme } from 'react-native-paper';
import { scaleHeight, scaleWidth } from '../../utils/responsive';
import { Context } from '../../context/Provider';


const SelectDropDown = ({
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

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{labelKey ? item[labelKey] : item.label}</Text>
        {item[valueKey] === selectedValue && (
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
        <Dropdown
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
          searchPlaceholder="Search..."
          value={selectedValue}
          onChange={onValueChange}
          itemTextStyle={styles.dropdownItemTextStyle}
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

export default SelectDropDown;

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
    fontSize: scaleWidth(12),
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
  }

});
