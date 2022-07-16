import AdminPage from "../pages/admin/AdminPage";
import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, NEWS_ROUTE, SHOP_ROUTE} from "../constants/routes";
import BasketPage from "../pages/basket/BasketPage";
import ShopPage from "../pages/shop/ShopPage";
import DevicePage from "../pages/device/DevicePage";
import NewsPage from "../pages/news/NewsPage";
import AboutPage from "../pages/about/AboutPage";

export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    element: AdminPage,
  },
  {
    path: BASKET_ROUTE,
    element: BasketPage,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: ShopPage,
  },
  {
    path: DEVICE_ROUTE,
    element: DevicePage,
  },
  {
    path: NEWS_ROUTE,
    element: NewsPage,
  },
  {
    path: ABOUT_ROUTE,
    element: AboutPage,
  }
];
