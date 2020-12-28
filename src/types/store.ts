export interface RootStateInterface {
  fold: boolean;
}
export interface UserInfoInterface {
    token: string;
    tenantId: string;
    sysId: string;
}

export interface SysConfigInterface extends UserInfoInterface{
    name? : string;
}

export interface AllStateInterface extends RootStateInterface {
  sys: SysConfigInterface;
}
