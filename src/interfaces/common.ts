import { StyleProp, ViewStyle } from 'react-native';

export interface IconSVGProps {
  width?: number;
  height?: number;
  color?: string;
  styles?: StyleProp<ViewStyle>;
}
export interface FontFamily {
  BeVietnamPro_Black: string;
  BeVietnamPro_BlackItalic: string;
  BeVietnamPro_Bold: string;
  BeVietnamPro_BoldItalic: string;
  BeVietnamPro_ExtraBold: string;
  BeVietnamPro_ExtraBoldItalic: string;
  BeVietnamPro_ExtraLight: string;
  BeVietnamPro_ExtraLightItalic: string;
  BeVietnamPro_Italic: string;
  BeVietnamPro_Light: string;
  BeVietnamPro_LightItalic: string;
  BeVietnamPro_Medium: string;
  BeVietnamPro_MediumItalic: string;
  BeVietnamPro_Regular: string;
  BeVietnamPro_SemiBold: string;
  BeVietnamPro_SemiBoldItalic: string;
  BeVietnamPro_Thin: string;
  BeVietnamPro_ThinItalic: string;
  
}

export interface PaginationParams {
  count: number;
  current_page: number;
  last_page: number;
  total: number;
}
