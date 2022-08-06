import {ReactNode} from "react";

export enum CursorVariantEnum {
  Default = 'default',
  Pointer = 'pointer',
}

export enum DirectionVariantEnum {
  Row = 'row',
  Column = 'column',
}

export interface IContainerProps {
  children: ReactNode;
  className?: string;
  cursor?: CursorVariantEnum;
  direction?: DirectionVariantEnum
}
