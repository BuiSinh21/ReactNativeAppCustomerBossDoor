
export interface UserAccount {
  id: number;
  full_name: string;
  cccd: string;
  phone: string;
  avatar: string;
  address: string;
  username: string;
  latitude: number;
  longitude: number;
  position_id: number;
  province_id: number;
  status: number;
  commissions: any[],
  profile: any,
  completed_orders: any[];
  revenue: any[];
}
export interface UserAccountInfor {
  technician: UserAccount,
  thong_ke_doanh_thu: {
    summary: SummaryDto,
  }
  lich_su_don_hang: HistoryOrderDto,
}

export interface SummaryDto {
  tong_doanh_thu: number | null,
  tong_hoa_hong: number | null,
}
export interface HistoryOrderDto {
  data: DetailOrder[],
  total: number,
}
export interface DetailOrder {
  danh_sach_dich_vu: string[],
  dia_chi: string,
  order_id: number,
  order_code: string,
  order_date: string,
  so_dien_thoai: string,
  ten_khach_hang: string,
  tong_tien: string,
  status:string,
  before_repair_images:any[],
  after_repair_images:any[],
  vote:number|null,
  vote_trung_binh:number|null,


}
export interface DetailOrderReport {
  order_id: number,
  order_code: string,
  order_date: string,
  so_dien_thoai: string,
  ten_khach_hang: string,
  tong_doanh_thu: string,
  services:Services[]
}
export interface Services {
  order_id: number,
  service_details_id: number,
  ten_dich_vu: string,
  quantity: number,
  doanh_thu: number,
}
