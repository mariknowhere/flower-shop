import {Dispatch, SetStateAction} from "react";

export interface IAuthPageProps {
  isMenuActive?: boolean;
  setMenuActive?: Dispatch<SetStateAction<boolean>>;
}
