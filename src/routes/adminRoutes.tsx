import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import { lazy } from "react";

const AdminLayout = lazy(() => import("@/layouts/AdminLayoutPage"));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboardPage"));
const UserManagement = lazy(() => import("@/pages/admin/UserManagementPage"));
const ProductManagement = lazy(
  () => import("@/pages/admin/ProductManagementPage")
);
const OrderManagement = lazy(() => import("@/pages/admin/OrderManagementPage"));
const CategoryManagement = lazy(
  () => import("@/pages/admin/CategoryManagementPage")
);
const DiscountManagement = lazy(
  () => import("@/pages/admin/DiscountManagementPage")
);
const ContentManagement = lazy(
  () => import("@/pages/admin/ContentManagementPage")
);
const Reports = lazy(() => import("@/pages/admin/ReportsPage"));

export const adminRoutesConfig: RouteObject = {
  path: PATHS.ADMIN.ROOT,
  element: <AdminLayout />,
  children: [
    { index: true, element: <AdminDashboard /> },
    { path: PATHS.ADMIN.USERS, element: <UserManagement /> },
    { path: PATHS.ADMIN.PRODUCTS, element: <ProductManagement /> },
    { path: PATHS.ADMIN.ORDERS, element: <OrderManagement /> },
    {
      path: PATHS.ADMIN.CATEGORIES,
      element: <CategoryManagement />,
    },
    { path: PATHS.ADMIN.DISCOUNTS, element: <DiscountManagement /> },
    { path: PATHS.ADMIN.CONTENT, element: <ContentManagement /> },
    { path: PATHS.ADMIN.REPORTS, element: <Reports /> },
  ],
};
