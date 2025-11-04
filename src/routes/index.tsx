import type { RouteObject } from "react-router-dom";
import { publicRoutesConfig } from "./publicRoutes";
import { adminRoutesConfig } from "./adminRoutes";
import { userRoutesConfig } from "./userRoutes";
import { authRoutesConfig } from "./authRoutes";

export const routes: RouteObject[] = [
  publicRoutesConfig,
  adminRoutesConfig,
  userRoutesConfig,
  authRoutesConfig,
];
