import {useContext} from "react";
import {Context} from "../../index";
import {BASKET_BUTTON_TEXT, BUY_BUTTON_TEXT} from "../constants/shop";

export const useShop = () => {
  const { user } = useContext(Context);

  return user.isAuth ? BASKET_BUTTON_TEXT : BUY_BUTTON_TEXT;
}
