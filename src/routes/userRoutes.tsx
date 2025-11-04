import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import { lazyImport } from "@/utils/lazyImport";
import { lazyImportBatch } from "@/utils/lazyImportBatch";
import { USER_PAGES } from "@/types/pageNames";

const UserLayout = lazyImport({ module: "layouts", name: "UserLayout" });

const userPages = lazyImportBatch("user", USER_PAGES);

export const userRoutesConfig: RouteObject = {
  path: PATHS.USER.ROOT,
  element: <UserLayout />,
  children: [
    { index: true, element: <userPages.UserDashboard /> },
    { path: PATHS.USER.ORDERS, element: <userPages.OrderHistory /> },
    {
      path: PATHS.USER.ORDER_DETAIL(":id"),
      element: <userPages.OrderDetail />,
    },
    { path: PATHS.USER.PROFILE, element: <userPages.Profile /> },
    { path: PATHS.USER.ADDRESSES, element: <userPages.Addresses /> },
    { path: PATHS.USER.WISHLIST, element: <userPages.Wishlist /> },
    { path: PATHS.USER.MESSAGES, element: <userPages.Messages /> },
    { path: PATHS.USER.SUPPORT, element: <userPages.Support /> },
  ],
};
