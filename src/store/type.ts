/** root层state类型定义 */
export interface IRoot{}

export interface IUser{
  token: string | null;
  tenantId: string | number;
  sysId: string | number;
}
export interface ISys{
  fold: boolean;
}

export interface IAllstate extends IRoot{
  user: IUser,
  sys: ISys
}

