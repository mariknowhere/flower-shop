import Admin from "../pages/admin/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, SHOP_ROUTE} from "../constants/routes";
import Basket from "../pages/basket/Basket";
import Shop from "../pages/shop/Shop";
import Device from "../pages/device/Device";

export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    element: Admin,
  },
  {
    path: BASKET_ROUTE,
    element: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: Shop,
  },
  {
    path: DEVICE_ROUTE,
    element: Device,
  },
]
