import {Dispatch, ReactNode, SetStateAction} from "react";
import {IImageProps} from "../../image/ImageTypes";

export interface IModalProps {
  title: string;
  image: IImageProps;
  isDeviceModalVisible: boolean;
  setDeviceModalVisible: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  className?: string;
}
