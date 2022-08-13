import {KeyboardEvent} from "react";

export interface ICreateDeviceProductProps {
  id: number;
  removeProductHandler: (id: number) => void;
  name?: any;
  count?: any;
  onChangeName?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChangeCount?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
