import {KeyboardEvent} from "react";

export interface ICreateDeviceProductProps {
  id: number;
  removeProductHandler: (id: number) => void;
  name: string;
  count: string;
  onChangeName?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChangeCount?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
