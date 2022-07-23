import { Dispatch, SetStateAction } from "react";
import {IImageProps} from "../image/ImageTypes";
import {ICircleProps} from "../circle/CircleTypes";

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

interface IInputProps {
  name: string;
  placeholder: string;
  type: string;
  image: IImageProps
}

interface IAuthProps {
  login: IInputProps;
  password: IInputProps;
  checkbox: string;
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
