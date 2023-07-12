// 一个颜色会有多种颜色信息,这里是为了后期对颜色进行排序,所以会保存很多数据
export interface Color {
  id: string;
  hex: string;
  rgb: string;
  hsl: string;
  pid: string;
  name: string;
}

export interface ColorCard {
  id: string;
  type: number;
  createTime: Date;
}

export interface CardType {
  id: string;
  name: string;
}
