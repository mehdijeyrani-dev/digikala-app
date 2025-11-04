import { lazyImport } from "@/utils/lazyImport";
import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import { lazyImportBatch } from "@/utils/lazyImportBatch";
import { ADMIN_PAGES } from "@/types/pageNames";

const AdminLayout = lazyImport({
  module: "layouts",
  name: "AdminLayout",
});

const adminPages = lazyImportBatch("admin", ADMIN_PAGES);

export const adminRoutesConfig: RouteObject = {
  path: PATHS.ADMIN.ROOT,
  element: <AdminLayout />,
  children: [
    { index: true, element: <adminPages.AdminDashboard /> },
    { path: PATHS.ADMIN.USERS, element: <adminPages.UserManagement /> },
    { path: PATHS.ADMIN.PRODUCTS, element: <adminPages.ProductManagement /> },
    { path: PATHS.ADMIN.ORDERS, element: <adminPages.OrderManagement /> },
    {
      path: PATHS.ADMIN.CATEGORIES,
      element: <adminPages.CategoryManagement />,
    },
    { path: PATHS.ADMIN.DISCOUNTS, element: <adminPages.DiscountManagement /> },
    { path: PATHS.ADMIN.CONTENT, element: <adminPages.ContentManagement /> },
    { path: PATHS.ADMIN.REPORTS, element: <adminPages.Reports /> },
  ],
};
