import { Geolocation, Province } from "../components/Interface";
import { SummaryDto, UserAccount, UserAccountInfor, } from "../interfaces/auth";

export interface AuthState {
  access_token?: string;
  refresh_token?: string;
  isFilter: boolean,
  user: UserAccount;
  userDisplay: UserAccountInfor;
  role: {
    role_id: number;
    role_name: string;
  };
  province: Province[],
  fcmToken?: string;
  geolocation?: Geolocation;
}

export interface InfoState {
  activeWifi: number;
  activeLocation: number;
  activeInternal: number;
}
export interface CommonState {
  openLoading: boolean;
  openSuccess: boolean;
  titleSuccess?: string;
  openToast: boolean;
  titleToast?: string;
  fontSize: string;
  openWarningTimekeeping: boolean;
  openNoti: boolean;
  notiTitle?: string;
}

export interface SummaryState {
  lich_su_don_hang: {};
  thong_ke_doanh_thu: SummaryDto,
}
export interface OrderComeState {
  create_time: string | undefined;
  statusWorking: boolean,
  haveOrder: boolean
}