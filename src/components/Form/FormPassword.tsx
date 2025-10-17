import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardType,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { appColor } from '../../constant/appColor';
import { FONT_FAMILY } from '../../themes/fontFamily';
import TextDisplay from '../TextDisplay';
import IMAGES from '../../assets/images';

interface Props {
  title: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  isPassword?: boolean;
  multiline?: boolean;
  type?: KeyboardType;
  onEnd?: () => void;
  minHeight?: number;
  required?: boolean;
}

const FormPassword = (props: Props) => {
  const {
    value,
    onChange,
    title,
    placeholder,
    isPassword,
    type,
    minHeight,
    multiline,
    onEnd,
    required,
  } = props;

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);
  const [error, setError] = useState<string | null>(null);

  const handleEndEditing = () => {
    if (required && !value.trim()) {
      setError(`${title} không được để trống`);
    } else {
      setError(null);
    }
    onEnd && onEnd();
  };

  return (
    <View style={{ marginBottom: error ? 5 : 15 }}>
      <TextDisplay text={title} styles={styles.label} />

      <View style={[styles.inputContainer, error && styles.errorBorder]}>
        <TextInput
          style={[
            styles.input,
            { minHeight: minHeight || 50, paddingTop: multiline ? 10 : 0 },
          ]}
          value={value}
          placeholder={placeholder ?? ''}
          onChangeText={val => onChange(val)}
          secureTextEntry={isPassword ? isShowPass : false}
          placeholderTextColor={'#A0A3B1'}
          keyboardType={type ?? 'default'}
          autoCapitalize="none"
          onEndEditing={handleEndEditing}
          multiline={multiline || false}
        />

        {/* Nút hiện/ẩn mật khẩu */}
        {isPassword && (
          <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
            <Image
              source={isShowPass ? IMAGES.ACCOUNT.eye : IMAGES.ACCOUNT.eye}
              style={{ width: 20, height: 20, tintColor: '#555' }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormPassword;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium,
    fontSize: 14,
    color: appColor.textBlack,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColor.colorBorder,
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    margin: 0,
    color: appColor.textBlack,
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    paddingLeft: 5,
    marginTop: 4,
    fontSize: 12,
  },
  errorBorder: {
    borderColor: 'red',
  },
});
