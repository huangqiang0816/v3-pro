/** root层state类型定义 */
export interface RootInterface {}

export interface userInterFace {
  token: string | null;
  tenantId: string | number;
  sysId: string | number;
}

export interface sysInterface {
  fold: boolean;
}

export interface AllstateTypes extends RootInterface {
  user: userInterFace;
  sys: sysInterface;
}
