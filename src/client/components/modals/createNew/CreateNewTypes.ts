import {IModalProps} from "../modal/ModalTypes";

export interface ICreateNewProps extends Omit<IModalProps, 'title' | 'image'> {}
