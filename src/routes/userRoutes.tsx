import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import { lazy } from "react";

const UserLayout = lazy(() => import("@/layouts/UserLayoutPage"));

const UserDashboard = lazy(() => import("@/pages/user/UserDashboardPage"));
const OrderHistory = lazy(() => import("@/pages/user/OrderHistoryPage"));
const OrderDetail = lazy(() => import("@/pages/user/OrderDetailPage"));
const Profile = lazy(() => import("@/pages/user/ProfilePage"));
const Addresses = lazy(() => import("@/pages/user/AddressesPage"));
const Wishlist = lazy(() => import("@/pages/user/WishlistPage"));
const Messages = lazy(() => import("@/pages/user/MessagesPage"));
const Support = lazy(() => import("@/pages/user/SupportPage"));

export const userRoutesConfig: RouteObject = {
  path: PATHS.USER.ROOT,
  element: <UserLayout />,
  children: [
    { index: true, element: <UserDashboard /> },
    { path: PATHS.USER.ORDERS, element: <OrderHistory /> },
    {
      path: PATHS.USER.ORDER_DETAIL(":id"),
      element: <OrderDetail />,
    },
    { path: PATHS.USER.PROFILE, element: <Profile /> },
    { path: PATHS.USER.ADDRESSES, element: <Addresses /> },
    { path: PATHS.USER.WISHLIST, element: <Wishlist /> },
    { path: PATHS.USER.MESSAGES, element: <Messages /> },
    { path: PATHS.USER.SUPPORT, element: <Support /> },
  ],
};
