export const PATHS = {
  // Public
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCTDETAIL: (id: string) => `/products/${id}`,
  CATEGORY: (slug: string) => `/categories/${slug}`,
  CART: "/cart",
  CHECKOUT: "/checkout",
  ABOUT: "/about",
  CONTACT: "/contact",
  SEARCH: "/search",

  // Auth
  AUTH: {
    ROOT: "/auth",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },

  // User
  USER: {
    ROOT: "/user",
    ORDERS: "/user/orders",
    ORDER_DETAIL: (id: string) => `/user/orders/${id}`,
    PROFILE: "/user/profile",
    ADDRESSES: "/user/addresses",
    WISHLIST: "/user/wishlist",
    MESSAGES: "/user/messages",
    SUPPORT: "/user/support",
  },

  // Admin
  ADMIN: {
    ROOT: "/admin",
    USERS: "/admin/users",
    PRODUCTS: "/admin/products",
    ORDERS: "/admin/orders",
    CATEGORIES: "/admin/categories",
    DISCOUNTS: "/admin/discounts",
    CONTENT: "/admin/content",
    REPORTS: "/admin/reports",
  },

  // Common
  NOT_FOUND: "*",
};
