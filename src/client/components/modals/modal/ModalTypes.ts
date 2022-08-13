import {Dispatch, ReactNode, SetStateAction} from "react";
import {IImageProps} from "../../image/ImageTypes";

export interface IModalProps {
  isModalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  title?: string;
  image?: IImageProps;
  children?: ReactNode;
  className?: string;
}
