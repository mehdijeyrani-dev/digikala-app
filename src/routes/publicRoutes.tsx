import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import { lazy } from "react";

const PublicLayout = lazy(() => import("@/layouts/PublicLayoutPage"));

const Home = lazy(() => import("@/pages/public/HomePage"));
const Products = lazy(() => import("@/pages/public/ProductsPage"));
const ProductDetails = lazy(() => import("@/pages/public/ProductDetailPage"));
const Category = lazy(() => import("@/pages/public/CategoryPage"));
const Cart = lazy(() => import("@/pages/public/CartPage"));
const Checkout = lazy(() => import("@/pages/public/CheckoutPage"));
const About = lazy(() => import("@/pages/public/AboutPage"));
const Contact = lazy(() => import("@/pages/public/ContactPage"));
const SearchResults = lazy(() => import("@/pages/public/SearchResultsPage"));
const NotFound = lazy(() => import("@/pages/public/NotFoundPage"));

export const publicRoutesConfig: RouteObject = {
  path: PATHS.HOME,
  element: <PublicLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: PATHS.PRODUCTS, element: <Products /> },
    {
      path: PATHS.PRODUCTDETAIL(":id"),
      element: <ProductDetails />,
    },
    { path: PATHS.CATEGORY(":slug"), element: <Category /> },
    { path: PATHS.CART, element: <Cart /> },
    { path: PATHS.CHECKOUT, element: <Checkout /> },
    { path: PATHS.ABOUT, element: <About /> },
    { path: PATHS.CONTACT, element: <Contact /> },
    { path: PATHS.SEARCH, element: <SearchResults /> },
    { path: PATHS.NOT_FOUND, element: <NotFound /> },
  ],
};
