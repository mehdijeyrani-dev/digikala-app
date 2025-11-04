import { lazyImport } from "@/utils/lazyImport";
import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import { lazyImportBatch } from "@/utils/lazyImportBatch";
import { PUBLIC_PAGES } from "@/types/pageNames";

const PublicLayout = lazyImport({
  module: "layouts",
  name: "PublicLayout",
});

const publicPages = lazyImportBatch("public", PUBLIC_PAGES);

export const publicRoutesConfig: RouteObject = {
  path: PATHS.HOME,
  element: <PublicLayout />,
  children: [
    { index: true, element: <publicPages.Home /> },
    { path: PATHS.PRODUCTS, element: <publicPages.Products /> },
    {
      path: PATHS.PRODUCTDETAIL(":id"),
      element: <publicPages.ProductDetails />,
    },
    { path: PATHS.CATEGORY(":slug"), element: <publicPages.Category /> },
    { path: PATHS.CART, element: <publicPages.Cart /> },
    { path: PATHS.CHECKOUT, element: <publicPages.Checkout /> },
    { path: PATHS.ABOUT, element: <publicPages.About /> },
    { path: PATHS.CONTACT, element: <publicPages.Contact /> },
    { path: PATHS.SEARCH, element: <publicPages.SearchResults /> },
    { path: PATHS.NOT_FOUND, element: <publicPages.NotFound /> },
  ],
};
