import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import { lazyImport } from "@/utils/lazyImport";
import { lazyImportBatch } from "@/utils/lazyImportBatch";
import { AUTH_PAGES } from "@/types/pageNames";

const AuthLayout = lazyImport({
  module: "layouts",
  name: "AuthLayout",
});

const authPages = lazyImportBatch("auth", AUTH_PAGES);

export const authRoutesConfig: RouteObject = {
  path: PATHS.AUTH.ROOT,
  element: <AuthLayout />,
  children: [
    { path: PATHS.AUTH.LOGIN, element: <authPages.Login /> },
    { path: PATHS.AUTH.REGISTER, element: <authPages.Register /> },
  ],
};
