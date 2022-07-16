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

export interface IHamburgerMenuProps extends ICircleProps {
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
  header: IHeaderProps;
  geo: IGeoProps;
  schedule: IScheduleProps;
  mobile: IMobilePhoneProps;
  email: IEmailProps;
  id: number;
}
