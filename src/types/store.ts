// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootStateInterface {
}
// 用户信息
export interface UserInfoInterface {
  token: string;
  tenantId: string;
  sysId: string;
}
//
export interface SysConfigInterface extends UserInfoInterface {
  fold: boolean;
}

export interface AllStateInterface extends RootStateInterface {
  sys: SysConfigInterface;
}
