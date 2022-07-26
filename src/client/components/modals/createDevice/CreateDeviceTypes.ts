import {IModalProps} from "../modal/ModalTypes";

export interface ICreateDeviceProps extends Omit<IModalProps, 'title' | 'image'> {}
