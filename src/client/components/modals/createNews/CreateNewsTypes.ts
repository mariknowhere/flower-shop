import {IModalProps} from "../modal/ModalTypes";

export interface ICreateNewsProps extends Omit<IModalProps, 'title' | 'image'> {}
