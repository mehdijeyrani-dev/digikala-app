export const PUBLIC_PAGES = [
  "Home",
  "Products",
  "ProductDetails",
  "Category",
  "Cart",
  "Checkout",
  "About",
  "Contact",
  "SearchResults",
  "NotFound",
] as const;

export const ADMIN_PAGES = [
  "AdminDashboard",
  "UserManagement",
  "ProductManagement",
  "OrderManagement",
  "CategoryManagement",
  "DiscountManagement",
  "ContentManagement",
  "Reports",
] as const;

export const USER_PAGES = [
  "UserDashboard",
  "OrderHistory",
  "OrderDetail",
  "Profile",
  "Addresses",
  "Wishlist",
  "Messages",
  "Support",
] as const;

export const AUTH_PAGES = ["Login", "Register"] as const;

export type PublicPageName = (typeof PUBLIC_PAGES)[number];
export type AdminPageName = (typeof ADMIN_PAGES)[number];
export type UserPageName = (typeof USER_PAGES)[number];
export type AuthPageName = (typeof AUTH_PAGES)[number];
