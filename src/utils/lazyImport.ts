import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export type AppSection = "public" | "admin" | "user" | "auth";
export type ModuleType = "layouts" | "pages";

interface LazyImportOptions {
  module?: ModuleType;
  section?: AppSection;
  name: string;
}

export const lazyImport = <
  T extends Record<string, unknown> = Record<string, never>
>({
  module = "pages",
  section,
  name,
}: LazyImportOptions): LazyExoticComponent<ComponentType<T>> => {
  const basePath = section
    ? `../${module}/${section}/${name}Page`
    : `../${module}/${name}Page`;

  return lazy(() => import(basePath)) as LazyExoticComponent<ComponentType<T>>;
};
