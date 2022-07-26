import { Dispatch, SetStateAction } from "react";
import { IImageProps } from "../image/ImageTypes";
import { ICircleProps } from "../circle/CircleTypes";
import { IInputProps } from "../input/InputTypes";

interface IHeaderProps {
  phoneImage: IImageProps;
  title: string;
  closeImage: IImageProps;
}

interface IGeoProps {
  geoImage: IImageProps;
  geoText: string;
  geoHref: string;
}

interface IScheduleProps {
  scheduleImage: IImageProps;
  hoursText: string;
  dayText: string;
}

interface IMobilePhoneProps {
  mobilePhoneImage: IImageProps;
  mobilePhoneText: string;
  mobilePhoneHref: string;
}

interface IEmailProps {
  emailImage: IImageProps;
  emailText: string;
  emailHref: string;
}

interface IBodyProps {
  geo: IGeoProps;
  schedule: IScheduleProps;
  mobile: IMobilePhoneProps;
  email: IEmailProps;
}

interface ICheckboxProps extends Omit<IInputProps, 'image'> {
  text: string;
}

interface IAuthProps {
  login: IInputProps;
  password: IInputProps;
  checkbox: ICheckboxProps;
  buttonText: string;
  secondaryButtonText: string;
}

export interface IHamburgerMenuProps extends ICircleProps {
  menuActive?: boolean;
  setMenuActive?: Dispatch<SetStateAction<boolean>>;
  body?: IBodyProps;
  auth?: IAuthProps;
  header: IHeaderProps;
}
