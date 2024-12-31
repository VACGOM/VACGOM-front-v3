export interface ParamsType extends Record<string | number, any> {}
export interface OnChangeValueType {
  (field: string, value: any, option?: ParamsType, type?: string): void;
}
export interface CssArchiveType
  extends Record<string, string | SerializedStyles> {}

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}
